import { seoSection } from "./seo";

const linkItem = {
  title: { type: "string", label: "Название" },
  link: { type: "string", label: "Ссылка" },
};

const imgPosItem = {
  img: { type: "image", label: "Изображение" },
  pos: { type: "string", label: "Позиция", placeholder: "center / cover" },
};

const activityListItem = {
  name: { type: "string", label: "Название группы" },
  image: { type: "image", label: "Изображение группы" },
  items: {
    type: "objectList",
    label: "Активности",
    addLabel: "Добавить активность",
    itemLabel: "Активность",
    itemFields: {
      title: { type: "string", label: "Название" },
      tooltip: { type: "string", label: "Подсказка" },
      image: { type: "image", label: "Изображение" },
      text: { type: "textarea", label: "Текст" },
    },
  },
};

const hotelServiceItem = {
  name: { type: "string", label: "Название" },
  img: { type: "image", label: "Изображение" },
  text: {
    type: "textarea",
    label: "Текст",
    authored: true,
  },
  links: {
    type: "objectList",
    label: "Ссылки",
    addLabel: "Добавить ссылку",
    itemFields: linkItem,
  },
};

const doingsContentFields = {
  title: {
    type: "object",
    label: "Заголовок статьи",
    fields: {
      tooltip: { type: "string", label: "Подсказка" },
      caption: {
        type: "textarea",
        label: "Заголовок",
        authored: true,
      },
    },
  },
  section_1: {
    type: "object",
    label: "Секция 1",
    fields: {
      img: { type: "image", label: "Изображение" },
      caption_1: { type: "string", label: "Заголовок 1" },
      text_1: { type: "textarea", label: "Текст 1" },
      caption_2: { type: "string", label: "Заголовок 2" },
      text_2: { type: "paragraphs", label: "Текст 2" },
    },
  },
  carousel: {
    type: "objectList",
    label: "Карусель",
    addLabel: "Добавить слайд",
    itemFields: imgPosItem,
  },
  section_2: {
    type: "object",
    label: "Секция 2",
    fields: {
      img_1: { type: "image", label: "Изображение 1" },
      img_2: { type: "image", label: "Изображение 2" },
      caption: { type: "string", label: "Заголовок" },
      text: { type: "paragraphs", label: "Текст" },
    },
  },
  section_3: {
    type: "object",
    label: "Секция 3",
    fields: {
      caption: { type: "string", label: "Заголовок" },
      text: { type: "textarea", label: "Текст" },
      list: {
        type: "objectList",
        label: "Список",
        addLabel: "Добавить пункт",
        itemFields: {
          img: { type: "image", label: "Изображение" },
          text: {
            type: "textarea",
            label: "Текст",
            authored: true,
          },
        },
      },
      tooltip: {
        type: "textarea",
        label: "Подсказка",
        authored: true,
      },
      link: { type: "string", label: "Ссылка" },
    },
  },
  section_4: {
    type: "object",
    label: "Секция 4",
    fields: {
      img_1: { type: "image", label: "Изображение 1" },
      img_2: { type: "image", label: "Изображение 2" },
      caption: { type: "string", label: "Заголовок" },
      text: { type: "paragraphs", label: "Текст" },
    },
  },
  section_5: {
    type: "object",
    label: "Секция 5",
    fields: {
      caption: { type: "string", label: "Заголовок" },
      text: { type: "textarea", label: "Текст" },
      img: { type: "image", label: "Изображение" },
      img_text: { type: "textarea", label: "Текст у изображения" },
    },
  },
  section_6: {
    type: "object",
    label: "Секция 6",
    fields: {
      text: { type: "textarea", label: "Текст" },
      img: { type: "image", label: "Изображение" },
    },
  },
  section_7: {
    type: "object",
    label: "Секция 7",
    fields: {
      caption: { type: "string", label: "Заголовок" },
      text: { type: "textarea", label: "Текст" },
      link: { type: "string", label: "Ссылка" },
      list: { type: "stringList", label: "Список", addLabel: "Добавить пункт" },
      tags: {
        type: "objectList",
        label: "Теги",
        addLabel: "Добавить тег",
        itemFields: linkItem,
      },
    },
  },
};

const hotelMainSchema = {
  sections: [
    seoSection(),
    {
      title: "Основные параметры",
      fields: {
        banner: { type: "image", label: "Banner" },
        name: { type: "string", label: "Название" },
        name_tooltip: { type: "string", label: "Подсказка названия" },
        stars: { type: "number", label: "Звёзды" },
        address: { type: "string", label: "Адрес" },
        text_1: { type: "textarea", label: "Текст 1" },
        text_2: { type: "textarea", label: "Текст 2" },
        room_link: { type: "string", label: "Ссылка на номера" },
      },
    },
    {
      title: "Секция 1",
      fields: {
        section_1: {
          type: "object",
          label: "Section 1",
          fields: {
            caption: { type: "textarea", label: "Заголовок" },
            video_block: {
              type: "video",
              label: "Видео",
              map: {
                src: "video_link",
                preview: "video_preview",
              },
            },
          },
        },
      },
    },
    {
      title: "Секция 2",
      fields: {
        section_2: {
          type: "object",
          label: "Section 2",
          fields: {
            tooltip: { type: "string", label: "Подсказка" },
            caption: { type: "textarea", label: "Заголовок" },
            image_1: { type: "image", label: "Изображение 1" },
            image_2: {
              type: "object",
              label: "Изображение 2",
              fields: {
                pic: { type: "image", label: "Файл" },
                pos: { type: "string", label: "Позиция" },
              },
            },
            text: { type: "textarea", label: "Текст" },
          },
        },
      },
    },
    {
      title: "Секция 3 — номера",
      fields: {
        section_3: {
          type: "object",
          label: "Section 3",
          fields: {
            caption: { type: "string", label: "Заголовок" },
            size: { type: "number", label: "Площадь" },
            guests: { type: "number", label: "Гостей" },
            rooms: { type: "number", label: "Комнат" },
            image: { type: "image", label: "Изображение" },
            bg: { type: "image", label: "Фон" },
            variants: {
              type: "objectList",
              label: "Варианты номеров",
              addLabel: "Добавить вариант",
              itemFields: {
                id: { type: "string", label: "ID" },
                name: { type: "string", label: "Название" },
                variants: {
                  type: "stringList",
                  label: "Подварианты",
                  addLabel: "Добавить",
                },
              },
            },
          },
        },
      },
    },
    {
      title: "Секция 4",
      fields: {
        section_4: {
          type: "object",
          label: "Section 4",
          fields: {
            caption: { type: "textarea", label: "Заголовок" },
            text: { type: "textarea", label: "Текст" },
            events_link: { type: "string", label: "Ссылка на события" },
            images: { type: "images", label: "Изображения" },
            image_positions: {
              type: "object",
              label: "Позиции изображений",
              fields: {
                image_1: { type: "string", label: "image_1" },
                image_2: { type: "string", label: "image_2" },
                image_3: { type: "string", label: "image_3" },
                image_4: { type: "string", label: "image_4" },
                image_5: { type: "string", label: "image_5" },
              },
            },
          },
        },
      },
    },
  ],
};

const hotelRestaurantSchema = {
  sections: [
    seoSection("seo_restaurant"),
    {
      title: "Ресторан",
      fields: {
        section_5: {
          type: "object",
          label: "Section 5",
          fields: {
            caption_1: { type: "string", label: "Заголовок 1" },
            caption_tooltip: { type: "string", label: "Подсказка" },
            guests: { type: "number", label: "Гостей" },
            guests_tooltip: { type: "string", label: "Подсказка гостей" },
            text_1: { type: "textarea", label: "Текст 1" },
            text_2: { type: "textarea", label: "Текст 2" },
            caption_2: { type: "string", label: "Заголовок 2" },
            menu_link: { type: "string", label: "Ссылка на меню" },
            image: { type: "image", label: "Изображение" },
            list: {
              type: "objectList",
              label: "Расписание",
              addLabel: "Добавить",
              itemFields: {
                text: { type: "string", label: "Текст" },
                time: { type: "string", label: "Время" },
              },
            },
            carousel: {
              type: "objectList",
              label: "Карусель",
              addLabel: "Добавить слайд",
              itemFields: imgPosItem,
            },
          },
        },
      },
    },
  ],
};

const hotelServicesSchema = {
  sections: [
    seoSection("seo_services"),
    {
      title: "Услуги отеля",
      fields: {
        section_6: {
          type: "object",
          label: "Section 6",
          fields: {
            caption: { type: "string", label: "Заголовок" },
            text_1: { type: "textarea", label: "Текст 1" },
            text_2: { type: "textarea", label: "Текст 2" },
            image: { type: "image", label: "Изображение" },
            include: {
              type: "objectList",
              label: "Включено",
              addLabel: "Добавить услугу",
              itemFields: hotelServiceItem,
            },
            additional: {
              type: "objectList",
              label: "Дополнительно",
              addLabel: "Добавить услугу",
              itemFields: hotelServiceItem,
            },
          },
        },
      },
    },
  ],
};

/** Разделы отеля: правят один hotels.json, каждый — свой UI */
export const hotelSections = {
  main: {
    key: "main",
    title: "Главная страница",
    schema: hotelMainSchema,
  },
  services: {
    key: "services",
    title: "Услуги отеля",
    schema: hotelServicesSchema,
  },
  restaurant: {
    key: "restaurant",
    title: "Ресторан",
    schema: hotelRestaurantSchema,
  },
};

export function getHotelSection(sectionKey) {
  return hotelSections[sectionKey] || null;
}

export const entities = {
  activities: {
    key: "activities",
    title: "Активности",
    kind: "object",
    keyLabel: "Сезон (ключ)",
    allowKeyEdit: true,
    schema: {
      sections: [
        seoSection(),
        {
          title: "Основное",
          fields: {
            name: { type: "string", label: "Название" },
            image: { type: "image", label: "Изображение" },
            text_top: {
              type: "textarea",
              label: "Текст сверху",
              authored: true,
            },
            text_bottom: {
              type: "textarea",
              label: "Текст снизу",
              authored: true,
            },
          },
        },
        {
          title: "Список активностей",
          fields: {
            list: {
              type: "objectList",
              label: "Группы",
              addLabel: "Добавить группу",
              itemLabel: "Группа",
              itemFields: activityListItem,
            },
          },
        },
        {
          title: "Нижний блок",
          fields: {
            subTitle: { type: "string", label: "Подзаголовок" },
            subText: { type: "textarea", label: "Текст" },
            subLink: { type: "string", label: "Ссылка" },
            subImage: { type: "image", label: "Изображение" },
          },
        },
      ],
    },
  },

  affiche: {
    key: "affiche",
    title: "Афиша Роза Хутор",
    kind: "array",
    schema: {
      sections: [
        seoSection(),
        {
          title: "Событие",
          fields: {
            variant: {
              type: "select",
              label: "Тип / категория",
              required: true,
              placeholder: "Выберите тип",
              options: [
                "Концерты",
                "Спорт",
                "Гастрономия",
                "Фестивали",
                "Экскурсии",
                "Семья и дети",
                "Вечерние события",
                "Развлечения на курорте",
              ],
            },
            title: { type: "string", label: "Название" },
            date: { type: "string", label: "Дата", placeholder: "YYYY-MM-DD" },
            time: { type: "string", label: "Время" },
            link: { type: "string", label: "Ссылка" },
            src: { type: "image", label: "Изображение" },
          },
        },
      ],
    },
  },

  doings: {
    key: "doings",
    title: "События курорта",
    kind: "array",
    // ID в отдельном блоке формы — только для статей
    recordIdWhen: { type: "article" },
    schema: {
      sections: [
        seoSection(),
        {
          title: "Карточка",
          fields: {
            type: {
              type: "select",
              label: "Тип",
              required: true,
              default: "article",
              options: [
                { value: "article", label: "article — статья" },
                { value: "text", label: "text — текст" },
                { value: "video", label: "video — видео" },
              ],
            },
            tooltip: {
              type: "string",
              label: "Подсказка",
              showWhen: { type: "article" },
            },
            title: {
              type: "textarea",
              label: "Заголовок",
              authored: true,
              showWhen: { type: "article" },
            },
            text: {
              type: "textarea",
              label: "Текст",
              authored: true,
              showWhen: { type: ["article", "text"] },
            },
            src: {
              type: "image",
              label: "Обложка",
              showWhen: { type: ["article", "video"] },
            },
            video_block: {
              type: "video",
              label: "Видео",
              showWhen: { type: "video" },
              map: {
                src: "video_src",
                preview: "video_preview",
              },
            },
            order: { type: "number", label: "Порядок" },
          },
        },
        {
          title: "Контент статьи",
          showWhen: { type: "article" },
          fields: {
            content: {
              type: "object",
              label: "Content",
              fields: doingsContentFields,
            },
          },
        },
      ],
    },
  },

  hotels: {
    key: "hotels",
    title: "Отели",
    kind: "object",
    keyLabel: "Ключ отеля",
    allowKeyEdit: true,
    // Полная схема только для создания нового отеля
    schema: {
      sections: [
        ...hotelMainSchema.sections,
        ...hotelRestaurantSchema.sections,
        ...hotelServicesSchema.sections,
      ],
    },
  },

  stocks: {
    key: "stocks",
    title: "Акции",
    kind: "array",
    schema: {
      sections: [
        seoSection(),
        {
          title: "Основное",
          fields: {
            name: {
              type: "textarea",
              label: "Название",
              authored: true,
            },
            tooltip: { type: "string", label: "Подсказка" },
            tooltip_main: { type: "string", label: "Основная подсказка" },
            type: { type: "string", label: "Тип" },
            text: { type: "textarea", label: "Текст" },
            img: { type: "image", label: "Изображение" },
            link: { type: "string", label: "Ссылка" },
            hotels: {
              type: "checkboxList",
              label: "Отели",
              options: [
                { value: "golden-tulip", label: "Голден Тюлип" },
                { value: "tulip-inn", label: "Тюлипп Инн" },
              ],
            },
            advantages: {
              type: "stringList",
              label: "Преимущества",
              addLabel: "Добавить",
            },
            conditions: {
              type: "stringList",
              label: "Условия",
              addLabel: "Добавить условие",
            },
          },
        },
        {
          title: "Периоды",
          fields: {
            reservation_period: {
              type: "object",
              label: "Период бронирования",
              fields: {
                start: {
                  type: "string",
                  label: "Начало",
                  placeholder: "YYYY-MM-DD",
                },
                end: {
                  type: "string",
                  label: "Конец",
                  placeholder: "YYYY-MM-DD",
                },
              },
            },
            dates_of_stay: {
              type: "object",
              label: "Даты проживания",
              fields: {
                start: {
                  type: "string",
                  label: "Начало",
                  placeholder: "YYYY-MM-DD",
                },
                end: {
                  type: "string",
                  label: "Конец",
                  placeholder: "YYYY-MM-DD",
                },
              },
            },
          },
        },
      ],
    },
  },

  vacancies: {
    key: "vacancies",
    title: "Вакансии",
    kind: "array",
    schema: {
      sections: [
        seoSection(),
        {
          title: "Вакансия",
          fields: {
            name: { type: "string", label: "Название" },
            conditions: {
              type: "stringList",
              label: "Условия",
              addLabel: "Добавить условие",
            },
            images: { type: "images", label: "Изображения" },
            responsibilities: {
              type: "stringList",
              label: "Обязанности",
              addLabel: "Добавить",
            },
            requirements: {
              type: "stringList",
              label: "Требования",
              addLabel: "Добавить",
            },
            links: {
              type: "objectList",
              label: "Ссылки",
              addLabel: "Добавить ссылку",
              itemFields: linkItem,
            },
          },
        },
      ],
    },
  },

  legal: {
    key: "legal",
    title: "Правовые страницы",
    kind: "object",
    keyLabel: "Страница (info / rules / policy)",
    allowKeyEdit: false,
    schema: {
      sections: [
        seoSection(),
        {
          title: "Страница",
          fields: {
            pageTitle: { type: "string", label: "Заголовок H1" },
            label: { type: "string", label: "Красная метка" },
            docTitle: { type: "string", label: "Заголовок документа H2" },
            sections: {
              type: "objectList",
              label: "Разделы",
              addLabel: "Добавить раздел",
              itemLabel: "Раздел",
              itemFields: {
                id: { type: "string", label: "ID якоря" },
                title: { type: "string", label: "Заголовок раздела" },
                layout: {
                  type: "select",
                  label: "Тип блока",
                  options: [
                    { value: "text", label: "Текст / списки" },
                    { value: "services", label: "Услуги (2 колонки)" },
                    { value: "tariffs", label: "Тарифы" },
                  ],
                },
                text: { type: "paragraphs", label: "Абзацы" },
                listIntro: { type: "textarea", label: "Вступление к списку" },
                listItems: {
                  type: "stringList",
                  label: "Пункты списка",
                  addLabel: "Добавить пункт",
                },
                textAfter: {
                  type: "paragraphs",
                  label: "Абзацы после списка",
                },
                links: {
                  type: "objectList",
                  label: "Ссылки на документы",
                  addLabel: "Добавить ссылку",
                  itemFields: {
                    title: { type: "string", label: "Название" },
                    url: { type: "string", label: "URL" },
                  },
                },
                freeTitle: { type: "string", label: "Заголовок бесплатных услуг" },
                freeItems: {
                  type: "stringList",
                  label: "Бесплатные услуги",
                  addLabel: "Добавить",
                },
                paidTitle: { type: "string", label: "Заголовок платных услуг" },
                paidItems: {
                  type: "stringList",
                  label: "Платные услуги",
                  addLabel: "Добавить",
                },
                tariffRows: {
                  type: "objectList",
                  label: "Тарифы",
                  addLabel: "Добавить тариф",
                  itemFields: {
                    name: { type: "string", label: "Услуга" },
                    price: { type: "string", label: "Стоимость" },
                  },
                },
                downloadLabel: { type: "string", label: "Текст кнопки скачивания" },
              },
            },
          },
        },
      ],
    },
  },

  venues: {
    key: "venues",
    title: "Конференц-залы",
    kind: "object",
    keyLabel: "Ключ площадки",
    allowKeyEdit: true,
    schema: {
      sections: [
        seoSection(),
        {
          title: "Основное",
          fields: {
            name: { type: "string", label: "Название" },
            img: { type: "image", label: "Превью" },
            size: { type: "number", label: "Площадь" },
            guests: { type: "number", label: "Гостей" },
            plan: {
              type: "textarea",
              label: "План (SVG)",
              authored: true,
            },
            plan_rotate: { type: "number", label: "Поворот плана" },
            show_formats: { type: "boolean", label: "Показывать форматы" },
            tour_link: { type: "string", label: "Ссылка на тур" },
            options: {
              type: "stringList",
              label: "Опции",
              addLabel: "Добавить опцию",
              authored: true,
            },
            formats: {
              type: "stringList",
              label: "Форматы",
              addLabel: "Добавить формат",
            },
            text: { type: "paragraphs", label: "Описание" },
            images: { type: "images", label: "Изображения" },
            variants: {
              type: "objectList",
              label: "Варианты рассадки",
              addLabel: "Добавить вариант",
              itemFields: {
                name: { type: "string", label: "Название" },
                guests: { type: "number", label: "Гостей" },
                pic: { type: "image", label: "Изображение" },
              },
            },
          },
        },
      ],
    },
  },
};

export function getEntity(key) {
  return entities[key] || null;
}
