import { applyTextOverrides } from "../i18n/strings";
import { applyStaticMedia } from "../utils/staticSlots";
import { applyStaticLinks } from "../utils/staticLinks";

async function readJson(url) {
    const response = await fetch(url);
    if (!response.ok) return null;
    return response.json();
}

export async function loadStaticContent() {
    try {
        const [media, texts, links] = await Promise.all([
            readJson("/api/static/media").catch(() => null),
            readJson("/api/static/texts").catch(() => null),
            readJson("/api/static/links").catch(() => null),
        ]);
        applyStaticMedia(media?.items || {});
        applyTextOverrides(texts?.items || {});
        applyStaticLinks(links?.items || {});
    } catch {
        applyStaticMedia({});
        applyTextOverrides({});
        applyStaticLinks({});
    }
}
