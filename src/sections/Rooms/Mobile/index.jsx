import React, { Fragment } from "react";
import { getRooms } from "../../../data";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { pluralize } from "../../../utils/pluralize";
import { Block, Item } from "./style";

export const Mobile = ({ id }) => {
    const data = getRooms(id);
    console.log(Object.entries(data))
    return <Block>
        { Object.entries(data).map(el => <Item key={ el[0] } bg={ el[1][el[1].variants[0] || "default"].images[0] }>
            <h2>{ el[1].name }</h2>
            <div className="text">
                <div>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].size }</span>
                    <span>м<sup>2</sup></span>
                </div>
                <div>
                    <span>до</span>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].guests }</span>
                    <span>{ pluralize(el[1][el[1].variants[0] || "default"].guests, ["гостя", "гостей", "гостей"]) }</span>
                </div>
                <div>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].rooms }</span>
                    <span>{ pluralize(el[1][el[1].variants[0] || "default"].rooms, ["комната", "комнаты", "комнат"]) }</span>
                </div>
            </div>
            <div className="img">
                <div>{ el[1].variants.length > 0 && el[1].variants.map((item, i) => i === 0
                    ? <Fragment key={ i }>
                        <span className="divider">/</span>
                        <span>{ item }</span>
                        <span className="divider">/</span>
                    </Fragment>
                    : <Fragment key={ i }>
                        <span>{ item }</span>
                        <span className="divider">/</span>
                    </Fragment>
                ) }</div>
                
            </div>
            <Link to={ `/room/${ id }/${ el[0] }/${el[1].variants[0] || "default"}` }>Смотреть номер</Link>
            <Line/>
        </Item>) }
    </Block>
}