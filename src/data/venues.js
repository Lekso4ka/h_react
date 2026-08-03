import { getStore } from "./store";

export function getVenues() {
    return getStore().venues;
}

export function getVenueById(id) {
    return getStore().venues[id]
}
