import React from "react";
import { Seo } from "../components/Seo";
import { getLegalPage } from "../data";
import { RulesContent } from "../sections/Rules";

export const Rules = () => {
    return <>
        <Seo {...getLegalPage("rules")?.seo} />
        <RulesContent/>
    </>
}