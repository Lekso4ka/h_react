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

module.exports = {
  ensureStaticTables,
  cleanKey,
  cleanFilename,
  cleanText,
  listMedia,
  saveMedia,
  deleteMedia,
  listTexts,
  saveText,
  deleteText,
};
