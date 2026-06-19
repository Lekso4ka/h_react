import React, { useEffect, useRef, useState } from "react";
import { getVenuesCnt } from "../../data";
import { Hero } from "../../sections/Home/Hero";
import { ActivityBtn } from "../../ui/ActivityBtn";
import { Icon } from "../../ui/Icon";
import {Link as RouterLink} from "react-router-dom";
import { Link } from "../../ui/Link";
import { Line } from "../../ui/Line";
import { Tour } from "../Tour";
import { Section1, Section2, Section3, Section4, Section5, Section6 } from "./style";
import img from "../../assets/img";

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

export const HomeContent1 = () => {
    const [weather, setWeather] = useState("winter");
    const [isVisibleImg, setIsVisibleImg] = useState(false);
    const imgRef = useRef(null);
    
    const [restImages, setRestImages] = useState(rest)
    const restRef = useRef()
    
    const [activeRest, setActiveRest] = useState(0)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisibleImg(true);
                    }, 0);
                    observer.disconnect(); // Отключаем после первого появления
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px 50px 0px'
            }
        );
        
        const currentRef = imgRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    useEffect(() => {
        if (activeRest === 0)
            return;
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
            }, 800)
        }
    }, [activeRest]);
    return <>
        
        <Hero
            weather={weather}
            setWeather={setWeather}
        />
        <Section1
            bg1={ "h_banner" }
            bg2={ "home_1" }
            bg3={ "home_2" }
            
            visible={isVisibleImg}
        >
            <Line/>
            <h4>[ Атмосфера и пространство ]</h4>
            <p>Комфортный отдых среди горных склонов курорта.
                Архитектура отеля продолжает природный пейзаж, <span>а светлые интерьеры, натуральные материалы и выверенные пропорции создают спокойную и сдержанную атмосферу</span>.
            </p>
            <div className="img img1" ref={imgRef}></div>
            <div className="img img2"></div>
            <div className="img img3"></div>
            <div className="tooltip">Архитектура, свет и тишина формируют атмосферу отеля.</div>
            <Line/>
        </Section1>
        
        <Section2 bg1={ "h_gt_14" } bg2={ "home_3" }>
            <h4>[ Возможности отеля ]</h4>
            <nav>
                <Link
                    variant="big"
                    to={ `/activities/${ weather }` }
                >Активности</Link>
                <Link
                    variant="big"
                    to=""
                >СПА центр</Link>
                <Link
                    variant="big"
                    to="/restaurant/golden-tulip"
                >Рестораны</Link>
                <Link
                    variant="big"
                    to="/services/golden-tulip"
                >Услуги отеля</Link>
                <Link
                    variant="big"
                    to="/events/default"
                >Мероприятия</Link>
                <Link
                    variant="big"
                    to="/events/venues"
                >Конференц залы<span>[ { getVenuesCnt() } ]</span></Link>
                <Link
                    variant="big"
                    to="/stock/golden-tulip"
                >Акции</Link>
                <Link
                    variant="big"
                    to="/affiche"
                >Афиша</Link>
            </nav>
            <div className="list">
                <div className="room">
                    <h4>Голден Тюлип</h4>
                    <h2>Номера и сьюты</h2>
                    <Link
                        color={"light"}
                        hover={"light"}
                        to="/rooms/golden-tulip"
                    >К номерам</Link>
                </div>
                <div className="room">
                    <h4>Тюлип Инн</h4>
                    <h2>Номера</h2>
                    <Link
                        color={"light"}
                        hover={"light"}
                        to="/rooms/tulip-inn"
                    >К номерам</Link>
                </div>
            </div>
        </Section2>
        { weather === "winter"
            ? <Section3
                bg1={ "winter_4" }
                bg2={ "winter_5" }
                bg3={ "winter_6" }
                activeBtn={ 2 }
            >
                <Line/>
                <div className="content">
                    <h4>[ Активности ]</h4>
                    <h2>Почувствуйте ритм гор — <span>от раннего утра до вечера</span></h2>
                    <p>Сезонные маршруты, панорамные виды и продуманные сценарии отдыха помогают сочетать движение и
                        расслабление в любое время года.</p>
                    <div className="buttons">
                        <ActivityBtn
                            active={weather === "summer"}
                            onClick={ () => setWeather("summer") }
                            variant={2}
                        >Лето</ActivityBtn>
                        <ActivityBtn
                            active={weather === "winter"}
                            onClick={ () => setWeather("winter") }
                            variant={2}
                        >зима</ActivityBtn>
                    </div>
                    <Link to={ `/activities/${ weather }` }>К активностям</Link>
                </div>
                <div className="list-container">
                    <div className="list">
                        <div className="item">
                            <div className="img img1">Зимний ритм</div>
                            <p>Свежий снег, чистый воздух и подготовленные трассы в нескольких минутах от отеля. От
                                первых подъёмников до вечернего apres-ski — ваша зимняя история начинается здесь.</p>
                        </div>
                        <div className="item">
                            <div className="img img2">Прогулки в горах</div>
                            <p>Прогулки по живописным тропам, подъёмы над облаками и тихие панорамные точки.
                                Замедлитесь, вдохните глубже и позвольте природе задать темп вашему дню.</p>
                        </div>
                        <div className="item">
                            <div className="img img3">Восстановление</div>
                            <p>Тёплые бассейны, спа-ритуалы и пространства для восстановления. Сбросьте напряжение,
                                наполнитесь энергией и возвращайтесь к горам обновлёнными.</p>
                        </div>
                    </div>
                </div>
                <Line/>
            </Section3>
            : <Section3
                bg1={ "summer_4" }
                bg2={ "summer_5" }
                bg3={ "summer_6" }
                activeBtn={ 1 }
            >
                <Line/>
                <div className="content">
                    <h4>[ Активности ]</h4>
                    <h2>Поймайте настроение гор — <span>от первых лучей до заката</span></h2>
                    <p>Летние маршруты, живописные виды и спокойный отдых на высоте помогут наполнить каждый день новыми
                        впечатлениями и яркими моментами.</p>
                    <div className="buttons">
                        <ActivityBtn
                            active={weather === "summer"}
                            onClick={ () => setWeather("summer") }
                            variant={2}
                        >Лето</ActivityBtn>
                        <ActivityBtn
                            active={weather === "winter"}
                            onClick={ () => setWeather("winter") }
                            variant={2}
                        >зима</ActivityBtn>
                    </div>
                    <Link to={ `/activities/${ weather }` }>К активностям</Link>
                </div>
                <div className="list-container">
                    <div className="list">
                        <div className="item">
                            <div className="img img1">Треккинг в горах</div>
                            <p>Откройте для себя живописные маршруты среди горных вершин и альпийских лугов. Выбирайте
                                лёгкие прогулки или более продолжительные походы, наслаждаясь природой и свежим воздухом
                                на каждом шагу.</p>
                        </div>
                        <div className="item">
                            <div className="img img2">Аренда яхты</div>
                            <p>Проведите день в своём ритме: любуйтесь закатами, отдыхайте у воды и наслаждайтесь
                                атмосферой полного спокойствия. Иногда лучшие впечатления начинаются именно с паузы.</p>
                        </div>
                        <div className="item">
                            <div className="img img3">Хамам и Сауна</div>
                            <p>ТПосле насыщенного дня восстановите силы в пространстве для отдыха и расслабления. Тепло,
                                тишина и забота о себе помогут снять напряжение и почувствовать настоящее
                                обновление.</p>
                        </div>
                    </div>
                </div>
                <Line/>
            </Section3>
        }
        
        <Section4>
            <video src={ img.vi_spa } autoPlay/>
            <h4>[ СПА центр ]</h4>
            <h2>Востановите баланс</h2>
            <div className="line"/>
            <Link
                color={"light"}
                hover={"light"}
                to=""
            >Подробнее</Link>
        </Section4>
        
        <Section5
            bg1={ "h_gt_4" }
            bg2={ "h_gt_5" }
            bg3={ "home_5" }
            bg4={ "h_gt_1" }
            bg5={ "h_gt_8" }
            bg6={ "home_6" }
        >
            <h2>ДВА ОТЕЛЯ В ЦЕНТРЕ КУРОРТА<br/>ДЛЯ ОТДЫХА В ГОРАХ И АКТИВНЫХ ПОЕЗДОК<br/>В ЛЮБОЕ ВРЕМЯ ГОДА</h2>
            <p>Современные пространства, продуманные номера и удобное расположение создают комфортную среду для отдыха.
                От утренних подъёмов на склон до вечерних прогулок по набережной — здесь всё настроено на лёгкость,
                разнообразие впечатлений и спокойное возвращение в атмосферу уюта.</p>
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
        
        <Section6 bg={ restImages[activeRest] } cnt={ activeRest }>
            <h2>{ Math.floor(rest.indexOf(restImages[activeRest]) % 4) === 0 ? "Бранше" : "Амстердам" }</h2>
            <Link
                className="link"
                color={"light"}
                hover={"light"}
                to={ `/restaurant/${ Math.floor(rest.indexOf(restImages[activeRest]) % 4) === 0 ? "golden-tulip" : "tulip-inn" }` }
            >О ресторане</Link>
            <Tour pos className="tour"/>
            <div className="list-container">
                <div className="list" ref={ restRef }>
                    { restImages.map(((el, i) => <img
                        src={ img[el] }
                        alt=""
                        onClick={ () => setActiveRest(i) }
                    />)) }
                </div>
            </div>
            <div className="cnt">
                <span className="active">0{ rest.indexOf(restImages[activeRest]) + 1 }/</span>
                <span>0{ rest.length - 1 }</span>
            </div>
        </Section6>
    </>
}