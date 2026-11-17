import React from "react";
import { useParams } from "react-router-dom";
import { getHotelById } from "../data";
import { RoomsContent } from "../sections/Rooms";
import { NotFound } from "./NotFound";


export const Rooms = () => {
    const { id } = useParams();
    if (!getHotelById(id)) return <NotFound />;
    return <RoomsContent/>
}