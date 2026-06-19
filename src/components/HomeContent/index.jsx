import React, { useEffect, useRef, useState } from "react";
import { getVenuesCnt } from "../../data";
import { Activities } from "../../sections/Home/Activities";
import { Hero } from "../../sections/Home/Hero";
import { Images } from "../../sections/Home/Images";
import { Nav } from "../../sections/Home/Nav";
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
    
    
    const [restImages, setRestImages] = useState(rest)
    const restRef = useRef()
    
    const [activeRest, setActiveRest] = useState(0)
    
    
    
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
        <Images/>
        <Nav
            weather={weather}
        />
        <Activities
            weather={weather}
            setWeather={setWeather}
        />
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