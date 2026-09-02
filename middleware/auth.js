const jwt = require("jsonwebtoken");
const { config } = require("../lib/env");

const JWT_SECRET = config.jwtSecret;

function signToken(user) {
  return jwt.sign(
    { sub: user.id, login: user.login, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

function authRequired(req, res, next) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ error: "Требуется авторизация" });
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Токен недействителен или истёк" });
  }
}

/** Для публичного сайта: GET без токена, мутации — только с JWT */
function authRequiredUnlessGet(req, res, next) {
  if (req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS") {
    return next();
  }
  return authRequired(req, res, next);
}

module.exports = {
  JWT_SECRET,
  signToken,
  authRequired,
  authRequiredUnlessGet,
};
