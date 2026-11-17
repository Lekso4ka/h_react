import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { ServicesContent } from "../sections/Services";
import { NotFound } from "./NotFound";

export const Services = () => {
    const { id } = useParams();
    const hotel = getHotelById(id);
    if (!hotel) return <NotFound />;
    return <>
        <Seo {...hotel.seo_services} />
        <ServicesContent page={true}/>
    </>
}