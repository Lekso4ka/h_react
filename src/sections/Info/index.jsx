import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Container, Buttons } from "./style";

export const InfoContent = () => {
    const navigate = useNavigate();
    return <Container>
        <Line/>
        <Breadcrumbs data={ [
            { text: "Главная", link: "/" },
            { text: "Правовая информация" }
        ] }/>
        <Buttons>
            <SquareItem
                active
                onClick={ () => navigate("/info") }
            >Правовая информация</SquareItem>
            <SquareItem
                onClick={ () => navigate("/rules") }
            >Правила отеля</SquareItem>
            <SquareItem
                onClick={ () => navigate("/policy") }
            >Политика конфиденциальности</SquareItem>
        </Buttons>
    </Container>
}