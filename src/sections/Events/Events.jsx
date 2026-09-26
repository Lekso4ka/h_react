import React from "react";
import { useT } from "../../Ctx";
import { Item } from "./style";
import { Tour } from "../../components/Tour";
import { Link } from "../../ui/Link";

export const Events = ({ data }) => {
    const t = useT();
    return <>
        { data.map(el => <Item key={ el.id } bg={ el.image }>
            <div className="text">
                <h2>{ el.name }</h2>
                <Tour dark link={ el.tour_link } style={ { visibility: "hidden" } }/>
                <div className="line2">
                    <div>
                        <h4>{ t("area") }</h4>
                        <div className="digit">
                            <span>{ el.size }</span>
                            <span className="sign">{ t("sqm") }<sup>2</sup></span>
                        </div>
                    </div>
                    <div>
                        <h4>{ t("capacity") }</h4>
                        <div className="digit">
                            <span>{ el.guests }</span>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <h4>{ t("advantages") }</h4>
                    <ul>
                        { el.list.map(f => <li key={ f }>{ f }</li>) }
                    </ul>
                </div>
                <Link to={ `/${ el.link }` } className="link">
                    { t("more") }
                </Link>
            </div>
            <div className="img"/>
        </Item>) }
    </>
}