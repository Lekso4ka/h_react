import React from "react";
import styled from "@emotion/styled";
import { Actions, Button, Label, TextArea } from "../ui";
import { theme } from "../../styles/theme";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
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

export function ParagraphListField({
  label,
  value = [],
  onChange,
  addLabel = "Добавить абзац",
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
        <Block key={index}>
          <Header>
            <Label>Абзац {index + 1}</Label>
            {!lockStructure && (
              <Remove
                type="button"
                onClick={() => remove(index)}
                disabled={items.length <= 1}
              >
                Удалить
              </Remove>
            )}
          </Header>
          <TextArea
            value={item}
            onChange={(e) => update(index, e.target.value)}
          />
        </Block>
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

export function cleanParagraphs(list) {
  return (Array.isArray(list) ? list : [])
    .map((item) => String(item ?? "").trim())
    .filter(Boolean);
}
