import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getHotels } from "../../data/hotels";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Faq } from "./Faq";
import { Container, Tabs, Section } from "./style";

const names = [
    "golden-tulip",
    "tulip-inn"
]
export const ServicesContent = ({ page }) => {
    const [service, setService] = useState("include")
    const [faqReset, setFaqReset] = useState(0);
    const { mob } = useCtx()
    const { id } = useParams();
    const navigate = useNavigate();
    const h = getHotels()
    useEffect(() => {
        setFaqReset(faqReset + 1)
    }, [service])
    return <Container page={ page }>
        
        { page && <>
            <Line/>
            <div className="top">
                <Breadcrumbs data={ [
                    { text: "Home", link: "/" },
                    { text: h[id].name, link: `/hotel/${ id }` },
                    { text: "Услуги" }
                ] }/>
                <Tabs>
                    { names.map(el => <SquareItem
                        key={ el }
                        active={ id === el }
                        onClick={ () => navigate(`/services/${ el }`) }>{ h[el].name }</SquareItem>) }
                </Tabs>
            </div>
        </> }
        <Section pic={ h[id].section_6.image } id="services" page={ page }>
            { mob
                ? <>
                    <Line/>
                    <h2>{ h[id].section_6.caption }</h2>
                    <div className="text">
                        <p>{ h[id].section_6.text_1 }</p>
                        <p>{ h[id].section_6.text_2 }</p>
                    </div>
                    <div className="tabs">
                        <SquareItem
                            cnt={ h[id].section_6.include.length }
                            active={ service === "include" }
                            onClick={ () => setService("include") }
                        >Включено</SquareItem>
                        <SquareItem
                            cnt={ h[id].section_6.additional.length }
                            active={ service === "additional" }
                            onClick={ () => setService("additional") }
                        >Дополнительно</SquareItem>
                    </div>
                </>
                : <>
                    <div className="caption">
                        <h2>{ h[id].section_6.caption }</h2>
                        <div className="tabs">
                            <SquareItem
                                cnt={ h[id].section_6.include.length }
                                active={ service === "include" }
                                onClick={ () => setService("include") }
                            >Включено</SquareItem>
                            <SquareItem
                                cnt={ h[id].section_6.additional.length }
                                active={ service === "additional" }
                                onClick={ () => setService("additional") }
                            >Дополнительно</SquareItem>
                        </div>
                    </div>
                    <div className="text">
                        <p>{ h[id].section_6.text_1 }</p>
                        <p>{ h[id].section_6.text_2 }</p>
                    </div>
                </> }
            
            <div className="img"/>
            <Faq items={ h[id].section_6[service] } reset={ faqReset }/>
        </Section>
        { !mob && <Line/> }
    </Container>
}