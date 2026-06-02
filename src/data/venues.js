import venues from "./venues.json";

export function getVenues() {
    return venues;
}

export function getVenueById(id) {
    return venues[id]
}