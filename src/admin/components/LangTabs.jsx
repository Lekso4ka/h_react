import React from "react";
import styled from "@emotion/styled";
import { useAdminLang } from "../lang";
import { theme } from "../styles/theme";

const Block = styled.div`
  margin: 0 0 28px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  border-bottom: 1px solid ${theme.colors.border};
`;

const Hint = styled.p`
  margin: 12px 0 0;
  color: ${theme.colors.gray};
  font-size: 13px;
  line-height: 1.45;
`;

const Tab = styled.button`
  height: 44px;
  padding: 0 18px;
  border: 0;
  border-bottom: 2px solid ${({ $active }) => ($active ? theme.colors.red : "transparent")};
  margin-bottom: -1px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? theme.colors.red : theme.colors.gray)};

  &:hover {
    color: ${theme.colors.red};
  }
`;

export function LangTabs() {
  const { lang, setLang } = useAdminLang();

  return (
    <Block>
      <Wrap role="tablist" aria-label="Язык контента">
        <Tab
          type="button"
          role="tab"
          $active={lang === "ru"}
          aria-selected={lang === "ru"}
          onClick={() => setLang("ru")}
        >
          RU
        </Tab>
        <Tab
          type="button"
          role="tab"
          $active={lang === "en"}
          aria-selected={lang === "en"}
          onClick={() => setLang("en")}
        >
          EN
        </Tab>
      </Wrap>
      {lang === "en" && (
        <Hint>
          Английская вкладка — только тексты на сайте. Картинки, видео, галочки
          и остальные общие настройки задаются в русской версии и подставляются
          автоматически.
        </Hint>
      )}
    </Block>
  );
}
