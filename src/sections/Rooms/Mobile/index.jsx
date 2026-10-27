import React, { Fragment } from "react";
import { useT } from "../../../Ctx";
import { getRooms } from "../../../data";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { pluralize } from "../../../utils/pluralize";
import { Block, Item } from "./style";
import { lines } from "../../../utils/lines";

export const Mobile = ({ id }) => {
    const t = useT();
    const data = getRooms(id);
    return <Block>
        { Object.entries(data).map(el => <Item key={ el[0] } bg={ el[1][el[1].variants[0] || "default"].images[0] }>
            <h2>{ lines(el[1].name) }</h2>
            <div className="text">
                <div>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].size }</span>
                    <span>{ lines(t("sqm")) }<sup>2</sup></span>
                </div>
                <div>
                    <span>{ lines(t("upTo")) }</span>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].guests }</span>
                    <span>{ lines(pluralize(el[1][el[1].variants[0] || "default"].guests, t("guestForms"))) }</span>
                </div>
                <div>
                    <span className="digit">{ el[1][el[1].variants[0] || "default"].rooms }</span>
                    <span>{ lines(pluralize(el[1][el[1].variants[0] || "default"].rooms, t("roomForms"))) }</span>
                </div>
            </div>
            <div className="img">
                <div>{ el[1].variants.length > 0 && el[1].variants.map((item, i) => i === 0
                    ? <Fragment key={ i }>
                        <span className="divider">/</span>
                        <span>{ lines(item) }</span>
                        <span className="divider">/</span>
                    </Fragment>
                    : <Fragment key={ i }>
                        <span>{ lines(item) }</span>
                        <span className="divider">/</span>
                    </Fragment>
                ) }</div>
                
            </div>
            <Link to={ `/room/${ id }/${ el[0] }/${el[1].variants[0] || "default"}` }>{ lines(t("viewRoom")) }</Link>
            <Line/>
        </Item>) }
    </Block>
}