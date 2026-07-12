import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getHotels } from "../../data/hotels";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { remToPixels } from "../../utils/remToPx";
import { Faq } from "./Faq";
import { Container, Tabs, Section } from "./style";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const names = [
    "golden-tulip",
    "tulip-inn"
]
export const ServicesContent = ({ page }) => {
    const [service, setService] = useState("include")
    const [faqReset, setFaqReset] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [img, setImg] = useState(null)
    const { mob } = useCtx()
    const { id } = useParams();
    const navigate = useNavigate();
    const h = getHotels()
    const ref = useRef()
    useEffect(() => {
        setFaqReset(faqReset + 1)
        setRefresh(true)
    }, [service])
    useEffect(() => {
        if (refresh) {
            ScrollTrigger.refresh()
            setRefresh(false)
        }
    }, [refresh])
    
    useGSAP(
        () => {
            const container = ref.current;
            if (!container) return;
            const mm = gsap.matchMedia();
            
            mm.add(`(min-width: 576px)`, () => {
                const image = container.querySelector(".img")
                const getFaqHeight = () => {
                    return container.offsetHeight - image.offsetHeight;
                };
                
                ScrollTrigger.create({
                    trigger: container,
                    start: `top ${remToPixels(9.2 + 1.8)}`,
                    end: () => `+=${ getFaqHeight() }`,
                    pin: image,
                    //anticipatePin: 1,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onRefresh: (self) => {
                        const newStart = remToPixels(9.2 + 1.8);
                        self.start = `top ${newStart}`;
                        const newEnd = getFaqHeight();
                        self.end = `+=${newEnd}`;
                        self.update();
                    }
                });
                
                return () => {
                    ScrollTrigger.getAll().forEach(st => st.kill());
                };
            })
            return () => mm.revert();
        },
        { scope: ref, dependencies: [] }
    );
    
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
        <Section pic={ img || h[id].section_6.image  } id="services" page={ page }>
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
                    <div className="img"/>
                    <Faq items={ h[id].section_6[service] } reset={ faqReset }/>
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
                    <div ref={ref} className="fix">
                        <div className="img"/>
                        <Faq
                            items={ h[id].section_6[service] }
                            reset={ faqReset }
                            className="faq"
                            refresh={setRefresh}
                            setImg={setImg}
                        />
                    </div>
                </> }
        </Section>
        { !mob && <Line/> }
    </Container>
}