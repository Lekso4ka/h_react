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
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "venue", label: "Площадка" },
      { key: "guests", label: "Участники" },
      { key: "eventDate", label: "Даты мероприятия" },
      { key: "wishes", label: "Пожелания" },
    ],
  },
  {
    key: "vacancy",
    title: "Вакансии",
    empty: "Откликов на вакансии пока нет",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "vacancy", label: "Вакансия" },
      { key: "city", label: "Город" },
      { key: "social", label: "Соц. сети" },
      { key: "message", label: "Сообщение" },
      { key: "resume", label: "Резюме", type: "file" },
    ],
  },
  {
    key: "stock",
    title: "Акции",
    empty: "Вопросов по акциям пока нет",
    columns: [
      { key: "date", label: "Дата", mono: true },
      { key: "time", label: "Время", mono: true },
      { key: "name", label: "Имя" },
      { key: "phone", label: "Телефон", href: "tel" },
      { key: "email", label: "Почта", href: "mailto" },
      { key: "stock", label: "Акция" },
      { key: "question", label: "Вопрос" },
    ],
  },
];

export function getLeadSection(key) {
  return LEAD_SECTIONS.find((section) => section.key === key) || null;
}
