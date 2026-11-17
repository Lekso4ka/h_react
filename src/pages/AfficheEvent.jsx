import React from "react";
import { useParams } from "react-router-dom";
import { AfficheEventContent } from "../components/AfficheEvent";
import { Container } from "../components/Container";
import { Seo } from "../components/Seo";
import { decodeRouteParam, getAfficheById } from "../data";
import { NotFound } from "./NotFound";

export const AfficheEvent = () => {
    const { id } = useParams();
    const event = getAfficheById(decodeRouteParam(id));
    if (!event) return <NotFound />;
    return <Container hh>
        <Seo {...(event.seo || {})}/>
        <AfficheEventContent event={event}/>
    </Container>
}
