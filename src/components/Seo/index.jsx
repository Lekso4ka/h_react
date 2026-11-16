import { createContext, useContext, useEffect } from "react";

export const SeoCollectContext = createContext(null);

function text(value) {
    return typeof value === "string" ? value.trim() : "";
}

export function normalizeSeo(seo) {
    const source = seo && typeof seo === "object" ? seo : {};
    return {
        title: text(source.title),
        description: text(source.description),
        keywords: text(source.keywords),
    };
}

export function hasSeo(seo) {
    return Boolean(seo?.title || seo?.description || seo?.keywords);
}

function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!content) {
        if (el) el.remove();
        return;
    }
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

export function Seo(props) {
    const collect = useContext(SeoCollectContext);
    const seo = normalizeSeo(props);
    if (collect && hasSeo(seo)) collect.current = seo;

    useEffect(() => {
        if (typeof document === "undefined") return undefined;
        const prev = document.title;
        if (seo.title) document.title = seo.title;
        setMeta("description", seo.description);
        setMeta("keywords", seo.keywords);
        return () => {
            document.title = prev;
        };
    }, [seo.title, seo.description, seo.keywords]);

    return null;
}
