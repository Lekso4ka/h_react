import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLegalPage } from "../../data";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Buttons, Container } from "./style";

const TABS = [
    { id: "info", path: "/info", label: "Правовая информация" },
    { id: "rules", path: "/rules", label: "Правила отеля" },
    { id: "policy", path: "/policy", label: "Политика конфиденциальности" },
];

function padNum(index) {
    return String(index + 1).padStart(2, "0") + ".";
}

function SectionBody({ section }) {
    const layout = section.layout || "text";

    if (layout === "services") {
        return (
            <div className="services">
                <div className="services-col">
                    {section.freeTitle && <h5>{section.freeTitle}</h5>}
                    <ul>
                        {(section.freeItems || []).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="services-col">
                    {section.paidTitle && <h5>{section.paidTitle}</h5>}
                    <ul>
                        {(section.paidItems || []).map((item) => (
                            <li key={item}>{item}</li>
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
                        <span>Услуга</span>
                        <span>Стоимость</span>
                    </div>
                    {(section.tariffRows || []).map((row) => (
                        <div className="tariff-row" key={row.name}>
                            <span>{row.name}</span>
                            <span>{row.price}</span>
                        </div>
                    ))}
                </div>
                {(section.text || []).map((p) => (
                    <p key={p}>{p}</p>
                ))}
            </>
        );
    }

    return (
        <>
            {(section.text || []).map((p, i) => (
                <p key={`t-${i}`}>{p}</p>
            ))}
            {section.listIntro ? <p className="list-intro">{section.listIntro}</p> : null}
            {(section.listItems || []).length > 0 && (
                <ul>
                    {section.listItems.map((item, i) => (
                        <li key={`li-${i}`}>{item}</li>
                    ))}
                </ul>
            )}
            {(section.textAfter || []).map((p, i) => (
                <p key={`a-${i}`}>{p}</p>
            ))}
            {(section.links || []).length > 0 && (
                <div className="doc-links">
                    {section.links.map((link, i) =>
                        link.url ? (
                            <a className="doc-link" key={`l-${i}`} href={link.url} target="_blank" rel="noreferrer">
                                {link.title}
                            </a>
                        ) : (
                            <span className="doc-link" key={`l-${i}`}>{link.title}</span>
                        )
                    )}
                </div>
            )}
            {section.downloadLabel ? (
                <button type="button" className="download">{section.downloadLabel}</button>
            ) : null}
        </>
    );
}

export const LegalContent = ({ pageKey }) => {
    const navigate = useNavigate();
    const data = getLegalPage(pageKey) || {
        pageTitle: "",
        label: "",
        docTitle: "",
        sections: [],
    };
    const sections = data.sections || [];
    const [activeId, setActiveId] = useState(sections[0]?.id || "");

    useEffect(() => {
        setActiveId(sections[0]?.id || "");
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
                    { text: "Главная", link: "/" },
                    { text: data.pageTitle || "" },
                ]}
            />
            <h1>{data.pageTitle}</h1>
            <Buttons>
                {TABS.map((tab) => (
                    <SquareItem
                        key={tab.id}
                        active={tab.id === pageKey}
                        onClick={() => navigate(tab.path)}
                    >
                        {tab.label}
                    </SquareItem>
                ))}
            </Buttons>

            <div className="layout">
                <aside className="sidebar">
                    <div className="sidebar-title">Содержание</div>
                    <ul className="toc">
                        {sections.map((section, index) => (
                            <li key={section.id}>
                                <span className="toc-num">{padNum(index)}</span>
                                <button
                                    type="button"
                                    className={`toc-link${activeId === section.id ? " active" : ""}`}
                                    onClick={() => scrollTo(section.id)}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="block">
                    <Line className="line-h4" />
                    <h4>{data.label || data.pageTitle}</h4>
                    <Line className="line-h4" />
                    {data.docTitle ? <h2>{data.docTitle}</h2> : null}

                    {sections.map((section) => (
                        <section
                            className="section"
                            id={`legal-${section.id}`}
                            key={section.id}
                        >
                            <h3>{section.title}</h3>
                            <SectionBody section={section} />
                        </section>
                    ))}
                </div>
            </div>
        </Container>
    );
};
