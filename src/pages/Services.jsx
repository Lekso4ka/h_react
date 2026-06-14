import React from 'react';
import { Container } from "../components/Container";
import { ServicesContent } from "../components/ServicesContent";

export const Services = () => {
    return <Container style={{paddingTop: "9.2rem"}}>
        <ServicesContent page={true}></ServicesContent>
    </Container>
}