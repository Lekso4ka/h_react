export const LEAD_SECTIONS = [
  {
    key: "wedding",
    title: "Свадьбы",
    empty: "Заявок на свадьбу пока нет",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
    ],
  },
  {
    key: "teambuilding",
    title: "Тимбилдинг",
    empty: "Заявок на тимбилдинг пока нет",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
    ],
  },
  {
    key: "newsletter",
    title: "Рассылка",
    empty: "Заявок на рассылку пока нет",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "email", label: "Почта", href: "mailto" },
    ],
  },
  {
    key: "conference",
    title: "Конференц-залы",
    empty: "Заявок на конференц-залы пока нет",
    layout: "cards",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "venue", label: "Площадка" },
      { key: "guests", label: "Участники" },
      { key: "eventDate", label: "Даты мероприятия" },
      { key: "wishes", label: "Пожелания", wide: true },
    ],
  },
  {
    key: "vacancy",
    title: "Вакансии",
    empty: "Откликов на вакансии пока нет",
    layout: "cards",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "vacancy", label: "Вакансия" },
      { key: "city", label: "Город" },
      { key: "social", label: "Соц. сети" },
      { key: "resume", label: "Резюме", type: "file" },
      { key: "message", label: "Сообщение", wide: true },
    ],
  },
  {
    key: "stock",
    title: "Акции",
    empty: "Вопросов по акциям пока нет",
    layout: "cards",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "stock", label: "Акция", wide: true },
      { key: "question", label: "Вопрос", wide: true },
    ],
  },
];

export function getLeadSection(key) {
  return LEAD_SECTIONS.find((section) => section.key === key) || null;
}
