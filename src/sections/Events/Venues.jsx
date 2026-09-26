import React from "react";
import { useT } from "../../Ctx";
import { Link } from "../../ui/Link";

import { Item } from "./style";
import { Tour } from "../../components/Tour";
import { getVenues } from "../../data/venues";

export const Venues = ({ data }) => {
    const t = useT();
    const vData = getVenues()
    console.log(vData, data)
    return <>
        { data.map(el => <Item key={ el } bg={ vData[el].img }>
            <div className="text">
                <h2>{ vData[el].name }</h2>
                <Tour dark link={ vData[el].tour_link }/>
                <div className="line2">
                    <div>
                        <h4>{ t("area") }</h4>
                        <div className="digit">
                            <span>{ vData[el].size }</span>
                            <span className="sign">{ t("sqm") }<sup>2</sup></span>
                        </div>
                    </div>
                    <div>
                        <h4>{ t("capacity") }</h4>
                        <div className="digit">
                            <span>{ vData[el].variants.reduce((acc, item) => Math.max(acc, item.guests), 0) || vData[el].guests }</span>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <h4>{ t("events") }</h4>
                    <ul>
                        { vData[el].formats.map(f => <li key={ f }>{ f }</li>) }
                    </ul>
                </div>
                <Link to={ `/venue/${ el }` } className="link">
                    { t("more") }
                </Link>
            </div>
            <div className="img"/>
        </Item>) }
    </>
}