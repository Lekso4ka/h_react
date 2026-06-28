import React, { Fragment} from "react";
import { getHotelById } from "../../data";
import { RestaurantContent } from "../../components/RestaurantContent";
import data from "../../data/hotels.json";
import { EventsContent } from "../Events";
import { ServicesContent } from "../Services";
import { Caption } from "./1_Caption";
import { Info } from "./3_Info";
import { Images } from "./4_Img";
import { Rooms } from "./5_Rooms";
import { useParams } from "react-router-dom";
import { VideoSection } from "./2_Video";

export const HotelContent = () => {
    const { id } = useParams();
    const data = getHotelById(id)
    return <>
        <Caption data={data}/>
        <VideoSection data={data.section_1}/>
        <Info data={data.section_2}/>
        <Images data={data.section_4}/>
        <Rooms data={data.section_3} name={data.name}/>
        <RestaurantContent/>
        <ServicesContent/>
        <EventsContent/>
    </>
}