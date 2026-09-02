import React from "react";
import styled from "@emotion/styled";
import { Actions, Button, Input, Label } from "../ui";
import { theme } from "../../styles/theme";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
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
  white-space: nowrap;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export function StringListField({
  label,
  value = [],
  onChange,
  placeholder = "",
  addLabel = "Добавить",
  lockStructure = false,
}) {
  const items = value.length > 0 ? value : [""];

  const update = (index, next) => {
    const copy = [...items];
    copy[index] = next;
    onChange(copy);
  };

  const add = () => onChange([...items, ""]);

  const remove = (index) => {
    if (items.length <= 1) {
      onChange([""]);
      return;
    }
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <Wrap>
      {label && <Label>{label}</Label>}
      {items.map((item, index) => (
        <Row key={index}>
          <Input
            value={item}
            onChange={(e) => update(index, e.target.value)}
            placeholder={placeholder}
          />
          {!lockStructure && (
            <Remove
              type="button"
              onClick={() => remove(index)}
              disabled={items.length <= 1}
            >
              Удалить
            </Remove>
          )}
        </Row>
      ))}
      {!lockStructure && (
        <Actions>
          <Button type="button" variant="ghost" onClick={add}>
            {addLabel}
          </Button>
        </Actions>
      )}
    </Wrap>
  );
}

export function cleanStringList(list) {
  return (Array.isArray(list) ? list : [])
    .map((item) => String(item ?? "").trim())
    .filter(Boolean);
}
