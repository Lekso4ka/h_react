import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";
import { Container, Image, Images, Track } from "./style";

const SLIDE_MS = 600;

function buildOrder(images, index) {
    const n = images.length;
    if (!n) return [];
    const start = ((index % n) + n) % n;
    const prev = (start - 1 + n) % n;
    const order = [];
    for (let i = 0; i < n; i++) {
        const srcIndex = (prev + i) % n;
        order.push({ id: String(srcIndex), src: images[srcIndex] });
    }
    return order;
}

function withPeek(order) {
    if (order.length >= 4 || order.length <= 1) return order;
    const slides = order.slice();
    let i = 0;
    while (slides.length < 4) {
        const item = order[i % order.length];
        slides.push({
            id: `peek-${i}-${item.id}`,
            src: item.src,
        });
        i += 1;
    }
    return slides;
}

export const Lightbox = ({ data = [], active, index, close }) => {
    const [order, setOrder] = useState([]);
    const [offset, setOffset] = useState(-1);
    const [motion, setMotion] = useState(false);
    const [instant, setInstant] = useState(false);
    const trackRef = useRef(null);
    const orderRef = useRef([]);
    const busyRef = useRef(false);
    const settlingRef = useRef(false);
    const queueRef = useRef([]);
    const dirRef = useRef(null);
    const timerRef = useRef(0);
    const activeRef = useRef(active);
    const wasActiveRef = useRef(false);
    const settleRef = useRef(() => {});
    activeRef.current = active;

    if (active && !wasActiveRef.current) {
        wasActiveRef.current = true;
        const next = buildOrder(data, index);
        orderRef.current = next;
        busyRef.current = false;
        settlingRef.current = false;
        queueRef.current = [];
        dirRef.current = null;
        window.clearTimeout(timerRef.current);
        setOrder(next);
        setOffset(-1);
        setMotion(false);
        setInstant(false);
    } else if (!active && wasActiveRef.current) {
        wasActiveRef.current = false;
        busyRef.current = false;
        settlingRef.current = false;
        queueRef.current = [];
        dirRef.current = null;
        window.clearTimeout(timerRef.current);
    }

    const go = (dir) => {
        if (!active || orderRef.current.length < 2) return;
        if (busyRef.current) {
            queueRef.current.push(dir);
            return;
        }
        busyRef.current = true;
        dirRef.current = dir;
        setMotion(true);
        setOffset(dir === "next" ? -2 : 0);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => settleRef.current(), SLIDE_MS + 80);
    };

    settleRef.current = () => {
        if (!activeRef.current || !busyRef.current || settlingRef.current) return;
        settlingRef.current = true;
        window.clearTimeout(timerRef.current);

        const dir = dirRef.current;
        const arr = orderRef.current.slice();
        if (dir === "next") arr.push(arr.shift());
        else if (dir === "prev") arr.unshift(arr.pop());
        orderRef.current = arr;
        dirRef.current = null;

        setInstant(true);
        setMotion(false);
        setOrder(arr);
        setOffset(-1);

        requestAnimationFrame(() => {
            if (!activeRef.current) {
                settlingRef.current = false;
                busyRef.current = false;
                return;
            }
            setInstant(false);
            requestAnimationFrame(() => {
                settlingRef.current = false;
                busyRef.current = false;
                if (!activeRef.current) return;
                const queued = queueRef.current.shift();
                if (queued) go(queued);
            });
        });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onEnd = (event) => {
            if (event.target !== track || event.propertyName !== "transform") return;
            settleRef.current();
        };
        track.addEventListener("transitionend", onEnd);
        return () => track.removeEventListener("transitionend", onEnd);
    }, []);

    useEffect(() => () => window.clearTimeout(timerRef.current), []);

    const slides = withPeek(order);
    const clearIndex = -offset;

    return <Container active={active}>
        <svg
            className={"close"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            fill="none"
            onClick={close}
        >
            <rect width="34" height="34" fill="#FFF6F0"/>
            <path
                d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                fill="#55532E"/>
        </svg>
        <span
            className="arrow"
            onClick={ () => go("prev") }
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={ () => go("next") }
        ><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
        <Images>
            <Track
                ref={trackRef}
                $count={Math.max(slides.length, 1)}
                $offset={offset}
                $motion={motion}
            >
                { slides.map((slide, i) => <Image
                    key={slide.id}
                    $bg={slide.src}
                    $clear={i === clearIndex}
                    $instant={instant}
                />) }
            </Track>
        </Images>
    </Container>
}
