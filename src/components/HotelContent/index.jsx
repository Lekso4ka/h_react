import React, { Fragment, useEffect, useState } from "react";
import { Faq } from "../Faq";
import { Icon } from "../Icon";
import {
    Hero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    ServiceItem
} from "./style";
import { Link, useParams } from "react-router-dom";
import data from "../../data/hotels.json";
import { Carousel } from "../Carousel";
import img from "../../assets/img";

export const HotelContent = () => {
    const { id } = useParams();
    const [service, setService] = useState("include")
    const [faqReset, setFaqReset] = useState(0);
    const [activeServices, setActiveServices] = useState([]);
    const renderStars = () => {
        const arr = []
        let n = data[id].stars
        while(n--) {
            arr.push(<Icon name="star" key={n}/>)
        }
        return arr;
    }
    
    useEffect(() => {
        setFaqReset(faqReset + 1)
    }, [service])
    return <>
        <Hero/>
        <Section1>
            <div className="top">
                <div className="title">
                    <div className="stars">
                        {renderStars()}
                    </div>
                    <span>{data[id].name_tooltip}</span>
                    <h1>{data[id].name}</h1>
                </div>
                <p>{data[id].text_1}</p>
                <p>{data[id].text_2}</p>
                <p className="address">{data[id].address}</p>
                <a href={data[id].room_link}>Выбрать номер</a>
            </div>
            <div className="content">
                <h2>{data[id].section_1.caption}</h2>
                <div className="video"></div>
            </div>
        </Section1>
        <Section2
            pic1={data[id].section_2.image_1}
            pic2={data[id].section_2.image_2}
        >
            <div className="content">
                <span>{data[id].section_2.tooltip}</span>
                <h2>{data[id].section_2.caption}</h2>
                <div className="img-left" />
                <p>{data[id].section_2.text}</p>
            </div>
            <div className="img-right"/>
        </Section2>
        
        <Section4 pics={data[id].section_4.images} pos={data[id].section_4.image_positions}>
            <h2>{data[id].section_4.caption}</h2>
            <p>{data[id].section_4.text}</p>
            <div className="img-c"/>
            <Link to={data[id].section_4.events_link}>События курорта</Link>
            <div className="img-lt"/>
            <div className="img-rt"/>
            <div className="img-lb"/>
            <div className="img-rb"/>
        </Section4>
        <Section5 pic={data[id].section_5.image}>
            <div className="caption">
                <span>{data[id].section_5.caption_tooltip}</span>
                <span>{data[id].section_5.guests_tooltip}</span>
                <h2>{data[id].section_5.caption_1}</h2>
                <div className="digit">{data[id].section_5.guests}</div>
            </div>
            <div className="text">
                <p>{data[id].section_5.text_1}</p>
                <p>{data[id].section_5.text_2}</p>
                <Link to={""}>Резерв стола</Link>
            </div>
            <div className="menu">
                <div className="img"/>
                <div className="title">
                    <h3>{data[id].section_5.caption_2}</h3>
                    <a href={data[id].section_5.menu_link} target="_blank">Открыть</a>
                </div>
                <ul>
                    {data[id].section_5.list.map((el, i) => <li key={i}>
                        <span>{el.text}</span>
                        <span>{el.time}</span>
                    </li>) }
                </ul>
            </div>
            <Carousel className="carousel" images={data[id].section_5.carousel}/>
        </Section5>
        <Section6 pic={data[id].section_6.image} id="services">
            <div className="caption">
                <h2>{data[id].section_6.caption}</h2>
                <ServiceItem
                    cnt={data[id].section_6.include.length}
                    active={service === "include"}
                    onClick={() => setService("include")}
                >Включено</ServiceItem>
                <ServiceItem
                    cnt={data[id].section_6.additional.length}
                    active={service === "additional"}
                    onClick={() => setService("additional")}
                >Дополнительно</ServiceItem>
            </div>
            <div className="text">
                <p>{data[id].section_6.text_1}</p>
                <p>{data[id].section_6.text_2}</p>
            </div>
            <div className="img"/>
            <Faq items={data[id].section_6[service]} reset={faqReset}/>
        </Section6>
    </>
}