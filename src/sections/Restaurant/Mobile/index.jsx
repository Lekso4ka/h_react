import React from "react";
import { useT } from "../../../Ctx";
import { Carousel } from "../../../components/Carousel";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { Section } from "./style";
import { lines } from "../../../utils/lines";

export const Mobile = ({ data, page }) => {
    const t = useT();
    return <Section pic={ data.image } page={ page }>
        { page
            ? <div className="page-top">
                <Carousel className="carousel" images={ data.carousel }/>
                <div className="wrapper">
                    <h1>{ lines(data.caption_1) }</h1>
                    <div className="tooltip">{ lines(data.caption_tooltip) }</div>
                    <p>{ lines(data.text_1) }</p>
                    <p className="t2">{ lines(data.text_2) }</p>
                </div>
            </div>
            : <div className="top">
                <div className="wrapper">
                    <h2>{ lines(data.caption_1) }</h2>
                    <div className="tooltip">{ lines(data.caption_tooltip) }</div>
                    <p>{ lines(data.text_1) }</p>
                </div>
                <Carousel className="carousel" images={ data.carousel }/>
                <div className="wrapper">
                    <p className="t2">{ lines(data.text_2) }</p>
                </div>
            </div>
        }
        <div className="content">
            <Line/>
            <div className="di">
                <p>{ lines(data.guests_tooltip) }</p>
                <span className="digit">{ data.guests }</span>
            </div>
            <Line/>
            { data.list.map((el, i) => <p key={ i }>
                { lines(el.text) } { lines(el.time) }
            </p>) }
            <div className="img"/>
            <Link to={ data.menu_link }>{ lines(t("openMenu")) }</Link>
            <Link to={""}>{ lines(t("reserveTable")) }</Link>
        </div>
    </Section>
}