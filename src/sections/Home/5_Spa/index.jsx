import React from "react";
import { Link } from "../../../ui/Link";
import { Content } from "./style";

export const Spa = () => {
    return <Content bg={"home_spa"}>
        <h4>[ СПА центр ]</h4>
        <h2>Востановите баланс</h2>
        <div className="line"/>
        <Link
            color={ "light" }
            hover={ "light" }
            to=""
        >Подробнее</Link>
    </Content>
}