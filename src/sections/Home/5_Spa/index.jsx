import React from "react";
import { useT } from "../../../Ctx";
import { getMain } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";

export const Spa = () => {
    const t = useT();
    const data = getMain()?.spa || {};
    return <Content bg={ data.image }>
        <h4>{ data.label }</h4>
        <h2>{ data.title }</h2>
        <div className="line"/>
        <Link
            color={ "light" }
            hover={ "light" }
            to=""
        >{ t("more") }</Link>
    </Content>
}
