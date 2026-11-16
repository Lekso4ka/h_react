import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import { PublicRoot } from "./PublicRoot";
import { hydrateSiteData } from "./data/store";
import { applyTextOverrides } from "./i18n/strings";
import { hasSeo, normalizeSeo, SeoCollectContext } from "./components/Seo";
import { applyStaticMedia } from "./utils/staticSlots";
import { theme } from "./styles/theme";

function renderPage({ url, lang, store, media, texts }) {
    hydrateSiteData(store);
    applyStaticMedia(media || {});
    applyTextOverrides(texts || {});

    const cache = createCache({ key: "css" });
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
    const seoRef = { current: normalizeSeo(store?.menu?.seo) };
    const previousError = console.error;
    console.error = (...args) => {
        const text = args.map((item) => String(item)).join(" ");
        if (text.includes("useLayoutEffect does nothing on the server")) return;
        previousError(...args);
    };

    let html = "";
    try {
        html = renderToString(
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <StaticRouter location={url}>
                        <SeoCollectContext.Provider value={seoRef}>
                            <PublicRoot initialLang={lang} />
                        </SeoCollectContext.Provider>
                    </StaticRouter>
                </ThemeProvider>
            </CacheProvider>
        );
    } finally {
        console.error = previousError;
    }

    const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html));
    return {
        html,
        styles,
        seo: hasSeo(seoRef.current) ? seoRef.current : normalizeSeo(null),
    };
}

export { renderPage };
