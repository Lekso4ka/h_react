import React from "react";
import { Seo } from "../components/Seo";
import { getLegalPage } from "../data";
import { InfoContent } from "../sections/Info";

export const Info = () => {
    return <>
        <Seo {...getLegalPage("info")?.seo} />
        <InfoContent/>
    </>
}