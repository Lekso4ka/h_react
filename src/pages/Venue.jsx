import React from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getVenueById } from "../data";
import { VenueContent } from "../sections/Venue";
import { NotFound } from "./NotFound";

export const Venue = () => {
    const { id } = useParams();
    const venue = getVenueById(id);
    if (!venue) return <NotFound />;
    return <>
        <Seo {...venue.seo} />
        <VenueContent/>
    </>
}