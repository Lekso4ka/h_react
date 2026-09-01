import React, { useEffect, useRef, useState } from "react";
import { useCtx } from "../../../Ctx";
import { ActivityBtn } from "../../../ui/ActivityBtn";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Video } from "../../../ui/Video";
import { ActivityCard, Content, HotelCard, Sticky } from "./style";

export const Hero = ({ weather, setWeather }) => {
    const [actGt, setActGt] = useState(false)
    const [actTi, setActTi] = useState(false)
    const [active, setActive] = useState(false);
    const { mob } = useCtx();
    const btn = useRef()
    
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
                data={ ["video_w", "video_s"] }
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
                { weather === "winter" ? "Зима" : "Лето" } на Розе Хутор
            </h1>
            <h4>Комфорт или практичность — выберите свой формат проживания</h4>
            <div className="divider"/>
            <div className="hotels">
                <HotelCard active={ actGt } bg={ "home_gt" }>
                    <h2>Голден тюлип</h2>
                    <div className="stars">
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                    </div>
                    <Link to={ "" } onClick={ (e) => {
                        e.preventDefault();
                        setActGt(true)
                    } }>Выбрать</Link>
                    <span>Комфорт и сервис</span>
                    <div className="card">
                        <div className="content">
                            <div className="top">
                                <div className="stars">
                                    <Icon name="star"/>
                                    <Icon name="star"/>
                                    <Icon name="star"/>
                                    <Icon name="star"/>
                                </div>
                                <button onClick={ () => setActGt(false) }>
                                    закрыть
                                </button>
                            </div>
                            <h2>Голден тюлип</h2>
                            <p>
                                Комфорт и сервис
                                <span>/</span>
                                <a href="tel:+7(862)2431200">Тел. +7 (862) 243 12 00</a>
                            </p>
                            <div className="img"/>
                            <p className="text">
                                Голден Тулип Роза Хутор — четырёхзвёздочный отель в самом центре курорта, на набережной
                                Роза
                                Хутор. В нескольких минутах от подъёмников и ключевой инфраструктуры, с панорамными
                                видами на
                                горы и удобным доступом ко всем возможностям курорта.
                            
                            </p>
                            <div className="links">
                                <Link to="/hotel/golden-tulip">Выбрать отель</Link>
                                <Link to="/rooms/golden-tulip">Номера</Link>
                            </div>
                        </div>
                    </div>
                </HotelCard>
                <HotelCard active={ actTi } bg={ "home_ti" }>
                    <h2>Тюлип инн</h2>
                    <div className="stars">
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                    </div>
                    <Link to={ "" } onClick={ (e) => {
                        e.preventDefault();
                        setActTi(true)
                    } }>Выбрать</Link>
                    <span>Практичный формат</span>
                    <div className="card">
                        <div className="content">
                            <div className="top">
                                <div className="stars">
                                    <Icon name="star"/>
                                    <Icon name="star"/>
                                    <Icon name="star"/>
                                </div>
                                <button onClick={ () => setActTi(false) }>
                                    закрыть
                                </button>
                            </div>
                            <h2>Тюлип инн</h2>
                            <p>
                                Практичный формат
                                <span>/</span>
                                <a href="tel:+7(862)2430000">Тел. +7 (862) 243 00 00</a>
                            </p>
                            <div className="img"/>
                            <p className="text">
                                Тюлип инн — трёхзвёздочный отель в самом центре курорта, на набережной Роза
                                Хутор. В нескольких минутах от подъёмников и ключевой инфраструктуры, с панорамными
                                видами
                                на горы и удобным доступом ко всем возможностям курорта.
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
                    <Video data={["activity_home"]}/>
                    <div className="text">
                        <p>Проживание для детей до 14 лет комплементарно. </p>
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
                <span>{ weather === "winter" ? "зима" : "лето" } ‘26</span>
                <p>Откройте для себя сезон, в котором движение и отдых звучат в одном ритме.</p>
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