import img from "../assets/img";

const overrides = Object.create(null);
const previews = Object.create(null);

function safeFilename(value) {
    return typeof value === "string"
        && value.length > 0
        && !value.includes("..")
        && !value.includes("/")
        && !value.includes("\\");
}

export function applyStaticMedia(items) {
    for (const key of Object.keys(overrides)) delete overrides[key];
    for (const key of Object.keys(previews)) delete previews[key];
    if (!items || typeof items !== "object") return;
    for (const [key, value] of Object.entries(items)) {
        const filename = typeof value === "string" ? value : value?.filename;
        if (safeFilename(filename)) overrides[key] = filename;
        const preview = value && typeof value === "object" ? value.preview : "";
        if (safeFilename(preview)) previews[key] = preview;
    }
}

export function mediaOverrideUrl(key) {
    const filename = overrides[key];
    if (!filename) return "";
    return `/images/${filename}`;
}

export function mediaPreviewUrl(key) {
    const filename = previews[key];
    if (!filename) return "";
    return `/images/${filename}`;
}

export function slotImage(key) {
    const fallback = String(img[key] || "").replace(/"/g, "");
    return `var(--slot-${key}, url("${fallback}"))`;
}

export function staticSlotCss() {
    const rules = Object.keys(overrides).map((key) => {
        const url = mediaOverrideUrl(key).replace(/"/g, "");
        return `--slot-${key}:url("${url}")`;
    });
    return rules.join(";");
}
