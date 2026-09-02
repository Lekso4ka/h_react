const hotelCardFields = {
  name: { type: "string", label: "Название" },
  stars: { type: "number", label: "Звёзды" },
  tagline: { type: "string", label: "Подпись" },
  phone: { type: "string", label: "Телефон" },
  text: { type: "textarea", label: "Описание" },
  image: { type: "image", label: "Изображение" },
};

const activityItemFields = {
  title: { type: "string", label: "Название" },
  text: { type: "textarea", label: "Текст" },
  image: { type: "image", label: "Изображение" },
};

const activitySeasonFields = {
  title: { type: "string", label: "Заголовок" },
  title_accent: { type: "string", label: "Акцент заголовка" },
  text: { type: "textarea", label: "Текст" },
  items: {
    type: "objectList",
    label: "Карточки",
    addLabel: "Добавить карточку",
    itemLabel: "Карточка",
    itemFields: activityItemFields,
  },
};

const menuBrandItemFields = {
  title: { type: "string", label: "Название" },
  link: { type: "string", label: "Ссылка" },
  items: {
    type: "objectList",
    label: "Пункты",
    addLabel: "Добавить пункт",
    itemFields: {
      label: { type: "string", label: "Название" },
      href: { type: "string", label: "Ссылка" },
      image: { type: "image", label: "Изображение" },
    },
  },
};

const menuColumnFields = {
  title: { type: "string", label: "Название" },
  href: { type: "string", label: "Ссылка" },
  image: { type: "image", label: "Изображение" },
  digit: { type: "string", label: "Цифра" },
  seasonLabel: { type: "string", label: "Подпись сезона" },
};

const menuNavFields = {
  id: { type: "string", label: "ID" },
  label: { type: "string", label: "Название в шапке" },
  hasMenu: { type: "boolean", label: "Выпадающее меню", checkboxLabel: "Да" },
  layout: {
    type: "select",
    label: "Макет",
    default: "columns",
    options: [
      { value: "columns", label: "Колонки" },
      { value: "hotels", label: "Отели" },
      { value: "activities", label: "Активности" },
    ],
  },
  href: { type: "string", label: "Ссылка (без меню)" },
  brands: {
    type: "objectList",
    label: "Бренды",
    addLabel: "Добавить бренд",
    itemFields: menuBrandItemFields,
  },
  columns: {
    type: "objectList",
    label: "Колонки",
    addLabel: "Добавить колонку",
    itemFields: menuColumnFields,
  },
};

const mobileNavFields = {
  id: { type: "string", label: "ID" },
  label: { type: "string", label: "Название" },
  hasMenu: { type: "boolean", label: "Есть подменю", checkboxLabel: "Да" },
  href: { type: "string", label: "Ссылка (без подменю)" },
  columns: {
    type: "objectList",
    label: "Пункты",
    addLabel: "Добавить пункт",
    itemFields: {
      title: { type: "string", label: "Название" },
      href: { type: "string", label: "Ссылка" },
    },
  },
};

export const singletons = {
  main: {
    key: "main",
    title: "Главная страница",
    schema: {
      fields: {
        default_season: {
          type: "select",
          label: "Сезон по умолчанию",
          default: "winter",
          options: [
            { value: "winter", label: "Зима" },
            { value: "summer", label: "Лето" },
          ],
        },
      },
      sections: [
        {
          title: "Hero",
          key: "hero",
          fields: {
            winter_video_block: {
              type: "video",
              label: "Видео зима",
              map: {
                src: "winter_video",
                preview: "winter_video_preview",
              },
            },
            summer_video_block: {
              type: "video",
              label: "Видео лето",
              map: {
                src: "summer_video",
                preview: "summer_video_preview",
              },
            },
            winter_title: { type: "string", label: "Заголовок зима" },
            summer_title: { type: "string", label: "Заголовок лето" },
            subtitle: { type: "textarea", label: "Подзаголовок" },
            golden_tulip: {
              type: "object",
              label: "Голден Тюлип",
              fields: hotelCardFields,
            },
            tulip_inn: {
              type: "object",
              label: "Тюлип Инн",
              fields: hotelCardFields,
            },
            activity_card: {
              type: "object",
              label: "Карточка активности",
              fields: {
                video_block: {
                  type: "video",
                  label: "Видео",
                  map: {
                    src: "video",
                    preview: "video_preview",
                  },
                },
                text: { type: "textarea", label: "Текст" },
              },
            },
            season_label_winter: { type: "string", label: "Метка сезона зима" },
            season_label_summer: { type: "string", label: "Метка сезона лето" },
            season_text: { type: "textarea", label: "Текст сезона" },
          },
        },
        {
          title: "Атмосфера и пространство",
          key: "atmosphere",
          fields: {
            label: { type: "string", label: "Метка" },
            text: { type: "textarea", label: "Текст" },
            text_accent: { type: "textarea", label: "Акцентный текст" },
            tooltip: { type: "textarea", label: "Подсказка" },
            images: { type: "images", label: "Изображения" },
          },
        },
        {
          title: "Возможности отеля",
          key: "nav",
          fields: {
            label: { type: "string", label: "Метка" },
            image_1: { type: "image", label: "Изображение Голден Тюлип" },
            image_2: { type: "image", label: "Изображение Тюлип Инн" },
            golden_tulip: {
              type: "object",
              label: "Голден Тюлип",
              fields: {
                label: { type: "string", label: "Метка" },
                title: { type: "string", label: "Заголовок" },
              },
            },
            tulip_inn: {
              type: "object",
              label: "Тюлип Инн",
              fields: {
                label: { type: "string", label: "Метка" },
                title: { type: "string", label: "Заголовок" },
              },
            },
          },
        },
        {
          title: "Активности",
          key: "activities",
          fields: {
            label: { type: "string", label: "Метка" },
            winter: {
              type: "object",
              label: "Зима",
              fields: activitySeasonFields,
            },
            summer: {
              type: "object",
              label: "Лето",
              fields: activitySeasonFields,
            },
          },
        },
        {
          title: "СПА центр",
          key: "spa",
          fields: {
            label: { type: "string", label: "Метка" },
            title: { type: "string", label: "Заголовок" },
            image: { type: "image", label: "Изображение" },
          },
        },
        {
          title: "Отели",
          key: "hotels",
          fields: {
            title: { type: "textarea", label: "Заголовок" },
            text: { type: "textarea", label: "Текст" },
            images: { type: "images", label: "Изображения" },
          },
        },
        {
          title: "Рестораны",
          key: "restaurants",
          fields: {
            preview_image: { type: "image", label: "Превью карусели" },
            slides: {
              type: "objectList",
              label: "Слайды",
              addLabel: "Добавить слайд",
              itemLabel: "Слайд",
              itemFields: {
                name: { type: "string", label: "Название" },
                image: { type: "image", label: "Изображение" },
                hotel: {
                  type: "select",
                  label: "Отель",
                  options: [
                    { value: "golden-tulip", label: "Голден Тюлип" },
                    { value: "tulip-inn", label: "Тюлип Инн" },
                  ],
                },
              },
            },
          },
        },
        {
          title: "Мероприятия",
          key: "events",
          fields: {
            label: { type: "string", label: "Метка" },
            title: { type: "textarea", label: "Заголовок" },
            text_1: { type: "textarea", label: "Текст 1" },
            text_2: { type: "textarea", label: "Текст 2" },
            items: {
              type: "objectList",
              label: "События",
              addLabel: "Добавить событие",
              itemLabel: "Событие",
              itemFields: {
                id: { type: "string", label: "ID" },
                name: { type: "string", label: "Название" },
                size: { type: "number", label: "Площадь" },
                guests: { type: "number", label: "Гостей" },
                image: { type: "image", label: "Изображение" },
                link: { type: "string", label: "Ссылка" },
                list: {
                  type: "stringList",
                  label: "Преимущества",
                  addLabel: "Добавить пункт",
                },
              },
            },
          },
        },
      ],
    },
  },

  menu: {
    key: "menu",
    title: "Редактор меню",
    schema: {
      sections: [
        {
          title: "Левое меню",
          fields: {
            left: {
              type: "objectList",
              label: "Пункты",
              addLabel: "Добавить пункт",
              itemLabel: "Пункт",
              itemFields: menuNavFields,
            },
          },
        },
        {
          title: "Правое меню",
          fields: {
            right: {
              type: "objectList",
              label: "Пункты",
              addLabel: "Добавить пункт",
              itemLabel: "Пункт",
              itemFields: menuNavFields,
            },
          },
        },
        {
          title: "Мобильное меню",
          fields: {
            mobile: {
              type: "objectList",
              label: "Пункты",
              addLabel: "Добавить пункт",
              itemLabel: "Пункт",
              itemFields: mobileNavFields,
            },
          },
        },
        {
          title: "Адрес в мобильном меню",
          fields: {
            mobile_address_title: { type: "string", label: "Заголовок" },
            mobile_address: { type: "textarea", label: "Адрес" },
          },
        },
      ],
    },
  },
};

export function getSingleton(key) {
  return singletons[key] || null;
}
