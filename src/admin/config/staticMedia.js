export const MEDIA_PAGES = [
  {
    id: "wedding",
    title: "Свадьба",
    slots: [
      { key: "we_1", kind: "video", label: "Видео в шапке" },
      { key: "we_2", kind: "image", label: "«Ваш день» — фото слева" },
      { key: "we_3", kind: "image", label: "«Ваш день» — фото справа" },
      { key: "we_4", kind: "image", label: "Подарок молодожёнам" },
      { key: "we_5", kind: "image", label: "Галерея площадки — 1" },
      { key: "we_6", kind: "image", label: "Галерея площадки — 2" },
      { key: "we_7_1", kind: "image", label: "Галерея площадки — 3" },
      { key: "we_8", kind: "image", label: "Галерея площадки — 4" },
      { key: "we_9", kind: "image", label: "Галерея площадки — 5" },
      { key: "we_10", kind: "image", label: "Сценарий — выездная регистрация" },
      { key: "we_11", kind: "image", label: "Сценарий — фотосессия" },
      { key: "we_12", kind: "image", label: "Сценарий — ужин" },
      { key: "we_13", kind: "image", label: "Организация — фото 1" },
      { key: "we_14", kind: "image", label: "Организация — фото 2" },
      { key: "we_15", kind: "image", label: "Организация — фото 3" },
      { key: "we_16", kind: "image", label: "Фон формы заявки" },
    ],
  },
  {
    id: "teambuilding",
    title: "Тимбилдинг",
    slots: [
      { key: "tb_1", kind: "image", label: "Фон шапки" },
      { key: "tb_2", kind: "image", label: "«Новые высоты» — фото слева" },
      { key: "tb_3", kind: "image", label: "«Новые высоты» — фото справа" },
      { key: "tb_4", kind: "image", label: "Условия для организаторов" },
      { key: "tb_8", kind: "image", label: "Галерея — 1" },
      { key: "tb_5", kind: "image", label: "Галерея — 2" },
      { key: "tb_7", kind: "image", label: "Галерея — 3" },
      { key: "tb_17", kind: "image", label: "Галерея — 4" },
      { key: "tb_18", kind: "image", label: "Галерея — 5" },
      { key: "tb_10", kind: "image", label: "Сценарий — залы" },
      { key: "tb_11", kind: "image", label: "Сценарий — гала-ужин" },
      { key: "tb_12", kind: "image", label: "Сценарий — активности" },
      { key: "tb_13", kind: "image", label: "Организация — фото 1" },
      { key: "tb_14", kind: "image", label: "Организация — фото 2" },
      { key: "tb_15", kind: "image", label: "Организация — фото 3" },
      { key: "tb_16", kind: "image", label: "Фон формы заявки" },
    ],
  },
  {
    id: "stocks",
    title: "Акции",
    slots: [{ key: "h_banner", kind: "image", label: "Баннер страницы" }],
  },
  {
    id: "vacancies",
    title: "Вакансии",
    slots: [{ key: "vac_banner", kind: "video", label: "Видео в шапке" }],
  },
  {
    id: "activities",
    title: "Активности",
    slots: [{ key: "vi_gastro", kind: "video", label: "Видео ресторана Branche" }],
  },
  {
    id: "rooms",
    title: "Номер",
    slots: [{ key: "promo", kind: "image", label: "Промо-баннер" }],
  },
];

export const MEDIA_SLOT_MAP = Object.fromEntries(
  MEDIA_PAGES.flatMap((page) => page.slots.map((slot) => [slot.key, slot]))
);
