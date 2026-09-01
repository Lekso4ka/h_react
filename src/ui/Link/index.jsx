import React from "react";
import { LinkSt } from "./style";

export const Link = ({ to, color, hover, children, ...rest }) => {
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