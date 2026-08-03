import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { changePasswordRequest } from "../../api/auth";
import { AccordionSection } from "../../components/AccordionSection";
import {
  Actions,
  Button,
  ErrorText,
  Field,
  Input,
  Label,
  PageSubtitle,
  PageTitle,
  SuccessText,
} from "../../components/ui";

import { adminPath } from "../../paths";
export function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const data = await changePasswordRequest(currentPassword, newPassword);
      setSuccess(data.message || "Пароль изменён");
      setCurrentPassword("");
      setNewPassword("");
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

      <AccordionSection title="Новые данные" defaultOpen>
        <Field style={{ marginBottom: 20 }}>
          <Label>Текущий пароль</Label>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Label>Новый пароль</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Field>
      </AccordionSection>

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Сохранение…" : "Сохранить"}
        </Button>
      </Actions>
    </form>
  );
}
