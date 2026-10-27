import { externalLinkProps } from "./externalHref";

const TRIGGER_ID = "tl-booking-trigger";

function queryOf(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    const queryIndex = raw.indexOf("?");
    if (queryIndex >= 0) return raw.slice(queryIndex + 1);
    if (raw.includes("=")) return raw.replace(/^\?/, "");
    return "";
}

export function bookingParams(value) {
    const query = queryOf(value);
    if (!query) return null;
    const params = new URLSearchParams(query);
    const room = params.get("room-type") || params.get("tl-room") || "";
    const rate = params.get("special-offer") || params.get("tl-rate") || "";
    const scenario = params.get("tl-booking-scenario") || params.get("hotel_id") || "";
    const explicit = params.get("tl-booking-open") === "true";
    if (!explicit && !room && !rate && !scenario) return null;
    return { room, rate, scenario };
}

function setOrRemove(element, name, value) {
    if (value) element.setAttribute(name, value);
    else element.removeAttribute(name);
}

export function openTlBooking(event, { room = "", rate = "", scenario = "" } = {}) {
    event.preventDefault();
    const trigger = document.getElementById(TRIGGER_ID);
    if (!trigger) return;
    setOrRemove(trigger, "data-tl-room", room);
    setOrRemove(trigger, "data-tl-rate", rate);
    setOrRemove(trigger, "data-tl-booking-scenario", scenario);
    trigger.click();
}

export function bookingLinkProps(value) {
    const booking = bookingParams(value);
    if (!booking) return externalLinkProps(value);
    return {
        as: "a",
        href: "#",
        onClick: (event) => openTlBooking(event, booking),
    };
}
