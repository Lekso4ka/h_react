import React from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getHotelById } from "../data";
import { HotelContent } from "../sections/Hotel";

export const Hotel = () => {
    const { id } = useParams();
    return <>
        <Seo {...getHotelById(id)?.seo} />
        <HotelContent/>
    </>
}