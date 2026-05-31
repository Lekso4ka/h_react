import hotels from "./hotels.json";


export function getHotels() {
    return rooms;
}

export function getHotelById(id) {
    return hotels[id]
}

export function getSectionData(id, s) {
    return hotels[id][s]
}