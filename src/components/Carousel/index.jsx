
import React, { useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "../Icon";

import { Root, Viewport, Track, Slide, SlideImage, Arrow, Chevron, Dots, Dot, Tour } from "./style";

gsap.registerPlugin(useGSAP);

const TRANSITION_DURATION = 0.65;
const DEFAULT_AUTO_INTERVAL_MS = 3000;

function buildSlides(images) {
    if (images.length <= 1) return images;
    return [images[images.length - 1], ...images, images[0]];
}

function trackIndexToReal(trackIndex, count, loop) {
    if (!loop) return 0;
    if (trackIndex === 0) return count - 1;
    if (trackIndex === count + 1) return 0;
    return trackIndex - 1;
}

export const Carousel = ({ images = [], className, autoPlayInterval = DEFAULT_AUTO_INTERVAL_MS, tour = true }) => {
    const rootRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    
    const trackIndexRef = useRef(0);
    const slideWidthRef = useRef(0);
    const isAnimatingRef = useRef(false);
    const autoTweenRef = useRef(null);
    
    const apiRef = useRef({
        next: () => {},
        prev: () => {},
        goToDot: () => {},
        restartAuto: () => {}
    });
    
    const count = images.length;
    const loop = count > 1;
    const slides = useMemo(() => buildSlides(images), [images]);
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    useGSAP(
        () => {
            const track = trackRef.current;
            const viewport = viewportRef.current;
            if (!track || !viewport || count === 0) return;
            
            const measure = () => {
                slideWidthRef.current = viewport.offsetWidth;
            };
            
            const xAt = (trackIndex) => -trackIndex * slideWidthRef.current;
            
            const settleLoop = (trackIndex) => {
                if (!loop) return trackIndex;
                if (trackIndex === slides.length - 1) {
                    const settled = 1;
                    gsap.set(track, { x: xAt(settled) });
                    return settled;
                }
                if (trackIndex === 0) {
                    const settled = count;
                    gsap.set(track, { x: xAt(settled) });
                    return settled;
                }
                return trackIndex;
            };
            
            const syncActive = (trackIndex) => {
                setActiveIndex(trackIndexToReal(trackIndex, count, loop));
            };
            
            const goToTrackIndex = (targetIndex, { animate = true } = {}) => {
                if (isAnimatingRef.current) return;
                
                const finish = (rawIndex) => {
                    const settled = settleLoop(rawIndex);
                    trackIndexRef.current = settled;
                    syncActive(settled);
                    isAnimatingRef.current = false;
                };
                
                if (!animate || !loop) {
                    gsap.set(track, { x: xAt(targetIndex) });
                    finish(targetIndex);
                    return;
                }
                
                isAnimatingRef.current = true;
                gsap.to(track, {
                    x: xAt(targetIndex),
                    duration: TRANSITION_DURATION,
                    ease: "power2.inOut",
                    overwrite: "auto",
                    onComplete: () => finish(targetIndex)
                });
            };
            
            apiRef.current.next = () => {
                if (count <= 1) return;
                goToTrackIndex(trackIndexRef.current + 1);
            };
            
            apiRef.current.prev = () => {
                if (count <= 1) return;
                goToTrackIndex(trackIndexRef.current - 1);
            };
            
            apiRef.current.goToDot = (dotIndex) => {
                if (count <= 1) return;
                goToTrackIndex(loop ? dotIndex + 1 : 0);
            };
            
            const clearAuto = () => {
                autoTweenRef.current?.kill();
                autoTweenRef.current = null;
            };
            
            const scheduleAuto = () => {
                clearAuto();
                if (count <= 1) return;
                autoTweenRef.current = gsap.delayedCall(autoPlayInterval / 1000, () => {
                    apiRef.current.next();
                    scheduleAuto();
                });
            };
            
            apiRef.current.restartAuto = scheduleAuto;
            
            measure();
            const initial = loop ? 1 : 0;
            trackIndexRef.current = initial;
            gsap.set(track, { x: xAt(initial) });
            syncActive(initial);
            
            const ro = new ResizeObserver(() => {
                measure();
                gsap.set(track, { x: xAt(trackIndexRef.current), overwrite: true });
            });
            ro.observe(viewport);
            
            scheduleAuto();
            
            return () => {
                ro.disconnect();
                clearAuto();
            };
        },
        {
            scope: rootRef,
            dependencies: [count, slides, loop, autoPlayInterval],
            revertOnUpdate: true
        }
    );
    
    const handleManualNav = useCallback((action) => {
        action();
        apiRef.current.restartAuto();
    }, []);
    
    if (count === 0) return null;
    
    return (
        <Root
            ref={rootRef}
            className={className}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery carousel"
        >
            {tour && <Tour>
                <span>Тур</span>
                <span>360°</span>
            </Tour>}
            <Viewport ref={viewportRef}>
                <Track ref={trackRef}>
                    {slides.map((src, i) => (
                        <Slide key={`${src}-${i}`}>
                            <SlideImage src={src} alt="" draggable={false} />
                        </Slide>
                    ))}
                </Track>
            </Viewport>
            {count > 1 && (
                <>
                    <Arrow
                        type="button"
                        $side="left"
                        onClick={() => handleManualNav(apiRef.current.prev)}
                        aria-label="Previous slide"
                    >
                        <Icon name="arrow" />
                    </Arrow>
                    <Arrow
                        type="button"
                        $side="right"
                        onClick={() => handleManualNav(apiRef.current.next)}
                        aria-label="Next slide"
                    >
                        <Icon name="arrow" left={false}/>
                    </Arrow>
                </>
            )}
            {count > 1 && (
                <Dots>
                    {images.map((_, i) => (
                        <Dot
                            key={i}
                            type="button"
                            $active={i === activeIndex}
                            onClick={() => handleManualNav(() => apiRef.current.goToDot(i))}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === activeIndex ? "true" : undefined}
                        />
                    ))}
                </Dots>
            )}
        </Root>
    );
}