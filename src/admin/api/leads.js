import { apiRequest } from "./http";

export function fetchLeads(source) {
  const query = source ? `?source=${encodeURIComponent(source)}` : "";
  return apiRequest(`/leads${query}`);
}

export function deleteLead(id) {
  return apiRequest(`/leads/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}
