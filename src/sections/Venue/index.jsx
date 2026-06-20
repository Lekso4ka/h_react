import React from "react";
import { useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getVenueById } from "../../data/venues";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Container } from "./style";

export const VenueContent = () => {
    const { id } = useParams();
    const data = getVenueById(id);
    const { mob } = useCtx()
    return <Container>
        <Breadcrumbs data={ [
            { text: "Главная", link: "/" },
            { text: "Конференц-залы", link: "/events/venues" },
            { text: data.name }
        ] }/>
        {mob
            ? <Mobile data={data}/>
            : <Desktop data={data}/>
        }
    </Container>
}