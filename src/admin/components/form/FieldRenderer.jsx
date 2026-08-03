import React from "react";
import styled from "@emotion/styled";
import { ImageUploader } from "../ImageUploader";
import { VideoUploader } from "../VideoUploader";
import { AccordionSection } from "../AccordionSection";
import {
  Actions,
  Button,
  Field,
  Grid,
  Input,
  Label,
  Select,
  TextArea,
} from "../ui";
import { theme } from "../../styles/theme";
import { ParagraphListField, cleanParagraphs } from "./ParagraphListField";
import { StringListField, cleanStringList } from "./StringListField";

const Nested = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  padding: 18px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NestedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Remove = styled.button`
  border: 0;
  background: transparent;
  color: ${theme.colors.red};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export function matchesShowWhen(showWhen, root) {
  if (!showWhen) return true;
  return Object.entries(showWhen).every(([key, expected]) => {
    const actual = root?.[key];
    if (Array.isArray(expected)) return expected.includes(actual);
    return actual === expected;
  });
}

function emptyFromFields(fields = {}) {
  const result = {};
  for (const [key, def] of Object.entries(fields)) {
    switch (def.type) {
      case "number":
        result[key] = def.default ?? 0;
        break;
      case "boolean":
        result[key] = def.default ?? false;
        break;
      case "stringList":
      case "paragraphs":
      case "images":
        result[key] = [];
        break;
      case "video":
        if (def.map) break;
        result[key] = { src: "", preview: "" };
        break;
      case "object":
        result[key] = emptyFromFields(def.fields);
        break;
      case "objectList":
        result[key] = [];
        break;
      default:
        result[key] = def.default ?? "";
    }
  }
  return result;
}

function omitHiddenField(result, key, def) {
  delete result[key];
  if (def.type === "video" && def.map) {
    delete result[def.map.src];
    delete result[def.map.preview];
  }
}

export function cleanByFields(value, fields = {}, root) {
  if (!value || typeof value !== "object") {
    return emptyFromFields(fields);
  }

  const result = { ...value };
  const context = root ?? value;

  for (const [key, def] of Object.entries(fields)) {
    if (!matchesShowWhen(def.showWhen, context)) {
      omitHiddenField(result, key, def);
      continue;
    }

    const current = result[key];

    switch (def.type) {
      case "number":
        result[key] = Number(current) || 0;
        break;
      case "boolean":
        result[key] = Boolean(current);
        break;
      case "stringList":
        result[key] = cleanStringList(current);
        break;
      case "paragraphs":
        result[key] = cleanParagraphs(current);
        break;
      case "images":
        result[key] = cleanStringList(current);
        break;
      case "video":
        if (def.map) {
          const srcKey = def.map.src;
          const previewKey = def.map.preview;
          result[srcKey] = String(result[srcKey] ?? "").trim();
          result[previewKey] = String(result[previewKey] ?? "").trim();
          delete result[key];
        } else {
          result[key] = {
            src: String(current?.src ?? "").trim(),
            preview: String(current?.preview ?? "").trim(),
          };
        }
        break;
      case "object":
        result[key] = cleanByFields(current || {}, def.fields, context);
        break;
      case "objectList":
        result[key] = (Array.isArray(current) ? current : [])
          .map((item) => cleanByFields(item || {}, def.itemFields, item))
          .filter((item) => Object.values(item).some((v) => {
            if (Array.isArray(v)) return v.length > 0;
            if (typeof v === "object" && v) return Object.keys(v).length > 0;
            return String(v ?? "").trim() !== "" && v !== 0 && v !== false;
          }));
        break;
      default:
        result[key] = current ?? "";
    }
  }

  return result;
}

export function fieldLabel(def, fallback = "") {
  const base = def?.label || fallback;
  if (!base) return "";
  return def?.authored ? `${base} (авторское форматирование)` : base;
}

function FieldControl({ def, value, onChange }) {
  switch (def.type) {
    case "textarea":
      return (
        <TextArea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
        />
      );
    case "number":
      return (
        <Input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
        />
      );
    case "select":
      return (
        <Select
          value={value ?? def.default ?? ""}
          onChange={(e) => onChange(e.target.value)}
          required={def.required}
        >
          {!def.default && (
            <option value="" disabled>
              {def.placeholder || "Выберите значение"}
            </option>
          )}
          {(def.options || []).map((option) => {
            const optionValue =
              typeof option === "string" ? option : option.value;
            const optionLabel =
              typeof option === "string" ? option : option.label;
            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </Select>
      );
    case "boolean":
      return (
        <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span>{def.checkboxLabel || "Да"}</span>
        </label>
      );
    case "stringList":
      return (
        <StringListField
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          placeholder={def.placeholder}
          addLabel={def.addLabel || "Добавить"}
        />
      );
    case "paragraphs":
      return (
        <ParagraphListField
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          addLabel={def.addLabel || "Добавить абзац"}
        />
      );
    case "image":
      return (
        <ImageUploader
          label={fieldLabel(def, "Изображение")}
          value={value ? [value] : []}
          onChange={(files) => onChange(files[0] || "")}
          multiple={false}
        />
      );
    case "images":
      return (
        <ImageUploader
          label={fieldLabel(def, "Изображения")}
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          multiple
        />
      );
    case "video":
      return (
        <VideoUploader
          label={fieldLabel(def, "Видео")}
          value={value || { src: "", preview: "" }}
          onChange={onChange}
        />
      );
    case "object":
      return (
        <Nested>
          <FieldsGrid
            fields={def.fields}
            value={value && typeof value === "object" ? value : {}}
            onChange={onChange}
          />
        </Nested>
      );
    case "objectList": {
      const items = Array.isArray(value) && value.length > 0 ? value : [{}];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {items.map((item, index) => (
            <Nested key={index}>
              <NestedHeader>
                <Label>
                  {def.itemLabel || "Элемент"} {index + 1}
                </Label>
                <Remove
                  type="button"
                  disabled={items.length <= 1}
                  onClick={() => {
                    if (items.length <= 1) {
                      onChange([emptyFromFields(def.itemFields)]);
                      return;
                    }
                    onChange(items.filter((_, i) => i !== index));
                  }}
                >
                  Удалить
                </Remove>
              </NestedHeader>
              <FieldsGrid
                fields={def.itemFields}
                value={item || {}}
                onChange={(next) => {
                  const copy = [...items];
                  copy[index] = next;
                  onChange(copy);
                }}
              />
            </Nested>
          ))}
          <Actions>
            <Button
              type="button"
              variant="ghost"
              onClick={() =>
                onChange([
                  ...(Array.isArray(value) ? value : items),
                  emptyFromFields(def.itemFields),
                ])
              }
            >
              {def.addLabel || "Добавить"}
            </Button>
          </Actions>
        </div>
      );
    }
    default:
      return (
        <Input
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
        />
      );
  }
}

function FieldsGrid({ fields, value, onChange, root }) {
  const context = root ?? value;
  const entries = Object.entries(fields || {}).filter(([, def]) =>
    matchesShowWhen(def.showWhen, context)
  );

  return (
    <Grid cols={1} gap={18}>
      {entries.map(([key, def]) => {
        const label = fieldLabel(def, key);

        if (def.type === "video" && def.map) {
          return (
            <div key={key}>
              <VideoUploader
                label={label}
                value={{
                  src: value?.[def.map.src] || "",
                  preview: value?.[def.map.preview] || "",
                }}
                onChange={(next) =>
                  onChange({
                    ...value,
                    [def.map.src]: next.src,
                    [def.map.preview]: next.preview,
                  })
                }
              />
            </div>
          );
        }

        const content = (
          <Field key={key}>
            {def.type !== "image" &&
              def.type !== "images" &&
              def.type !== "video" && <Label>{label}</Label>}
            <FieldControl
              def={def}
              value={value?.[key]}
              onChange={(next) => onChange({ ...value, [key]: next })}
            />
          </Field>
        );

        if (def.section) {
          return (
            <AccordionSection key={key} title={def.section} defaultOpen>
              {content}
            </AccordionSection>
          );
        }

        if (
          def.type === "object" ||
          def.type === "objectList" ||
          def.type === "video"
        ) {
          return (
            <div key={key}>
              {def.type !== "video" && (
                <Label style={{ marginBottom: 10, display: "block" }}>
                  {label}
                </Label>
              )}
              <FieldControl
                def={def}
                value={value?.[key]}
                onChange={(next) => onChange({ ...value, [key]: next })}
              />
            </div>
          );
        }

        return content;
      })}
    </Grid>
  );
}

export function SchemaForm({ schema, value, onChange }) {
  if (!schema?.sections) {
    return (
      <AccordionSection title="Данные" defaultOpen>
        <FieldsGrid
          fields={schema?.fields || {}}
          value={value}
          onChange={onChange}
          root={value}
        />
      </AccordionSection>
    );
  }

  return (
    <>
      {schema.sections
        .filter((section) => matchesShowWhen(section.showWhen, value))
        .map((section, index) => (
          <AccordionSection
            key={section.title}
            title={section.title}
            defaultOpen={index === 0}
          >
            <FieldsGrid
              fields={section.fields}
              value={value}
              onChange={onChange}
              root={value}
            />
          </AccordionSection>
        ))}
    </>
  );
}

export function createEmptyItem(schema) {
  if (schema?.sections) {
    return schema.sections.reduce((acc, section) => {
      return { ...acc, ...emptyFromFields(section.fields) };
    }, {});
  }
  return emptyFromFields(schema?.fields || {});
}

export function cleanItem(schema, value) {
  if (schema?.sections) {
    const draft = { ...(value || {}) };
    const fields = {};
    for (const section of schema.sections) {
      if (!matchesShowWhen(section.showWhen, value)) {
        for (const [key, def] of Object.entries(section.fields || {})) {
          omitHiddenField(draft, key, def);
        }
        continue;
      }
      Object.assign(fields, section.fields);
    }
    return cleanByFields(draft, fields, value);
  }
  return cleanByFields(value, schema?.fields || {}, value);
}
