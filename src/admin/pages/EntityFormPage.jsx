import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createItem,
  deleteItem,
  fetchItem,
  updateItem,
} from "../api/resource";
import {
  SchemaForm,
  cleanItem,
  createEmptyItem,
  matchesShowWhen,
} from "../components/form/FieldRenderer";
import { AccordionSection } from "../components/AccordionSection";
import { LangTabs } from "../components/LangTabs";
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
} from "../components/ui";
import { getEntity } from "../config/entities";
import { splitSeoSchema } from "../config/seo";
import { useAdminLang } from "../lang";

import { adminPath } from "../paths";
export function EntityFormPage({ entityKey: entityKeyProp } = {}) {
  const params = useParams();
  const entityKey = entityKeyProp || params.entityKey;
  const id = params.id;
  const entity = getEntity(entityKey);
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { lang } = useAdminLang();

  const [recordId, setRecordId] = useState(isNew ? "" : id);
  const [item, setItem] = useState(() => createEmptyItem(entity?.schema));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const title = useMemo(() => {
    if (!entity) return "";
    return isNew
      ? `Добавление: ${entity.title}`
      : `Редактирование: ${entity.title}`;
  }, [entity, isNew]);

  useEffect(() => {
    if (!entity) return;

    if (isNew) {
      setRecordId("");
      setItem(createEmptyItem(entity.schema));
      setError("");
      setSuccess("");
      setLoading(false);
    }
  }, [entityKey, id, isNew]);

  useEffect(() => {
    if (!entity || isNew) return;

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const data = await fetchItem(entity.key, id);
        if (cancelled) return;
        setRecordId(data.id);
        setItem({ ...createEmptyItem(entity.schema), ...data.item });
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [entityKey, id, isNew, lang]);

  if (!entity) {
    return <ErrorText>Раздел не найден</ErrorText>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const payload = cleanItem(entity.schema, item);

      if (isNew) {
        const created = await createItem(entity.key, {
          id: recordId || undefined,
          item: payload,
        });
        setSuccess("Сохранено");
        navigate(adminPath(`/data/${entity.key}/${created.id}`), { replace: true });
      } else {
        const updated = await updateItem(entity.key, id, {
          item: payload,
          newId:
            lang === "ru" &&
            entity.kind === "object" &&
            entity.allowKeyEdit &&
            recordId &&
            recordId !== id
              ? recordId
              : undefined,
        });
        setSuccess("Изменения сохранены");
        if (updated.id !== id) {
          navigate(adminPath(`/data/${entity.key}/${updated.id}`), { replace: true });
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (isNew) return;
    if (!window.confirm("Удалить запись?")) return;
    try {
      await deleteItem(entity.key, id);
      navigate(adminPath(`/data/${entity.key}`));
    } catch (err) {
      setError(err.message);
    }
  };

  const { seoSchema, restSchema } = splitSeoSchema(entity.schema);
  const showId =
    entity.kind === "object" ||
    (isNew &&
      entity.kind === "array" &&
      matchesShowWhen(entity.recordIdWhen, item));

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle>{title}</PageTitle>
      <LangTabs />
      <PageSubtitle>
        <Link to={adminPath(`/data/${entity.key}`)}>← К списку</Link>
      </PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}

      {loading ? (
        <PageSubtitle>Загрузка формы…</PageSubtitle>
      ) : (
        <>
      {seoSchema.sections.length > 0 && (
        <SchemaForm schema={seoSchema} value={item} onChange={setItem} />
      )}

      {showId && !(lang === "en" && !isNew) && (
        <AccordionSection title="Идентификатор" defaultOpen={false}>
          <Field>
            <Label>
              {entity.keyLabel || (entity.kind === "object" ? "Ключ" : "ID")}
            </Label>
            <Input
              value={recordId}
              onChange={(e) => setRecordId(e.target.value)}
              placeholder={
                entity.kind === "object"
                  ? "например: winter"
                  : "например: article_10"
              }
              disabled={
                (entity.kind === "array" && !isNew) || (lang === "en" && !isNew)
              }
            />
          </Field>
        </AccordionSection>
      )}

      <SchemaForm schema={restSchema} value={item} onChange={setItem} />

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Сохранение…" : "Сохранить"}
        </Button>
        <Button as={Link} to={adminPath(`/data/${entity.key}`)} variant="ghost">
          Отмена
        </Button>
        {!isNew && (
          <Button type="button" variant="danger" onClick={handleDelete}>
            Удалить
          </Button>
        )}
      </Actions>
        </>
      )}
    </form>
  );
}
