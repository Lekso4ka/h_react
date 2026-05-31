import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { RoomsContent } from "../components/RoomsContent";


export const Rooms = () => {
    const {id} = useParams();
    return <Container>
        <RoomsContent id={id}/>
    </Container>
}