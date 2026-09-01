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
