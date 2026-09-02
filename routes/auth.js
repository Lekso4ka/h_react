const crypto = require("node:crypto");
const express = require("express");
const bcrypt = require("bcryptjs");
const { query } = require("../lib/db");
const { config } = require("../lib/env");
const { sendPasswordResetEmail } = require("../lib/mail");
const { signToken, authRequired } = require("../middleware/auth");

const router = express.Router();
const RESET_TTL_MS = 60 * 60 * 1000;

function publicUser(user) {
  return {
    id: user.id,
    login: user.login,
    email: user.email,
  };
}

function normalizeLogin(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function resetUrlFor(token) {
  return `${config.appUrl}/admin/reset-password?token=${encodeURIComponent(token)}`;
}

async function findUserByLoginOrEmail(loginOrEmail) {
  const value = normalizeLogin(loginOrEmail);
  if (!value) return null;

  const { rows } = await query(
    `SELECT id, login, email, password_hash
     FROM users
     WHERE lower(login) = $1 OR lower(email) = $1
     LIMIT 1`,
    [value]
  );
  return rows[0] || null;
}

async function findUserById(id) {
  const { rows } = await query(
    `SELECT id, login, email, password_hash
     FROM users
     WHERE id = $1
     LIMIT 1`,
    [id]
  );
  return rows[0] || null;
}

async function issueResetLink(user) {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + RESET_TTL_MS);
  const resetUrl = resetUrlFor(resetToken);

  await query(
    `UPDATE users
     SET reset_token = $1, reset_token_expires = $2
     WHERE id = $3`,
    [resetToken, expiresAt, user.id]
  );

  const mail = await sendPasswordResetEmail({
    to: user.email,
    resetUrl,
  });

  const payload = {
    ok: true,
    message: mail.sent
      ? "Ссылка для смены пароля отправлена на почту"
      : "Ссылка для смены пароля создана. Почтовый ящик ещё не настроен — используйте ссылку ниже.",
  };

  if (!mail.sent) {
    payload.resetPath = `/admin/reset-password?token=${resetToken}`;
    payload.resetUrl = resetUrl;
  }

  return payload;
}

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body || {};
    if (!login || !password) {
      return res.status(400).json({ error: "Укажите логин и пароль" });
    }

    const user = await findUserByLoginOrEmail(login);
    if (!user) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const token = signToken(user);
    res.json({ token, user: publicUser(user) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/forgot", async (req, res) => {
  try {
    const { loginOrEmail } = req.body || {};
    if (!loginOrEmail) {
      return res.status(400).json({ error: "Укажите e-mail или логин" });
    }

    const user = await findUserByLoginOrEmail(loginOrEmail);
    if (!user) {
      return res.json({
        ok: true,
        message: "Если пользователь найден, ссылка для смены пароля создана",
      });
    }

    res.json(await issueResetLink(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/reset", async (req, res) => {
  try {
    const { token, password } = req.body || {};
    if (!token || !password) {
      return res.status(400).json({ error: "Укажите токен и новый пароль" });
    }
    if (String(password).length < 4) {
      return res.status(400).json({ error: "Пароль слишком короткий" });
    }

    const { rows } = await query(
      `SELECT id
       FROM users
       WHERE reset_token = $1
         AND reset_token_expires IS NOT NULL
         AND reset_token_expires > now()
       LIMIT 1`,
      [String(token)]
    );
    const user = rows[0];

    if (!user) {
      return res.status(400).json({ error: "Ссылка недействительна или истекла" });
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    await query(
      `UPDATE users
       SET password_hash = $1,
           reset_token = NULL,
           reset_token_expires = NULL
       WHERE id = $2`,
      [passwordHash, user.id]
    );

    res.json({ ok: true, message: "Пароль успешно изменён" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/change-password", authRequired, async (req, res) => {
  try {
    const user = await findUserById(req.user.sub);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    res.json(await issueResetLink(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/me", authRequired, async (req, res) => {
  try {
    const user = await findUserById(req.user.sub);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json({ user: publicUser(user) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
