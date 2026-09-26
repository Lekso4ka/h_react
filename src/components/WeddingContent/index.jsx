import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "../../ui/Link";
import { Icon } from "../../ui/Icon";
import { Video } from "../../ui/Video";
import { useT } from "../../Ctx";
import { Hero, Section1, Section2, Section3, Section4, Section5, Section6 } from "./style";
import { handlePhoneBlur, handlePhoneFocus, handlePhoneInput, isPhoneComplete, lockPhoneAutofill } from "../../utils/phoneMask";
import {Link as ReactLink} from "react-router-dom";

gsap.registerPlugin(useGSAP);

const SLIDE_NAMES = ["img1", "img2", "img3", "img4", "img5"];
const LOOPED_SLIDES = [...SLIDE_NAMES, ...SLIDE_NAMES, ...SLIDE_NAMES];
const SLIDE_COUNT = SLIDE_NAMES.length;
const START_INDEX = SLIDE_COUNT + 2;
const DESKTOP_MQ = "(min-width: 576px)";
const SIDE_SCALE = 1.25;

const lines = (text) => String(text).split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>{line}{i < arr.length - 1 ? <br/> : null}</React.Fragment>
));

const Section3Gallery = () => {
    const rootRef = useRef(null);
    const apiRef = useRef({ next: () => {}, prev: () => {} });

    useGSAP(
        () => {
            const root = rootRef.current;
            const track = root?.querySelector(".track");
            if (!root || !track) return;

            const imgs = gsap.utils.toArray(".img", track);
            const mq = window.matchMedia(DESKTOP_MQ);
            const geoCenter = (imgs.length - 1) / 2;
            let index = START_INDEX;
            let animating = false;
            let tween;

            const isDesktop = () => mq.matches;
            const sideScale = () => (isDesktop() ? SIDE_SCALE : 1);

            const getStep = () => {
                const img = imgs[0];
                if (!img) return 0;
                const styles = getComputedStyle(track);
                const gap = parseFloat(styles.columnGap || styles.gap) || 0;
                return img.offsetWidth + gap;
            };

            const xAt = (i) => (geoCenter - i) * getStep();

            const applyOrigins = (activeIndex) => {
                imgs.forEach((img, i) => {
                    if (i === activeIndex) return;
                    gsap.set(img, {
                        transformOrigin: i < activeIndex ? "100% 50%" : "0% 50%"
                    });
                });
            };

            const applyRest = (activeIndex) => {
                const scale = sideScale();
                applyOrigins(activeIndex);
                gsap.set(track, { x: xAt(activeIndex) });
                imgs.forEach((img, i) => {
                    gsap.set(img, { scale: i === activeIndex ? 1 : scale });
                });
            };

            const settle = (i) => {
                if (i >= SLIDE_COUNT * 2) return i - SLIDE_COUNT;
                if (i < SLIDE_COUNT) return i + SLIDE_COUNT;
                return i;
            };

            const go = (dir) => {
                if (animating) return;
                animating = true;
                const from = index;
                const target = from + dir;
                const scale = sideScale();

                gsap.set(imgs[from], {
                    transformOrigin: dir > 0 ? "100% 50%" : "0% 50%"
                });

                tween?.kill();
                tween = gsap.timeline({
                    defaults: { ease: "power2.inOut", duration: 0.8, overwrite: "auto" },
                    onComplete: () => {
                        const settled = settle(target);
                        if (settled !== target) applyRest(settled);
                        else applyOrigins(target);
                        index = settled;
                        animating = false;
                    }
                });

                tween.to(track, { x: xAt(target) }, 0);
                if (isDesktop()) {
                    tween.to(imgs[from], { scale }, 0);
                    tween.to(imgs[target], { scale: 1 }, 0);
                }
            };

            gsap.set([track, ...imgs], { force3D: true });
            applyRest(index);

            apiRef.current.next = () => go(1);
            apiRef.current.prev = () => go(-1);

            const ro = new ResizeObserver(() => {
                if (animating) return;
                applyRest(index);
            });
            ro.observe(root);

            const onMq = () => {
                if (animating) return;
                applyRest(index);
            };
            mq.addEventListener("change", onMq);

            return () => {
                tween?.kill();
                ro.disconnect();
                mq.removeEventListener("change", onMq);
            };
        },
        { scope: rootRef }
    );

    return (
        <div className="images" ref={rootRef}>
            <span className="arrow" onClick={() => apiRef.current.prev()}>
                <Icon name="arrow" color="#FFF"/>
            </span>
            <span className="arrow right" onClick={() => apiRef.current.next()}>
                <Icon name="arrow" left={false} color="#FFF"/>
            </span>
            <div className="track">
                {LOOPED_SLIDES.map((name, i) => (
                    <div key={`${name}-${i}`} className={`img ${name}`}/>
                ))}
            </div>
        </div>
    );
};

export const WeddingContent = () => {
    const t = useT();
    const formRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [formReady, setFormReady] = useState(false);

    const scrollToForm = (e) => {
        e.preventDefault();
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const syncFormReady = (form) => {
        const name = form.elements.name.value.trim();
        const phone = form.elements.phone.value;
        const consent = form.elements.consent.checked;
        setFormReady(Boolean(name && isPhoneComplete(phone) && consent));
    };

    const formHandler = async (e) => {
        e.preventDefault();
        if (sent || sending) return;
        const form = e.currentTarget;
        if (!form.elements.consent.checked) return;
        const payload = {
            name: form.elements.name.value.trim(),
            phone: form.elements.phone.value.trim(),
            source: "wedding",
        };
        setSending(true);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || "Ошибка отправки");
            }
            setSent(true);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    }
    return <>
        <Hero>
            <Video data={ ["we_1"] } index={0}/>
            <h4>{ t("weddingPlace") }</h4>
            <h1>{ t("weddingTitle") }</h1>
            <p>{ t("weddingLead") }</p>
            <div className="list">
                <ul>
                    <li>{ lines(t("weddingLi1")) }</li>
                    <li>{ lines(t("weddingLi2")) }</li>
                    <li>{ lines(t("weddingLi3")) }</li>
                </ul>
            </div>
        </Hero>
        <Section1>
            <div className="title">
                <h4>{ t("weddingWhy") }</h4>
                <h2>{ t("weddingDay") }</h2>
            </div>
            <div className="img1"></div>
            <div className="content">
                <div className="line"/>
                <div className="offer">
                    <p>{ t("weddingCare") }</p>
                    <Link to="#wedding-form" onClick={scrollToForm}>{ t("requestOffer") }</Link>
                </div>
            </div>
            <div className="img2"></div>
        </Section1>
        <Section2>
            <div className="content">
                <h4>{ t("newlyweds") }</h4>
                <h2>{ lines(t("weddingGift")) }</h2>
                <ul>
                    <li>
                        <span>01</span>
                        <p>{ lines(t("weddingGift1")) }</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>{ lines(t("weddingGift2")) }</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>{ lines(t("weddingGift3")) }</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>{ lines(t("weddingGift4")) }</p>
                    </li>
                </ul>
            </div>
            <div className="img">
                <span>-15%</span>
                <p>{ lines(t("weddingDiscount")) }</p>
            </div>
        </Section2>
        <Section3>
            <h4>{ t("uniqueOffer") }</h4>
            <h2>{ lines(t("viewpoint360")) }</h2>
            <p>{ t("viewpointLead") }</p>
            <Section3Gallery/>
            <div className="tooltip tooltip1">
                <span>360°</span>
                <p>{ lines(t("viewpointP1")) }</p>
            </div>
            <div className="tooltip tooltip2">
                <span>100</span>
                <p>{ lines(t("viewpointP2")) }</p>
            </div>
        </Section3>
        <Section4>
            <h2>{ lines(t("chooseScenario")) }</h2>
            <ul>
                <li>
                    <div className="img img1"/>
                    <div className="caption">
                        <h3>{ t("outdoorReg") }</h3>
                        <p>{ t("outdoorRegText") }</p>
                    </div>
                </li>
                <li>
                    <div className="img img2"/>
                    <div className="caption">
                        <h3>{ t("photoMountains") }</h3>
                        <p>{ t("photoMountainsText") }</p>
                    </div>
                </li>
                <li>
                    <div className="img img3"/>
                    <div className="caption">
                        <h3>{ t("weddingDinner") }</h3>
                        <p>{ t("weddingDinnerText") }</p>
                    </div>
                </li>
            </ul>
        </Section4>
        <Section5>
            <div className="line"/>
            <div className="title">
                <h4>{ t("weOrganize") }</h4>
                <h2>{ lines(t("forYourDay")) }</h2>
            </div>
            <div className="images">
                <div className="img img1"/>
                <div className="img img2"/>
                <div className="img img3"/>
            </div>
            <ul>
                <li>
                    <span>01</span>
                    <p>{ t("outdoorReg") }</p>
                </li>
                <li>
                    <span>02</span>
                    <p>{ t("banquet") }</p>
                </li>
                <li>
                    <span>03</span>
                    <p>{ t("guestStay") }</p>
                </li>
                <li>
                    <span>04</span>
                    <p>{ t("transfer") }</p>
                </li>
                <li>
                    <span>05</span>
                    <p>{ t("weddingCake") }</p>
                </li>
                <li>
                    <span>06</span>
                    <p>{ t("eventCoord") }</p>
                </li>
                <li>
                    <span>07</span>
                    <p>{ t("decor") }</p>
                </li>
                <li>
                    <span>08</span>
                    <p>{ t("photoVideo") }</p>
                </li>
            </ul>
        </Section5>
        <Section6 id="wedding-form" ref={formRef}>
            <div className="content">
                <h4>{ t("weddingTitle") }</h4>
                <h2>{ t("startWedding") }</h2>
                <p>{ lines(t("startWeddingLead")) }</p>
                <form
                    className={ sent ? "sent" : "" }
                    autoComplete="off"
                    onSubmit={ formHandler }
                    onInput={ (e) => syncFormReady(e.currentTarget) }
                    onChange={ (e) => syncFormReady(e.currentTarget) }
                    onBlur={ (e) => syncFormReady(e.currentTarget) }
                >
                    <div className="form-body">
                        <div className="form-fields">
                            <input type="text" name="name" placeholder={ t("yourName") } required={!sent} autoComplete="off"/>
                            <input
                                type="tel"
                                name="phone"
                                placeholder={ t("phone") }
                                required={!sent}
                                inputMode="tel"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                                ref={lockPhoneAutofill}
                                onFocus={handlePhoneFocus}
                                onInput={handlePhoneInput}
                                onBlur={handlePhoneBlur}
                            />
                            <label className="consent">
                                <input type="checkbox" name="consent" required={!sent}/>
                                { t("consent") } <ReactLink to="/policy">{ t("consentLink") }</ReactLink> { t("consentMid") } <ReactLink to="/policy">{ t("policyLink") }</ReactLink>{ t("consentEnd") }
                            </label>
                        </div>
                        { sent && <p className="form-success">{ t("weddingFormSuccess") }</p> }
                    </div>
                    <button type="submit" disabled={ !formReady || sent || sending }>{ sent ? t("sent") : t("requestOffer") }</button>
                </form>
            </div>
        </Section6>
    </>
}