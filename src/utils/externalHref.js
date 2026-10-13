export function externalHref(value) {
    const href = String(value ?? "").trim();
    return /^https?:\/\//i.test(href) ? href : "";
}

export function externalLinkProps(value) {
    const href = externalHref(value);
    if (!href) return {};
    return {
        as: "a",
        href,
        target: "_blank",
        rel: "noopener noreferrer",
    };
}
