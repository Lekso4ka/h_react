import { getAdminContentLang } from "../lang";

const API = "/api";
const TOKEN_KEY = "hotel_admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}

export function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

function shouldAttachLang(url) {
  if (url.startsWith("/auth")) return false;
  if (url.startsWith("/leads")) return false;
  if (url.startsWith("/upload")) return false;
  return true;
}

function withLang(url) {
  if (!shouldAttachLang(url)) return url;
  const lang = getAdminContentLang();
  if (lang !== "en") return url;
  return `${url}${url.includes("?") ? "&" : "?"}lang=en`;
}

export async function apiRequest(url, options = {}) {
  const headers = new Headers(options.headers || {});
  const token = getToken();
  url = withLang(url);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (options.body && !(options.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API}${url}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (response.status === 401) {
    if (!url.startsWith("/auth/login") && !url.startsWith("/auth/forgot") && !url.startsWith("/auth/reset")) {
      clearToken();
      window.dispatchEvent(new Event("auth:logout"));
    }
    const error = new Error(data.error || "Требуется авторизация");
    error.status = 401;
    throw error;
  }

  if (!response.ok) {
    throw new Error(data.error || "Ошибка запроса");
  }

  return data;
}
