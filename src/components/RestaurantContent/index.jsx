import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHotels } from "../../data/hotels";
import data from "../../data/hotels.json";
import { Breadcrumbs } from "../Breadcrumbs";
import { Carousel } from "../Carousel";
import { Section5, ServiceItem } from "../HotelContent/style";
import { Container, Line, Section, Tabs } from "./style";

const names = [
    "golden-tulip",
    "tulip-inn"
]

export const RestaurantContent = ({ page }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const h = getHotels()
    return <Container>
        { page && <><Line/>
            <Breadcrumbs data={ [
                { text: "Home", link: "/" },
                { text: "Голден Тулип", link: "/hotel/golden-tulip" },
                { text: "Ресторан Голден Тулип" }
            ] }/>
            <Tabs>
                { names.map(el => <ServiceItem
                    key={ el }
                    active={ id === el }
                    onClick={ () => navigate(`/restaurant/${ el }`) }>{ h[el].name }</ServiceItem>) }
            </Tabs>
        </> }
        <Section pic={ data[id].section_5.image } page={ page }>
            <div className="caption">
                <span>{ data[id].section_5.caption_tooltip }</span>
                <span>{ data[id].section_5.guests_tooltip }</span>
                <h2>{ data[id].section_5.caption_1 }</h2>
                <div className="digit">{ data[id].section_5.guests }</div>
            </div>
            <div className="text">
                <p>{ data[id].section_5.text_1 }</p>
                <p>{ data[id].section_5.text_2 }</p>
                <Link to={ "" }>Резерв стола</Link>
            </div>
            <div className="menu">
                <div className="img"/>
                <div className="title">
                    <h3>{ data[id].section_5.caption_2 }</h3>
                    <a href={ data[id].section_5.menu_link } target="_blank">Открыть</a>
                </div>
                <ul>
                    { data[id].section_5.list.map((el, i) => <li key={ i }>
                        <span>{ el.text }</span>
                        <span>{ el.time }</span>
                    </li>) }
                </ul>
            </div>
            <Carousel className="carousel" images={ data[id].section_5.carousel }/>
        </Section>
    </Container>
}