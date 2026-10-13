import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import img from "../../assets/img";
import { uploadImage, uploadVideo } from "../api/rooms";
import { fetchStaticMedia, resetStaticMedia, saveStaticMedia } from "../api/static";
import { MEDIA_PAGES } from "../config/staticMedia";
import { theme } from "../styles/theme";
import { ErrorText, PageSubtitle, PageTitle } from "../components/ui";

const Jump = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 28px;
`;

const JumpLink = styled.a`
  height: 36px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  color: ${theme.colors.text};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    border-color: ${theme.colors.red};
    color: ${theme.colors.red};
  }
`;

const Block = styled.section`
  padding: 8px 0 36px;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 12px;
`;

const BlockTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

const Card = styled.article`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

const Preview = styled.div`
  aspect-ratio: 16 / 10;
  border-radius: ${theme.radii.sm};
  overflow: hidden;
  background: #1c1c1c;
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Film = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
`;

const Meta = styled.div`
  font-size: 12px;
  color: ${theme.colors.gray};
  word-break: break-all;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
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

const Hidden = styled.input`
  display: none;
`;

function previewOf(key, stored) {
  if (stored?.filename) return `/images/${stored.filename}`;
  return img[key] || "";
}

function MediaCard({ slot, stored, onChange }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const src = previewOf(slot.key, stored);

  const upload = async (file) => {
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const uploaded = slot.kind === "video" ? await uploadVideo(file) : await uploadImage(file);
      const saved = await saveStaticMedia(slot.key, {
        filename: uploaded.filename,
        kind: slot.kind,
      });
      onChange(slot.key, { filename: saved.filename, kind: saved.kind });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const reset = async () => {
    setBusy(true);
    setError("");
    try {
      await resetStaticMedia(slot.key);
      onChange(slot.key, null);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card>
      <Preview>
        {slot.kind === "video" ? (
          <Film src={src} muted playsInline />
        ) : (
          <Thumb src={src} alt="" />
        )}
      </Preview>
      <Name>{slot.label}</Name>
      <Meta>
        {slot.key}
        {stored ? " · загружено" : " · файл сайта"}
      </Meta>
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <Btn type="button" disabled={busy} onClick={() => inputRef.current?.click()}>
          {busy ? "…" : stored ? "Заменить" : "Загрузить"}
        </Btn>
        {stored && (
          <Btn type="button" $ghost disabled={busy} onClick={reset}>
            Сбросить
          </Btn>
        )}
      </Row>
      <Hidden
        ref={inputRef}
        type="file"
        accept={slot.kind === "video" ? "video/*" : "image/*"}
        onChange={(event) => upload(event.target.files?.[0])}
      />
    </Card>
  );
}

export function StaticMediaPage() {
  const [items, setItems] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchStaticMedia();
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

  const onChange = (key, value) => {
    setItems((prev) => {
      const next = { ...prev };
      if (value) next[key] = value;
      else delete next[key];
      return next;
    });
  };

  return (
    <div>
      <PageTitle>Фото и видео</PageTitle>
      <PageSubtitle>
        Материалы, которые не редактируются в остальных разделах. Новый файл сохраняется в images и подставляется на то же место после обновления страницы сайта.
      </PageSubtitle>
      {error && <ErrorText>{error}</ErrorText>}
      {loading ? (
        <PageSubtitle>Загрузка…</PageSubtitle>
      ) : (
        <>
          <Jump>
            {MEDIA_PAGES.map((page) => (
              <JumpLink key={page.id} href={`#static-${page.id}`}>
                {page.title}
              </JumpLink>
            ))}
          </Jump>
          {MEDIA_PAGES.map((page) => (
            <Block key={page.id} id={`static-${page.id}`}>
              <BlockTitle>{page.title}</BlockTitle>
              <Grid>
                {page.slots.map((slot) => (
                  <MediaCard
                    key={slot.key}
                    slot={slot}
                    stored={items[slot.key]}
                    onChange={onChange}
                  />
                ))}
              </Grid>
            </Block>
          ))}
        </>
      )}
    </div>
  );
}
