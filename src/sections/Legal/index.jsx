import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useT } from "../../Ctx";
import { getLegalPage } from "../../data";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Icon } from "../../ui/Icon";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Buttons, Container } from "./style";
import { lines } from "../../utils/lines";

const TABS = [
    { id: "info", path: "/info", labelKey: "legalInfo" },
    { id: "rules", path: "/rules", labelKey: "hotelRules" },
    { id: "policy", path: "/policy", labelKey: "privacyPolicy" },
];

function padNum(index) {
    return String(index + 1).padStart(2, "0") + ".";
}

function SectionBody({ section }) {
    const t = useT();
    const layout = section.layout || "text";

    if (layout === "services") {
        return (
            <div className="services">
                <div className="services-col">
                    {section.freeTitle && <h5>{lines(section.freeTitle)}</h5>}
                    <ul>
                        {(section.freeItems || []).map((item) => (
                            <li key={item}>{lines(item)}</li>
                        ))}
                    </ul>
                </div>
                <div className="services-col">
                    {section.paidTitle && <h5>{lines(section.paidTitle)}</h5>}
                    <ul>
                        {(section.paidItems || []).map((item) => (
                            <li key={item}>{lines(item)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    if (layout === "tariffs") {
        return (
            <>
                <div className="tariffs">
                    <div className="tariff-head">
                        <span>{ lines(t("tariffService")) }</span>
                        <span>{ lines(t("tariffPrice")) }</span>
                    </div>
                    {(section.tariffRows || []).map((row) => (
                        <div className="tariff-row" key={row.name}>
                            <span>{lines(row.name)}</span>
                            <span>{lines(row.price)}</span>
                        </div>
                    ))}
                </div>
                {(section.text || []).map((p) => (
                    <p key={p}>{lines(p)}</p>
                ))}
            </>
        );
    }

    return (
        <>
            {(section.text || []).map((p, i) => (
                <p key={`t-${i}`}>{lines(p)}</p>
            ))}
            {section.listIntro ? <p className="list-intro">{lines(section.listIntro)}</p> : null}
            {(section.listItems || []).length > 0 && (
                <ul>
                    {section.listItems.map((item, i) => (
                        <li key={`li-${i}`}>{lines(item)}</li>
                    ))}
                </ul>
            )}
            {(section.textAfter || []).map((p, i) => (
                <p key={`a-${i}`}>{lines(p)}</p>
            ))}
            {(section.links || []).length > 0 && (
                <div className="doc-links">
                    {section.links.map((link, i) =>
                        link.url ? (
                            <a className="doc-link" key={`l-${i}`} href={link.url} target="_blank" rel="noreferrer">
                                {lines(link.title)}
                            </a>
                        ) : (
                            <span className="doc-link" key={`l-${i}`}>{lines(link.title)}</span>
                        )
                    )}
                </div>
            )}
            {section.downloadLabel ? (
                <button type="button" className="download">{lines(section.downloadLabel)}</button>
            ) : null}
        </>
    );
}

export const LegalContent = ({ pageKey }) => {
    const t = useT();
    const navigate = useNavigate();
    const data = getLegalPage(pageKey) || {
        pageTitle: "",
        label: "",
        docTitle: "",
        sections: [],
    };
    const sections = data.sections || [];
    const [activeId, setActiveId] = useState(sections[0]?.id || "");
    const [tocOpen, setTocOpen] = useState(false);
    const buttonsRef = useRef(null);

    useEffect(() => {
        setActiveId(sections[0]?.id || "");
    }, [pageKey]);

    useLayoutEffect(() => {
        const root = buttonsRef.current;
        if (!root) return undefined;
        const align = () => {
            const current = root.querySelector(`[data-tab="${pageKey}"]`);
            if (!current || root.scrollWidth <= root.clientWidth + 1) return;
            const left = current.offsetLeft - (root.clientWidth - current.offsetWidth) / 2;
            root.scrollTo({ left: Math.max(0, left) });
        };
        align();
        const observer = new ResizeObserver(align);
        observer.observe(root);
        return () => observer.disconnect();
    }, [pageKey]);

    useEffect(() => {
        if (!sections.length) return undefined;
        const nodes = sections
            .map((section) => document.getElementById(`legal-${section.id}`))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) {
                    setActiveId(visible.target.id.replace(/^legal-/, ""));
                }
            },
            { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [pageKey, sections]);

    const scrollTo = (id) => {
        const node = document.getElementById(`legal-${id}`);
        if (!node) return;
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(id);
    };

    return (
        <Container>
            <Line />
            <Breadcrumbs
                data={[
                    { text: t("home"), link: "/" },
                    { text: data.pageTitle || "" },
                ]}
            />
            <h1>{lines(data.pageTitle)}</h1>
            <Buttons ref={buttonsRef}>
                {TABS.map((tab) => (
                    <SquareItem
                        key={tab.id}
                        data-tab={tab.id}
                        active={tab.id === pageKey}
                        onClick={() => navigate(tab.path)}
                    >
                        { lines(t(tab.labelKey)) }
                    </SquareItem>
                ))}
            </Buttons>

            <nav className="toc-mobile">
                <button
                    type="button"
                    className="toc-mobile-head"
                    aria-expanded={tocOpen}
                    onClick={() => setTocOpen((open) => !open)}
                >
                    <span>{ lines(t("toc")) }</span>
                    <span className={`toc-mobile-icon${tocOpen ? " open" : ""}`}>
                        <Icon name="plus" color="#2F3034"/>
                    </span>
                </button>
                <div className={`toc-mobile-panel${tocOpen ? " open" : ""}`}>
                    <div>
                        <ul className="toc-mobile-list">
                            {sections.map((section, index) => (
                                <li key={section.id}>
                                    <span className="toc-num">{padNum(index)}</span>
                                    <button
                                        type="button"
                                        onClick={() => scrollTo(section.id)}
                                    >
                                        {lines(section.title)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="layout">
                <aside className="sidebar">
                    <div className="sidebar-title">{ lines(t("toc")) }</div>
                    <ul className="toc">
                        {sections.map((section, index) => (
                            <li key={section.id}>
                                <span className="toc-num">{padNum(index)}</span>
                                <button
                                    type="button"
                                    className={`toc-link${activeId === section.id ? " active" : ""}`}
                                    onClick={() => scrollTo(section.id)}
                                >
                                    {lines(section.title)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="block">
                    <Line className="line-h4" />
                    <h4>{lines(data.label || data.pageTitle)}</h4>
                    <Line className="line-h4" />
                    {data.docTitle ? <h2>{lines(data.docTitle)}</h2> : null}

                    {sections.map((section) => (
                        <section
                            className="section"
                            id={`legal-${section.id}`}
                            key={section.id}
                        >
                            {section.id === "requisites"
                                ? <h2>{lines(section.title)}</h2>
                                : <h3>{lines(section.title)}</h3>}
                            <SectionBody section={section} />
                        </section>
                    ))}
                </div>
            </div>
        </Container>
    );
};
