import { apiRequest } from "./http";

export function fetchStaticMedia() {
  return apiRequest("/static/media");
}

export function saveStaticMedia(key, payload) {
  return apiRequest(`/static/media/${encodeURIComponent(key)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function resetStaticMedia(key) {
  return apiRequest(`/static/media/${encodeURIComponent(key)}`, {
    method: "DELETE",
  });
}

export function fetchStaticTexts() {
  return apiRequest("/static/texts");
}

export function saveStaticText(key, payload) {
  return apiRequest(`/static/texts/${encodeURIComponent(key)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function resetStaticText(key) {
  return apiRequest(`/static/texts/${encodeURIComponent(key)}`, {
    method: "DELETE",
  });
}

export function fetchStaticLinks() {
  return apiRequest("/static/links");
}

export function saveStaticLink(key, payload) {
  return apiRequest(`/static/links/${encodeURIComponent(key)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function resetStaticLink(key) {
  return apiRequest(`/static/links/${encodeURIComponent(key)}`, {
    method: "DELETE",
  });
}
