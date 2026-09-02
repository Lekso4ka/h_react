import React from "react";
import { useState } from "react";
import { forgotPasswordRequest } from "../../api/auth";
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
export function ForgotPasswordPage() {
  const [loginOrEmail, setLoginOrEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [resetPath, setResetPath] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setResetPath("");
    setSaving(true);
    try {
      const data = await forgotPasswordRequest(loginOrEmail);
      setMessage(data.message || "Запрос отправлен");
      if (data.resetPath) {
        setResetPath(data.resetPath);
      }
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
            <AuthLabel>E-mail адрес или логин</AuthLabel>
            <AuthInput
              value={loginOrEmail}
              onChange={(e) => setLoginOrEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </AuthField>
          {error && <AuthMessage tone="error">{error}</AuthMessage>}
          {message && <AuthMessage>{message}</AuthMessage>}
          {resetPath && (
            <AuthLink to={resetPath}>Открыть ссылку для смены пароля</AuthLink>
          )}
          <AuthActions>
            <AuthButton type="submit" disabled={saving}>
              {saving ? "Отправка…" : "Отправить"}
            </AuthButton>
            <AuthLink to={adminPath("/login")}>Вернуться к входу</AuthLink>
          </AuthActions>
        </AuthForm>
      </AuthCard>
    </AuthPage>
  );
}
