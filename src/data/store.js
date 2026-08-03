const cache = {
    activities: {},
    affiche: [],
    doings: [],
    hotels: {},
    rooms: {},
    stocks: [],
    vacancies: [],
    venues: {},
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

export function loadSiteData({ force = false } = {}) {
    if (loadPromise && !force) return loadPromise;

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
        ] = await Promise.all([
            fetchJson("/api/activities"),
            fetchJson("/api/affiche"),
            fetchJson("/api/doings"),
            fetchJson("/api/hotels"),
            fetchJson("/api/rooms"),
            fetchJson("/api/stocks"),
            fetchJson("/api/vacancies"),
            fetchJson("/api/venues"),
        ]);

        cache.activities = activitiesRes.data || {};
        cache.affiche = afficheRes.data || [];
        cache.doings = doingsRes.data || [];
        cache.hotels = hotelsRes.data || {};
        cache.rooms = roomsRes || {};
        cache.stocks = stocksRes.data || [];
        cache.vacancies = vacanciesRes.data || [];
        cache.venues = venuesRes.data || {};
        ready = true;
        return cache;
    })().catch((error) => {
        loadPromise = null;
        ready = false;
        throw error;
    });

    return loadPromise;
}
