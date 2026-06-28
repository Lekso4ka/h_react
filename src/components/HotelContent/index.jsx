import img from "../../assets/img"
import React, { Fragment, useEffect, useState } from "react";
import { Images } from "../../sections/Hotel/Img";
import { VideoSection } from "../../sections/Hotel/Video";
import { Icon } from "../../ui/Icon";
import { RestaurantContent } from "../RestaurantContent";
import { ServicesContent } from "../ServicesContent";
import {
    Hero,
    Section1,
    Section2, Section3,
    Section4,
} from "./style";
import { useParams } from "react-router-dom";
import data from "../../data/hotels.json";
import { Link } from "../../ui/Link"

export const HotelContent = () => {
    const { id } = useParams();
    
    return <>
        <Hero bg={data[id].banner}/>
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
            <VideoSection data={data[id].section_1}/>
            {/*<div className="content">*/}
            {/*    <h2>{data[id].section_1.caption}</h2>*/}
            {/*    <div className="video">*/}
            {/*        <Video data={ [data[id].section_1.video_link] } index={0}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
        <Section3 pic={data[id].section_3.bg}>
            <div className="tooltip">{data[id].name}</div>
            <h2>{data[id].section_3.caption}</h2>
            <Link
                to={data[id].room_link}
                color={"light"}
                hover={"light"}
            >К номерам</Link>
        </Section3>
        {/*<Section4 pics={data[id].section_4.images} pos={data[id].section_4.image_positions}>*/}
        {/*    <h2>{data[id].section_4.caption}</h2>*/}
        {/*    <p>{data[id].section_4.text}</p>*/}
        {/*    <div className="img-c"/>*/}
        {/*    <Link to={data[id].section_4.events_link}>События курорта</Link>*/}
        {/*    <div className="img-lt"/>*/}
        {/*    <div className="img-rt"/>*/}
        {/*    <div className="img-lb"/>*/}
        {/*    <div className="img-rb"/>*/}
        {/*</Section4>*/}
        <Images data={data[id].section_4}/>
        <RestaurantContent/>
        <ServicesContent/>
        
    </>
}