import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { RestaurantContent } from "../sections/Restaurant";
import { NotFound } from "./NotFound";

export const Restaurant = () => {
    const { id } = useParams();
    const hotel = getHotelById(id);
    if (!hotel) return <NotFound />;
    return <>
        <Seo {...hotel.seo_restaurant} />
        <RestaurantContent page/>
    </>
}