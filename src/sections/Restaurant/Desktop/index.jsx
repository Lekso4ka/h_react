import React from 'react';
import { Carousel } from "../../../components/Carousel";
import { Link } from "../../../ui/Link";
import { Section } from "./style";

export const Desktop = ({data, page}) => {
    return <Section pic={ data.image } page={ page }>
        <div className="caption">
            <span>{ data.caption_tooltip }</span>
            <span>{ data.guests_tooltip }</span>
            <h2>{ data.caption_1 }</h2>
            <div className="digit">{ data.guests }</div>
        </div>
        <div className="text">
            <p>{ data.text_1 }</p>
            <p>{ data.text_2 }</p>
            <Link to={ "" }>Резерв стола</Link>
        </div>
        <div className="menu">
            <div className="img"/>
            <div className="title">
                <h3>{ data.caption_2 }</h3>
                <Link href={ data.menu_link } target="_blank">Открыть</Link>
            </div>
            <ul>
                { data.list.map((el, i) => <li key={ i }>
                    <span>{ el.text }</span>
                    <span>{ el.time }</span>
                </li>) }
            </ul>
        </div>
        <Carousel className="carousel" images={ data.carousel }/>
    </Section>
}