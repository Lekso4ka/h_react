import React, { useRef } from "react";
import { getMain } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hotels = () => {
    const r1 = useRef()
    const r2 = useRef()
    const r3 = useRef()
    const r4 = useRef()
    const r5 = useRef()
    const sectionRef = useRef()
    
    useGSAP(
        () => {
            const section = sectionRef.current;
            const img1 = r1.current;
            const img2 = r2.current;
            const img3 = r3.current;
            const img4 = r4.current;
            const img5 = r5.current;
            if (!section) return;
            
            const mm = gsap.matchMedia();
            
            mm.add(`(min-width: 576px)`, () => {
                
                const timeline = gsap.timeline({
                    defaults: { ease: "power2.inOut", duration: 1 }
                });
                
                timeline
                    .to(img1, { scale: 1.52 }, 0)
                    .to(img2, { opacity: 0, duration: 1 }, 0)
                    .to(img2, { scale: 2 }, 0)
                    .to(img2, {  yPercent: -100 }, 0)
                    .to(img2, {  xPercent: -100 }, 0)
                    .to(img3, { opacity: 0, duration: 1 }, 0)
                    .to(img3, { scale: 2 }, 0)
                    .to(img3, {  yPercent: 100 }, 0)
                    .to(img3, {  xPercent: -100 }, 0)
                    .to(img4, { opacity: 0, duration: 1 }, 0)
                    .to(img4, { scale: 2 }, 0)
                    .to(img4, {  yPercent: 200 }, 0)
                    .to(img4, {  xPercent: 100 }, 0)
                    .to(img5, { opacity: 0, duration: 1 }, 0)
                    .to(img5, { scale: 2 }, 0)
                    .to(img5, {  yPercent: -200 }, 0)
                    .to(img5, {  xPercent: 100 }, 0)
                
                const trigger = ScrollTrigger.create({
                    trigger: section,
                    start: "center center",
                    //end: () => `+=${window.innerHeight} top`,
                    scrub: 1.5,
                    pin: true,
                    animation: timeline,
                    invalidateOnRefresh: true,
                    //anticipatePin: 1,
                    onLeave: () => section.classList.add("is-complete"),
                    onEnterBack: () => section.classList.remove("is-complete")
                });
                
                
                return () => {
                    trigger.kill();
                    gsap.set([img1, img2, img3, img4, img5], { clearProps: "opacity,scale,transform" });
                };
            });
            
            return () => mm.revert();
        },
        { scope: sectionRef, dependencies: [], revertOnUpdate: true }
    );
    
    const data = getMain()?.hotels || {};
    const images = data.images || [];
    const titleLines = String(data.title || "").split("\n").filter(Boolean);

    return <Content
        bg1={ images[0] }
        bg2={ images[1] }
        bg3={ images[2] }
        bg4={ images[3] }
        bg5={ images[4] }
        ref={sectionRef}
    >
        <h2>
            { titleLines.map((line, index) => (
                <React.Fragment key={ index }>
                    { index > 0 && <br/> }
                    { line }
                </React.Fragment>
            )) }
        </h2>
        <div className="img img1" ref={r1}/>
        <div className="img img2" ref={r2}/>
        <div className="img img3" ref={r3}/>
        <div className="img img4" ref={r4}/>
        <div className="img img5" ref={r5}/>
        <p>{ data.text }</p>
        <div className="links">
            <Link to="/hotel/golden-tulip">Перейти в Голден</Link>
            <Link to="/hotel/tulip-inn">Перейти в Тюлип</Link>
        </div>
    </Content>
}