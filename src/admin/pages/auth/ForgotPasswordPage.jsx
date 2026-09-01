import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [loginOrEmail, setLoginOrEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setSaving(true);
    try {
      const data = await forgotPasswordRequest(loginOrEmail);
      setMessage(data.message || "Запрос отправлен");
      if (data.resetToken) {
        navigate(`${adminPath("/reset-password")}?token=${encodeURIComponent(data.resetToken)}`);
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
