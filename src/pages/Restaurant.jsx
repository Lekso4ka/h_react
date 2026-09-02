import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { RestaurantContent } from "../sections/Restaurant";

export const Restaurant = () => {
    const { id } = useParams();
    return <>
        <Seo {...getHotelById(id)?.seo_restaurant} />
        <RestaurantContent page/>
    </>
}