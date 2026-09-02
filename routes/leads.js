const path = require("path");
const fs = require("fs");
const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { readJson, writeJson } = require("../lib/jsonStore");
const { authRequired } = require("../middleware/auth");

const router = express.Router();
const FILE = "leads.json";
const TIME_ZONE = "Europe/Moscow";
const RESUMES_DIR = path.join(__dirname, "..", "resumes");
const RESUME_MAX_BYTES = Math.round(68.5 * 1024 * 1024);
const EMAIL_SOURCES = new Set(["newsletter", "conference", "vacancy", "stock"]);

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

function readLeads() {
  try {
    const data = readJson(FILE);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function asString(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function formatEventDate(value) {
  const raw = asString(value, 40);
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[3]}.${iso[2]}.${iso[1]}`;
  return raw;
}

function sentAt(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("ru-RU", {
      timeZone: TIME_ZONE,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value])
  );
  return {
    date: `${parts.day}.${parts.month}.${parts.year}`,
    time: `${parts.hour}:${parts.minute}:${parts.second}`,
  };
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

function saveLead(req, res) {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const name = asString(body.name, 200);
    const phone = asString(body.phone, 40);
    const email = asString(body.email, 200).toLowerCase();
    const source = asString(body.source, 60) || "wedding";

    const venue = asString(body.venue, 200);
    const guests = asString(body.guests, 20);
    const wishes = asString(body.wishes, 2000);
    const eventDate = formatEventDate(body.eventDate);
    const vacancy = asString(body.vacancy, 200);
    const city = asString(body.city, 200);
    const social = asString(body.social, 500);
    const message = asString(body.message, 2000);
    const stock = asString(body.stock, 400);
    const question = asString(body.question, 2000);

    if (!name) {
      if (req.file) removeResume(req.file.filename);
      return res.status(400).json({ error: "Укажите имя" });
    }
    if (source === "newsletter") {
      if (!email) {
        return res.status(400).json({ error: "Укажите почту" });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Некорректная почта" });
      }
    } else if (!phone) {
      if (req.file) removeResume(req.file.filename);
      return res.status(400).json({ error: "Укажите телефон" });
    }
    if (EMAIL_SOURCES.has(source) && source !== "newsletter") {
      if (!email) {
        if (req.file) removeResume(req.file.filename);
        return res.status(400).json({ error: "Укажите почту" });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (req.file) removeResume(req.file.filename);
        return res.status(400).json({ error: "Некорректная почта" });
      }
    }

    const lead = {
      id: uuidv4(),
      name,
      source,
      ...sentAt(),
    };
    if (phone) lead.phone = phone;
    if (email) lead.email = email;
    if (venue) lead.venue = venue;
    if (guests) lead.guests = guests;
    if (eventDate) lead.eventDate = eventDate;
    if (wishes) lead.wishes = wishes;
    if (vacancy) lead.vacancy = vacancy;
    if (city) lead.city = city;
    if (social) lead.social = social;
    if (message) lead.message = message;
    if (stock) lead.stock = stock;
    if (question) lead.question = question;
    if (req.file) {
      lead.resumeFile = req.file.filename;
      lead.resumeName = asString(req.file.originalname, 300) || req.file.filename;
    }

    const leads = readLeads();
    leads.push(lead);
    writeJson(FILE, leads);

    res.status(201).json({ ok: true, id: lead.id });
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

function leadTimestamp(lead) {
  if (lead?.createdAt) {
    const parsed = Date.parse(lead.createdAt);
    if (!Number.isNaN(parsed)) return parsed;
  }
  const [day, month, year] = String(lead?.date || "").split(".");
  const time = String(lead?.time || "00:00:00");
  if (!year || !month || !day) return 0;
  const parsed = Date.parse(`${year}-${month}-${day}T${time}`);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function byDateTimeDesc(a, b) {
  return leadTimestamp(b) - leadTimestamp(a);
}

router.get("/", authRequired, (req, res) => {
  try {
    const source = asString(req.query.source, 60);
    let list = readLeads();
    if (source) {
      list = list.filter((lead) => lead.source === source);
    }
    list.sort(byDateTimeDesc);
    res.json({ list });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id/file", authRequired, (req, res) => {
  try {
    const id = String(req.params.id || "");
    const lead = readLeads().find((item) => item.id === id);
    if (!lead || !lead.resumeFile) {
      return res.status(404).json({ error: "Файл не найден" });
    }
    const full = resumePath(lead.resumeFile);
    if (!full || !fs.existsSync(full)) {
      return res.status(404).json({ error: "Файл не найден" });
    }
    res.download(full, lead.resumeName || lead.resumeFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", authRequired, (req, res) => {
  try {
    const id = String(req.params.id || "");
    const leads = readLeads();
    const lead = leads.find((item) => item.id === id);
    const next = leads.filter((item) => item.id !== id);
    if (next.length === leads.length) {
      return res.status(404).json({ error: "Заявка не найдена" });
    }
    if (lead?.resumeFile) removeResume(lead.resumeFile);
    writeJson(FILE, next);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
