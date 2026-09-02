import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Events } from "./Events";
import { Venues } from "./Venues";
import { Block, Buttons, Container, Content, Section, Tooltip, Top } from "./style";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { getMain } from "../../data";

const venues = [
    "viewpoint",
    "ballroom",
    "fisht",
    "oshten",
    "aibga-odin",
    "aibga-dva",
    "elbrus",
    "achishkho",
    "lounge"
]

export const EventsContent = ({ page }) => {
    const [type, setType] = useState("venues");
    const { event } = useParams()
    const block = getMain()?.events || {};
    const events = block.items || [];
    
    useEffect(() => {
        if (event) {
            setType(event)
        }
    }, [event]);
    
    return <Container page={ page }>
        <Line/>
        { !page && <Tooltip>{ block.label }</Tooltip> }
        <Block>
            { page && <div className="bc">
                <Breadcrumbs data={ [
                    { text: "Главная", link: "/" },
                    { text: "Мероприятия" }
                ] }/>
            </div> }
            <Top>
                <h1>{ block.title }</h1>
                <p>{ block.text_1 }</p>
                <p>{ block.text_2 }</p>
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
                    <div className="wrapper">{ type === "venues"
                        ? <Venues data={ venues }/>
                        : <Events data={ events }/>
                    }</div>
                </Content>
            </Section>
        </Block>
    </Container>
}