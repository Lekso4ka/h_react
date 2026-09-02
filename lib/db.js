const { Pool } = require("pg");
const { config } = require("./env");

if (!config.db.host || !config.db.user || !config.db.database) {
  throw new Error("Задайте DB_HOST, DB_USER и DB_NAME в .env");
}

const pool = new Pool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
  max: 10,
  idleTimeoutMillis: 30_000,
});

async function query(text, params) {
  return pool.query(text, params);
}

module.exports = { pool, query };
