import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { fetchStaticLinks, resetStaticLink, saveStaticLink } from "../api/static";
import { STATIC_LINK_GROUPS } from "../../data/linkCatalog";
import { theme } from "../styles/theme";
import { ErrorText, Input, Label, PageSubtitle, PageTitle } from "../components/ui";

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

const Title = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

const Badge = styled.span`
  font-size: 12px;
  color: ${theme.colors.red};
`;

const Hint = styled.p`
  margin: 0;
  color: ${theme.colors.gray};
  font-size: 13px;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
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

function hasLabel(slot) {
  return Object.prototype.hasOwnProperty.call(slot, "label");
}

function LinkRow({ slot, stored, onStored }) {
  const currentHref = stored ? stored.href : slot.href;
  const currentLabel = stored && stored.label ? stored.label : (slot.label || "");
  const [href, setHref] = useState(currentHref);
  const [label, setLabel] = useState(currentLabel);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setHref(currentHref);
    setLabel(currentLabel);
  }, [currentHref, currentLabel]);

  const save = async () => {
    const nextHref = href.trim();
    const nextLabel = hasLabel(slot) ? (label.trim() || slot.label || "") : "";
    setBusy(true);
    setError("");
    try {
      const sameHref = nextHref === (slot.href || "");
      const sameLabel = !hasLabel(slot) || nextLabel === (slot.label || "");
      if (sameHref && sameLabel) {
        if (stored) await resetStaticLink(slot.key);
        onStored(slot.key, null);
        return;
      }
      const saved = await saveStaticLink(slot.key, { href: nextHref, label: nextLabel });
      onStored(slot.key, { href: saved.href, label: saved.label });
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
      if (stored) await resetStaticLink(slot.key);
      onStored(slot.key, null);
      setHref(slot.href || "");
      setLabel(slot.label || "");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Item>
      <Head>
        <Title>{slot.title}</Title>
        {stored && <Badge>изменено</Badge>}
      </Head>
      {slot.note && <Hint>{slot.note}</Hint>}
      <Field>
        <Label>Адрес</Label>
        <Input
          value={href}
          placeholder={slot.href || "Пусто — без перехода"}
          onChange={(event) => setHref(event.target.value)}
        />
      </Field>
      {hasLabel(slot) && (
        <Field>
          <Label>Подпись</Label>
          <Input value={label} onChange={(event) => setLabel(event.target.value)} />
        </Field>
      )}
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

export function StaticLinksPage() {
  const [items, setItems] = useState({});
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchStaticLinks();
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
  const groups = STATIC_LINK_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((slot) => {
      if (!needle) return true;
      const stored = items[slot.key];
      const haystack = [
        slot.title,
        slot.key,
        slot.note,
        slot.href,
        slot.label,
        stored?.href,
        stored?.label,
      ].join(" ").toLowerCase();
      return haystack.includes(needle);
    }),
  })).filter((group) => group.items.length);

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
      <PageTitle>Ссылки</PageTitle>
      <PageSubtitle>
        Адреса, которые раньше были зашиты в подвале, на карте, в окне быстрой связи и в отдельных кнопках. Пустое поле оставляет пункт без перехода. Если вернуть исходный адрес и сохранить, на сайте снова используется ссылка из кода. Подписи пунктов меню подвала правятся в разделе «Тексты». Меню шапки, телефоны карточек на главной, туры номеров и залов, меню ресторанов и контакты вакансий редактируются в своих разделах.
      </PageSubtitle>
      {error && <ErrorText>{error}</ErrorText>}
      {loading ? (
        <PageSubtitle>Загрузка…</PageSubtitle>
      ) : (
        <>
          <Search
            value={query}
            placeholder="Поиск по названию или адресу"
            onChange={(event) => setQuery(event.target.value)}
          />
          {groups.map((group) => (
            <Block key={group.id}>
              <BlockTitle>{group.title}</BlockTitle>
              {group.items.map((slot) => (
                <LinkRow key={slot.key} slot={slot} stored={items[slot.key]} onStored={onStored} />
              ))}
            </Block>
          ))}
        </>
      )}
    </div>
  );
}
