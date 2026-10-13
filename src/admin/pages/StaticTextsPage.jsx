import React, { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { STRINGS } from "../../i18n/strings";
import { fetchStaticTexts, resetStaticText, saveStaticText } from "../api/static";
import { groupTextKeys } from "../config/staticTexts";
import { theme } from "../styles/theme";
import {
  ErrorText,
  Input,
  Label,
  PageSubtitle,
  PageTitle,
  TextArea,
} from "../components/ui";

const Search = styled(Input)`
  max-width: 420px;
  margin-bottom: 28px;
`;

const Block = styled.section`
  padding: 8px 0 28px;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 8px;
`;

const BlockTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Item = styled.article`
  display: grid;
  gap: 10px;
  padding: 16px 0 20px;
  border-top: 1px solid ${theme.colors.border};
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 16px;
`;

const KeyName = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${theme.colors.text};
`;

const Badge = styled.span`
  font-size: 12px;
  color: ${theme.colors.red};
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const LangField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const Hint = styled.p`
  margin: 0;
  color: ${theme.colors.gray};
  font-size: 13px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Btn = styled.button`
  height: 36px;
  padding: 0 12px;
  border-radius: ${theme.radii.sm};
  border: 1px solid ${({ $ghost }) => ($ghost ? theme.colors.border : theme.colors.text)};
  background: ${({ $ghost }) => ($ghost ? "transparent" : theme.colors.text)};
  color: ${({ $ghost }) => ($ghost ? theme.colors.text : theme.colors.beige)};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function allKeys() {
  return [...new Set([...Object.keys(STRINGS.ru), ...Object.keys(STRINGS.en)])];
}

function isArrayKey(key) {
  return Array.isArray(STRINGS.ru[key]) || Array.isArray(STRINGS.en[key]);
}

function toDraft(value, asArray) {
  if (asArray) return Array.isArray(value) ? value.join("\n") : "";
  return value == null ? "" : String(value);
}

function fromDraft(text, asArray) {
  if (!asArray) return text;
  return text.replace(/\n$/, "").split("\n");
}

function sameValue(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function TextRow({ id, stored, onStored }) {
  const asArray = isArrayKey(id);
  const baseRu = STRINGS.ru[id] ?? "";
  const baseEn = STRINGS.en[id] ?? baseRu;
  const currentRu = stored && stored.ru != null ? stored.ru : baseRu;
  const currentEn = stored && stored.en != null ? stored.en : baseEn;
  const [ru, setRu] = useState(() => toDraft(currentRu, asArray));
  const [en, setEn] = useState(() => toDraft(currentEn, asArray));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setRu(toDraft(currentRu, asArray));
    setEn(toDraft(currentEn, asArray));
  }, [id, stored, asArray, currentRu, currentEn]);

  const save = async () => {
    const nextRu = fromDraft(ru, asArray);
    const nextEn = fromDraft(en, asArray);
    if (!asArray && (nextRu.trim() === "" || nextEn.trim() === "")) {
      setError("Текст не может быть пустым");
      return;
    }
    if (asArray) {
      const ruLen = Array.isArray(baseRu) ? baseRu.length : null;
      const enLen = Array.isArray(baseEn) ? baseEn.length : null;
      const broken = (lines, len) => len != null && (lines.length !== len || lines.some((line) => line === ""));
      if (broken(nextRu, ruLen) || broken(nextEn, enLen)) {
        setError(`Нужно ${ruLen || enLen} непустых строк, как в исходном тексте`);
        return;
      }
    }
    setBusy(true);
    setError("");
    try {
      if (sameValue(nextRu, baseRu) && sameValue(nextEn, baseEn)) {
        if (stored) await resetStaticText(id);
        onStored(id, null);
        return;
      }
      const saved = await saveStaticText(id, { ru: nextRu, en: nextEn });
      onStored(id, { ru: saved.ru, en: saved.en });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const reset = async () => {
    setBusy(true);
    setError("");
    try {
      if (stored) await resetStaticText(id);
      onStored(id, null);
      setRu(toDraft(baseRu, asArray));
      setEn(toDraft(baseEn, asArray));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Item>
      <Head>
        <KeyName>{id}</KeyName>
        {stored && <Badge>изменено</Badge>}
      </Head>
      <Cols>
        <LangField>
          <Label>Русский</Label>
          <TextArea value={ru} onChange={(event) => setRu(event.target.value)} />
        </LangField>
        <LangField>
          <Label>English</Label>
          <TextArea value={en} onChange={(event) => setEn(event.target.value)} />
        </LangField>
      </Cols>
      {asArray && <Hint>Каждая строка — отдельное значение, число строк менять нельзя.</Hint>}
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <Btn type="button" disabled={busy} onClick={save}>
          {busy ? "…" : "Сохранить"}
        </Btn>
        {stored && (
          <Btn type="button" $ghost disabled={busy} onClick={reset}>
            Сбросить
          </Btn>
        )}
      </Row>
    </Item>
  );
}

export function StaticTextsPage() {
  const [items, setItems] = useState({});
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const keys = useMemo(() => allKeys(), []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchStaticTexts();
        if (!cancelled) setItems(data.items || {});
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const needle = query.trim().toLowerCase();
  const visible = keys.filter((key) => {
    if (!needle) return true;
    const ru = String(STRINGS.ru[key] ?? "");
    const en = String(STRINGS.en[key] ?? "");
    return key.toLowerCase().includes(needle) || ru.toLowerCase().includes(needle) || en.toLowerCase().includes(needle);
  });
  const groups = groupTextKeys(visible);

  const onStored = (key, value) => {
    setItems((prev) => {
      const next = { ...prev };
      if (value) next[key] = value;
      else delete next[key];
      return next;
    });
  };

  return (
    <div>
      <PageTitle>Тексты</PageTitle>
      <PageSubtitle>
        Подписи интерфейса по id из словаря сайта. Если вернуть исходные русский и английский тексты и сохранить, на сайте снова используется текст из кода.
      </PageSubtitle>
      {error && <ErrorText>{error}</ErrorText>}
      {loading ? (
        <PageSubtitle>Загрузка…</PageSubtitle>
      ) : (
        <>
          <Search
            value={query}
            placeholder="Поиск по id или тексту"
            onChange={(event) => setQuery(event.target.value)}
          />
          {groups.map((group) => (
            <Block key={group.id}>
              <BlockTitle>{group.title}</BlockTitle>
              {group.keys.map((key) => (
                <TextRow key={key} id={key} stored={items[key]} onStored={onStored} />
              ))}
            </Block>
          ))}
        </>
      )}
    </div>
  );
}
