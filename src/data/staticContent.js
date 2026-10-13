import { applyTextOverrides } from "../i18n/strings";
import { applyStaticMedia } from "../utils/staticSlots";

async function readJson(url) {
    const response = await fetch(url);
    if (!response.ok) return null;
    return response.json();
}

export async function loadStaticContent() {
    try {
        const [media, texts] = await Promise.all([
            readJson("/api/static/media").catch(() => null),
            readJson("/api/static/texts").catch(() => null),
        ]);
        applyStaticMedia(media?.items || {});
        applyTextOverrides(texts?.items || {});
    } catch {
        applyStaticMedia({});
        applyTextOverrides({});
    }
}
