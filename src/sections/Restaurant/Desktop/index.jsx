import React from 'react';
import { useT } from "../../../Ctx";
import { Carousel } from "../../../components/Carousel";
import { Link } from "../../../ui/Link";
import { Section } from "./style";
import { lines } from "../../../utils/lines";

export const Desktop = ({data, page}) => {
    const t = useT();
    return <Section pic={ data.image } page={ page }>
        <div className="caption">
            <span>{ lines(data.caption_tooltip) }</span>
            <span>{ lines(data.guests_tooltip) }</span>
            <h2>{ lines(data.caption_1) }</h2>
            <div className="digit">{ data.guests }</div>
        </div>
        <div className="text">
            <p>{ lines(data.text_1) }</p>
            <p>{ lines(data.text_2) }</p>
            <Link to={ "" }>{ lines(t("reserveTable")) }</Link>
        </div>
        <div className="menu">
            <div className="img"/>
            <div className="title">
                <h3>{ lines(data.caption_2) }</h3>
                <Link href={ data.menu_link } target="_blank">{ lines(t("open")) }</Link>
            </div>
            <ul>
                { data.list.map((el, i) => <li key={ i }>
                    <span>{ lines(el.text) }</span>
                    <span>{ lines(el.time) }</span>
                </li>) }
            </ul>
        </div>
        <Carousel className="carousel" images={ data.carousel }/>
    </Section>
}