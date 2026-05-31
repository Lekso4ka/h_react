import React, { useRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BrandPanel } from "./BrandPanel";
import { ColumnsPanel } from "./ColumnsPanel";

import { Drop, Inner } from "./style";

gsap.registerPlugin(useGSAP);

export function Dropdown({
    activeId,
    open,
    top,
    columns = [],
    brands = [],
    onNavigate
}) {
    const dropRef = useRef(null);
    const innerRef = useRef(null);
    
    useGSAP(
        () => {
            const drop = dropRef.current;
            const inner = innerRef.current;
            if (!drop) return;
            
            gsap.killTweensOf([drop, inner]);
            
            if (!open || !activeId) {
                gsap.to(drop, {
                    height: 0,
                    duration: 0.32,
                    ease: "power2.inOut",
                    overwrite: true
                });
                if (inner) {
                    gsap.to(inner, { opacity: 0, y: -10, duration: 0.2, overwrite: true });
                }
                return;
            }
            
            gsap.set(drop, { height: "auto" });
            const targetHeight = drop.offsetHeight;
            gsap.set(drop, { height: 0 });
            
            gsap.to(drop, {
                height: targetHeight,
                duration: 0.46,
                ease: "power3.out",
                overwrite: true,
                onComplete: () => gsap.set(drop, { height: "auto" })
            });
            
            if (inner) {
                gsap.fromTo(
                    inner,
                    { opacity: 0, y: -14 },
                    { opacity: 1, y: 0, duration: 0.36, ease: "power2.out", delay: 0.05, overwrite: true }
                );
            }
        },
        { dependencies: [open, activeId], revertOnUpdate: false }
    );
    
    if (!activeId && !open) return null;
    
    return (
        <Drop ref={dropRef} $top={top} $open={open} aria-hidden={!open}>
            <Inner ref={innerRef} key={activeId}>
                {columns.length > 0
                    ? <ColumnsPanel data={columns} onNavigate={onNavigate}/>
                    : <BrandPanel data={brands} onNavigate={onNavigate}/>
                }
            </Inner>
        </Drop>
    );
}


