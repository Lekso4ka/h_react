import React from 'react';
import { Container } from "../components/Container";
import { RestaurantContent } from "../components/RestaurantContent";

export const Restaurant = () => {
    return <Container style={{paddingTop: "9.2rem"}}>
        <RestaurantContent page={true}></RestaurantContent>
    </Container>
}