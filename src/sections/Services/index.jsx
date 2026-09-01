import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getHotels } from "../../data/hotels";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { FadeBg } from "../../ui/FadeBg";
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

const ServicesImage = ({ className, defaultSrc, srcApiRef }) => {
    const [src, setSrc] = useState(defaultSrc);
    useEffect(() => {
        srcApiRef.current = (next) => setSrc(next || defaultSrc);
        return () => { srcApiRef.current = null; };
    }, [defaultSrc, srcApiRef]);
    useEffect(() => {
        setSrc(defaultSrc);
    }, [defaultSrc]);
    return <FadeBg className={className} src={src || defaultSrc} />;
};

export const ServicesContent = ({ page }) => {
    const [service, setService] = useState("include")
    const [faqReset, setFaqReset] = useState(0);
    const { mob } = useCtx()
    const { id } = useParams();
    const navigate = useNavigate();
    const h = getHotels()
    const ref = useRef()
    const srcApiRef = useRef(null)
    const defaultSrc = h[id].section_6.image
    const setImg = useCallback((next) => {
        srcApiRef.current?.(next)
    }, [])
    const refreshPin = useCallback(() => {
        ScrollTrigger.refresh()
    }, [])
    useEffect(() => {
        setFaqReset(faqReset + 1)
        ScrollTrigger.refresh()
    }, [service])
    
    useGSAP(
        () => {
            const container = ref.current;
            if (!container) return;
            const mm = gsap.matchMedia();
            
            mm.add(`(min-width: 576px)`, () => {
                const image = container.querySelector(".img-pin")
                if (!image) return;
                const getFaqHeight = () => {
                    return Math.max(0, container.offsetHeight - image.offsetHeight);
                };
                
                ScrollTrigger.create({
                    trigger: container,
                    start: () => `top ${remToPixels(9.2 + 1.8)}`,
                    end: () => `+=${ getFaqHeight() }`,
                    pin: image,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
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
        <Section id="services" page={ page }>
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
                    <FadeBg className="img" src={defaultSrc} />
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
                        <div className="img-pin">
                            <ServicesImage
                                className="img"
                                defaultSrc={defaultSrc}
                                srcApiRef={srcApiRef}
                            />
                        </div>
                        <Faq
                            items={ h[id].section_6[service] }
                            reset={ faqReset }
                            className="faq"
                            refresh={refreshPin}
                            setImg={setImg}
                        />
                    </div>
                </> }
        </Section>
        { !mob && <Line/> }
    </Container>
}