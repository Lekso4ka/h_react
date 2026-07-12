import React, { useEffect, useState } from "react";
import { useCtx } from "../../Ctx";
import { Line } from "../../ui/Line";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Promo } from "./Promo";
import { Container } from "./style";

export const RoomContent = () => {
    const { mob } = useCtx()
    return <>
        <Container>
        <Line/>
        { mob ? <Mobile/> : <Desktop/>}
        
        </Container>
        <Promo/>
        </>
}