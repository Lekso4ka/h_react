import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Events } from "./Events";
import { Venues } from "./Venues";
import { Block, Buttons, Container, Content, Section, Tooltip, Top } from "./style";
import { ServiceItem } from "../../components/HotelContent/style";
import { Breadcrumbs } from "../../ui/Breadcrumbs";

const venues = [
    "viewpoint",
    "ballroom",
    "fisht",
    "oshten",
    "agiba-odin",
    "agiba-dva",
    "elbrus",
    "achishkho",
    "lounge"
]

const events = [
    {
        id: "wedding",
        name: "Свадьба в серце гор",
        size: 250,
        guests: 100,
        image: "we_7_1",
        link: "wedding",
        list: [
            "В самом серце Роза Хутор",
            "Панорамная площадка",
            "Выездная регистрация",
            "Комплимент молодоженам",
            "Скидка на проживание гостей"
        ]
    }
]

export const EventsContent = ({ page }) => {
    const [type, setType] = useState("venues");
    const { event } = useParams()
    
    useEffect(() => {
        if (event) {
            setType(event)
        }
    }, [event]);
    
    return <Container page={ page }>
        { !page && <Line/> }
        { !page && <Tooltip>[ MICE ]</Tooltip> }
        <Block>
            { page && <Breadcrumbs data={ [
                { text: "Главная", link: "/" },
                { text: "Мероприятия" }
            ] }/> }
            <Top>
                <h1>Мероприятия и события любого формата, где важны атмосфера и детали.</h1>
                <p>Проводите встречи, презентации и конференции в удобных залах с продуманной атмосферой.
                    Пространства
                    легко адаптируются под формат и количество гостей.</p>
                <p>От камерных ужинов до больших праздников. Красивые залы, внимательная команда и детали,
                    которые
                    делают каждое событие по-настоящему особенным.</p>
            </Top>
            <Section>
                <Buttons>
                    {/*TODO: need component*/ }
                    <SquareItem
                        cnt={ venues.length }
                        active={ type === "venues" }
                        onClick={ () => {
                            console.log(type);
                            type !== "venues" && setType("venues")
                        } }
                    >Конференц залы</SquareItem>
                    <SquareItem
                        cnt={ events.length }
                        active={ type === "default" }
                        onClick={ () => setType("default") }
                    >Мероприятия</SquareItem>
                </Buttons>
                <Content cnt={ type === "venues" ? venues.length : events.length }>
                    { type === "venues"
                        ? <Venues data={ venues }/>
                        : <Events data={ events }/>
                    }
                </Content>
            </Section>
        </Block>
    </Container>
}