const { contentId, readLang, writeLang } = require("./content");

function cloneJson(data) {
  return JSON.parse(JSON.stringify(data));
}

function readJsonLang(fileName, lang) {
  return readLang(contentId(fileName), lang);
}

function writeJsonLang(fileName, lang, data) {
  return writeLang(contentId(fileName), lang, data);
}

function decodeParam(value) {
  const raw = String(value ?? "");
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\wа-яё-]/gi, "")
    .replace(/-+/g, "-");
}

module.exports = {
  readJsonLang,
  writeJsonLang,
  cloneJson,
  decodeParam,
  slugify,
};
