import { apiRequest, getToken } from "./http";

export function fetchLeads(source) {
  const query = source ? `?source=${encodeURIComponent(source)}` : "";
  return apiRequest(`/leads${query}`);
}

export function deleteLead(id) {
  return apiRequest(`/leads/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export async function downloadLeadFile(id, filename) {
  const headers = new Headers();
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`/api/leads/${encodeURIComponent(id)}/file`, { headers });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Не удалось скачать файл");
  }
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename || "resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
