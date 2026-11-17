import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@emotion/react";

import { AdminRoot } from "./admin/AdminRoot";
import { hydrateSiteData } from "./data/store";
import { PublicRoot } from "./PublicRoot";
import { readStoredLang, writeStoredLang } from "./i18n/strings";
import { applyTextOverrides } from "./i18n/strings";
import { applyStaticMedia } from "./utils/staticSlots";
import { applyStaticLinks } from "./utils/staticLinks";
import { theme } from "./styles/theme";

const emotionCache = createCache({ key: "css" });

function writeLangCookie(lang) {
    document.cookie = `hotel_lang=${lang};path=/;max-age=31536000;samesite=lax`;
}

function hasLangCookie() {
    return /(?:^|;\s*)hotel_lang=(?:ru|en)(?:;|$)/.test(document.cookie);
}

function preferStoredLang() {
    const siteLang = window.__SITE__?.lang;
    if (siteLang !== "en" && siteLang !== "ru") return false;
    const queryLang = new URLSearchParams(window.location.search).get("lang");
    if (queryLang === "en" || queryLang === "ru") {
        writeStoredLang(siteLang);
        writeLangCookie(siteLang);
        return false;
    }
    if (!hasLangCookie() && readStoredLang() !== siteLang) {
        writeLangCookie(readStoredLang());
        window.location.reload();
        return true;
    }
    if (readStoredLang() !== siteLang) writeStoredLang(siteLang);
    return false;
}

function bootSiteData() {
    const site = window.__SITE__;
    if (!site?.store) return;
    hydrateSiteData(site.store);
    applyStaticMedia(site.media || {});
    applyTextOverrides(site.texts || {});
    applyStaticLinks(site.links || {});
}

const tree = (
    <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/admin/*" element={<AdminRoot />} />
                    <Route path="*" element={<PublicRoot />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </CacheProvider>
);

const rootEl = document.getElementById("root");
if (rootEl && !preferStoredLang()) {
    bootSiteData();
    if (rootEl.hasChildNodes()) hydrateRoot(rootEl, tree);
    else createRoot(rootEl).render(tree);
}
