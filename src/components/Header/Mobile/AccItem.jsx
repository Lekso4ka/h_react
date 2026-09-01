import React, { useRef, useState, useId, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../ui/Icon";
import { AccButton, AccInner, AccItemSt, AccPanel, AccTitle, AccTrigger } from "./style";

gsap.registerPlugin(useGSAP);

const OPEN_DURATION = 0.45;
const CLOSE_DURATION = 0.35;

export const AccItem = ({
    title, data, reset, close
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const panelRef = useRef(null);
    const innerRef = useRef(null);
    const iconRef = useRef(null);
    const panelId = useId();
    const mountedRef = useRef(false);
    const navigate = useNavigate()
    
    useEffect(() => {
        if (reset === 0) return;
        setIsOpen(false);
    }, [reset]);
    
    useGSAP(
        () => {
            const panel = panelRef.current;
            const inner = innerRef.current;
            const icon = iconRef.current;
            if (!panel || !inner) return;
            
            if (!mountedRef.current) {
                mountedRef.current = true;
                if (!isOpen) {
                    gsap.set(panel, { height: 0, overflow: "hidden" });
                    gsap.set(inner, { opacity: 0 });
                    gsap.set(icon, { rotate: 0 });
                }
                if (!isOpen) return;
            }
            
            gsap.killTweensOf([panel, inner, icon]);
            
            if (isOpen) {
                gsap.set(panel, { height: 0, overflow: "hidden" });
                gsap.set(inner, { opacity: 0, y: -6 });
                
                const targetHeight = inner.offsetHeight;
                gsap.to(panel, {
                    height: targetHeight,
                    duration: OPEN_DURATION,
                    ease: "power2.out",
                    onComplete: () => gsap.set(panel, { height: "auto", overflow: "visible" })
                });
                gsap.to(inner, {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    delay: 0.06,
                    ease: "power2.out"
                });
                gsap.to(icon, { rotate: 45, duration: 0.35, ease: "power2.out" });
            } else {
                gsap.set(panel, { height: panel.offsetHeight, overflow: "hidden" });
                gsap.to(inner, { opacity: 0, y: -4, duration: 0.2, ease: "power2.in" });
                gsap.to(panel, {
                    height: 0,
                    duration: CLOSE_DURATION,
                    ease: "power2.inOut"
                });
                gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.inOut" });
            }
        },
        { scope: rootRef, dependencies: [isOpen] }
    );
    
    
    
    const linkHandler = (e, src) => {
        e.preventDefault();
        navigate(src);
        close();
    }
    return (
        <AccItemSt ref={rootRef}>
            <AccTrigger
                type="button"
                onClick={ () => setIsOpen((v) => !v) }
                aria-expanded={ isOpen }
                aria-controls={ panelId }
            >
                <AccTitle>
                    { title }
                </AccTitle>
                <AccButton aria-hidden="true">
                    <span ref={ iconRef } >
                        <Icon name="plus" />
                    </span>
                </AccButton>
            </AccTrigger>
            <AccPanel ref={ panelRef } id={panelId} role="region" aria-hidden={!isOpen}>
                <AccInner ref={innerRef}>
                    {
                        data.map(el => <Link to="" key={el.title} onClick={(e) => linkHandler(e, el.href)}>{el.title}</Link>)
                    }
                </AccInner>
            </AccPanel>
        </AccItemSt>
    );
}