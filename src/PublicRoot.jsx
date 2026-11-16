import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { App } from "./App";
import { ContextProvider, useCtx } from "./Ctx";
import { isDataReady, loadSiteData } from "./data/store";
import { loadStaticContent } from "./data/staticContent";
import { readStoredLang, t } from "./i18n/strings";
import { lines } from "./utils/lines";
import { GlobalStyles } from "./styles/GlobalSt";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const PublicApp = () => {
    const { lang } = useCtx();
    return <App key={lang} />;
};

export function bootLang() {
    if (typeof window !== "undefined" && (window.__SITE__?.lang === "en" || window.__SITE__?.lang === "ru")) {
        return window.__SITE__.lang;
    }
    return readStoredLang();
}

export const PublicRoot = ({ initialLang }) => {
    const lang = initialLang === "en" || initialLang === "ru" ? initialLang : bootLang();
    const [ready, setReady] = useState(() => isDataReady());
    const [error, setError] = useState("");

    useEffect(() => {
        if (isDataReady()) return undefined;
        let cancelled = false;
        Promise.all([
            loadSiteData({ force: true, lang: readStoredLang() }),
            loadStaticContent(),
        ])
            .then(() => {
                if (!cancelled) setReady(true);
            })
            .catch((err) => {
                if (!cancelled) setError(err.message || t(readStoredLang(), "loadError"));
            });

        return () => {
            cancelled = true;
        };
    }, []);

    if (error) {
        return (
            <div style={{ padding: 40, fontFamily: "Manrope, sans-serif" }}>
                {lines(error)}
            </div>
        );
    }

    if (!ready) return null;

    return (
        <ContextProvider initialLang={lang}>
            <ScrollToTop />
            <GlobalStyles />
            <PublicApp />
        </ContextProvider>
    );
};
