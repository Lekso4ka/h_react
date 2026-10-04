import React from "react";
import { useCtx, useT } from "../../Ctx";
import { Line } from "../../ui/Line";
import { Link } from "../../ui/Link";
import { parseDate } from "../../utils/parseDate";
import { Hero } from "../ArticleContent/style";
import { Section } from "./style";

function Title({ value }) {
    const parts = String(value || "").split("\n");
    return parts.map((part, i) => (
        <React.Fragment key={i}>
            {i > 0 ? <br/> : null}
            {part}
        </React.Fragment>
    ));
}

function eventWhen(event, lang) {
    const date = event?.date ? parseDate(event.date, "text", lang) : "";
    const time = String(event?.time || "").trim();
    return [date, time].filter(Boolean).join(" / ");
}

export const AfficheEventContent = ({ event }) => {
    const t = useT();
    const { lang } = useCtx();
    const when = eventWhen(event, lang);
    const caption = String(event?.caption || "").trim();
    const paragraphs = Array.isArray(event?.text)
        ? event.text.map((item) => String(item || "").trim()).filter(Boolean)
        : [];
    const moreLink = String(event?.more_link || "").trim();
    const hasCopy = Boolean(caption || paragraphs.length || moreLink);

    return <>
        <Hero>
            <Line/>
            <div className="title">
                {when ? <h4>{when}</h4> : null}
                <h1><Title value={event?.title}/></h1>
            </div>
            <Line/>
        </Hero>
        <Section bg={event?.src}>
            <div className="img"/>
            {hasCopy ? <div className="copy">
                {caption ? <h3>{caption}</h3> : null}
                {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                {moreLink ? <Link to={moreLink}>{t("moreAboutEvent")}</Link> : null}
            </div> : null}
        </Section>
    </>
}
