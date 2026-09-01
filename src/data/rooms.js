import { getStore } from "./store";

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
