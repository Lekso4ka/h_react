import React from "react";
import { Link } from "../../../ui/Link";
import { Video } from "../../../ui/Video";
import { Content } from "./style";

export const Spa = () => {
    return <Content>
        <Video data={ ["vi_spa"] } index={0}/>
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