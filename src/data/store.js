import { t } from "../i18n/strings";

const cache = {
    activities: {},
    affiche: [],
    doings: [],
    hotels: {},
    rooms: {},
    stocks: [],
    vacancies: [],
    venues: {},
    legal: {},
    main: {},
    menu: {},
};

let ready = false;
let loadPromise = null;

async function fetchJson(url, lang) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${t(lang, "loadFailed")} ${url}`);
    }
    return response.json();
}

export function isDataReady() {
    return ready;
}

export function getStore() {
    return cache;
}

export function loadSiteData({ force = false, lang } = {}) {
    if (loadPromise && !force) return loadPromise;

    const q = lang === "en" ? "?lang=en" : "";

    loadPromise = (async () => {
        const [
            activitiesRes,
            afficheRes,
            doingsRes,
            hotelsRes,
            roomsRes,
            stocksRes,
            vacanciesRes,
            venuesRes,
            legalRes,
            mainRes,
            menuRes,
        ] = await Promise.all([
            fetchJson(`/api/activities${q}`, lang),
            fetchJson(`/api/affiche${q}`, lang),
            fetchJson(`/api/doings${q}`, lang),
            fetchJson(`/api/hotels${q}`, lang),
            fetchJson(`/api/rooms${q}`, lang),
            fetchJson(`/api/stocks${q}`, lang),
            fetchJson(`/api/vacancies${q}`, lang),
            fetchJson(`/api/venues${q}`, lang),
            fetchJson(`/api/legal${q}`, lang),
            fetchJson(`/api/main${q}`, lang),
            fetchJson(`/api/menu${q}`, lang),
        ]);

        cache.activities = activitiesRes.data || {};
        cache.affiche = afficheRes.data || [];
        cache.doings = doingsRes.data || [];
        cache.hotels = hotelsRes.data || {};
        cache.rooms = roomsRes || {};
        cache.stocks = stocksRes.data || [];
        cache.vacancies = vacanciesRes.data || [];
        cache.venues = venuesRes.data || {};
        cache.legal = legalRes.data || {};
        cache.main = mainRes.data || {};
        cache.menu = menuRes.data || {};
        ready = true;
        return cache;
    })().catch((error) => {
        loadPromise = null;
        ready = false;
        throw error;
    });

    return loadPromise;
}
