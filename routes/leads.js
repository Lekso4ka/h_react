const path = require("path");
const fs = require("fs");
const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { authRequired } = require("../middleware/auth");
const {
  createSubscriber,
  deleteSubscriber,
  findSubscriberByEmail,
  listSubscribers,
} = require("../lib/subscribers");
const {
  createLead,
  deleteLead,
  findLeadById,
  listLeads,
} = require("../lib/leads");

const router = express.Router();
const RESUMES_DIR = path.join(__dirname, "..", "resumes");
const RESUME_MAX_BYTES = Math.round(68.5 * 1024 * 1024);
const EMAIL_SOURCES = new Set(["conference", "vacancy", "stock"]);
const PAYLOAD_FIELDS = {
  conference: [
    ["venue", 200],
    ["guests", 20],
    ["eventDate", 40],
    ["wishes", 2000],
  ],
  vacancy: [
    ["vacancy", 200],
    ["city", 200],
    ["social", 500],
    ["message", 2000],
  ],
  stock: [
    ["stock", 400],
    ["question", 2000],
  ],
};

if (!fs.existsSync(RESUMES_DIR)) {
  fs.mkdirSync(RESUMES_DIR, { recursive: true });
}

const uploadResume = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, RESUMES_DIR);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase() || ".pdf";
      cb(null, `${uuidv4()}${ext}`);
    },
  }),
  limits: { fileSize: RESUME_MAX_BYTES },
  fileFilter: (_req, file, cb) => {
    const isPdf =
      file.mimetype === "application/pdf" ||
      path.extname(file.originalname).toLowerCase() === ".pdf";
    if (isPdf) {
      cb(null, true);
      return;
    }
    cb(new Error("Можно прикрепить только PDF"));
  },
});

function asString(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function formatEventDate(value) {
  const raw = asString(value, 40);
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[3]}.${iso[2]}.${iso[1]}`;
  return raw;
}

function resumePath(filename) {
  const safe = path.basename(String(filename || ""));
  if (!safe || safe !== filename) return null;
  return path.join(RESUMES_DIR, safe);
}

function removeResume(filename) {
  const full = resumePath(filename);
  if (!full) return;
  try {
    if (fs.existsSync(full)) fs.unlinkSync(full);
  } catch {
    // ignore missing files
  }
}

function buildPayload(source, fields, file) {
  const spec = PAYLOAD_FIELDS[source] || [];
  const payload = {};
  for (const [key, max] of spec) {
    let value = fields[key];
    if (key === "eventDate") value = formatEventDate(value);
    if (value) payload[key] = value;
  }
  if (file) {
    payload.resumeFile = file.filename;
    payload.resumeName = asString(file.originalname, 300) || file.filename;
  }
  return payload;
}

async function saveNewsletter(res, { name, email }) {
  if (!email) {
    return res.status(400).json({ error: "Укажите почту" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Некорректная почта" });
  }

  const existing = await findSubscriberByEmail(email);
  if (existing) {
    return res.status(201).json({ ok: true, id: existing.id });
  }

  const created = await createSubscriber({ name, email });
  const subscriber = created || (await findSubscriberByEmail(email));
  return res.status(201).json({ ok: true, id: subscriber.id });
}

async function saveLead(req, res) {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const name = asString(body.name, 200);
    const phone = asString(body.phone, 40);
    const email = asString(body.email, 200).toLowerCase();
    const source = asString(body.source, 60) || "wedding";

    if (!name) {
      if (req.file) removeResume(req.file.filename);
      return res.status(400).json({ error: "Укажите имя" });
    }
    if (source === "newsletter") {
      return await saveNewsletter(res, { name, email });
    }

    if (!phone) {
      if (req.file) removeResume(req.file.filename);
      return res.status(400).json({ error: "Укажите телефон" });
    }
    if (EMAIL_SOURCES.has(source)) {
      if (!email) {
        if (req.file) removeResume(req.file.filename);
        return res.status(400).json({ error: "Укажите почту" });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (req.file) removeResume(req.file.filename);
        return res.status(400).json({ error: "Некорректная почта" });
      }
    }

    const created = await createLead({
      source,
      name,
      phone,
      email,
      payload: buildPayload(source, body, req.file),
    });

    res.status(201).json({ ok: true, id: created.id });
  } catch (error) {
    if (req.file) removeResume(req.file.filename);
    res.status(500).json({ error: error.message });
  }
}

router.post("/", (req, res) => {
  const contentType = String(req.headers["content-type"] || "");
  if (contentType.includes("multipart/form-data")) {
    uploadResume.single("resume")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      saveLead(req, res);
    });
    return;
  }
  saveLead(req, res);
});

router.get("/", authRequired, async (req, res) => {
  try {
    const source = asString(req.query.source, 60);
    if (source === "newsletter") {
      return res.json({ list: await listSubscribers() });
    }
    res.json({ list: await listLeads(source || null) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id/file", authRequired, async (req, res) => {
  try {
    const id = String(req.params.id || "");
    const lead = await findLeadById(id);
    const resumeFile = lead?.payload?.resumeFile;
    if (!lead || !resumeFile) {
      return res.status(404).json({ error: "Файл не найден" });
    }
    const full = resumePath(resumeFile);
    if (!full || !fs.existsSync(full)) {
      return res.status(404).json({ error: "Файл не найден" });
    }
    res.download(full, lead.payload.resumeName || resumeFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", authRequired, async (req, res) => {
  try {
    const id = String(req.params.id || "");
    if (await deleteSubscriber(id)) {
      return res.json({ ok: true });
    }

    const deleted = await deleteLead(id);
    if (!deleted) {
      return res.status(404).json({ error: "Заявка не найдена" });
    }
    if (deleted.payload?.resumeFile) {
      removeResume(deleted.payload.resumeFile);
    }
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
