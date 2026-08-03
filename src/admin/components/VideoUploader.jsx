import React from "react";
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { Label } from "./ui";
import { uploadImage, uploadVideo } from "../api/rooms";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Drop = styled.div`
  border: 1px dashed ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: transparent;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 180px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PickButton = styled.button`
  align-self: flex-start;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: transparent;
  color: ${theme.colors.text};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.red};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Hint = styled.span`
  font-size: 12px;
  color: ${theme.colors.gray};
`;

const PreviewBox = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  overflow: hidden;
  background: #1c1c1c;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoEl = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImgEl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const FileName = styled.span`
  font-size: 11px;
  color: ${theme.colors.gray};
  word-break: break-all;
`;

const Remove = styled.button`
  border: 0;
  background: transparent;
  color: ${theme.colors.red};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
`;

const Empty = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
`;

function resolveUrl(src) {
  if (!src) return "";
  if (src.startsWith("blob:") || src.startsWith("http") || src.startsWith("/")) {
    return src;
  }
  return `/imajes/${src}`;
}

export function VideoUploader({
  label = "Видео",
  value = { src: "", preview: "" },
  onChange,
}) {
  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const [error, setError] = useState("");
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [localVideo, setLocalVideo] = useState("");
  const [localPreview, setLocalPreview] = useState("");

  const current = {
    src: value?.src || "",
    preview: value?.preview || "",
  };

  const update = (patch) => onChange({ ...current, ...patch });

  const handleVideo = async (fileList) => {
    const file = fileList?.[0];
    if (!file) return;
    setError("");
    setLoadingVideo(true);
    const blob = URL.createObjectURL(file);
    setLocalVideo(blob);
    try {
      const result = await uploadVideo(file);
      update({ src: result.filename });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingVideo(false);
      URL.revokeObjectURL(blob);
      setLocalVideo("");
      if (videoRef.current) videoRef.current.value = "";
    }
  };

  const handlePreview = async (fileList) => {
    const file = fileList?.[0];
    if (!file) return;
    setError("");
    setLoadingPreview(true);
    const blob = URL.createObjectURL(file);
    setLocalPreview(blob);
    try {
      const result = await uploadImage(file);
      update({ preview: result.filename });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingPreview(false);
      URL.revokeObjectURL(blob);
      setLocalPreview("");
      if (previewRef.current) previewRef.current.value = "";
    }
  };

  return (
    <Wrap>
      {label && <Label>{label}</Label>}
      <Grid>
        <Drop>
          <Label>Видеофайл</Label>
          <PickButton
            type="button"
            disabled={loadingVideo}
            onClick={() => videoRef.current?.click()}
          >
            {loadingVideo ? "Загрузка…" : "Выбрать видео"}
          </PickButton>
          <Hint>MP4 и др. Имя файла — UUID.</Hint>
          <HiddenInput
            ref={videoRef}
            type="file"
            accept="video/*"
            onChange={(e) => handleVideo(e.target.files)}
          />
          <PreviewBox>
            {localVideo || current.src ? (
              <VideoEl
                src={localVideo || resolveUrl(current.src)}
                muted
                controls
                playsInline
              />
            ) : (
              <Empty>Нет видео</Empty>
            )}
          </PreviewBox>
          {current.src && <FileName>{current.src}</FileName>}
          {current.src && (
            <Remove type="button" onClick={() => update({ src: "" })}>
              Удалить видео
            </Remove>
          )}
        </Drop>

        <Drop>
          <Label>Превью (картинка)</Label>
          <PickButton
            type="button"
            disabled={loadingPreview}
            onClick={() => previewRef.current?.click()}
          >
            {loadingPreview ? "Загрузка…" : "Выбрать превью"}
          </PickButton>
          <Hint>Постер рядом с видео. Имя файла — UUID.</Hint>
          <HiddenInput
            ref={previewRef}
            type="file"
            accept="image/*"
            onChange={(e) => handlePreview(e.target.files)}
          />
          <PreviewBox style={{ background: theme.colors.beige }}>
            {localPreview || current.preview ? (
              <ImgEl
                src={localPreview || resolveUrl(current.preview)}
                alt=""
              />
            ) : (
              <Empty style={{ color: theme.colors.gray }}>Нет превью</Empty>
            )}
          </PreviewBox>
          {current.preview && <FileName>{current.preview}</FileName>}
          {current.preview && (
            <Remove type="button" onClick={() => update({ preview: "" })}>
              Удалить превью
            </Remove>
          )}
        </Drop>
      </Grid>
      {error && (
        <span style={{ color: theme.colors.red, fontSize: 13 }}>{error}</span>
      )}
    </Wrap>
  );
}
