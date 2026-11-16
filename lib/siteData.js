const { readJsonLang } = require("./jsonStore");
const { syncLocale } = require("./localeSync");
const { listMedia, listTexts } = require("./staticContent");
const roomsRouter = require("../routes/rooms");

async function readLocalized(fileName, lang) {
    const data = await readJsonLang(fileName, lang);
    if (lang !== "en") return data;
    return syncLocale(await readJsonLang(fileName, "ru"), data);
}

async function loadSitePayload(lang) {
    const resolved = lang === "en" ? "en" : "ru";
    const [
        activities,
        affiche,
        doings,
        hotels,
        rooms,
        stocks,
        vacancies,
        venues,
        legal,
        main,
        menu,
        media,
        texts,
    ] = await Promise.all([
        readLocalized("activities.json", resolved),
        readLocalized("affiche.json", resolved),
        readLocalized("doings.json", resolved),
        readLocalized("hotels.json", resolved),
        roomsRouter.readPublic(resolved),
        readLocalized("stocks.json", resolved),
        readLocalized("vacancies.json", resolved),
        readLocalized("venues.json", resolved),
        readLocalized("legal.json", resolved),
        readLocalized("main.json", resolved),
        readLocalized("menu.json", resolved),
        listMedia().catch(() => ({})),
        listTexts().catch(() => ({})),
    ]);

    return {
        lang: resolved,
        store: {
            activities: activities || {},
            affiche: affiche || [],
            doings: doings || [],
            hotels: hotels || {},
            rooms: rooms || {},
            stocks: stocks || [],
            vacancies: vacancies || [],
            venues: venues || {},
            legal: legal || {},
            main: main || {},
            menu: menu || {},
        },
        media: media || {},
        texts: texts || {},
    };
}

module.exports = { loadSitePayload };
