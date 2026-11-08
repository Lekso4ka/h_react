import { getStore } from "./store";

export const getActivities = () => {
    return getStore().activities;
}

export const getActivitiesById = (id) => {
    return getStore().activities[id];
}

export function getAffiche() {
    return getStore().affiche;
}

export function getAfficheById(id) {
    return getStore().affiche.find((item) => item && String(item.id) === String(id));
}

export function getDoings() {
    return getStore().doings;
}
export function getArticleById(id) {
    return getStore().doings.filter(el => el.id === id)[0];
}

export function getHotels() {
    return getStore().hotels;
}

export function getHotelById(id) {
    return getStore().hotels[id]
}

export function getSectionData(id, s) {
    return getStore().hotels[id][s]
}

export function getStocks(h) {
    return getStore().stocks.filter(el => el.hotels.includes(h))
}

function asList(value) {
    return Array.isArray(value) ? value : [];
}

export function getActivitiesCnt(season) {
    return asList(getActivities()?.[season]?.list).reduce(
        (sum, group) => sum + asList(group?.items).length,
        0
    );
}

export function getRestaurantsCnt() {
    return Object.values(getHotels() || {}).filter((hotel) => hotel?.section_5).length;
}

export function getServicesCnt(hotelId) {
    const section = getHotels()?.[hotelId]?.section_6 || {};
    return asList(section.include).length + asList(section.additional).length;
}

export function getEventsCnt() {
    return asList(getMain()?.events?.items).length;
}

export function getStocksCnt(hotelId) {
    return getStocks(hotelId).length;
}

export function getAfficheCnt() {
    return asList(getAffiche()).length;
}

export function decodeRouteParam(value) {
    if (!value) return "";
    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
}

export function getRooms(h) {
    return getStore().rooms[h];
}

export function getRoomById(h,r) {
    return getStore().rooms[h][r]
}
export function getVacancies() {
    return getStore().vacancies;
}
export function getVenuesCnt() {
    return Object.keys(getStore().venues).length;
}

export function getVenues() {
    return getStore().venues;
}

export function getVenueById(id) {
    return getStore().venues[id]
}

export function getLegal() {
    return getStore().legal;
}

export function getLegalPage(id) {
    return getStore().legal?.[id];
}

export function getMain() {
    return getStore().main || {};
}

export function getMenu() {
    return getStore().menu || {};
}
