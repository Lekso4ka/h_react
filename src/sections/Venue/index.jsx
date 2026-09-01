import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getVenueById } from "../../data/venues";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { RequestModal } from "./RequestModal";
import { Container } from "./style";

export const VenueContent = () => {
    const { id } = useParams();
    const data = getVenueById(id);
    const { mob } = useCtx()
    const [formOpen, setFormOpen] = useState(false);
    return <Container>
        <Breadcrumbs data={ [
            { text: "Главная", link: "/" },
            { text: "Конференц-залы", link: "/events/venues" },
            { text: data.name }
        ] }/>
        {mob
            ? <Mobile data={data} onRequest={() => setFormOpen(true)}/>
            : <Desktop data={data} onRequest={() => setFormOpen(true)}/>
        }
        <RequestModal
            data={data}
            active={formOpen}
            onClose={() => setFormOpen(false)}
        />
    </Container>
}