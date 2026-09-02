import React from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getVenueById } from "../data";
import { VenueContent } from "../sections/Venue";

export const Venue = () => {
    const { id } = useParams();
    return <>
        <Seo {...getVenueById(id)?.seo} />
        <VenueContent/>
    </>
}