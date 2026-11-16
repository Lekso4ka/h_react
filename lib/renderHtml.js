const fs = require("node:fs");

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function serialize(value) {
    return JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
}

function renderDocument({ template, html, styles, seo, lang, payload, urls }) {
    const title = escapeHtml(seo?.title || "Hotel");
    const description = seo?.description ? `<meta name="description" content="${escapeHtml(seo.description)}">` : "";
    const keywords = seo?.keywords ? `<meta name="keywords" content="${escapeHtml(seo.keywords)}">` : "";
    const canonicalHref = lang === "en" ? urls.en : urls.ru;
    const links = urls.ru
        ? [
            `<link rel="canonical" href="${escapeHtml(canonicalHref)}">`,
            `<link rel="alternate" hreflang="ru" href="${escapeHtml(urls.ru)}">`,
            `<link rel="alternate" hreflang="en" href="${escapeHtml(urls.en)}">`,
            `<link rel="alternate" hreflang="x-default" href="${escapeHtml(urls.ru)}">`,
        ].join("")
        : "";
    const head = `${description}${keywords}${links}${styles || ""}<script>window.__SITE__=${serialize(payload)}</script>`;

    return template
        .replace(/<html lang="[^"]*">/i, `<html lang="${lang === "en" ? "en" : "ru"}">`)
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
        .replace("</head>", `${head}</head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function readTemplate(file) {
    return fs.readFileSync(file, "utf8");
}

module.exports = {
    renderDocument,
    readTemplate,
};
