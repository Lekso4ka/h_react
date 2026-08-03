import React from "react";
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { Label } from "./ui";
import { uploadImage, uploadImages } from "../api/rooms";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Drop = styled.div`
  position: relative;
  min-height: 58px;
  border: 1px dashed ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: transparent;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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
`;

const Hint = styled.span`
  font-size: 13px;
  color: ${theme.colors.gray};
`;

const Previews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Card = styled.div`
  width: 120px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  overflow: hidden;
  background: ${theme.colors.beige};
`;

const Thumb = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;
  background: #ddd;
`;

const CardBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  cursor: pointer;
  text-align: left;
  padding: 0;
`;

function resolvePreview(src) {
  if (!src) return "";
  if (src.startsWith("blob:") || src.startsWith("http") || src.startsWith("/")) {
    return src;
  }
  return `/images/${src}`;
}

export function ImageUploader({
  label = "Изображение",
  value = [],
  onChange,
  multiple = true,
}) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [localPreviews, setLocalPreviews] = useState({});

  const images = Array.isArray(value) ? value : value ? [value] : [];

  const handleFiles = async (fileList) => {
    const files = Array.from(fileList || []);
    if (!files.length) return;

    setError("");
    setLoading(true);

    const tempMap = {};
    for (const file of files) {
      tempMap[file.name] = URL.createObjectURL(file);
    }
    setLocalPreviews((prev) => ({ ...prev, ...tempMap }));

    try {
      if (multiple) {
        const result = await uploadImages(files);
        const next = [...images, ...result.files.map((file) => file.filename)];
        onChange(next);
      } else {
        const result = await uploadImage(files[0]);
        onChange([result.filename]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      Object.values(tempMap).forEach((url) => URL.revokeObjectURL(url));
      setLocalPreviews({});
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const removeAt = (index) => {
    const next = images.filter((_, i) => i !== index);
    onChange(multiple ? next : next);
  };

  return (
    <Wrap>
      <Label>{label}</Label>
      <Drop>
        <PickButton
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={loading}
        >
          {loading ? "Загрузка..." : "Выбрать файл"}
        </PickButton>
        <Hint>
          {multiple
            ? "Можно выбрать несколько изображений. Имена файлов генерируются UUID."
            : "Выберите одно изображение. Имя файла генерируется UUID."}
        </Hint>
        <HiddenInput
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />

        {(images.length > 0 || Object.keys(localPreviews).length > 0) && (
          <Previews>
            {images.map((src, index) => (
              <Card key={`${src}-${index}`}>
                <Thumb src={resolvePreview(src)} alt="" />
                <CardBody>
                  <FileName>{src}</FileName>
                  <Remove type="button" onClick={() => removeAt(index)}>
                    Удалить
                  </Remove>
                </CardBody>
              </Card>
            ))}
            {Object.entries(localPreviews).map(([name, url]) => (
              <Card key={name}>
                <Thumb src={url} alt="" />
                <CardBody>
                  <FileName>Предпросмотр…</FileName>
                </CardBody>
              </Card>
            ))}
          </Previews>
        )}
      </Drop>
      {error && (
        <span style={{ color: theme.colors.red, fontSize: 13 }}>{error}</span>
      )}
    </Wrap>
  );
}
