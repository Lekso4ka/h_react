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
    ],
  },
];

export function getLeadSection(key) {
  return LEAD_SECTIONS.find((section) => section.key === key) || null;
}
