import React, { useEffect, useState } from "react";
import { fetchSingleton, updateSingleton } from "../api/resource";
import {
  SchemaForm,
  cleanItem,
  createEmptyItem,
} from "../components/form/FieldRenderer";
import {
  Actions,
  Button,
  ErrorText,
  PageSubtitle,
  PageTitle,
  SuccessText,
} from "../components/ui";
import { getSingleton } from "../config/singletons";
import { LangTabs } from "../components/LangTabs";
import { useAdminLang } from "../lang";

export function SingletonFormPage({ singletonKey }) {
  const config = getSingleton(singletonKey);
  const { lang } = useAdminLang();

  const [item, setItem] = useState(() => createEmptyItem(config?.schema));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!config) return;

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const data = await fetchSingleton(config.key);
        if (cancelled) return;
        setItem({ ...createEmptyItem(config.schema), ...(data.data || {}) });
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [singletonKey, lang]);

  if (!config) {
    return <ErrorText>Раздел не найден</ErrorText>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const payload = cleanItem(config.schema, item);
      const updated = await updateSingleton(config.key, payload);
      setItem({ ...createEmptyItem(config.schema), ...(updated.item || {}) });
      setSuccess("Изменения сохранены");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle>{config.title}</PageTitle>
      <LangTabs />
      <PageSubtitle>Тексты и медиа этой страницы</PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}

      {loading ? (
        <PageSubtitle>Загрузка формы…</PageSubtitle>
      ) : (
        <>
      <SchemaForm schema={config.schema} value={item} onChange={setItem} />

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Сохранение…" : "Сохранить"}
        </Button>
      </Actions>
        </>
      )}
    </form>
  );
}
