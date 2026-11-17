import React from 'react';
import { useParams } from "react-router-dom";
import { getHotelById } from "../data";
import { StocksContent } from "../sections/Stocks";
import { NotFound } from "./NotFound";

export const Stocks = () => {
    const { id } = useParams();
    if (!getHotelById(id)) return <NotFound />;
    return <StocksContent/>
}