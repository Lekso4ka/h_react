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

import { adminPath } from "../paths";
export function EntityFormPage({ entityKey: entityKeyProp } = {}) {
  const params = useParams();
  const entityKey = entityKeyProp || params.entityKey;
  const id = params.id;
  const entity = getEntity(entityKey);
  const isNew = !id || id === "new";
  const navigate = useNavigate();

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
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
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
  }, [entityKey, id, isNew]);

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

  if (loading) {
    return <PageSubtitle>Загрузка формы…</PageSubtitle>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>
        <Link to={adminPath(`/data/${entity.key}`)}>← К списку</Link>
      </PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}

      {(entity.kind === "object" ||
        (isNew &&
          entity.kind === "array" &&
          matchesShowWhen(entity.recordIdWhen, item))) && (
        <AccordionSection title="Идентификатор" defaultOpen>
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
              disabled={entity.kind === "array" && !isNew}
            />
          </Field>
        </AccordionSection>
      )}

      <SchemaForm schema={entity.schema} value={item} onChange={setItem} />

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
    </form>
  );
}
