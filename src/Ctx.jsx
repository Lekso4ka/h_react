import React, { createContext, useContext, useEffect, useState } from "react";
import { readStoredLang, t, writeStoredLang } from "./i18n/strings";
import { lines } from "./utils/lines";
import { staticSlotCss } from "./utils/staticSlots";

const Context = createContext();

export const useCtx = () => useContext(Context);

const BR_RE = /<br\s*\/?>/gi;

function withBreaks(value) {
    if (typeof value !== "string" || !value.toLowerCase().includes("<br")) return value;
    const parts = value.split(BR_RE);
    if (parts.length < 2) return value;
    return parts.map((part, i) => (
        <React.Fragment key={i}>
            {lines(part)}
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

    const setLang = (next) => {
        const resolved = next === "en" ? "en" : "ru";
        if (resolved === lang) return;
        writeStoredLang(resolved);
        window.location.reload();
    };

    const slotCss = staticSlotCss();

    return <Context.Provider value={{
        mob,
        lang,
        setLang,
    }}>
        {slotCss ? <style data-static-slots>{`:root{${slotCss}}`}</style> : null}
        {children}
    </Context.Provider>
}
