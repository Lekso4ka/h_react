import { apiRequest } from "./http";

function encodePathSegment(value) {
  const raw = String(value ?? "");
  try {
    return encodeURIComponent(decodeURIComponent(raw));
  } catch {
    return encodeURIComponent(raw);
  }
}

function roomPath(hotel, categoryKey, variantKey) {
  return `/rooms/${encodePathSegment(hotel)}/${encodePathSegment(categoryKey)}/${encodePathSegment(variantKey)}`;
}

export function fetchHotelRooms(hotel) {
  return apiRequest(`/rooms/${encodePathSegment(hotel)}`);
}

export function fetchRoom(hotel, categoryKey, variantKey) {
  return apiRequest(roomPath(hotel, categoryKey, variantKey));
}

export function createRoom(hotel, payload) {
  return apiRequest(`/rooms/${encodePathSegment(hotel)}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateRoom(hotel, categoryKey, variantKey, payload) {
  return apiRequest(roomPath(hotel, categoryKey, variantKey), {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deleteRoom(hotel, categoryKey, variantKey) {
  return apiRequest(roomPath(hotel, categoryKey, variantKey), {
    method: "DELETE",
  });
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);
  return apiRequest("/upload", {
    method: "POST",
    body: formData,
  });
}

export async function uploadImages(files) {
  const formData = new FormData();
  for (const file of files) {
    formData.append("images", file);
  }
  return apiRequest("/upload/multiple", {
    method: "POST",
    body: formData,
  });
}

export async function uploadVideo(file) {
  const formData = new FormData();
  formData.append("video", file);
  return apiRequest("/upload/video", {
    method: "POST",
    body: formData,
  });
}
