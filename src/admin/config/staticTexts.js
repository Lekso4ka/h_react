const EXACT = {
  wedding: [
    "newlyweds",
    "uniqueOffer",
    "weOrganize",
    "forYourDay",
    "requestOffer",
    "banquet",
    "guestStay",
    "transfer",
    "eventCoord",
    "decor",
    "photoVideo",
  ],
  vacancies: [
    "conditions",
    "responsibilities",
    "requirements",
    "payments",
    "registration",
    "contact",
    "feedback",
    "sendResume",
    "resumeSuccess",
    "vacancy",
    "city",
    "social",
    "attachResume",
    "resumeHint",
    "pdfOnly",
    "fileTooBig",
  ],
  events: [
    "filter",
    "read",
    "allArticles",
    "hideArticles",
    "rosaKhutor",
    "moreAboutEvent",
  ],
  footer: [
    "newsletter",
    "newsletterText",
    "subscribe",
    "subscribed",
    "hotelsAddress",
    "addressValue",
    "hotels",
    "hotelGolden",
    "hotelTulip",
    "navigation",
    "information",
    "socials",
    "vk",
    "contacts",
    "copyright",
    "policyLower",
    "footerAria",
    "brandName",
    "brandFooter",
  ],
  forms: [
    "consent",
    "consentLink",
    "consentMid",
    "policyLink",
    "consentEnd",
    "requiredFields",
    "sendRequest",
    "sent",
    "send",
    "nameStar",
    "phoneStar",
    "emailStar",
    "question",
    "askQuestion",
    "askQuestionTitle",
    "askQuestionSuccess",
    "eventRequest",
    "eventRequestSuccess",
    "eventVenue",
    "guestsCount",
    "eventDates",
    "eventWishes",
    "yourName",
    "phone",
    "name",
    "email",
    "message",
  ],
  dates: ["months", "shortMonths", "dateFrom", "dateTo"],
  legal: ["legalInfo", "hotelRules", "privacyPolicy", "toc", "tariffService", "tariffPrice"],
};

const EXACT_INDEX = new Map();
for (const [groupId, keys] of Object.entries(EXACT)) {
  for (const key of keys) EXACT_INDEX.set(key, groupId);
}

const GROUP_TITLES = [
  ["wedding", "Свадьба"],
  ["teambuilding", "Тимбилдинг"],
  ["vacancies", "Вакансии"],
  ["promo", "Промо"],
  ["events", "Афиша и события"],
  ["map", "Карта"],
  ["footer", "Подвал и бренд"],
  ["forms", "Формы"],
  ["dates", "Даты"],
  ["legal", "Правовые подписи"],
  ["ui", "Интерфейс"],
];

export function textGroupId(key) {
  if (
    key.startsWith("wedding") ||
    key.startsWith("viewpoint") ||
    key.startsWith("outdoorReg") ||
    key.startsWith("photoMountains") ||
    key.startsWith("chooseScenario") ||
    key.startsWith("startWedding")
  ) {
    return "wedding";
  }
  if (key.startsWith("tb")) return "teambuilding";
  if (key.startsWith("vacanc")) return "vacancies";
  if (key.startsWith("promo")) return "promo";
  if (key.startsWith("affiche") || key.startsWith("doings")) return "events";
  if (key.startsWith("map")) return "map";
  return EXACT_INDEX.get(key) || "ui";
}

export function groupTextKeys(keys) {
  const buckets = new Map(GROUP_TITLES.map(([id, title]) => [id, { id, title, keys: [] }]));
  for (const key of [...keys].sort()) {
    buckets.get(textGroupId(key)).keys.push(key);
  }
  return GROUP_TITLES.map(([id]) => buckets.get(id)).filter((group) => group.keys.length);
}
