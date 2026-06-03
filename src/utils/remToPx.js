export function remToPixels(rem) {
    const size = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * size;
}