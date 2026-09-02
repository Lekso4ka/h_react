const { query } = require("./db");

const TIME_ZONE = "Europe/Moscow";

function publicSubscriber(row) {
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
      .formatToParts(row.created_at)
      .map((part) => [part.type, part.value])
  );

  return {
    id: row.id,
    name: row.name,
    source: "newsletter",
    date: `${parts.day}.${parts.month}.${parts.year}`,
    time: `${parts.hour}:${parts.minute}:${parts.second}`,
    email: row.email,
  };
}

async function findSubscriberByEmail(email) {
  const { rows } = await query(
    `SELECT id, name, email, created_at
     FROM subscribers
     WHERE email = $1
     LIMIT 1`,
    [email]
  );
  return rows[0] || null;
}

async function findSubscriberById(id) {
  const { rows } = await query(
    `SELECT id, name, email, created_at
     FROM subscribers
     WHERE id = $1
     LIMIT 1`,
    [id]
  );
  return rows[0] || null;
}

async function createSubscriber({ id, name, email, createdAt }) {
  const { rows } = await query(
    `INSERT INTO subscribers (id, name, email, created_at)
     VALUES (COALESCE($1::uuid, gen_random_uuid()), $2, $3, COALESCE($4::timestamptz, now()))
     ON CONFLICT (email) DO NOTHING
     RETURNING id, name, email, created_at`,
    [id || null, name, email, createdAt || null]
  );
  return rows[0] || null;
}

async function listSubscribers() {
  const { rows } = await query(
    `SELECT id, name, email, created_at
     FROM subscribers
     ORDER BY created_at DESC`
  );
  return rows.map(publicSubscriber);
}

async function deleteSubscriber(id) {
  const { rowCount } = await query(`DELETE FROM subscribers WHERE id = $1`, [id]);
  return rowCount > 0;
}

module.exports = {
  publicSubscriber,
  findSubscriberByEmail,
  findSubscriberById,
  createSubscriber,
  listSubscribers,
  deleteSubscriber,
};
