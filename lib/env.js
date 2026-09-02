require("dotenv").config({ quiet: true });

function readEnv(name, fallback = "") {
  const value = process.env[name];
  if (value == null) return fallback;
  return String(value).trim();
}

const config = {
  port: Number(readEnv("PORT", "2026")),
  jwtSecret: readEnv("JWT_SECRET", "hotel-admin-jwt-secret"),
  appUrl: readEnv("APP_URL", "http://localhost:3000").replace(/\/$/, ""),
  db: {
    host: readEnv("DB_HOST"),
    user: readEnv("DB_USER"),
    password: readEnv("DB_PWD"),
    database: readEnv("DB_NAME"),
    port: Number(readEnv("DB_PORT", "5432")),
  },
  smtp: {
    host: readEnv("SMTP_HOST"),
    port: Number(readEnv("SMTP_PORT", "587")),
    user: readEnv("SMTP_USER"),
    pass: readEnv("SMTP_PASS"),
    from: readEnv("MAIL_FROM"),
  },
};

config.mailEnabled = Boolean(config.smtp.host && config.smtp.from);

module.exports = { config, readEnv };
