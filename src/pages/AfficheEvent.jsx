import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { AfficheEventContent } from "../components/AfficheEvent";
import { Container } from "../components/Container";
import { Seo } from "../components/Seo";
import { decodeRouteParam, getAfficheById } from "../data";

export const AfficheEvent = () => {
    const { id } = useParams();
    const event = getAfficheById(decodeRouteParam(id));
    if (!event) return <Navigate to="/affiche" replace/>;
    return <Container hh>
        <Seo {...(event.seo || {})}/>
        <AfficheEventContent event={event}/>
    </Container>
}
