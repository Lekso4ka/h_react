import { getStore } from "./store";

export function getHotels() {
    return getStore().hotels;
}

export function getHotelById(id) {
    return getStore().hotels[id]
}

export function getSectionData(id, s) {
    return getStore().hotels[id][s]
}
