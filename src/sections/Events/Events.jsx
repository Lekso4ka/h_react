import React from "react";
import { Item } from "./style";
import { Tour } from "../../components/Tour";
import { Link } from "../../ui/Link";

export const Events = ({ data }) => {
    return <>
        { data.map(el => <Item key={ el.id } bg={ el.image }>
            <div className="text">
                <h2>{ el.name }</h2>
                <Tour dark link={ el.tour_link } style={ { visibility: "hidden" } }/>
                <div className="line">
                    <div>
                        <h4>Площадь</h4>
                        <div className="digit">
                            <span>{ el.size }</span>
                            <span className="sign">м<sup>2</sup></span>
                        </div>
                    </div>
                    <div>
                        <h4>Вместимость</h4>
                        <div className="digit">
                            <span>{ el.guests }</span>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <h4>Преимущества</h4>
                    <ul>
                        { el.list.map(f => <li key={ f }>{ f }</li>) }
                    </ul>
                </div>
                <Link to={ `/${ el.link }` } className="link">
                    Подробнее
                </Link>
            </div>
            <div className="img"/>
        </Item>) }
    </>
}