import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useT } from "../../../Ctx";
import { getMain } from "../../../data";
import { mediaUrl } from "../../../utils/mediaUrl";
import { Tour } from "../../../components/Tour";
import { Icon } from "../../../ui/Icon";
import { Link } from "../../../ui/Link";
import { Content, Img } from "./style";

gsap.registerPlugin(CustomEase);

const SLIDE_EASE = CustomEase.create("restaurantThumb", ".22,.68,.25,1");
const SLIDE_DURATION = 0.65;

const mod = (n, len) => (n % len + len) % len;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Restaurants = () => {
    const t = useT();
    const data = getMain()?.restaurants || {};
    const slides = data.slides || [];
    console.log(slides)
    const len = slides.length;

    const rootRef = useRef(null);
    const trackRef = useRef(null);
    const titleRef = useRef(null);
    const activeRef = useRef(0);
    const busyRef = useRef(false);
    const queueRef = useRef([]);
    const aliveRef = useRef(true);
    const slidesRef = useRef(slides);
    const moveRef = useRef(async () => {});
    slidesRef.current = slides;

    const [active, setActive] = useState(0);
    const [thumbFrom, setThumbFrom] = useState(0);
    const [lead, setLead] = useState(null);

    const thumbs = [];
    if (lead) thumbs.push(lead);
    if (len) {
        for (let i = 0; i < len; i++) {
            const index = mod(thumbFrom + i + 1, len);
            thumbs.push({
                key: `t-${ thumbFrom }-${ i }`,
                index,
                src: slides[index].image,
                step: i + 1,
            });
        }
    }

    const measure = () => {
        const track = trackRef.current;
        const first = track?.firstElementChild;
        if (!track || !first) return 0;
        const width = first.getBoundingClientRect().width;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap) || 0;
        return width + gap;
    };

    const finish = (next) => {
        if (!aliveRef.current || !trackRef.current) return;
        flushSync(() => {
            setThumbFrom(next);
            setLead(null);
        });
        gsap.set(trackRef.current, { x: 0 });
        busyRef.current = false;
        const queued = queueRef.current.shift();
        if (queued != null) moveRef.current(queued);
    };

    moveRef.current = async (step) => {
        const slidesNow = slidesRef.current;
        const count = slidesNow.length;
        const track = trackRef.current;
        if (!count || !track || !step) return;
        if (busyRef.current) {
            if (queueRef.current.length < 16) queueRef.current.push(step);
            return;
        }

        busyRef.current = true;
        const old = activeRef.current;
        const next = mod(old + step, count);
        const img = rootRef.current?.querySelectorAll(".bg img")[next];
        if (img?.decode) {
            try { await img.decode(); } catch (_) { /* кадр уже может быть в кэше */ }
        }
        if (!aliveRef.current || !trackRef.current) {
            busyRef.current = false;
            return;
        }

        const duration = prefersReducedMotion() ? 0.001 : SLIDE_DURATION;
        const prevName = slidesNow[old]?.name;
        const nextName = slidesNow[next]?.name;
        activeRef.current = next;
        flushSync(() => setActive(next));

        if (titleRef.current && prevName !== nextName) {
            gsap.killTweensOf(titleRef.current);
            gsap.fromTo(titleRef.current, {
                opacity: 0,
                y: 8,
                filter: "blur(4px)",
            }, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration,
                ease: SLIDE_EASE,
                overwrite: "auto",
                clearProps: "filter,transform,opacity",
            });
        }

        if (step < 0) {
            flushSync(() => {
                setLead({
                    key: `lead-${ old }`,
                    index: old,
                    src: slidesNow[old].image,
                    step: 0,
                });
            });
            const distance = measure();
            if (distance <= 0) {
                finish(next);
                return;
            }
            gsap.set(trackRef.current, { x: -distance });
            gsap.to(trackRef.current, {
                x: 0,
                duration,
                ease: SLIDE_EASE,
                overwrite: "auto",
                onComplete: () => finish(next),
            });
            return;
        }

        const distance = measure();
        if (distance <= 0) {
            finish(next);
            return;
        }
        gsap.to(trackRef.current, {
            x: -distance * step,
            duration,
            ease: SLIDE_EASE,
            overwrite: "auto",
            onComplete: () => finish(next),
        });
    };

    useEffect(() => {
        aliveRef.current = true;
        const root = rootRef.current;
        if (!root) return undefined;

        let touchStart = null;

        const onKey = (event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (/INPUT|TEXTAREA|SELECT/.test(event.target?.tagName || "")) return;
            const inside = root.contains(event.target) || root.matches(":hover");
            if (!inside) return;
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            moveRef.current(event.key === "ArrowLeft" ? -1 : 1);
        };

        const onTouchStart = (event) => {
            if (event.target.closest("button,a,.arrow")) return;
            const touch = event.touches[0];
            touchStart = { x: touch.clientX, y: touch.clientY };
        };

        const onTouchEnd = (event) => {
            if (!touchStart) return;
            const dx = event.changedTouches[0].clientX - touchStart.x;
            const dy = event.changedTouches[0].clientY - touchStart.y;
            touchStart = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                moveRef.current(dx < 0 ? 1 : -1);
            }
        };

        const onTouchCancel = () => { touchStart = null; };

        document.addEventListener("keydown", onKey);
        root.addEventListener("touchstart", onTouchStart, { passive: true });
        root.addEventListener("touchend", onTouchEnd, { passive: true });
        root.addEventListener("touchcancel", onTouchCancel, { passive: true });

        return () => {
            aliveRef.current = false;
            busyRef.current = false;
            queueRef.current = [];
            document.removeEventListener("keydown", onKey);
            root.removeEventListener("touchstart", onTouchStart);
            root.removeEventListener("touchend", onTouchEnd);
            root.removeEventListener("touchcancel", onTouchCancel);
            gsap.killTweensOf(trackRef.current);
            if (titleRef.current) gsap.killTweensOf(titleRef.current);
        };
    }, []);

    useEffect(() => {
        if (!len) return;
        if (activeRef.current < len) return;
        activeRef.current = 0;
        setActive(0);
        setThumbFrom(0);
        setLead(null);
        gsap.set(trackRef.current, { x: 0 });
    }, [len]);

    const activeSlide = slides[active] || {};

    return <Content ref={ rootRef }>
        <div className={ "bg" }>
            { slides.map((el, i) => <img className={ active === i ? "active" : "" } key={ i } src={ mediaUrl(el.image) }
                                             alt=""/>) }
        </div>
        <h2 ref={ titleRef }>{ activeSlide.name }</h2>
        <Link
            className="link"
            color={ "light" }
            hover={ "light" }
            to={ `/restaurant/${ activeSlide.hotel || "golden-tulip" }` }
        >{ t("aboutRestaurant") }</Link>
        <Tour pos className="tour"/>
        <span
            className="arrow"
            onClick={ () => moveRef.current(-1) }
        ><Icon name={ "arrow" } color="#FFF"/></span>
        <span
            className="arrow right"
            onClick={ () => moveRef.current(1) }
        ><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
        <div className="list-container">
            <div className="list" ref={ trackRef }>
                { thumbs.map((el) => <Img
                    key={ el.key }
                    bg={ el.src }
                    onClick={ () => {
                        if (!busyRef.current && el.step) moveRef.current(el.step);
                    } }
                />) }
            </div>
        </div>
        <div className="cnt">
            <span className="active">0{ (len ? active : 0) + 1 }/</span>
            <span>0{ len }</span>
        </div>
    </Content>
}
