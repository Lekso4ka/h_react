import React from "react";
import { Carousel } from "../../../components/Carousel";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { Section } from "./style";

export const Mobile = ({ data, page }) => {
    return <Section pic={ data.image } page={ page }>
        { page
            ? <div className="page-top">
                <Carousel className="carousel" images={ data.carousel }/>
                <div className="wrapper">
                    <h1>{ data.caption_1 }</h1>
                    <div className="tooltip">{ data.caption_tooltip }</div>
                    <p>{ data.text_1 }</p>
                    <p className="t2">{ data.text_2 }</p>
                </div>
            </div>
            : <div className="top">
                <div className="wrapper">
                    <h2>{ data.caption_1 }</h2>
                    <div className="tooltip">{ data.caption_tooltip }</div>
                    <p>{ data.text_1 }</p>
                </div>
                <Carousel className="carousel" images={ data.carousel }/>
                <div className="wrapper">
                    <p className="t2">{ data.text_2 }</p>
                </div>
            </div>
        }
        <div className="content">
            <Line/>
            <div className="di">
                <p>{ data.guests_tooltip }</p>
                <span className="digit">{ data.guests }</span>
            </div>
            <Line/>
            { data.list.map((el, i) => <p key={ i }>
                { el.text } { el.time }
            </p>) }
            <div className="img"/>
            <Link to={ data.menu_link }>Открыть меню</Link>
            <Link to={""}>Резерв стола</Link>
        </div>
    </Section>
}