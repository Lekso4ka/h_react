const MAX_DIGITS = 15;
const MIN_INTL_DIGITS = 8;

function rawDigits(value) {
    return String(value || "").replace(/\D/g, "").slice(0, MAX_DIGITS);
}

// «+» и первая цифра не 7/8 — гость сам ввёл иностранный код.
// Десять цифр без такого плюса — местный номер: +7 и группы 3-3-2-2.
function isInternational(text, digits) {
    return String(text || "").trimStart().startsWith("+") && digits.length > 0 && digits[0] !== "7" && digits[0] !== "8";
}

function nationalDigits(text, digits) {
    let national = digits;
    const hasPlus = String(text || "").trimStart().startsWith("+");
    // 7/8 в начале — код или «8» междугородняя, только если это уже +7 или полный 11-значный номер.
    // 10 цифр без плюса — сам номер, +7 добавляется снаружи: 812… остаётся 812, а не теряет восьмёрку.
    if ((digits[0] === "7" || digits[0] === "8") && (hasPlus || digits.length > 10)) {
        national = digits.slice(1);
    }
    return national.slice(0, 10);
}

function formatRussian(national) {
    let out = "+7";
    if (!national) return out;
    out += ` (${national.slice(0, 3)}`;
    if (national.length <= 3) return out;
    out += `) ${national.slice(3, 6)}`;
    if (national.length <= 6) return out;
    out += `-${national.slice(6, 8)}`;
    if (national.length <= 8) return out;
    out += `-${national.slice(8, 10)}`;
    return out;
}

function formatInternational(digits) {
    return `+${digits.replace(/(\d{3})(?=\d)/g, "$1 ")}`;
}

export function formatPhone(value) {
    const text = String(value || "");
    const digits = rawDigits(text);
    if (!digits) return text.includes("+") ? "+" : "";
    if (isInternational(text, digits)) return formatInternational(digits);
    return formatRussian(nationalDigits(text, digits));
}

export function isPhoneComplete(value) {
    const text = String(value || "");
    const digits = rawDigits(text);
    if (!digits) return false;
    if (isInternational(text, digits)) return digits.length >= MIN_INTL_DIGITS && digits.length <= MAX_DIGITS;
    return nationalDigits(text, digits).length === 10;
}

// Сколько цифр маски уже «набрано» слева от каретки, включая служебную 7.
function maskDigitsBefore(value) {
    const text = String(value || "");
    const digits = rawDigits(text);
    if (isInternational(text, digits)) return digits.length;
    const national = nationalDigits(text, digits);
    if (national) return national.length + 1;
    if ((digits[0] === "7" || digits[0] === "8") && (text.trimStart().startsWith("+") || digits.length > 10)) return 1;
    return 0;
}

function caretAfterDigits(formatted, digitCount) {
    if (digitCount <= 0) return formatted.startsWith("+") ? 1 : 0;
    let seen = 0;
    for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) {
            seen += 1;
            if (seen >= digitCount) return i + 1;
        }
    }
    return formatted.length;
}

export function handlePhoneInput(event) {
    const input = event.currentTarget;
    const prev = input.value;
    const caret = input.selectionStart ?? prev.length;
    const digitsBefore = maskDigitsBefore(prev.slice(0, caret));
    const next = formatPhone(prev);
    if (next === prev) return;
    input.value = next;
    const pos = caretAfterDigits(next, digitsBefore);
    requestAnimationFrame(() => {
        if (document.activeElement === input) input.setSelectionRange(pos, pos);
    });
}

export function lockPhoneAutofill(node) {
    if (!node || node.dataset.autofillLocked === "1") return;
    node.dataset.autofillLocked = "1";
    node.readOnly = true;
    node.setAttribute("autocomplete", "off");
}

export function handlePhoneFocus(event) {
    const input = event.currentTarget;
    input.readOnly = false;
    input.setAttribute("autocomplete", "off");
}

export function handlePhoneBlur(event) {
    const input = event.currentTarget;
    const text = input.value;
    const digits = rawDigits(text);
    if (!digits || (!isInternational(text, digits) && !nationalDigits(text, digits))) input.value = "";
}
