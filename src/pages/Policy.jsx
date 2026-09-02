import React from "react";
import { Seo } from "../components/Seo";
import { getLegalPage } from "../data";
import { PolicyContent } from "../sections/Policy";

export const Policy = () => {
    return <>
        <Seo {...getLegalPage("policy")?.seo} />
        <PolicyContent/>
    </>
}