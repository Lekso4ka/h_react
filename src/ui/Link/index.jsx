import React from "react";
import { ExternalLinkSt, LinkSt } from "./style";

const EXTERNAL_HREF = /^(https?:|tel:|mailto:)/i;

export const Link = ({ to, color, hover, children, ...rest }) => {
    const href = typeof to === "string" ? to.trim() : "";
    if (EXTERNAL_HREF.test(href)) {
        const web = /^https?:/i.test(href);
        return <ExternalLinkSt
            color={ color }
            hover={ hover }
            href={ href }
            variant="normal"
            className="link"
            target={ web ? "_blank" : undefined }
            rel={ web ? "noreferrer" : undefined }
            { ...rest }
        >
            { children }
        </ExternalLinkSt>
    }

    return <LinkSt
        color={ color }
        hover={ hover }
        to={ to }
        variant="normal"
        className="link"
        { ...rest }
    >
        { children }
    </LinkSt>
}