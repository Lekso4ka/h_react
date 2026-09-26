import React, { createContext, useContext, useEffect, useState } from "react";
import { loadSiteData } from "./data/store";
import { readStoredLang, t, writeStoredLang } from "./i18n/strings";

const Context = createContext();

export const useCtx = () => useContext(Context);

const BR_RE = /<br\s*\/?>/gi;

function withBreaks(value) {
    if (typeof value !== "string" || !value.toLowerCase().includes("<br")) return value;
    const parts = value.split(BR_RE);
    if (parts.length < 2) return value;
    return parts.map((part, i) => (
        <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 ? <br/> : null}
        </React.Fragment>
    ));
}

export const useT = () => {
    const { lang } = useCtx();
    return (key) => withBreaks(t(lang, key));
};

export const ContextProvider = ({children}) => {
    const [mob, setMob] = useState(null);
    const [lang, setLangState] = useState(readStoredLang);
    useEffect(() => {
        const w = window.outerWidth;
        if (w < 576) {
            setMob(true)
        }
        window.addEventListener("resize", () => {
            const w = window.outerWidth;
            setMob(w < 576)
        })
    });
    useEffect(() => {
        document.documentElement.lang = lang === "en" ? "en" : "ru";
    }, [lang]);

    const setLang = async (next) => {
        const resolved = next === "en" ? "en" : "ru";
        if (resolved === lang) return;
        writeStoredLang(resolved);
        await loadSiteData({ force: true, lang: resolved });
        setLangState(resolved);
    };

    return <Context.Provider value={{
        mob,
        lang,
        setLang,
    }}>
        {children}
    </Context.Provider>
}
