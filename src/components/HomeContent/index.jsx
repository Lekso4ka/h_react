import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { remToPixels } from "../../utils/remToPx";
import { HS2 } from "../HS2";
import { Icon } from "../Icon";
import { Tour } from "../Tour";
import { Hero, HotelCard, Section1, Section2, Section3, Section4, Section5, Section6 } from "./style";
import img from "../../assets/img"

const rest = [
    "res_1",
    "res_2",
    "res_3",
    "res_4",
    "res_5",
    "res_6",
    "res_7",
    "res_8",
    "res_1"
]

export const HomeContent = () => {
    const [weather, setWeather] = useState("winter");
    const [actGt, setActGt] = useState(false)
    const [actTi, setActTi] = useState(false)
    const [restImages, setRestImages] = useState(rest)
    const restRef = useRef()
    
    const [activeRest, setActiveRest] = useState(0)
    useEffect(() => {
        if (activeRest === 0)
            return ;
        const ref = restRef.current
        if (ref) {
            for (let i = 0; i < ref.children.length; i++) {
                let img = ref.children[i];
                img.classList.add("active");
            }
            setTimeout(() => {
                let arr = [...restImages];
                arr.pop()
                for (let i = 0; i < activeRest; i++) {
                    arr.push(arr.shift())
                }
                arr.push(arr[0])
                setRestImages([...arr]);
                setActiveRest(0);
                for (let i = 0; i < ref.children.length; i++) {
                    let img = ref.children[i];
                    img.classList.remove("active");
                }
            }, 600)
        }
    }, [activeRest]);
    return <>
        <Hero activeBtn={ weather === "winter" ? 2 : 1 }>
            <video src={ weather === "winter" ? img["video_w"] : img["video_s"] } autoPlay/>
            <div className="line"/>
            <div className="buttons">
                <button
                    onClick={ () => setWeather("summer") }
                >Лето
                </button>
                <button
                    onClick={ () => setWeather("winter") }
                >зима
                </button>
            </div>
            <h1>
                { weather === "winter" ? "Зима" : "Лето" } на Розе Хутор
            </h1>
            <h4>Комфорт или практичность — выберите свой формат проживания</h4>
            <div className="divider"/>
            <div className="hotels">
                <HotelCard active={ actGt }>
                    <h2>Голден тюлип</h2>
                    <div className="stars">
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                    </div>
                    <button onClick={ () => setActGt(true) }>Выбрать</button>
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
                                    <svg viewBox="0 0 22 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 20V0H3V1.46341H1.23038V18.5366H3V20H0Z" fill="#2F3034"/>
                                        <rect x="17" y="9" width="2" height="12" transform="rotate(90 17 9)"
                                              fill="#2F3034"/>
                                        <path d="M22 20V0H19V1.46341H20.7696V18.5366H19V20H22Z" fill="#2F3034"/>
                                    </svg>
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
                                <Link to="/rooms/golden-tulip">Выбрать номер</Link>
                            </div>
                        </div>
                    </div>
                </HotelCard>
                <HotelCard active={ actTi }>
                    <h2>Тюлип инн</h2>
                    <div className="stars">
                        <Icon name="star"/>
                        <Icon name="star"/>
                        <Icon name="star"/>
                    </div>
                    <button onClick={ () => setActTi(true) }>Выбрать</button>
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
                                    <svg viewBox="0 0 22 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 20V0H3V1.46341H1.23038V18.5366H3V20H0Z" fill="#2F3034"/>
                                        <rect x="17" y="9" width="2" height="12" transform="rotate(90 17 9)"
                                              fill="#2F3034"/>
                                        <path d="M22 20V0H19V1.46341H20.7696V18.5366H19V20H22Z" fill="#2F3034"/>
                                    </svg>
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
                            </p>
                            <div className="links">
                                <Link to="/hotel/tulip-inn">Выбрать отель</Link>
                                <Link to="/rooms/tulip-inn">Выбрать номер</Link>
                            </div>
                        </div>
                    </div>
                </HotelCard>
            </div>
            <div className="activities">
                <span>{ weather === "winter" ? "зима" : "лето" } ‘26</span>
                <p>Откройте для себя сезон, в котором движение и отдых звучат в одном ритме.</p>
                <Link to={ `/activities/${ weather }` }>К активностям</Link>
            </div>
        </Hero>
        <HS2/>
        {/*<div style={ { width: 575 } }>*/}
        {/*    <Section1>*/}
        {/*    */}
        {/*    </Section1>*/}
        {/*    */}
        {/*    <Section2>*/}
        {/*    */}
        {/*    </Section2>*/}
        {/*    */}
        {/*    <Section3>*/}
        {/*    */}
        {/*    </Section3>*/}
        {/*</div>*/}
            
            <Section4>
                <video src={img.vi_spa} autoPlay/>
                <h4>[ СПА центр ]</h4>
                <h2>Востановите баланс</h2>
                <div className="line"/>
                <Link to="">Подробнее</Link>
            </Section4>
        
            <Section5
                bg1={"h_gt_4"}
                bg2={"h_gt_5"}
                bg3={"home_5"}
                bg4={"h_gt_1"}
                bg5={"h_gt_8"}
                bg6={"home_6"}
            >
                <h2>ДВА ОТЕЛЯ В ЦЕНТРЕ КУРОРТА<br/>ДЛЯ ОТДЫХА В ГОРАХ И АКТИВНЫХ ПОЕЗДОК<br/>В ЛЮБОЕ ВРЕМЯ ГОДА</h2>
                <p>Современные пространства, продуманные номера и удобное расположение создают комфортную среду для отдыха. От утренних подъёмов на склон до вечерних прогулок по набережной — здесь всё настроено на лёгкость, разнообразие впечатлений и спокойное возвращение в атмосферу уюта.</p>
                <div className="img img1"/>
                <div className="img img2"/>
                <div className="img img3"/>
                <div className="img img4"/>
                <div className="img img5"/>
                <div className="img img6"/>
                <div className="links">
                    <Link to="/hotel/golden-tulip">Выбрать Голден</Link>
                    <Link to="/hotel/tulip-inn">Выбрать Тюлип</Link>
                </div>
            
            
            </Section5>
            
            <Section6 bg={restImages[activeRest]} cnt={activeRest}>
                <h2>{Math.floor(rest.indexOf(restImages[activeRest]) % 4) === 0 ? "Бранше" : "Амстердам"}</h2>
                <Link className="link" to={`/restaurant/${Math.floor(rest.indexOf(restImages[activeRest]) % 4) === 0 ? "golden-tulip" : "tulip-inn"}`}>О ресторане</Link>
                <Tour pos className="tour"/>
                <div className="list-container">
                    <div className="list" ref={restRef}>
                        { restImages.map(((el, i) => <img
                            src={img[el]}
                            alt=""
                            onClick={() => setActiveRest(i)}
                        />)) }
                    </div>
                </div>
                <div className="cnt">
                    <span className="active">0{rest.indexOf(restImages[activeRest])+1}/</span>
                    <span>0{rest.length - 1}</span>
                </div>
            </Section6>
    </>
}