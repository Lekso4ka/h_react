import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCtx, useT } from "../../Ctx";
import { getSectionData } from "../../data/hotels";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Container } from "./style";

export const RoomsContent = () => {
    const { id } = useParams();
    const name = getSectionData(id, "name")
    const s3 = getSectionData(id, "section_3");
    const { mob } = useCtx()
    const t = useT()
    return <Container>
        <Line/>
        <Breadcrumbs data={ [
            { text: t("home"), link: "/" },
            { text: name, link: `/hotel/${ id }` },
            { text: t("rooms"), link: "" }
        ] }/>
        <h1>{ s3.caption }</h1>
        <Line/>
        {mob
            ? <Mobile id={id}/>
            : <>
                <Desktop h={id}/>
                <Line/>
            </>}
    </Container>
}