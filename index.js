require("./lib/env");

const fs = require("node:fs");
const path = require("node:path");
const exp = require("express");
const cors = require("cors");
const { config } = require("./lib/env");
const { loadSitePayload } = require("./lib/siteData");
const { readTemplate, renderDocument } = require("./lib/renderHtml");

const roomsRouter = require("./routes/rooms");
const uploadRouter = require("./routes/upload");
const authRouter = require("./routes/auth");
const leadsRouter = require("./routes/leads");
const staticRouter = require("./routes/static");
const createResourceRouter = require("./routes/resource");
const { authRequiredUnlessGet } = require("./middleware/auth");
const { ensureStaticTables } = require("./lib/staticContent");
const { roomPromoLimitMessage } = require("./lib/roomPromos");

const app = exp();
const PORT = config.port;

app.use(cors());
app.use(exp.json({ limit: "200mb" }));
app.use("/images", exp.static(path.join(__dirname, "images")));
app.use(exp.static(path.join(__dirname, "static"), { index: false }));

app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
});

app.use("/api/auth", authRouter);
app.use("/api/leads", leadsRouter);

// Публичное чтение для сайта; запись — только с JWT
app.use("/api", authRequiredUnlessGet);

app.use("/api/rooms", roomsRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/static", staticRouter);

app.use(
    "/api/activities",
    createResourceRouter({ fileName: "activities.json", kind: "object" })
);
app.use(
    "/api/hotels",
    createResourceRouter({ fileName: "hotels.json", kind: "object" })
);
app.use(
    "/api/venues",
    createResourceRouter({ fileName: "venues.json", kind: "object" })
);
app.use(
    "/api/affiche",
    createResourceRouter({
        fileName: "affiche.json",
        kind: "array",
        idField: "id",
        autoId: true,
    })
);
app.use(
    "/api/doings",
    createResourceRouter({ fileName: "doings.json", kind: "array", idField: "id" })
);
app.use(
    "/api/stocks",
    createResourceRouter({
        fileName: "stocks.json",
        kind: "array",
        assertList: roomPromoLimitMessage,
    })
);
app.use(
    "/api/vacancies",
    createResourceRouter({
        fileName: "vacancies.json",
        kind: "array",
    })
);
app.use(
    "/api/legal",
    createResourceRouter({ fileName: "legal.json", kind: "object" })
);
app.use(
    "/api/main",
    createResourceRouter({ fileName: "main.json", kind: "singleton" })
);
app.use(
    "/api/menu",
    createResourceRouter({ fileName: "menu.json", kind: "singleton" })
);

const templatePath = path.join(__dirname, "static", "index.html");
const rendererPath = path.join(__dirname, "ssr", "server.js");

let rendererCache = null;
let rendererMtime = 0;

function getRenderer() {
    if (!fs.existsSync(rendererPath)) return null;
    const mtime = fs.statSync(rendererPath).mtimeMs;
    if (!rendererCache || rendererMtime !== mtime) {
        delete require.cache[require.resolve(rendererPath)];
        rendererCache = require(rendererPath);
        rendererMtime = mtime;
    }
    return rendererCache;
}

function requestLang(req) {
    if (req.query.lang === "en" || req.query.lang === "ru") return req.query.lang;
    const cookie = String(req.headers.cookie || "");
    const match = cookie.match(/(?:^|;\s*)hotel_lang=(ru|en)(?:;|$)/);
    return match ? match[1] : "ru";
}

function pageUrls(req) {
    const host = req.get("host");
    if (!host) return { ru: "", en: "" };
    const proto = String(req.headers["x-forwarded-proto"] || req.protocol || "http").split(",")[0].trim();
    const pathname = req.path || "/";
    return {
        ru: `${proto}://${host}${pathname}`,
        en: `${proto}://${host}${pathname}?lang=en`,
    };
}

let renderQueue = Promise.resolve();

function renderExclusive(renderer, args) {
    const job = renderQueue.then(() => renderer.renderPage(args));
    renderQueue = job.then(() => {}, () => {});
    return job;
}

function sendSpa(res) {
    res.sendFile(templatePath);
}

app.get("*splat", async (req, res) => {
    if (path.extname(req.path)) {
        res.status(404).end();
        return;
    }
    if (!fs.existsSync(templatePath)) {
        res.status(503).type("text/plain").send("Site bundle is not built");
        return;
    }
    if (req.path === "/admin" || req.path.startsWith("/admin/")) {
        sendSpa(res);
        return;
    }

    const renderer = getRenderer();
    if (!renderer) {
        sendSpa(res);
        return;
    }

    try {
        const lang = requestLang(req);
        const payload = await loadSitePayload(lang);
        const rendered = await renderExclusive(renderer, {
            url: req.originalUrl,
            lang: payload.lang,
            store: payload.store,
            media: payload.media,
            texts: payload.texts,
            links: payload.links,
        });
        const status = rendered.status === 404 ? 404 : 200;
        const html = renderDocument({
            template: readTemplate(templatePath),
            html: rendered.html,
            styles: rendered.styles,
            seo: rendered.seo,
            lang: payload.lang,
            payload,
            urls: pageUrls(req),
            status,
        });
        if (req.query.lang === "en" || req.query.lang === "ru" || /(?:^|;\s*)hotel_lang=/.test(String(req.headers.cookie || ""))) {
            res.setHeader("Set-Cookie", `hotel_lang=${payload.lang}; Path=/; Max-Age=31536000; SameSite=Lax`);
        }
        res.status(status);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Vary", "Cookie");
        res.send(html);
    } catch (error) {
        console.error("ssr:", error);
        sendSpa(res);
    }
});

ensureStaticTables()
    .catch((error) => {
        console.error("static tables:", error.message);
    })
    .finally(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    });
