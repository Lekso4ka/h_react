import img from "../assets/img";

const overrides = Object.create(null);

export function applyStaticMedia(items) {
    for (const key of Object.keys(overrides)) delete overrides[key];
    if (!items || typeof items !== "object") return;
    for (const [key, value] of Object.entries(items)) {
        const filename = typeof value === "string" ? value : value?.filename;
        if (typeof filename === "string" && filename && !filename.includes("..") && !filename.includes("/")) {
            overrides[key] = filename;
        }
    }
}

export function mediaOverrideUrl(key) {
    const filename = overrides[key];
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
