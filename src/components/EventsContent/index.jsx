import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getVenues } from "../../data/venues";
import { Breadcrumbs } from "../Breadcrumbs";
import { Container } from "../Container";
import { ServiceItem } from "../HotelContent/style";
import { Tour } from "../Tour";
import { Block, Buttons, Content, Item, Section, Tooltip, Top } from "./style";
import { remToPixels } from "../../utils/remToPx";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const venues = [
    "viewpoint",
    "ballroom",
    "fisht",
    "oshten",
    "agiba-odin",
    "agiba-dva",
    "elbrus",
    "achishkho",
    "lounge"
]
const events = [
    {
        id: "wedding",
        name: "Свадьба в серце гор",
        size: 250,
        guests: 100,
        image: "we_7_1",
        link: "wedding",
        list: [
            "В самом серце Роза Хутор",
            "Панорамная площадка",
            "Выездная регистрация",
            "Комплимент молодоженам",
            "Скидка на проживание гостей"
        ]
    }
]
export const EventsContent = ({ isPage }) => {
    const [type, setType] = useState("venues");
    const { event } = useParams()
    const vData = getVenues()
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);
    const trackRef = useRef(null);
    useEffect(() => {
        if (event) {
            setType(event)
        }
    }, [event]);
    
    const scrollToTriggerStart = (triggerElement) => {
        if (!triggerElement) return;
        
        // Получаем позицию начала триггера
        const triggerRect = triggerElement.getBoundingClientRect();
        const startPosition = window.scrollY;
        
        // Плавно скроллим к началу триггера
        window.scrollTo({
            top: triggerRect.top,
            //behavior: 'smooth'
        });
    };
    useEffect(() => {
        ScrollTrigger.refresh();
        scrollToTriggerStart(galleryRef.current)
    }, [type]);
    
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
                    start: `bottom bottom+=${ remToPixels(15 - 2.4) }`,
                    end: () => `+=${ getScrollDistance() }`,
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
    
    return <Container bg={ "#F2ECDE" }  style={{paddingTop: isPage ? "14rem" : "15rem"}}>
        <div ref={ sectionRef }>
        {/*<div ref={ galleryRef }>*/}
        <div>
            { !isPage && <Tooltip>[ MICE ]</Tooltip>}
            <Block>
                {isPage && <Breadcrumbs data={ [
                    { text: "Главная", link: "/" },
                    { text: "Мероприятия" }
                ] }/>}
                <Top>
                    <h1>Мероприятия и события любого формата, где важны атмосфера и детали.</h1>
                    <p>Проводите встречи, презентации и конференции в удобных залах с продуманной атмосферой.
                        Пространства
                        легко адаптируются под формат и количество гостей.</p>
                    <p>От камерных ужинов до больших праздников. Красивые залы, внимательная команда и детали, которые
                        делают каждое событие по-настоящему особенным.</p>
                </Top>
                <Section>
                    <Buttons>
                        {/*TODO: need component*/ }
                        <ServiceItem
                            cnt={ venues.length }
                            active={ type === "venues" }
                            onClick={ () => {
                                console.log(type);
                                type !== "venues" && setType("venues")
                            }}
                        >Конференц залы</ServiceItem>
                        <ServiceItem
                            cnt={ events.length }
                            active={ type === "default" }
                            onClick={ () => setType("default")}
                        >Мероприятия</ServiceItem>
                    
                    </Buttons>
                    <Content ref={ trackRef } cnt={ type === "venues" ? venues.length : events.length }>
                        { type === "venues"
                            ? venues.map(el => <Item key={ el } bg={ vData[el].images[0] }>
                                <div className="text">
                                    <h2>{ vData[el].name }</h2>
                                    <Tour dark link={ vData[el].tour_link }/>
                                    <div className="line">
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
                                        <h4>Мероприятия</h4>
                                        <ul>
                                            { vData[el].formats.map(f => <li key={ f }>{ f }</li>) }
                                        </ul>
                                    </div>
                                    <Link to={ `/venue/${ el }` } className="link">
                                        Подробнее
                                    </Link>
                                </div>
                                <div className="img"/>
                            </Item>)
                            : events.map(el => <Item key={ el.id } bg={ el.image }>
                                <div className="text">
                                    <h2>{ el.name }</h2>
                                    <Tour dark link={ el.tour_link } style={{visibility: "hidden"}}/>
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
                                                <span>{ el.guests}</span>
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
                    </Content>
                </Section>
            </Block>
        </div>
        </div>
    </Container>
}