import { useEffect } from "react";

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

export function Seo({ title, description, keywords }) {
    useEffect(() => {
        const prev = document.title;
        if (title) document.title = title;
        setMeta("description", description);
        setMeta("keywords", keywords);
        return () => {
            document.title = prev;
        };
    }, [title, description, keywords]);

    return null;
}
