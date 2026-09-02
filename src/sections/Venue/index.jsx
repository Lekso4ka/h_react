import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RequestModal } from "../../components/RequestModal";
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
            active={formOpen}
            onClose={() => setFormOpen(false)}
            title="Запрос на мероприятие"
            successMessage="Спасибо за запрос! Мы свяжемся с вами в ближайшее время."
            source="conference"
            values={{ venue: data.name }}
            fields={[
                { name: "venue", label: "Площадка мероприятия", readOnly: true },
                { name: "guests", label: "Число участников", type: "number" },
                { name: "eventDate", label: "Даты мероприятия", type: "date" },
                { name: "name", label: "Имя *", required: true },
                { name: "phone", label: "Телефон *", type: "tel", required: true },
                { name: "email", label: "Почта *", type: "email", required: true },
                { name: "wishes", label: "Пожелания к мероприятию" },
            ]}
        />
    </Container>
}