import activities from "./activities.json";
import affiche from "./affiche.json";
import doings from "./doings.json";
import hotels from "./hotels.json";
import rooms  from "./rooms.json";
import stocks from "./stocks.json";
import venues from "./venues.json";

export const getActivities = () => {
    return activities;
}

export const getActivitiesById = (id) => {
    return activities[id];
}

export function getAffiche() {
    return affiche;
}

export function getDoings() {
    return doings;
}
export function getArticleById(id) {
    return doings.filter(el => el.id === id)[0];
}

export function getHotels() {
    return hotels;
}

export function getHotelById(id) {
    return hotels[id]
}

export function getSectionData(id, s) {
    return hotels[id][s]
}

export function getStocks(h) {
    return stocks.filter(el => el.hotels.includes(h))
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
    return rooms[h];
}

export function getRoomById(h,r) {
    return rooms[h][r]
}

export function getVenuesCnt() {
    return Object.keys(venues).length;
}

export function getVenues() {
    return venues;
}

export function getVenueById(id) {
    return venues[id]
}