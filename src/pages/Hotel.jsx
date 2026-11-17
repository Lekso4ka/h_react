import React from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { HotelContent } from "../sections/Hotel";
import { NotFound } from "./NotFound";

export const Hotel = () => {
    const { id } = useParams();
    const hotel = getHotelById(id);
    if (!hotel) return <NotFound />;
    return <>
        <Seo {...hotel.seo} />
        <HotelContent/>
    </>
}