import { apiRequest } from "./http";

function encodePathSegment(value) {
  const raw = String(value ?? "");
  try {
    return encodeURIComponent(decodeURIComponent(raw));
  } catch {
    return encodeURIComponent(raw);
  }
}

export function fetchList(resource) {
  return apiRequest(`/${resource}`);
}

export function fetchItem(resource, id) {
  return apiRequest(`/${resource}/${encodePathSegment(id)}`);
}

export function createItem(resource, payload) {
  return apiRequest(`/${resource}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateItem(resource, id, payload) {
  return apiRequest(`/${resource}/${encodePathSegment(id)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deleteItem(resource, id) {
  return apiRequest(`/${resource}/${encodePathSegment(id)}`, {
    method: "DELETE",
  });
}
