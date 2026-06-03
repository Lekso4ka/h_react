import gsap from "gsap";
import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getVenues } from "../../data/venues";
import { Breadcrumbs } from "../Breadcrumbs";
import { Container } from "../Container";
import { ServiceItem } from "../HotelContent/style";
import { Tour } from "../Tour";
import { Block, Buttons, Content, Item, Section, Top } from "./style";
import { remToPixels } from "../../utils/remToPx";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const venues = [
    "viewpoint",
    "ballroom",
    "fisht"
]
const events = [
    "1",
    "2"
]
export const EventsContent = ({}) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const vData = getVenues()
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);
    const trackRef = useRef(null);
    useGSAP(
        () => {
            const gallery = galleryRef.current;
            const track = trackRef.current;
            if (!gallery || !track) return;
            
            const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);
            
            const tween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: gallery,
                    start: `bottom bottom+=${remToPixels(15 - 2.4)}`,
                    end: () => `+=${getScrollDistance()}`,
                    pin: gallery,
                    scrub: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });
            
            return () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        },
        { scope: sectionRef, dependencies: [] }
    );
    
    return <Container bg={ "#F2ECDE" } ref={sectionRef}>
        <div ref={galleryRef}>
        <Block >
            <Breadcrumbs data={ [
                { text: "Главная", link: "/" },
                { text: "Мероприятия" }
            ] }/>
            <Top>
                <h1>Мероприятия и события любого формата, где важны атмосфера и детали.</h1>
                <p>Проводите встречи, презентации и конференции в удобных залах с продуманной атмосферой. Пространства
                    легко адаптируются под формат и количество гостей.</p>
                <p>От камерных ужинов до больших праздников. Красивые залы, внимательная команда и детали, которые
                    делают каждое событие по-настоящему особенным.</p>
            </Top>
            <Section >
                <Buttons>
                    {/*TODO: need component*/ }
                    <ServiceItem
                        cnt={ venues.length }
                        active={ id === "venues" }
                        onClick={ () => id === "venues" ? null : navigate("/events/venues") }
                    >Конференц залы</ServiceItem>
                    <ServiceItem
                        cnt={ events.length }
                        active={ id === "default" }
                        onClick={ () => id === "default" ? null : navigate("/events/default") }
                    >Мероприятия</ServiceItem>
                
                </Buttons>
                <Content ref={trackRef} cnt={ id === "venues" ? venues.length : events.length }>
                    { id === "venues"
                        ? venues.map(el => <Item kei={ el } bg={ vData[el].images[0] }>
                            <div className="text">
                                <h2>{vData[el].name}</h2>
                                <Tour dark link={vData[el].tour_link}/>
                                <div className="line">
                                    <div>
                                        <h4>Площадь</h4>
                                        <div className="digit">
                                            <span>{vData[el].size}</span>
                                            <span className="sign">м<sup>2</sup></span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Вместимость</h4>
                                        <div className="digit">
                                            <span>{vData[el].variants.reduce((acc, item) => Math.max(acc, item.guests), 0) || vData[el].guests}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="list">
                                    <h4>Мероприятия</h4>
                                    <ul>
                                        {vData[el].formats.map(f => <li key={f}>{f}</li>)}
                                    </ul>
                                </div>
                                <Link to={`/venue/${el}`} className="link">
                                    Подробнее
                                </Link>
                            </div>
                            <div className="img"/>
                        </Item>)
                        : <></> }
                </Content>
            </Section>
        </Block>
        </div>
    </Container>
}