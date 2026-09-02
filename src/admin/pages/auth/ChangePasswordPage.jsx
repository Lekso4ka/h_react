import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { changePasswordRequest } from "../../api/auth";
import { AccordionSection } from "../../components/AccordionSection";
import {
  Actions,
  Button,
  ErrorText,
  PageSubtitle,
  PageTitle,
  SuccessText,
} from "../../components/ui";

import { adminPath } from "../../paths";
export function ChangePasswordPage() {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resetPath, setResetPath] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setResetPath("");
    setSaving(true);
    try {
      const data = await changePasswordRequest();
      setSuccess(data.message || "Ссылка для смены пароля создана");
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
    <form onSubmit={handleSubmit}>
      <PageTitle>Смена пароля</PageTitle>
      <PageSubtitle>
        <Link to={adminPath()}>← Назад</Link>
      </PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}
      {resetPath && (
        <PageSubtitle>
          <Link to={resetPath}>Открыть ссылку для смены пароля</Link>
        </PageSubtitle>
      )}

      <AccordionSection title="Письмо со ссылкой" defaultOpen>
        <PageSubtitle style={{ marginBottom: 0 }}>
          Отправим ссылку на {user?.email || "почту аккаунта"}. Перейдите по ней,
          чтобы задать новый пароль. Почтовый ящик пока не подключён — ссылка
          появится на этой странице.
        </PageSubtitle>
      </AccordionSection>

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Отправка…" : "Отправить ссылку"}
        </Button>
      </Actions>
    </form>
  );
}
