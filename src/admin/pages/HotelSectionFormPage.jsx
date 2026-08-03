import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { fetchItem, updateItem } from "../api/resource";
import {
  SchemaForm,
  cleanItem,
  createEmptyItem,
} from "../components/form/FieldRenderer";
import {
  Actions,
  Button,
  ErrorText,
  PageSubtitle,
  PageTitle,
  SuccessText,
} from "../components/ui";
import { getHotelSection } from "../config/entities";

import { adminPath } from "../paths";
const HOTEL_NAMES = {
  "golden-tulip": "Голден Тюлип",
  "tulip-inn": "Тюлипп Инн",
};

function pickSectionValue(fullItem, schema) {
  const empty = createEmptyItem(schema);
  const result = { ...empty };

  for (const key of Object.keys(empty)) {
    if (fullItem?.[key] !== undefined) {
      result[key] = fullItem[key];
    }
  }

  return result;
}

export function HotelSectionFormPage() {
  const { id, section } = useParams();
  const sectionConfig = getHotelSection(section);

  const [fullItem, setFullItem] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const hotelName = HOTEL_NAMES[id] || id;

  const title = useMemo(() => {
    if (!sectionConfig) return "";
    return `${sectionConfig.title}: ${hotelName}`;
  }, [sectionConfig, hotelName]);

  useEffect(() => {
    if (!sectionConfig) return;

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const data = await fetchItem("hotels", id);
        if (cancelled) return;
        setFullItem(data.item);
        setSectionData(pickSectionValue(data.item, sectionConfig.schema));
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, section]);

  if (!sectionConfig) {
    return <Navigate to={adminPath(`/data/hotels/${id}/main`)} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!fullItem || !sectionData) return;

    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const cleaned = cleanItem(sectionConfig.schema, sectionData);
      const nextItem = { ...fullItem, ...cleaned };
      const updated = await updateItem("hotels", id, { item: nextItem });
      setFullItem(updated.item);
      setSectionData(pickSectionValue(updated.item, sectionConfig.schema));
      setSuccess("Изменения сохранены в hotels.json");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <PageSubtitle>Загрузка формы…</PageSubtitle>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>
        Раздел отеля · файл <code>server/data/hotels.json</code> ·{" "}
        <Link to={adminPath(`/data/hotels/${id}/main`)}>Главная</Link>
        {" · "}
        <Link to={adminPath(`/data/hotels/${id}/services`)}>Услуги</Link>
        {" · "}
        <Link to={adminPath(`/data/hotels/${id}/restaurant`)}>Ресторан</Link>
      </PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}

      {sectionData && (
        <SchemaForm
          schema={sectionConfig.schema}
          value={sectionData}
          onChange={setSectionData}
        />
      )}

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Сохранение…" : "Сохранить"}
        </Button>
      </Actions>
    </form>
  );
}
