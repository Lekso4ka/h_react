import img from "../assets/img";

const ABSOLUTE =
    /^(?:\/images\/|https?:\/\/|blob:|data:)/i;

/**
 * Build public media URL at render time.
 * JSON stores bare filenames; legacy keys still resolve via assets map.
 */
export function mediaUrl(value) {
    if (!value) return "";
    if (typeof value !== "string") return "";

    if (ABSOLUTE.test(value)) {
        return value;
    }

    // Legacy key from assets/img map (Home, Header, etc.)
    if (img[value]) {
        return img[value];
    }

    // Bare filename from API JSON
    if (value.includes(".") && !value.includes("/")) {
        return `/images/${value}`;
    }

    // Already a relative path without leading slash
    if (value.includes("/")) {
        return value.startsWith("/") ? value : `/${value}`;
    }

    return "";
}
