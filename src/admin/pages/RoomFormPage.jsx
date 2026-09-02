import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import {
  createRoom,
  deleteRoom,
  fetchRoom,
  updateRoom,
} from "../api/rooms";
import { ImageUploader } from "../components/ImageUploader";
import { AccordionSection } from "../components/AccordionSection";
import { LangTabs } from "../components/LangTabs";
import {
  Actions,
  Button,
  ErrorText,
  Field,
  Grid,
  Input,
  Label,
  PageSubtitle,
  PageTitle,
  SuccessText,
  TextArea,
} from "../components/ui";
import { useAdminLang } from "../lang";
import { theme } from "../styles/theme";

import { adminPath } from "../paths";
const ParagraphBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ParagraphHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const RemoveLink = styled.button`
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

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
`;

const OptionGroup = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: transparent;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const emptyRoom = {
  seo: { title: "", description: "", keywords: "" },
  tour_link: "",
  rooms: 1,
  size: 25,
  guests: 2,
  beds: "",
  view: "",
  text: ["", ""],
  tooltip: "",
  options: [],
  all_options: [],
  services: [],
  images: [],
};

function normalizeOptions(list) {
  return Array.isArray(list) && list.length > 0 ? list : [""];
}

function normalizeAllOptions(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return [{ title: "", list: [""] }];
  }

  return list.map((group) => ({
    title: group?.title || "",
    list:
      Array.isArray(group?.list) && group.list.length > 0 ? group.list : [""],
  }));
}

export function RoomFormPage() {
  const { hotel, categoryKey, variantKey } = useParams();
  const isNew = !categoryKey;
  const navigate = useNavigate();
  const { lang } = useAdminLang();
  const textOnly = lang === "en";

  const [name, setName] = useState("");
  const [variant, setVariant] = useState(variantKey || "default");
  const [room, setRoom] = useState(emptyRoom);
  const [options, setOptions] = useState([""]);
  const [allOptions, setAllOptions] = useState([{ title: "", list: [""] }]);
  const [services, setServices] = useState([""]);
  const [paragraphs, setParagraphs] = useState([""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const title = useMemo(
    () => (isNew ? "Добавление номера" : "Редактирование номера"),
    [isNew]
  );

  useEffect(() => {
    if (isNew) {
      setName("");
      setVariant("default");
      setRoom(emptyRoom);
      setOptions([""]);
      setAllOptions([{ title: "", list: [""] }]);
      setServices([""]);
      setParagraphs([""]);
      setError("");
      setSuccess("");
      setLoading(false);
    }
  }, [hotel, categoryKey, variantKey, isNew]);

  useEffect(() => {
    if (isNew) return;

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const data = await fetchRoom(hotel, categoryKey, variantKey);
        if (cancelled) return;

        setName(data.name || "");
        setVariant(data.variantKey || "default");
        setRoom({ ...emptyRoom, ...data.data });
        setOptions(normalizeOptions(data.data.options));
        setAllOptions(normalizeAllOptions(data.data.all_options));
        setServices(normalizeOptions(data.data.services));
        setParagraphs(
          Array.isArray(data.data.text) && data.data.text.length > 0
            ? data.data.text
            : [""]
        );
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [hotel, categoryKey, variantKey, isNew, lang]);

  const setField = (key, value) => {
    setRoom((prev) => ({ ...prev, [key]: value }));
  };

  const updateParagraph = (index, value) => {
    setParagraphs((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const addParagraph = () => {
    setParagraphs((prev) => [...prev, ""]);
  };

  const removeParagraph = (index) => {
    setParagraphs((prev) => {
      if (prev.length <= 1) return [""];
      return prev.filter((_, i) => i !== index);
    });
  };

  const updateOption = (index, value) => {
    setOptions((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const addOption = () => {
    setOptions((prev) => [...prev, ""]);
  };

  const removeOption = (index) => {
    setOptions((prev) => {
      if (prev.length <= 1) return [""];
      return prev.filter((_, i) => i !== index);
    });
  };

  const updateService = (index, value) => {
    setServices((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const addService = () => {
    setServices((prev) => [...prev, ""]);
  };

  const removeService = (index) => {
    setServices((prev) => {
      if (prev.length <= 1) return [""];
      return prev.filter((_, i) => i !== index);
    });
  };

  const addOptionGroup = () => {
    setAllOptions((prev) => [...prev, { title: "", list: [""] }]);
  };

  const removeOptionGroup = (groupIndex) => {
    setAllOptions((prev) => {
      if (prev.length <= 1) return [{ title: "", list: [""] }];
      return prev.filter((_, i) => i !== groupIndex);
    });
  };

  const updateGroupTitle = (groupIndex, titleValue) => {
    setAllOptions((prev) =>
      prev.map((group, i) =>
        i === groupIndex ? { ...group, title: titleValue } : group
      )
    );
  };

  const updateGroupItem = (groupIndex, itemIndex, value) => {
    setAllOptions((prev) =>
      prev.map((group, i) => {
        if (i !== groupIndex) return group;
        return {
          ...group,
          list: group.list.map((item, j) => (j === itemIndex ? value : item)),
        };
      })
    );
  };

  const addGroupItem = (groupIndex) => {
    setAllOptions((prev) =>
      prev.map((group, i) =>
        i === groupIndex ? { ...group, list: [...group.list, ""] } : group
      )
    );
  };

  const removeGroupItem = (groupIndex, itemIndex) => {
    setAllOptions((prev) =>
      prev.map((group, i) => {
        if (i !== groupIndex) return group;
        const nextList =
          group.list.length <= 1
            ? [""]
            : group.list.filter((_, j) => j !== itemIndex);
        return { ...group, list: nextList };
      })
    );
  };

  const buildPayload = () => ({
    ...room,
    rooms: Number(room.rooms) || 0,
    size: Number(room.size) || 0,
    guests: Number(room.guests) || 0,
    text: paragraphs.map((item) => item.trim()).filter(Boolean),
    options: options.map((item) => item.trim()).filter(Boolean),
    services: services.map((item) => item.trim()).filter(Boolean),
    all_options: allOptions
      .map((group) => ({
        title: group.title.trim(),
        list: group.list.map((item) => item.trim()).filter(Boolean),
      }))
      .filter((group) => group.title || group.list.length > 0),
    images: Array.isArray(room.images) ? room.images : [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const payload = buildPayload();

      if (isNew) {
        const created = await createRoom(hotel, {
          name,
          variantKey: variant || "default",
          variants: variant && variant !== "default" ? [variant] : [],
          room: payload,
        });
        setSuccess("Номер добавлен и сохранён");
        navigate(
          adminPath(`/rooms/${hotel}/${created.categoryKey}/${created.variantKey}`),
          { replace: true }
        );
      } else {
        await updateRoom(hotel, categoryKey, variantKey, {
          name,
          room: payload,
          newVariantKey:
            !textOnly && variant !== variantKey ? variant : undefined,
        });
        setSuccess("Изменения сохранены");
        if (!textOnly && variant !== variantKey) {
          navigate(adminPath(`/rooms/${hotel}/${categoryKey}/${variant}`), {
            replace: true,
          });
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (isNew) return;
    if (!window.confirm("Удалить этот номер?")) return;

    try {
      await deleteRoom(hotel, categoryKey, variantKey);
      navigate(adminPath(`/rooms/${hotel}`));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <>
        <PageTitle>{title}</PageTitle>
        <LangTabs />
        <PageSubtitle>Загрузка формы…</PageSubtitle>
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle>{title}</PageTitle>
      <LangTabs />
      <PageSubtitle>
        <Link to={adminPath(`/rooms/${hotel}`)}>← К списку номеров</Link>
      </PageSubtitle>

      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}

      <AccordionSection title="SEO" defaultOpen>
        <Grid>
          <Field>
            <Label>Title</Label>
            <Input
              value={room.seo?.title || ""}
              onChange={(e) =>
                setField("seo", { ...(room.seo || {}), title: e.target.value })
              }
            />
          </Field>
          <Field>
            <Label>Description</Label>
            <TextArea
              value={room.seo?.description || ""}
              onChange={(e) =>
                setField("seo", {
                  ...(room.seo || {}),
                  description: e.target.value,
                })
              }
            />
          </Field>
          <Field>
            <Label>Keywords</Label>
            <Input
              value={room.seo?.keywords || ""}
              onChange={(e) =>
                setField("seo", {
                  ...(room.seo || {}),
                  keywords: e.target.value,
                })
              }
            />
          </Field>
        </Grid>
      </AccordionSection>

      <AccordionSection title="Основные параметры" defaultOpen>
        <Grid>
          <Field>
            <Label>Название номера</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Стандартный номер"
            />
          </Field>
          <Field>
            <Label>Вариант</Label>
            <Input
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              placeholder="default / Базовый / Вид на реку"
              required
              disabled={textOnly && !isNew}
            />
          </Field>
          {!textOnly && (
            <>
              <Field>
                <Label>Количество комнат</Label>
                <Input
                  type="number"
                  min="0"
                  value={room.rooms}
                  onChange={(e) => setField("rooms", e.target.value)}
                />
              </Field>
              <Field>
                <Label>Площадь, м²</Label>
                <Input
                  type="number"
                  min="0"
                  value={room.size}
                  onChange={(e) => setField("size", e.target.value)}
                />
              </Field>
              <Field>
                <Label>Гостей</Label>
                <Input
                  type="number"
                  min="0"
                  value={room.guests}
                  onChange={(e) => setField("guests", e.target.value)}
                />
              </Field>
            </>
          )}
          <Field>
            <Label>Вид</Label>
            <Input
              value={room.view}
              onChange={(e) => setField("view", e.target.value)}
            />
          </Field>
          <Field>
            <Label>Кровати</Label>
            <Input
              value={room.beds}
              onChange={(e) => setField("beds", e.target.value)}
            />
          </Field>
          {!textOnly && (
            <Field>
              <Label>Ссылка на тур</Label>
              <Input
                value={room.tour_link}
                onChange={(e) => setField("tour_link", e.target.value)}
              />
            </Field>
          )}
        </Grid>
      </AccordionSection>

      <AccordionSection title="Описание" defaultOpen>
        <Grid cols={1} gap={20}>
          {paragraphs.map((paragraph, index) => (
            <ParagraphBlock key={index}>
              <ParagraphHeader>
                <Label>Абзац {index + 1}</Label>
                {!textOnly && (
                  <RemoveLink
                    type="button"
                    onClick={() => removeParagraph(index)}
                    disabled={paragraphs.length <= 1}
                  >
                    Удалить
                  </RemoveLink>
                )}
              </ParagraphHeader>
              <TextArea
                value={paragraph}
                onChange={(e) => updateParagraph(index, e.target.value)}
                placeholder="Текст абзаца"
              />
            </ParagraphBlock>
          ))}
          {!textOnly && (
            <Actions>
              <Button type="button" variant="ghost" onClick={addParagraph}>
                Добавить абзац
              </Button>
            </Actions>
          )}
          <Field>
            <Label>Подсказка</Label>
            <TextArea
              value={room.tooltip}
              onChange={(e) => setField("tooltip", e.target.value)}
            />
          </Field>
        </Grid>
      </AccordionSection>

      <AccordionSection title="Краткие опции" defaultOpen>
        <Grid cols={1} gap={16}>
          {options.map((option, index) => (
            <InputRow key={index}>
              <Input
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder="Например: Высокоскоростной Wi-Fi"
              />
              {!textOnly && (
                <RemoveLink
                  type="button"
                  onClick={() => removeOption(index)}
                  disabled={options.length <= 1}
                >
                  Удалить
                </RemoveLink>
              )}
            </InputRow>
          ))}
          {!textOnly && (
            <Actions>
              <Button type="button" variant="ghost" onClick={addOption}>
                Добавить опцию
              </Button>
            </Actions>
          )}
        </Grid>
      </AccordionSection>

      <AccordionSection title="Полный список опций" defaultOpen>
        <Grid cols={1} gap={20}>
          {allOptions.map((group, groupIndex) => (
            <OptionGroup key={groupIndex}>
              <GroupHeader>
                <Field style={{ flex: 1 }}>
                  <Label>Заголовок подраздела</Label>
                  <Input
                    value={group.title}
                    onChange={(e) =>
                      updateGroupTitle(groupIndex, e.target.value)
                    }
                    placeholder="Комфорт / Технологии / Удобства"
                  />
                </Field>
                {!textOnly && (
                  <RemoveLink
                    type="button"
                    onClick={() => removeOptionGroup(groupIndex)}
                    disabled={allOptions.length <= 1}
                    style={{ marginBottom: 18 }}
                  >
                    Удалить раздел
                  </RemoveLink>
                )}
              </GroupHeader>

              {group.list.map((item, itemIndex) => (
                <InputRow key={itemIndex}>
                  <Input
                    value={item}
                    onChange={(e) =>
                      updateGroupItem(groupIndex, itemIndex, e.target.value)
                    }
                    placeholder="– ортопедический матрас"
                  />
                  {!textOnly && (
                    <RemoveLink
                      type="button"
                      onClick={() => removeGroupItem(groupIndex, itemIndex)}
                      disabled={group.list.length <= 1}
                    >
                      Удалить
                    </RemoveLink>
                  )}
                </InputRow>
              ))}

              {!textOnly && (
                <Actions>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => addGroupItem(groupIndex)}
                  >
                    Добавить пункт
                  </Button>
                </Actions>
              )}
            </OptionGroup>
          ))}

          {!textOnly && (
            <Actions>
              <Button type="button" variant="ghost" onClick={addOptionGroup}>
                Добавить опцию
              </Button>
            </Actions>
          )}
        </Grid>
      </AccordionSection>

      <AccordionSection title="Услуги" defaultOpen>
        <Grid cols={1} gap={16}>
          {services.map((service, index) => (
            <InputRow key={index}>
              <Input
                value={service}
                onChange={(e) => updateService(index, e.target.value)}
                placeholder="мини-бар"
              />
              {!textOnly && (
                <RemoveLink
                  type="button"
                  onClick={() => removeService(index)}
                  disabled={services.length <= 1}
                >
                  Удалить
                </RemoveLink>
              )}
            </InputRow>
          ))}
          {!textOnly && (
            <Actions>
              <Button type="button" variant="ghost" onClick={addService}>
                Добавить услугу
              </Button>
            </Actions>
          )}
        </Grid>
      </AccordionSection>

      {!textOnly && (
        <AccordionSection title="Изображения" defaultOpen>
          <ImageUploader
            label="Изображения номера"
            value={room.images}
            onChange={(images) => setField("images", images)}
            multiple
          />
        </AccordionSection>
      )}

      <Actions>
        <Button type="submit" disabled={saving}>
          {saving ? "Сохранение…" : "Сохранить"}
        </Button>
        <Button as={Link} to={adminPath(`/rooms/${hotel}`)} variant="ghost">
          Отмена
        </Button>
        {!isNew && (
          <Button type="button" variant="danger" onClick={handleDelete}>
            Удалить
          </Button>
        )}
      </Actions>
    </form>
  );
}
