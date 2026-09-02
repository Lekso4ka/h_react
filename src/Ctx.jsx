import React, { createContext, useContext, useEffect, useState } from "react";
import { loadSiteData } from "./data/store";
import { readStoredLang, t, writeStoredLang } from "./i18n/strings";

const Context = createContext();

export const useCtx = () => useContext(Context);

export const useT = () => {
    const { lang } = useCtx();
    return (key) => t(lang, key);
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
