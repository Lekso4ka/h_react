const { query } = require("./db");

const KEY_RE = /^[a-zA-Z][a-zA-Z0-9_]{0,80}$/;
const FILE_RE = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,180}$/;
const IMAGE_EXT = /\.(jpe?g|png|gif|webp|svg)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

async function ensureStaticTables() {
  await query(`
    CREATE TABLE IF NOT EXISTS static_media (
      key         text PRIMARY KEY,
      filename    text NOT NULL,
      kind        text NOT NULL CHECK (kind IN ('image', 'video')),
      preview     text,
      updated_at  timestamptz NOT NULL DEFAULT now()
    )
  `);
  await query(`
    ALTER TABLE static_media
    ADD COLUMN IF NOT EXISTS preview text
  `);
  await query(`
    CREATE TABLE IF NOT EXISTS static_texts (
      key         text PRIMARY KEY,
      ru          jsonb,
      en          jsonb,
      updated_at  timestamptz NOT NULL DEFAULT now()
    )
  `);
  await query(`
    CREATE TABLE IF NOT EXISTS static_links (
      key         text PRIMARY KEY,
      href        text NOT NULL DEFAULT '',
      label       text NOT NULL DEFAULT '',
      updated_at  timestamptz NOT NULL DEFAULT now()
    )
  `);
}

function cleanKey(value) {
  const key = String(value || "");
  return KEY_RE.test(key) ? key : "";
}

function cleanFilename(value, kind) {
  const filename = String(value || "").split(/[/\\]/).pop();
  if (!FILE_RE.test(filename)) return "";
  if (kind === "image" && !IMAGE_EXT.test(filename)) return "";
  if (kind === "video" && !VIDEO_EXT.test(filename)) return "";
  return filename;
}

function cleanText(value) {
  if (typeof value === "string") {
    return value.length <= 20000 ? value : null;
  }
  if (
    Array.isArray(value) &&
    value.length <= 40 &&
    value.every((item) => typeof item === "string" && item.length <= 500)
  ) {
    return value;
  }
  return null;
}

async function listMedia() {
  const { rows } = await query(
    `SELECT key, filename, kind, preview FROM static_media ORDER BY key`
  );
  const items = {};
  for (const row of rows) {
    items[row.key] = {
      filename: row.filename,
      kind: row.kind,
      preview: row.preview || "",
    };
  }
  return items;
}

async function saveMedia(key, { filename, kind, preview }) {
  const { rows } = await query(
    `SELECT filename, preview FROM static_media WHERE key = $1`,
    [key]
  );
  const existing = rows[0];
  const nextFilename = filename !== undefined ? filename : (existing?.filename || "");
  const nextPreview = preview !== undefined ? (preview || null) : (existing?.preview || null);

  if (!nextFilename && !nextPreview) {
    await deleteMedia(key);
    return { filename: "", kind, preview: "" };
  }

  await query(
    `INSERT INTO static_media (key, filename, kind, preview)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (key) DO UPDATE SET
       filename = EXCLUDED.filename,
       kind = EXCLUDED.kind,
       preview = EXCLUDED.preview,
       updated_at = now()`,
    [key, nextFilename, kind, nextPreview]
  );
  return { filename: nextFilename, kind, preview: nextPreview || "" };
}

async function deleteMedia(key) {
  await query(`DELETE FROM static_media WHERE key = $1`, [key]);
}

async function listTexts() {
  const { rows } = await query(
    `SELECT key, ru, en FROM static_texts ORDER BY key`
  );
  const items = {};
  for (const row of rows) {
    items[row.key] = { ru: row.ru, en: row.en };
  }
  return items;
}

async function saveText(key, ru, en) {
  await query(
    `INSERT INTO static_texts (key, ru, en)
     VALUES ($1, $2::jsonb, $3::jsonb)
     ON CONFLICT (key) DO UPDATE SET
       ru = EXCLUDED.ru,
       en = EXCLUDED.en,
       updated_at = now()`,
    [key, JSON.stringify(ru), JSON.stringify(en)]
  );
}

async function deleteText(key) {
  await query(`DELETE FROM static_texts WHERE key = $1`, [key]);
}

function cleanHref(value) {
  const href = String(value ?? "").trim();
  if (href.length > 2000) return null;
  if (!href) return "";
  if (/^(javascript|data|vbscript):/i.test(href)) return null;
  if (/[\u0000-\u001f\s]/.test(href)) return null;
  if (/^(https?:\/\/|mailto:|tel:|\/|#|\?)/i.test(href)) return href;
  return null;
}

function cleanLabel(value) {
  if (value == null || value === "") return "";
  const label = String(value);
  if (label.length > 300) return null;
  return label;
}

async function listLinks() {
  const { rows } = await query(
    `SELECT key, href, label FROM static_links ORDER BY key`
  );
  const items = {};
  for (const row of rows) {
    items[row.key] = { href: row.href || "", label: row.label || "" };
  }
  return items;
}

async function saveLink(key, href, label) {
  await query(
    `INSERT INTO static_links (key, href, label)
     VALUES ($1, $2, $3)
     ON CONFLICT (key) DO UPDATE SET
       href = EXCLUDED.href,
       label = EXCLUDED.label,
       updated_at = now()`,
    [key, href, label]
  );
}

async function deleteLink(key) {
  await query(`DELETE FROM static_links WHERE key = $1`, [key]);
}

module.exports = {
  ensureStaticTables,
  cleanKey,
  cleanFilename,
  cleanText,
  cleanHref,
  cleanLabel,
  listMedia,
  saveMedia,
  deleteMedia,
  listTexts,
  saveText,
  deleteText,
  listLinks,
  saveLink,
  deleteLink,
};
