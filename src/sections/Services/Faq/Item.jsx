import React, { useRef, useState, useId, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Button, Inner, ItemSt, Panel, Question, Trigger } from "./style";
import { lines } from "../../../utils/lines";

gsap.registerPlugin(useGSAP);

function faqHref(raw) {
    const value = String(raw || "").trim();
    if (!value) return "";
    if (/^(https?:|tel:|mailto:|\/|#)/i.test(value)) return value;
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return `mailto:${value}`;
    const compact = value.replace(/[^\d+]/g, "");
    if (/^\+?\d{5,}$/.test(compact) && !/[a-z]/i.test(value)) return `tel:${compact}`;
    if (/^(?:[a-z0-9-]+\.)+[a-z]{2,}(?:[/?#].*)?$/i.test(value)) return `https://${value}`;
    return value;
}

const OPEN_DURATION = 0.45;
const CLOSE_DURATION = 0.35;

export const Item = ({
    i, question, tooltip, answer, reset, links, refresh, setImg, img
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const panelRef = useRef(null);
    const innerRef = useRef(null);
    const iconRef = useRef(null);
    const panelId = useId();
    const mountedRef = useRef(false);
    
    useEffect(() => {
        if (reset === 0) return;
        setIsOpen(false);
        setImg(null)
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
                setImg(img)
                gsap.set(panel, { height: 0, overflow: "hidden" });
                gsap.set(inner, { opacity: 0, y: -6 });
                
                const targetHeight = inner.offsetHeight;
                gsap.to(panel, {
                    height: targetHeight,
                    duration: OPEN_DURATION,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(panel, { height: "auto", overflow: "visible" });
                    }
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
                setImg(null)
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
    
    return (
        <ItemSt ref={rootRef}>
            <Trigger
                type="button"
                onClick={ () => setIsOpen((v) => !v) }
                aria-expanded={ isOpen }
                aria-controls={ panelId }
            >
                <span className="digit">0{ i + 1 }</span>
                <Question>
                    { lines(question) }
                    { tooltip && <span>{lines(tooltip)}</span>}
                </Question>
                <Button aria-hidden="true">
                    <Icon name="bracket"/>
                    <span ref={ iconRef } >
                        <Icon name="plus" />
                    </span>
                    <Icon name="bracket" left={ false }/>
                </Button>
            </Trigger>
            <Panel ref={ panelRef } id={panelId} role="region" aria-hidden={!isOpen}>
                <Inner ref={innerRef}>
                    <div dangerouslySetInnerHTML={{__html: answer}} />
                    {(links || []).some((el) => faqHref(el?.link || el?.href)) && <div className="links">
                        {(links || []).map((el, i) => {
                            const href = faqHref(el?.link || el?.href);
                            if (!href) return null;
                            return (
                                <Link key={i} to={href} target="_blank" rel="noreferrer">
                                    {lines(el.title)}
                                </Link>
                            );
                        })}
                    </div>}
                </Inner>
            </Panel>
        </ItemSt>
    );
}