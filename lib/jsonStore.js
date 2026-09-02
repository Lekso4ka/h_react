const fs = require("fs");
const path = require("path");
const { fileNameFor, otherLang } = require("./lang");

const DATA_DIR = path.join(__dirname, "..", "data");

function filePath(fileName) {
  return path.join(DATA_DIR, fileName);
}

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(filePath(fileName), "utf8"));
}

function writeJson(fileName, data) {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2), "utf8");
}

function cloneJson(data) {
  return JSON.parse(JSON.stringify(data));
}

function readJsonLang(fileName, lang) {
  const localized = fileNameFor(fileName, lang);
  try {
    return readJson(localized);
  } catch (error) {
    if (lang === "en") {
      return readJson(fileName);
    }
    throw error;
  }
}

function writeJsonLang(fileName, lang, data) {
  writeJson(fileNameFor(fileName, lang), data);
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
  readJson,
  writeJson,
  readJsonLang,
  writeJsonLang,
  cloneJson,
  otherLang,
  decodeParam,
  slugify,
};
