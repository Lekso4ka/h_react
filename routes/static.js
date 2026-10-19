const express = require("express");
const {
  cleanKey,
  cleanFilename,
  cleanText,
  listMedia,
  saveMedia,
  deleteMedia,
  listTexts,
  saveText,
  deleteText,
} = require("../lib/staticContent");

const router = express.Router();

router.get("/media", async (_req, res) => {
  try {
    res.json({ items: await listMedia() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/media/:key", async (req, res) => {
  try {
    const key = cleanKey(req.params.key);
    const body = req.body || {};
    const kind = body.kind === "video" ? "video" : body.kind === "image" ? "image" : "";
    const filenameSent = Object.prototype.hasOwnProperty.call(body, "filename");
    const previewSent = Object.prototype.hasOwnProperty.call(body, "preview");
    if (!key || !kind || (!filenameSent && !previewSent)) {
      return res.status(400).json({ error: "Некорректные данные файла" });
    }

    let filename;
    if (filenameSent) {
      if (body.filename === "" || body.filename == null) {
        filename = "";
      } else {
        filename = cleanFilename(body.filename, kind);
        if (!filename) {
          return res.status(400).json({ error: "Некорректные данные файла" });
        }
      }
    }

    let preview;
    if (previewSent) {
      if (kind !== "video") {
        return res.status(400).json({ error: "Превью доступно только для видео" });
      }
      if (body.preview === "" || body.preview == null) {
        preview = "";
      } else {
        preview = cleanFilename(body.preview, "image");
        if (!preview) {
          return res.status(400).json({ error: "Некорректное превью" });
        }
      }
    }

    if (kind === "image" && !filename) {
      return res.status(400).json({ error: "Некорректные данные файла" });
    }

    const saved = await saveMedia(key, { filename, kind, preview });
    res.json({ key, filename: saved.filename, kind: saved.kind, preview: saved.preview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/media/:key", async (req, res) => {
  try {
    const key = cleanKey(req.params.key);
    if (!key) return res.status(400).json({ error: "Некорректный ключ" });
    await deleteMedia(key);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/texts", async (_req, res) => {
  try {
    res.json({ items: await listTexts() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/texts/:key", async (req, res) => {
  try {
    const key = cleanKey(req.params.key);
    const ru = cleanText(req.body?.ru);
    const en = cleanText(req.body?.en);
    if (!key || ru == null || en == null) {
      return res.status(400).json({ error: "Некорректный текст" });
    }
    if (Array.isArray(ru) !== Array.isArray(en) || (Array.isArray(ru) && ru.length !== en.length)) {
      return res.status(400).json({ error: "Русская и английская версии должны быть одного вида" });
    }
    await saveText(key, ru, en);
    res.json({ key, ru, en });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/texts/:key", async (req, res) => {
  try {
    const key = cleanKey(req.params.key);
    if (!key) return res.status(400).json({ error: "Некорректный ключ" });
    await deleteText(key);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
