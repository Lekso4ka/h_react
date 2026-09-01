const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { readJson, writeJson } = require("../lib/jsonStore");
const { authRequired } = require("../middleware/auth");

const router = express.Router();
const FILE = "leads.json";
const TIME_ZONE = "Europe/Moscow";

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

router.post("/", (req, res) => {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const name = asString(body.name, 200);
    const phone = asString(body.phone, 40);
    const email = asString(body.email, 200).toLowerCase();
    const source = asString(body.source, 60) || "wedding";

    if (!name) {
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
      return res.status(400).json({ error: "Укажите телефон" });
    }

    const lead = {
      id: uuidv4(),
      name,
      source,
      ...sentAt(),
    };
    if (phone) lead.phone = phone;
    if (email) lead.email = email;

    const leads = readLeads();
    leads.push(lead);
    writeJson(FILE, leads);

    res.status(201).json({ ok: true, id: lead.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

router.delete("/:id", authRequired, (req, res) => {
  try {
    const id = String(req.params.id || "");
    const leads = readLeads();
    const next = leads.filter((lead) => lead.id !== id);
    if (next.length === leads.length) {
      return res.status(404).json({ error: "Заявка не найдена" });
    }
    writeJson(FILE, next);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
