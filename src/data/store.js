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

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Не удалось загрузить ${url}`);
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
            fetchJson(`/api/activities${q}`),
            fetchJson(`/api/affiche${q}`),
            fetchJson(`/api/doings${q}`),
            fetchJson(`/api/hotels${q}`),
            fetchJson(`/api/rooms${q}`),
            fetchJson(`/api/stocks${q}`),
            fetchJson(`/api/vacancies${q}`),
            fetchJson(`/api/venues${q}`),
            fetchJson(`/api/legal${q}`),
            fetchJson(`/api/main${q}`),
            fetchJson(`/api/menu${q}`),
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
