import React from "react";
import { Seo } from "../components/Seo";
import { useCtx } from "../Ctx";
import { t } from "../i18n/strings";
import { useNotFound } from "../status";
import { Link } from "../ui/Link";
import { lines } from "../utils/lines";
import { Wrap } from "./NotFound.style";

export const NotFound = () => {
    const { lang } = useCtx();
    useNotFound();
    const title = t(lang, "notFoundTitle");
    const text = t(lang, "notFoundText");

    return (
        <Wrap>
            <Seo title={title} description={text} />
            <p className="code">404</p>
            <h1>{lines(title)}</h1>
            <p className="text">{lines(text)}</p>
            <Link to="/">{lines(t(lang, "notFoundHome"))}</Link>
        </Wrap>
    );
};
