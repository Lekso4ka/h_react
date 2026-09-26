import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RequestModal } from "../../components/RequestModal";
import { useCtx, useT } from "../../Ctx";
import { getVenueById } from "../../data/venues";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Container } from "./style";

export const VenueContent = () => {
    const { id } = useParams();
    const data = getVenueById(id);
    const { mob } = useCtx()
    const t = useT()
    const [formOpen, setFormOpen] = useState(false);
    return <Container>
        <Breadcrumbs data={ [
            { text: t("home"), link: "/" },
            { text: t("venues"), link: "/events/venues" },
            { text: data.name }
        ] }/>
        {mob
            ? <Mobile data={data} onRequest={() => setFormOpen(true)}/>
            : <Desktop data={data} onRequest={() => setFormOpen(true)}/>
        }
        <RequestModal
            active={formOpen}
            onClose={() => setFormOpen(false)}
            title={ t("eventRequest") }
            successMessage={ t("eventRequestSuccess") }
            source="conference"
            values={{ venue: data.name }}
            fields={[
                { name: "venue", label: t("eventVenue"), readOnly: true },
                { name: "guests", label: t("guestsCount"), type: "number" },
                { name: "eventDate", label: t("eventDates"), type: "date" },
                { name: "name", label: t("nameStar"), required: true },
                { name: "phone", label: t("phoneStar"), type: "tel", required: true },
                { name: "email", label: t("emailStar"), type: "email", required: true },
                { name: "wishes", label: t("eventWishes"), type: "textarea" },
            ]}
        />
    </Container>
}