import React from "react";
import { Icon } from "../Icon";
import { Hero, Section1, Section2, Section3 } from "./style";
import {useParams} from "react-router-dom";
import data from "../../data/hotels.json";

export const HotelContent = () => {
    const { id } = useParams();
    const renderStars = () => {
        const arr = []
        console.log(data[id])
        let n = data[id].stars
        while(n--) {
            arr.push(<Icon name="star" key={n}/>)
        }
        return arr;
    }
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
        <Section3
            pic={data[id].section_3.image}
        >
            <h2>{data[id].section_3.caption}</h2>
            <div className="line"></div>
            <div className="content">
                <div>
                    <div className="tooltips">
                        <div>
                            <span className="digit">{data[id].section_3.size}</span>
                            <span>м<sup>2</sup></span>
                        </div>
                        <div>
                            <span>до</span>
                            <span className="digit">{data[id].section_3.guests}</span>
                            <span>гостей</span>
                        </div>
                        <div>
                            <span className="digit">{data[id].section_3.rooms}</span>
                            <span>комната</span>
                        </div>
                    </div>
                    <div className="img"/>
                </div>
                <ul>
                    { data[id].section_3.variants.map(el => <li key={el.id}>
                        <div className="name">
                            {el.name}
                            {el.variants.length > 0 && <sup>[ {el.variants.length} ]</sup>}
                        </div>
                        { el.variants.length > 0 && <div className="variants">
                            {el.variants.map(v => <span key={v}>{v}</span>)}
                        </div>}
                    </li>) }
                </ul>
            </div>
        </Section3>
    </>
}