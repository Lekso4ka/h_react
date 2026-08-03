const express = require("express");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { readJson, writeJson } = require("../lib/jsonStore");
const { signToken, authRequired } = require("../middleware/auth");

const router = express.Router();
const USERS_FILE = "users.json";

function publicUser(user) {
  return {
    id: user.id,
    login: user.login,
    email: user.email,
  };
}

function findUser(users, loginOrEmail) {
  const value = String(loginOrEmail || "")
    .trim()
    .toLowerCase();
  return users.find(
    (user) =>
      user.login.toLowerCase() === value ||
      (user.email && user.email.toLowerCase() === value)
  );
}

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body || {};
    if (!login || !password) {
      return res.status(400).json({ error: "Укажите логин и пароль" });
    }

    const users = readJson(USERS_FILE);
    const user = findUser(users, login);
    if (!user) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
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

    const users = readJson(USERS_FILE);
    const user = findUser(users, loginOrEmail);

    // Не раскрываем, существует ли пользователь
    if (!user) {
      return res.json({
        ok: true,
        message: "Если пользователь найден, ссылка для восстановления создана",
      });
    }

    const resetToken = uuidv4();
    user.resetToken = resetToken;
    user.resetTokenExpires = Date.now() + 60 * 60 * 1000;
    writeJson(USERS_FILE, users);

    res.json({
      ok: true,
      message: "Ссылка для восстановления создана",
      // Для локальной разработки без почты возвращаем токен
      resetToken,
      resetPath: `/admin/reset-password?token=${resetToken}`,
    });
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

    const users = readJson(USERS_FILE);
    const user = users.find(
      (item) =>
        item.resetToken === token &&
        item.resetTokenExpires &&
        item.resetTokenExpires > Date.now()
    );

    if (!user) {
      return res.status(400).json({ error: "Ссылка недействительна или истекла" });
    }

    user.passwordHash = await bcrypt.hash(String(password), 10);
    user.resetToken = null;
    user.resetTokenExpires = null;
    writeJson(USERS_FILE, users);

    res.json({ ok: true, message: "Пароль успешно изменён" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/change-password", authRequired, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ error: "Укажите текущий и новый пароль" });
    }
    if (String(newPassword).length < 4) {
      return res.status(400).json({ error: "Пароль слишком короткий" });
    }

    const users = readJson(USERS_FILE);
    const user = users.find((item) => item.id === req.user.sub);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    const ok = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: "Неверный текущий пароль" });
    }

    user.passwordHash = await bcrypt.hash(String(newPassword), 10);
    user.resetToken = null;
    user.resetTokenExpires = null;
    writeJson(USERS_FILE, users);

    res.json({ ok: true, message: "Пароль успешно изменён" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/me", authRequired, (req, res) => {
  try {
    const users = readJson(USERS_FILE);
    const user = users.find((item) => item.id === req.user.sub);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    res.json({ user: publicUser(user) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
