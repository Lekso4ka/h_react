import rooms from "./rooms.json";

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