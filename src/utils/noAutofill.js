export function fieldDomName(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash * 33 + key.charCodeAt(i)) >>> 0;
    return `f${hash.toString(36)}`;
}

export function readField(form, key) {
    const node = form.querySelector(`[data-field="${key}"]`);
    if (node) return node.value || "";
    const named = form.elements[key];
    if (!named || typeof named.value !== "string") return "";
    return named.value;
}

const SKIP_LOCK = new Set(["checkbox", "file", "date", "number", "hidden", "radio"]);

export function lockAutofill(node) {
    if (!node || node.dataset.autofillLocked === "1") return;
    node.dataset.autofillLocked = "1";
    node.setAttribute("autocomplete", "off");
    node.setAttribute("data-1p-ignore", "true");
    node.setAttribute("data-lpignore", "true");
    node.setAttribute("data-bwignore", "true");
    node.setAttribute("data-form-type", "other");
    if (!SKIP_LOCK.has(node.type)) node.readOnly = true;
}

export function unlockAutofill(event) {
    const input = event.currentTarget;
    if (input.readOnly) input.readOnly = false;
    input.setAttribute("autocomplete", "off");
}

export function relockAutofill(form) {
    if (!form) return;
    form.querySelectorAll("[data-autofill-locked='1']").forEach((node) => {
        if (SKIP_LOCK.has(node.type)) return;
        node.readOnly = true;
        node.setAttribute("autocomplete", "off");
    });
}

export function unlockFormAutofill(form) {
    if (!form) return;
    form.querySelectorAll("[data-autofill-locked='1']").forEach((node) => {
        if (SKIP_LOCK.has(node.type)) return;
        node.readOnly = false;
    });
}

export function armAutofillSubmit(event) {
    if (event.type === "keydown") {
        if (event.key !== "Enter" || event.target?.tagName === "TEXTAREA") return;
    }
    const form = event.currentTarget.tagName === "FORM" ? event.currentTarget : event.currentTarget.form;
    unlockFormAutofill(form);
}

export const EMAIL_PATTERN = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";

export const noAutofillProps = {
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: false,
    "data-1p-ignore": "true",
    "data-lpignore": "true",
    "data-bwignore": "true",
    "data-form-type": "other",
};
