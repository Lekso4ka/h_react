import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Events } from "./Events";
import { Venues } from "./Venues";
import { Block, Buttons, Container, Content, Section, Tooltip, Top } from "./style";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { useT } from "../../Ctx";
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
    const t = useT();
    const [type, setType] = useState("venues");
    const { event } = useParams()
    const block = getMain()?.events || {};
    const events = block.items || [];
    
    useEffect(() => {
        if (event) {
            setType(event)
        }
    }, [event]);
    
    return <Container page={ page } id={ page ? undefined : "venues" }>
        <Line/>
        { !page && <Tooltip>{ block.label }</Tooltip> }
        <Block>
            { page && <div className="bc">
                <Breadcrumbs data={ [
                    { text: t("home"), link: "/" },
                    { text: t("events") }
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
                    >{ t("venues") }</SquareItem>
                    <SquareItem
                        cnt={ events.length }
                        active={ type === "default" }
                        onClick={ () => setType("default") }
                    >{ t("events") }</SquareItem>
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