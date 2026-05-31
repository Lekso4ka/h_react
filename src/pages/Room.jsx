import React from "react"
import { Promo } from "../components/Promo";
import { RoomContent } from "../components/RoomContent";
import {Container} from "../components/Container";

export const Room = () => {
    return <Container>
        <RoomContent/>
        <Promo/>
    </Container>
}