import React, { useEffect, useRef, useState } from "react";
import { useCtx } from "../../../Ctx";
import { getMain } from "../../../data";
import { ActivityBtn } from "../../../ui/ActivityBtn";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Video } from "../../../ui/Video";
import { ActivityCard, Content, HotelCard, Sticky } from "./style";

const Stars = ({ count }) => (
    <>
        {Array.from({ length: Number(count) || 0 }, (_, i) => (
            <Icon key={i} name="star"/>
        ))}
    </>
);

const telHref = (phone) => `tel:${String(phone || "").replace(/[^\d+]/g, "")}`;

export const Hero = ({ weather, setWeather }) => {
    const [actGt, setActGt] = useState(false)
    const [actTi, setActTi] = useState(false)
    const [active, setActive] = useState(false);
    const { mob } = useCtx();
    const btn = useRef()
    const hero = getMain()?.hero || {};
    const golden = hero.golden_tulip || {};
    const tulip = hero.tulip_inn || {};
    const activity = hero.activity_card || {};
    
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 4000)
    }, [])
    useEffect(() => {
        
        if (btn.current) {
            const handleScroll = () => {
                if (window.scrollY >= 320) {
                    btn.current.style.opacity = 1;
                    btn.current.style.pointerEvents = "auto";
                } else {
                    btn.current.style.opacity = 0;
                    btn.current.style.pointerEvents = "none";
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    });
    return <>
        <Content activeBtn={ weather === "winter" ? 2 : 1 }>
            <Video
                data={ [hero.winter_video, hero.summer_video].filter(Boolean) }
                index={ weather === "winter" ? 0 : 1 }
                h={ mob ? "84.4rem" : null }
            ></Video>
            <div className="line"/>
            <div className="buttons">
                <ActivityBtn
                    active={ weather === "summer" }
                    onClick={ () => setWeather("summer") }
                >
                    Лето
                </ActivityBtn>
                <ActivityBtn
                    active={ weather === "winter" }
                    onClick={ () => setWeather("winter") }
                >
                    Зима
                </ActivityBtn>
            </div>
            <h1>
                { weather === "winter" ? hero.winter_title : hero.summer_title }
            </h1>
            <h4>{ hero.subtitle }</h4>
            <div className="divider"/>
            <div className="hotels">
                <HotelCard active={ actGt } bg={ golden.image }>
                    <h2>{ golden.name }</h2>
                    <div className="stars">
                        <Stars count={ golden.stars }/>
                    </div>
                    <Link to={ "" } onClick={ (e) => {
                        e.preventDefault();
                        setActGt(true)
                    } }>Выбрать</Link>
                    <span>{ golden.tagline }</span>
                    <div className="card">
                        <div className="content">
                            <div className="top">
                                <div className="stars">
                                    <Stars count={ golden.stars }/>
                                </div>
                                <button onClick={ () => setActGt(false) }>
                                    закрыть
                                </button>
                            </div>
                            <h2>{ golden.name }</h2>
                            <p>
                                { golden.tagline }
                                <span>/</span>
                                <a href={ telHref(golden.phone) }>Тел. { golden.phone }</a>
                            </p>
                            <div className="img"/>
                            <p className="text">
                                { golden.text }
                            </p>
                            <div className="links">
                                <Link to="/hotel/golden-tulip">Выбрать отель</Link>
                                <Link to="/rooms/golden-tulip">Номера</Link>
                            </div>
                        </div>
                    </div>
                </HotelCard>
                <HotelCard active={ actTi } bg={ tulip.image }>
                    <h2>{ tulip.name }</h2>
                    <div className="stars">
                        <Stars count={ tulip.stars }/>
                    </div>
                    <Link to={ "" } onClick={ (e) => {
                        e.preventDefault();
                        setActTi(true)
                    } }>Выбрать</Link>
                    <span>{ tulip.tagline }</span>
                    <div className="card">
                        <div className="content">
                            <div className="top">
                                <div className="stars">
                                    <Stars count={ tulip.stars }/>
                                </div>
                                <button onClick={ () => setActTi(false) }>
                                    закрыть
                                </button>
                            </div>
                            <h2>{ tulip.name }</h2>
                            <p>
                                { tulip.tagline }
                                <span>/</span>
                                <a href={ telHref(tulip.phone) }>Тел. { tulip.phone }</a>
                            </p>
                            <div className="img"/>
                            <p className="text">
                                { tulip.text }
                                <br/>
                                <span style={ { color: "transparent" } }>.</span>
                            </p>
                            <div className="links">
                                <Link to="/hotel/tulip-inn">Выбрать отель</Link>
                                <Link to="/rooms/tulip-inn">Номера</Link>
                            </div>
                        </div>
                    </div>
                </HotelCard>
                {<ActivityCard active={active}>
                    <Video data={ activity.video ? [activity.video] : [] }/>
                    <div className="text">
                        <p>{ activity.text }</p>
                        <Link>{mob ? "Узнать цену" : "К активностям"}</Link>
                    </div>
                    <button onClick={() => setActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                                d="M1.13845e-05 1.41417L1.41422 -4.03523e-05L9.89951 8.48524L8.48529 9.89945L1.13845e-05 1.41417Z"/>
                            <path
                                d="M8.48529 -4.03523e-05L9.89951 1.41417L1.41422 9.89945L1.11091e-05 8.48524L8.48529 -4.03523e-05Z"/>
                        </svg>
                    </button>
                </ActivityCard> }
            </div>
            <div className="activities">
                <span>{ weather === "winter" ? hero.season_label_winter : hero.season_label_summer }</span>
                <p>{ hero.season_text }</p>
                <Link
                    color={ "white" }
                    hover={ "white" }
                    to={ `/activities/${ weather }` }
                >К активностям</Link>
            </div>
        </Content>
        { mob && <Sticky ref={ btn }>Бронировать отель</Sticky> }
    </>
}
