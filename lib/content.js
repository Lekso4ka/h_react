const { query } = require("./db");

function contentId(fileName) {
  return String(fileName)
    .replace(/_en\.json$/i, "")
    .replace(/\.json$/i, "");
}

function langColumn(lang) {
  return lang === "en" ? "en" : "ru";
}

async function getRow(id) {
  const { rows } = await query(
    `SELECT id, ru, en FROM content WHERE id = $1`,
    [id]
  );
  return rows[0] || null;
}

async function readLang(id, lang) {
  const column = langColumn(lang);
  const { rows } = await query(
    `SELECT ${column} AS data FROM content WHERE id = $1`,
    [id]
  );
  if (!rows[0]) {
    if (lang === "en") return readLang(id, "ru");
    throw new Error(`Контент «${id}» не найден`);
  }
  return rows[0].data;
}

async function writeLang(id, lang, data) {
  const column = langColumn(lang);
  const { rowCount } = await query(
    `UPDATE content
     SET ${column} = $2::jsonb, updated_at = now()
     WHERE id = $1`,
    [id, JSON.stringify(data)]
  );
  if (rowCount === 0) {
    throw new Error(`Контент «${id}» не найден`);
  }
}

async function upsertRow(id, ru, en) {
  await query(
    `INSERT INTO content (id, ru, en)
     VALUES ($1, $2::jsonb, $3::jsonb)
     ON CONFLICT (id) DO UPDATE SET
       ru = EXCLUDED.ru,
       en = EXCLUDED.en,
       updated_at = now()`,
    [id, JSON.stringify(ru), JSON.stringify(en)]
  );
}

module.exports = {
  contentId,
  getRow,
  readLang,
  writeLang,
  upsertRow,
};
