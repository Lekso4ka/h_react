import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mediaUrl } from "../../utils/mediaUrl";

const DURATION_MS = 550;

const Root = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

const Layer = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    pointer-events: none;
    z-index: ${({ $front }) => ($front ? 1 : 0)};
    opacity: ${({ $front }) => ($front ? 0 : 1)};
    transform: translateZ(0);
    backface-visibility: hidden;
`;

export const FadeBg = ({ src, className }) => {
    const url = mediaUrl(src);
    const baseRef = useRef(null);
    const overlayRef = useRef(null);
    const shownRef = useRef("");
    const animRef = useRef(null);
    const genRef = useRef(0);

    useLayoutEffect(() => {
        const base = baseRef.current;
        const overlay = overlayRef.current;
        if (!base || !overlay || !url) return;
        if (!shownRef.current) {
            base.src = url;
            overlay.src = url;
            shownRef.current = url;
        }
    }, [url]);

    useEffect(() => {
        if (!url || url === shownRef.current) return;

        const id = ++genRef.current;
        const overlay = overlayRef.current;
        const base = baseRef.current;
        if (!overlay || !base) return;

        let cancelled = false;
        let played = false;

        const finish = () => {
            if (cancelled || id !== genRef.current) return;
            base.src = url;
            shownRef.current = url;
            animRef.current?.cancel();
            overlay.style.opacity = "0";
            animRef.current = null;
        };

        const play = () => {
            if (played || cancelled || id !== genRef.current) return;
            played = true;
            overlay.onload = null;
            overlay.onerror = null;
            const anim = overlay.animate(
                [{ opacity: 0 }, { opacity: 1 }],
                { duration: DURATION_MS, easing: "ease-in-out", fill: "forwards" }
            );
            animRef.current = anim;
            anim.finished.then(finish).catch(() => {});
        };

        animRef.current?.cancel();
        const visible = parseFloat(getComputedStyle(overlay).opacity) > 0.01;
        if (visible && (overlay.currentSrc || overlay.src)) {
            base.src = overlay.currentSrc || overlay.src;
        }

        overlay.style.opacity = "0";
        overlay.onload = play;
        overlay.onerror = play;
        if (overlay.getAttribute("src") !== url) {
            overlay.src = url;
        }
        if (overlay.complete) play();

        return () => {
            cancelled = true;
            animRef.current?.cancel();
        };
    }, [url]);

    return (
        <div className={className}>
            <Root>
                <Layer ref={baseRef} alt="" draggable={false} />
                <Layer ref={overlayRef} alt="" draggable={false} $front />
            </Root>
        </div>
    );
};
