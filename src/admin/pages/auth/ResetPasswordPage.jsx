import React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPasswordRequest } from "../../api/auth";
import {
  AuthActions,
  AuthButton,
  AuthCard,
  AuthField,
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthLink,
  AuthMessage,
  AuthPage,
  AuthTitle,
} from "./authStyles";

import { adminPath } from "../../paths";
export function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!token) {
      setError("Отсутствует токен восстановления");
      return;
    }

    setSaving(true);
    try {
      const data = await resetPasswordRequest(token, password);
      setMessage(data.message || "Пароль изменён");
      setTimeout(() => navigate(adminPath("/login"), { replace: true }), 800);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AuthPage>
      <AuthCard>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthField>
            <AuthLabel>Введите новый пароль</AuthLabel>
            <AuthInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </AuthField>
          {error && <AuthMessage tone="error">{error}</AuthMessage>}
          {message && <AuthMessage>{message}</AuthMessage>}
          <AuthActions>
            <AuthButton type="submit" disabled={saving || !token}>
              {saving ? "Сохранение…" : "Сохранить"}
            </AuthButton>
            <AuthLink to={adminPath("/login")}>Вернуться ко входу</AuthLink>
          </AuthActions>
        </AuthForm>
      </AuthCard>
    </AuthPage>
  );
}
