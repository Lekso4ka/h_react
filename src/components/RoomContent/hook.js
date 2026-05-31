import { useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useRoomInfoPin({ sectionRef, galleryRef, infoRef, asideRef, roomId, lang }) {
    const pinTriggerRef = useRef(null);
    const expandedRef = useRef(0);
    
    const syncAsideHeight = useCallback(() => {
        const info = infoRef.current;
        const aside = asideRef.current;
        if (!info || !aside) return 0;
        
        const height = info.offsetHeight;
        aside.style.minHeight = `${height}px`;
        return height;
    }, [infoRef, asideRef]);
    
    const applyGalleryCompensation = useCallback(
        (expanded) => {
            const gallery = galleryRef.current;
            const trigger = pinTriggerRef.current;
            if (!gallery) return;
            
            const offset = trigger?.isActive ? expanded : 0;
            expandedRef.current = offset;
            gsap.set(gallery, { y: -offset });
        },
        [galleryRef]
    );
    
    const refreshPin = useCallback(() => {
        syncAsideHeight();
        applyGalleryCompensation(expandedRef.current);
        requestAnimationFrame(() => ScrollTrigger.refresh(true));
    }, [syncAsideHeight, applyGalleryCompensation]);
    
    const handleAsideLayoutChange = useCallback(
        ({ expanded = 0 }) => {
            applyGalleryCompensation(expanded);
            syncAsideHeight();
            requestAnimationFrame(() => ScrollTrigger.refresh(true));
        },
        [applyGalleryCompensation, syncAsideHeight]
    );
    
    useGSAP(
        () => {
            const section = sectionRef.current;
            const gallery = galleryRef.current;
            const info = infoRef.current;
            const aside = asideRef.current;
            if (!section || !gallery || !info || !aside) return;
            
            const mm = gsap.matchMedia();
            
            mm.add(`(min-width: 320px)`, () => {
                syncAsideHeight();
                gsap.set(gallery, { y: 0 });
                expandedRef.current = 0;
                
                const trigger = ScrollTrigger.create({
                    trigger: section,
                    start: () => {
                        syncAsideHeight();
                        const pinTop = window.innerHeight - info.offsetHeight;
                        return `top ${pinTop}px`;
                    },
                    end: () => {
                        syncAsideHeight();
                        const diff = gallery.offsetHeight - info.offsetHeight;
                        return `+=${Math.max(0, diff)}`;
                    },
                    pin: info,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onLeaveBack: () => applyGalleryCompensation(0),
                    onEnterBack: () => applyGalleryCompensation(expandedRef.current)
                });
                
                pinTriggerRef.current = trigger;
                
                return () => {
                    pinTriggerRef.current = null;
                    gsap.set(gallery, { y: 0 });
                    trigger.kill();
                };
            });
            
            return () => mm.revert();
        },
        { scope: sectionRef, dependencies: [roomId, lang, syncAsideHeight, applyGalleryCompensation] }
    );
    
    return { pinTriggerRef, refreshPin, handleAsideLayoutChange };
}
