import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { ServicesContent } from "../sections/Services";

export const Services = () => {
    const { id } = useParams();
    return <>
        <Seo {...getHotelById(id)?.seo_services} />
        <ServicesContent page={true}/>
    </>
}