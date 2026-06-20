import React from "react";
import { Link } from "../../ui/Link";

import { Item } from "./style";
import { Tour } from "../../components/Tour";
import { getVenues } from "../../data/venues";

export const Venues = ({ data }) => {
    const vData = getVenues()
    
    return <>
        { data.map(el => <Item key={ el } bg={ vData[el].images[0] }>
            <div className="text">
                <h2>{ vData[el].name }</h2>
                <Tour dark link={ vData[el].tour_link }/>
                <div className="line2">
                    <div>
                        <h4>Площадь</h4>
                        <div className="digit">
                            <span>{ vData[el].size }</span>
                            <span className="sign">м<sup>2</sup></span>
                        </div>
                    </div>
                    <div>
                        <h4>Вместимость</h4>
                        <div className="digit">
                            <span>{ vData[el].variants.reduce((acc, item) => Math.max(acc, item.guests), 0) || vData[el].guests }</span>
                        </div>
                    </div>
                </div>
                <div className="list">
                    { vData[el].formats.length > 0
                        ? <>
                            <h4>Мероприятия</h4>
                            <ul>
                                { vData[el].formats.map(f => <li key={ f }>{ f }</li>) }
                            </ul>
                        </>
                        : <>
                            <h4>Варианты рассадки</h4>
                            <ul>
                                { vData[el].variants.map(f => <li key={ f.name }>{ f.name }</li>) }
                            </ul>
                        </>
                    }
                </div>
                <Link to={ `/venue/${ el }` } className="link">
                    Подробнее
                </Link>
            </div>
            <div className="img"/>
        </Item>) }
    </>
}