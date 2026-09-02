import React from "react"
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { decodeRouteParam, getRoomById } from "../data";
import { RoomContent } from "../sections/Room";

export const Room = () => {
    const { hotel, id, variant } = useParams();
    const category = getRoomById(hotel, id);
    const data = category?.[decodeRouteParam(variant)] || category?.default;

    return <>
        <Seo {...data?.seo} />
        <RoomContent/>
    </>
}