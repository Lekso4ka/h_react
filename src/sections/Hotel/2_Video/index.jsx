import React, { useRef } from "react";
import { Link } from "../../../ui/Link";
import { Video } from "../../../ui/Video";
import { remToPixels } from "../../../utils/remToPx";
import { Content } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const VideoSection = ({ data }) => {
    const videoRef = useRef()
    const sectionRef = useRef()
    
    useGSAP(
        () => {
            const section = sectionRef.current;
            const video = videoRef.current;
            if (!section) return;
            
            const mm = gsap.matchMedia();
            
            mm.add(`(min-width: 576px)`, () => {
                
                const timeline = gsap.timeline({
                    defaults: { ease: "power2.inOut", duration: 1 }
                });
                const vW = video.getBoundingClientRect().width;
                const vH = video.getBoundingClientRect().height;
                const wW = window.outerWidth - (2 * remToPixels(2.4))
                console.log(vW, wW, wW / vW)
                console.log(vH * (wW / vW))
                video.style.marginBottom = vH * (wW / vW) - vH + "px";
                console.log(vH, vH * (wW / vW))
                timeline
                    .to(video, { scale: (wW / vW) }, 0)
                
                const trigger = ScrollTrigger.create({
                    trigger: video,
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
                    gsap.set([video], { clearProps: "opacity,scale,transform" });
                };
            });
            
            return () => mm.revert();
        },
        { scope: sectionRef, dependencies: [], revertOnUpdate: true }
    );
    console.log(data.video_link)
    
    return <Content
        ref={ sectionRef }
    >
        <h2>{ data.caption }</h2>
        <div className="vi" ref={ videoRef } >
            <Video data={ [data.video_link] } index={ 0 } />
        </div>
    </Content>
}