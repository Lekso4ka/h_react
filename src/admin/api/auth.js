import { apiRequest, clearToken, setToken } from "./http";

export async function loginRequest(login, password) {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
  setToken(data.token);
  return data;
}

export async function forgotPasswordRequest(loginOrEmail) {
  return apiRequest("/auth/forgot", {
    method: "POST",
    body: JSON.stringify({ loginOrEmail }),
  });
}

export async function resetPasswordRequest(token, password) {
  return apiRequest("/auth/reset", {
    method: "POST",
    body: JSON.stringify({ token, password }),
  });
}

export async function changePasswordRequest(currentPassword, newPassword) {
  return apiRequest("/auth/change-password", {
    method: "POST",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}

export async function fetchMe() {
  return apiRequest("/auth/me");
}

export function logoutLocal() {
  clearToken();
}
