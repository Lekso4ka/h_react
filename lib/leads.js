const { query } = require("./db");

const TIME_ZONE = "Europe/Moscow";

function moscowParts(value) {
  return Object.fromEntries(
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
      .formatToParts(value)
      .map((part) => [part.type, part.value])
  );
}

function publicLead(row) {
  const parts = moscowParts(row.created_at);
  const payload =
    row.payload && typeof row.payload === "object" && !Array.isArray(row.payload)
      ? row.payload
      : {};

  return {
    id: row.id,
    name: row.name,
    source: row.source,
    date: `${parts.day}.${parts.month}.${parts.year}`,
    time: `${parts.hour}:${parts.minute}:${parts.second}`,
    phone: row.phone || "",
    email: row.email || "",
    ...payload,
  };
}

async function createLead({ id, source, name, phone, email, payload, createdAt }) {
  const { rows } = await query(
    `INSERT INTO leads (id, source, name, phone, email, payload, created_at)
     VALUES (
       COALESCE($1::uuid, gen_random_uuid()),
       $2, $3, $4, $5, $6::jsonb,
       COALESCE($7::timestamptz, now())
     )
     RETURNING id, source, name, phone, email, payload, created_at`,
    [
      id || null,
      source,
      name,
      phone || "",
      email || "",
      JSON.stringify(payload || {}),
      createdAt || null,
    ]
  );
  return rows[0] || null;
}

async function listLeads(source) {
  const params = [];
  let sql = `SELECT id, source, name, phone, email, payload, created_at
             FROM leads`;
  if (source) {
    params.push(source);
    sql += ` WHERE source = $1`;
  }
  sql += ` ORDER BY created_at DESC`;
  const { rows } = await query(sql, params);
  return rows.map(publicLead);
}

async function findLeadById(id) {
  const { rows } = await query(
    `SELECT id, source, name, phone, email, payload, created_at
     FROM leads
     WHERE id = $1
     LIMIT 1`,
    [id]
  );
  return rows[0] || null;
}

async function deleteLead(id) {
  const { rows } = await query(
    `DELETE FROM leads
     WHERE id = $1
     RETURNING id, payload`,
    [id]
  );
  return rows[0] || null;
}

module.exports = {
  publicLead,
  createLead,
  listLeads,
  findLeadById,
  deleteLead,
};
