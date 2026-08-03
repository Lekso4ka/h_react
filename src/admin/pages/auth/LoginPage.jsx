import React from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
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
export function LoginPage() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || adminPath();

  const [loginValue, setLoginValue] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  if (!loading && isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSaving(true);
    try {
      await login(loginValue, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AuthPage>
      <AuthCard>
        <AuthTitle>Вход в систему управления</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthField>
            <AuthLabel>Логин</AuthLabel>
            <AuthInput
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              autoComplete="username"
              required
            />
          </AuthField>
          <AuthField>
            <AuthLabel>Пароль</AuthLabel>
            <AuthInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </AuthField>
          {error && <AuthMessage tone="error">{error}</AuthMessage>}
          <AuthActions>
            <AuthButton type="submit" disabled={saving}>
              {saving ? "Вход…" : "Войти"}
            </AuthButton>
            <AuthLink to={adminPath("/forgot-password")}>Забыли пароль?</AuthLink>
          </AuthActions>
        </AuthForm>
      </AuthCard>
    </AuthPage>
  );
}
