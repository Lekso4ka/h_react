import React from "react"
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { decodeRouteParam, getRooms } from "../data";
import { RoomContent } from "../sections/Room";
import { NotFound } from "./NotFound";

export const Room = () => {
    const { hotel, id, variant } = useParams();
    const category = getRooms(hotel)?.[id];
    const data = category?.[decodeRouteParam(variant)] || category?.default;
    if (!data) return <NotFound />;

    return <>
        <Seo {...data.seo} />
        <RoomContent/>
    </>
}