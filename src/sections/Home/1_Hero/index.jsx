import React, { useState } from "react";
import { useCtx } from "../../../Ctx";
import { ActivityBtn } from "../../../ui/ActivityBtn";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Video } from "../../../ui/Video";
import { Content, HotelCard } from "./style";

export const Hero = ({weather, setWeather}) => {
    const [actGt, setActGt] = useState(false)
    const [actTi, setActTi] = useState(false)
    const {mob} = useCtx();
    return <Content activeBtn={ weather === "winter" ? 2 : 1 }>
        <Video
            data={["video_w", "video_s"]}
            index={weather === "winter" ? 0 : 1}
            h={mob ? "84.4rem" : null}
        ></Video>
        <div className="line"/>
        <div className="buttons">
            <ActivityBtn
                active={weather === "summer"}
                onClick={ () => setWeather("summer") }
            >
                Лето
            </ActivityBtn>
            <ActivityBtn
                active={weather === "winter"}
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
            <HotelCard active={ actGt } bg={"home_gt"}>
                <h2>Голден тюлип</h2>
                <div className="stars">
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                </div>
                <Link to={""} onClick={ (e) => {e.preventDefault(); setActGt(true)} }>Выбрать</Link>
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
                            <a href="tel:+7(862)2431300">Тел. +7 (862) 243 13 00</a>
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
            <HotelCard active={ actTi } bg={"home_ti"}>
                <h2>Тюлип инн</h2>
                <div className="stars">
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                </div>
                <Link to={""} onClick={ (e) => {e.preventDefault(); setActTi(true)} }>Выбрать</Link>
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
                            <a href="tel:+7(862)2431300">Тел. +7 (862) 243 13 00</a>
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
        </div>
        <div className="activities">
            <span>{ weather === "winter" ? "зима" : "лето" } ‘26</span>
            <p>Откройте для себя сезон, в котором движение и отдых звучат в одном ритме.</p>
            <Link
                color={"white"}
                hover={"white"}
                to={ `/activities/${ weather }` }
            >К активностям</Link>
        </div>
    </Content>
}