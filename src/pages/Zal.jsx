import React from "react"

import styled from "@emotion/styled"
import z1 from "../assets/images/z1.png"
import z2 from "../assets/images/z2.png"
import z3 from "../assets/images/z3.png"

const Page = styled.div`
    --black-2: #2f3034;
    --black: #1c1c1c;
    --green: #55532e;
    --beige: #fff6f0;
    --beige-2: #f2ecde;
    --card-bg: #fff3e3;
    --card-border: rgba(255, 246, 240, 0.3);
    --map-bg: #565861;
    --book-red: #96281f;
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Header (Component 6) */
    .topbar {
        background: var(--beige);
        height: 9.2rem;
        display: flex;
        align-items: center;
        padding: 0 2.4rem;
    }

    .topbar__row {
        width: 100%;
        max-width: 192.0rem;
        margin: 0 auto;
        height: 9.2rem;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }

    .topbar__brand {
        width: 21.6rem;
        font-family: "Playfair Display", serif;
        font-weight: 600;
        font-size: 2.2rem;
        line-height: 0.98;
        text-transform: uppercase;
        text-align: center;
        color: var(--black-2);
        white-space: pre-wrap;
    }

    .topbar__menus {
        display: flex;
        align-items: center;
        gap: 4.0rem;
        font-family: "Playfair Display", serif;
        font-weight: 600;
        font-size: 1.8rem;
        letter-spacing: 0.072rem;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--black-2);
    }

    .topbar__menus .item {
        display: inline-flex;
        align-items: center;
        gap: .8rem;
    }

    .plus {
        width: 2.0rem;
        height: 2.0rem;
        position: relative;
        flex: 0 0 auto;
    }
    .plus::before,
    .plus::after {
        content: "";
        position: absolute;
        background: var(--black-2);
    }
    .plus::before { width: .22rem; height: 1.4rem; left: .89rem; top: .3rem; }
    .plus::after { height: .22rem; width: 1.4rem; left: .3rem; top: .89rem; }

    .topbar__rightside {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4.0rem;
        font-family: "Playfair Display", serif;
        font-weight: 600;
        font-size: 1.8rem;
        letter-spacing: .072rem;
        text-transform: uppercase;
        color: var(--black-2);
        white-space: nowrap;
    }

    .topbar__book {
        width: 20.0rem;
        height: 3.8rem;
        background: var(--book-red);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .topbar__book span {
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-size: 1.8rem;
        letter-spacing: .072rem;
        text-transform: uppercase;
        color: var(--beige);
    }

    .topbar__lang {
        display: flex;
        gap: .4rem;
        align-items: center;
        font-family: "Playfair Display", serif;
        font-size: 1.8rem;
        letter-spacing: .072rem;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .topbar__lang .muted { color: rgba(47, 48, 52, 0.4); font-weight: 600; }
    .topbar__lang .solid { color: var(--black-2); font-weight: 600; }
    .topbar__lang .sep { color: var(--black-2); font-weight: 500; }

    /* Main layout */
    .container {
        max-width: 192.0rem;
        margin: 0 auto;
        padding: 0 2.4rem;
    }

    .main {
        padding-top: 11.8rem; /* matches screenshot spacing under topbar */
    }

    .grid {
        display: grid;
        grid-template-columns: 29.2rem 29.3rem 92.5rem;
        column-gap: 18.0rem;
        align-items: start;
    }

    /* Breadcrumbs */
    .crumbs {
        display: flex;
        gap: 1.0rem;
        align-items: center;
        line-height: 1;
        white-space: nowrap;
        text-align: center;
        margin-bottom: 6.4rem;
    }
    .crumbs a,
    .crumbs span {
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(47, 48, 52, 0.4);
        text-decoration: none;
    }
    .crumbs .sep {
        font-weight: 200;
        font-size: 2.4rem;
        line-height: 1;
        transform: translateY(-.2rem);
    }
    .crumbs .current {
        color: var(--black-2);
    }

    h1 {
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-size: 6.4rem;
        line-height: 1.1;
        color: #000;
        margin-top: 3.4rem;
    }

    /* Sidebar stats */
    .stats {
        display: flex;
        flex-direction: column;
        gap: 5.6rem;
        font-weight: 500;
        margin-top: 8.8rem; /* aligns with title baseline */
    }
    .stat__label {
        font-size: 1.4rem;
        line-height: 0.9;
        color: var(--green);
        margin-bottom: 1.4rem;
    }
    .stat__value {
        font-family: "Playfair Display", serif;
        font-weight: 500;
        line-height: 1;
        color: #000;
        white-space: nowrap;
    }
    .stat__value .num { font-size: 6.4rem; }
    .stat__value .unit { font-size: 3.4rem; padding-left: .6rem; }

    /* Seating plan mini */
    .plan {
        width: 29.3rem;
        margin-top: 7.0rem;
        margin-bottom: 4.4rem;
    }
    .plan svg,
    .plan img {
        display: block;
        width: 100%;
        height: auto;
    }

    /* Seating variants list */
    .variants {
        width: 29.3rem;
        border-top: .1rem solid rgba(28, 28, 28, 0.4);
        border-bottom: .1rem solid rgba(28, 28, 28, 0.4);
    }
    .variant {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.8rem 0;
        border-top: .1rem solid rgba(28, 28, 28, 0.4);
    }
    .variant:first-child { border-top: none; }
    .variant__left {
        display: flex;
        flex-direction: column;
        gap: 3.8rem;
        width: 10.6rem;
    }
    .variant__left .label {
        font-size: 1.4rem;
        line-height: 1;
        color: var(--green);
        font-weight: 400;
    }
    .variant__left .value {
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-size: 6.4rem;
        line-height: 1;
        color: #000;
        text-transform: uppercase;
    }
    .variant__right {
        width: 12.4rem;
        height: 12.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .variant__right .name {
        font-size: 1.4rem;
        line-height: 1;
        color: var(--green);
        font-weight: 400;
    }
    .variant__icon {
        width: 5.7rem;
        height: 5.5rem;
        display: grid;
        place-items: center;
    }
    .variant__icon img { width: 100%; height: 100%; display: block; }

    /* Equipment list */
    .equip {
        width: 29.3rem;
        margin-top: 6.4rem;
    }
    .equip__title {
        font-size: 1.4rem;
        font-weight: 600;
        color: rgba(28, 28, 28, 0.8);
        text-align: center;
        margin-bottom: 1.4rem;
    }
    .equip__row {
        display: flex;
        align-items: center;
        gap: 1.0rem;
        padding: 1.0rem 0;
        border-top: .1rem solid rgba(28, 28, 28, 0.4);
    }
    .equip__row:last-of-type {
        border-bottom: .1rem solid rgba(28, 28, 28, 0.4);
    }
    .equip__star {
        width: 1.6rem;
        text-align: center;
        color: var(--green);
        font-size: 1.4rem;
        line-height: 1;
        font-weight: 500;
    }
    .equip__name {
        font-size: 1.4rem;
        line-height: 1;
        color: var(--black);
        font-weight: 500;
    }
    .equip__note {
        font-size: 1.0rem;
        color: rgba(28, 28, 28, 0.6);
        font-weight: 500;
    }

    .cta {
        margin-top: 5.6rem;
        display: inline-block;
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-style: italic;
        font-size: 1.8rem;
        line-height: 1.1;
        color: var(--black);
        text-decoration: underline;
        text-underline-offset: .2rem;
        white-space: nowrap;
    }
    .cta:hover { opacity: 0.75; }

    /* Right content */
    .hero-right {
        margin-top: 4.4rem;
    }
    .hero-right__top {
        display: grid;
        grid-template-columns: 440rem 451rem;
        column-gap: 3.4rem;
        align-items: start;
        margin-bottom: 3.4rem;
    }
    .hero-right__top p {
        font-size: 1.8rem;
        line-height: 1.2;
        white-space: pre-wrap;
    }

    .tour {
        width: 8.5rem;
        height: 6.9rem;
        background: var(--green);
        color: var(--beige);
        border: none;
        display: grid;
        place-items: start;
        padding: 1.0rem 0 0 2.0rem;
        cursor: pointer;
        margin-bottom: 2.0rem;
    }
    .tour .t1 {
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.1;
        margin-bottom: -.1rem;
    }
    .tour .t2 {
        font-family: "Playfair Display", serif;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 1;
    }

    .photos {
        width: 92.5rem;
        display: flex;
        flex-direction: column;
        gap: 2.0rem;
    }
    .photo {
        position: relative;
        width: 92.5rem;
        height: 59.8rem;
        overflow: hidden;
        background: #ddd;
    }
    .photo img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .zoom {
        position: absolute;
        right: 3.6rem;
        top: 3.6rem;
        width: 12.0rem;
        height: 12.0rem;
        border-radius: 8.0rem;
        border: .1rem solid var(--card-border);
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .zoom span {
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: 0.048rem;
        text-transform: uppercase;
        color: var(--black-2);
        white-space: nowrap;
    }

    /* Divider above map */
    .divider {
        height: .1rem;
        background: rgba(28, 28, 28, 0.4);
        margin: 7.0rem 0 0;
    }

    /* Map section (visual replica) */
    .map {
        background: var(--map-bg);
        color: #fff;
        height: 106.8rem;
        overflow: hidden;
    }
    .map__inner {
        max-width: 192.0rem;
        margin: 0 auto;
        padding: 7.0rem 2.4rem 0;
    }
    .map__stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4.0rem;
    }
    .mstat {
        border-right: .1rem solid rgba(255, 255, 255, 0.2);
        padding-right: 2.4rem;
    }
    .mstat:last-child { border-right: none; }
    .mstat__top {
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-size: 6.4rem;
        line-height: 1;
        white-space: nowrap;
    }
    .mstat__unit {
        font-size: 1.8rem;
        opacity: 0.08;
        padding-left: .6rem;
        font-family: "Manrope", sans-serif;
        font-weight: 500;
    }
    .mstat__desc {
        margin-top: 1.8rem;
        font-size: 1.4rem;
        line-height: 1.2;
        color: rgba(255, 255, 255, 0.8);
        max-width: 36.0rem;
    }
    .map__visual {
        margin-top: 2.4rem;
        height: 60.0rem;
        border-radius: .2rem;
        background:
                linear-gradient(180deg, rgba(86, 88, 97, 0) 0%, rgba(86, 88, 97, 0) 100%);
        /* Реальная карта в Figma — большой набор SVG-слоев.
           Здесь оставлен легкий плейсхолдер, чтобы сохранить структуру страницы. */
    }

    /* Footer (simplified to match layout; full text preserved) */
    .footer {
        background: var(--black);
        color: #fff;
        height: 72.3rem;
        position: relative;
        overflow: hidden;
    }
    .footer__inner {
        max-width: 192.0rem;
        margin: 0 auto;
        position: relative;
        height: 72.3rem;
        padding: 0 2.4rem;
    }
    .footer__title {
        position: absolute;
        left: 50%;
        top: 7.5rem;
        transform: translateX(-50%);
        font-family: "Playfair Display", serif;
        font-weight: 500;
        font-size: 11.6rem;
        line-height: 10.0rem;
        text-transform: uppercase;
        color: var(--beige-2);
        white-space: nowrap;
        text-align: center;
    }
    .footer__label {
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.2);
        text-transform: uppercase;
    }
    .footer__text {
        font-size: 1.6rem;
        font-weight: 500;
        color: #fff;
    }
    .footer__muted {
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.4);
        white-space: nowrap;
    }
    .footer__line {
        position: absolute;
        left: 2.4rem;
        right: 2.4rem;
        height: .1rem;
        background: rgba(255, 255, 255, 0.12);
    }
    .footer__line--bottom { top: 67.2rem; background: rgba(255, 255, 255, 0.18); }

    .footer__bottom {
        position: absolute;
        left: 2.4rem;
        right: 2.4rem;
        top: 68.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.4rem;
    }
`

export const Zal = () => {
    return <Page>
        
        <main className="container main">
            <div className="grid">
                <div>
                    <div className="crumbs" aria-label="Хлебные крошки">
                        <a href="#">Главная</a>
                        <span className="sep">/</span>
                        <a href="#">Конференц-залы</a>
                        <span className="sep">/</span>
                        <span className="current">Бальный зал</span>
                    </div>
                    
                    <h1>Бальный
                        зал</h1>
                </div>
                
                <aside aria-label="Параметры зала">
                    <div className="stats">
                        <div>
                            <div className="stat__label">Площадь зала</div>
                            <div className="stat__value"><span className="num">220</span><span
                                className="unit">м²</span></div>
                        </div>
                        <div>
                            <div className="stat__label">Вместимость человек</div>
                            <div className="stat__value"><span className="num">280</span></div>
                        </div>
                        <div>
                            <div className="stat__label">Варианты рассадки</div>
                            <div className="stat__value"><span className="num">5</span></div>
                        </div>
                    </div>
                    
                    <div className="plan" aria-label="Схема зала">
                        <svg viewBox="0 0 293 241" width="293" height="241" role="img"
                             aria-label="Схема зала (упрощенно)">
                            <rect x="8" y="4" width="277" height="233" fill="none" stroke="#55532e" stroke-width="3"/>
                            <text x="146.5" y="118" fill="#55532e" font-family="Playfair Display, serif" font-size="14"
                                  text-anchor="middle">S= 220 м²
                            </text>
                            <text x="146.5" y="196" fill="#55532e" font-family="Playfair Display, serif" font-size="14"
                                  text-anchor="middle">15,5 м / 5,5 м
                            </text>
                        </svg>
                    </div>
                    
                    <div className="variants" aria-label="Варианты рассадки">
                        <div className="variant">
                            <div className="variant__left">
                                <div className="label">Вместимость</div>
                                <div className="value">280</div>
                            </div>
                            <div className="variant__right">
                                <div className="name">Театр</div>
                                <div className="variant__icon" aria-hidden="true">
                                    <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="13.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="23.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="33.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="43.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="53.5" cy="3.5" r="3.5" fill="#55532E"/>
                                        <circle cx="3.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="13.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="23.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="33.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="43.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="53.5" cy="15.5" r="3.5" fill="#55532E"/>
                                        <circle cx="3.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="13.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="23.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="33.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="43.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="53.5" cy="27.5" r="3.5" fill="#55532E"/>
                                        <circle cx="3.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="13.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="23.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="33.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="43.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="53.5" cy="39.5" r="3.5" fill="#55532E"/>
                                        <circle cx="3.5" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="13.5" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="23.5" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="33.5" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="43.5" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="53.5" cy="51.5" r="3.5" fill="#55532E"/>
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                        <div className="variant">
                            <div className="variant__left">
                                <div className="label">Вместимость</div>
                                <div className="value">150</div>
                            </div>
                            <div className="variant__right">
                                <div className="name">Банкет</div>
                                <div className="variant__icon" aria-hidden="true">
                                    <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.5" cy="9.5" r="3" transform="rotate(90 3.5 9.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="13.5" cy="3.5" r="3" transform="rotate(90 13.5 3.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="23.5" cy="9.5" r="3" transform="rotate(90 23.5 9.5)" fill="#55532E" stroke="#55532E"/>
                                        <path d="M18.5 14.5C18.5 17.2614 16.2614 19.5 13.5 19.5C10.7386 19.5 8.5 17.2614 8.5 14.5C8.5 11.7386 10.7386 9.5 13.5 9.5C16.2614 9.5 18.5 11.7386 18.5 14.5Z" stroke="#55532E"/>
                                        <circle cx="3.5" cy="18.5" r="3" transform="rotate(90 3.5 18.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="23.5" cy="18.5" r="3" transform="rotate(90 23.5 18.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="13.5" cy="25.5" r="3" transform="rotate(90 13.5 25.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="33.5" cy="9.5" r="3" transform="rotate(90 33.5 9.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="43.5" cy="3.5" r="3" transform="rotate(90 43.5 3.5)" fill="#55532E" stroke="#55532E"/>
                                        <path d="M48.5 14.5C48.5 17.2614 46.2614 19.5 43.5 19.5C40.7386 19.5 38.5 17.2614 38.5 14.5C38.5 11.7386 40.7386 9.5 43.5 9.5C46.2614 9.5 48.5 11.7386 48.5 14.5Z" stroke="#55532E"/>
                                        <circle cx="53.5" cy="9.5" r="3" transform="rotate(90 53.5 9.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="33.5" cy="18.5" r="3" transform="rotate(90 33.5 18.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="53.5" cy="18.5" r="3" transform="rotate(90 53.5 18.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="43.5" cy="25.5" r="3" transform="rotate(90 43.5 25.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="18.5" cy="35.5" r="3" transform="rotate(90 18.5 35.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="28.5" cy="29.5" r="3" transform="rotate(90 28.5 29.5)" fill="#55532E" stroke="#55532E"/>
                                        <path d="M33.5 40.5C33.5 43.2614 31.2614 45.5 28.5 45.5C25.7386 45.5 23.5 43.2614 23.5 40.5C23.5 37.7386 25.7386 35.5 28.5 35.5C31.2614 35.5 33.5 37.7386 33.5 40.5Z" stroke="#55532E"/>
                                        <circle cx="38.5" cy="35.5" r="3" transform="rotate(90 38.5 35.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="18.5" cy="44.5" r="3" transform="rotate(90 18.5 44.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="38.5" cy="44.5" r="3" transform="rotate(90 38.5 44.5)" fill="#55532E" stroke="#55532E"/>
                                        <circle cx="28.5" cy="51.5" r="3" transform="rotate(90 28.5 51.5)" fill="#55532E" stroke="#55532E"/>
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                        <div className="variant">
                            <div className="variant__left">
                                <div className="label">Вместимость</div>
                                <div className="value">120</div>
                            </div>
                            <div className="variant__right">
                                <div className="name">Класс</div>
                                <div className="variant__icon" aria-hidden="true">
                                    <svg width="124" height="55" viewBox="0 0 124 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="33.5" width="17" height="4" fill="#55532E"/>
                                        <circle cx="37" cy="11.5" r="3.5" fill="#55532E"/>
                                        <circle cx="47" cy="11.5" r="3.5" fill="#55532E"/>
                                        <rect x="53.5" width="17" height="4" fill="#55532E"/>
                                        <circle cx="57" cy="11.5" r="3.5" fill="#55532E"/>
                                        <circle cx="67" cy="11.5" r="3.5" fill="#55532E"/>
                                        <rect x="73.5" width="17" height="4" fill="#55532E"/>
                                        <circle cx="77" cy="11.5" r="3.5" fill="#55532E"/>
                                        <circle cx="87" cy="11.5" r="3.5" fill="#55532E"/>
                                        <rect x="33.5" y="20" width="17" height="4" fill="#55532E"/>
                                        <circle cx="37" cy="31.5" r="3.5" fill="#55532E"/>
                                        <circle cx="47" cy="31.5" r="3.5" fill="#55532E"/>
                                        <rect x="53.5" y="20" width="17" height="4" fill="#55532E"/>
                                        <circle cx="57" cy="31.5" r="3.5" fill="#55532E"/>
                                        <circle cx="67" cy="31.5" r="3.5" fill="#55532E"/>
                                        <rect x="73.5" y="20" width="17" height="4" fill="#55532E"/>
                                        <circle cx="77" cy="31.5" r="3.5" fill="#55532E"/>
                                        <circle cx="87" cy="31.5" r="3.5" fill="#55532E"/>
                                        <rect x="33.5" y="40" width="17" height="4" fill="#55532E"/>
                                        <circle cx="37" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="47" cy="51.5" r="3.5" fill="#55532E"/>
                                        <rect x="53.5" y="40" width="17" height="4" fill="#55532E"/>
                                        <circle cx="57" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="67" cy="51.5" r="3.5" fill="#55532E"/>
                                        <rect x="73.5" y="40" width="17" height="4" fill="#55532E"/>
                                        <circle cx="77" cy="51.5" r="3.5" fill="#55532E"/>
                                        <circle cx="87" cy="51.5" r="3.5" fill="#55532E"/>
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                        <div className="variant">
                            <div className="variant__left">
                                <div className="label">Вместимость</div>
                                <div className="value">60</div>
                            </div>
                            <div className="variant__right">
                                <div className="name">Квадрат</div>
                                <div className="variant__icon" aria-hidden="true">
                                    <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="14" y="11" width="29" height="4" transform="rotate(90 14 11)" fill="#55532E"/>
                                        <circle cx="3.5" cy="14.5" r="3.5" transform="rotate(90 3.5 14.5)" fill="#55532E"/>
                                        <circle cx="3.5" cy="25.5" r="3.5" transform="rotate(90 3.5 25.5)" fill="#55532E"/>
                                        <circle cx="3.5" cy="36.5" r="3.5" transform="rotate(90 3.5 36.5)" fill="#55532E"/>
                                        <rect width="29" height="4" transform="matrix(4.37114e-08 1 1 -4.37114e-08 43 11)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 11)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 22)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 33)" fill="#55532E"/>
                                        <rect width="37" height="4" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 47 40)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 47 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 37 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 27 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 17 48)" fill="#55532E"/>
                                        <rect width="37" height="4" transform="matrix(1 0 0 -1 10 15)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(1 0 0 -1 10 7)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(1 0 0 -1 20 7)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(1 0 0 -1 30 7)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(1 0 0 -1 40 7)" fill="#55532E"/>
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                        <div className="variant">
                            <div className="variant__left">
                                <div className="label">Вместимость</div>
                                <div className="value">50</div>
                            </div>
                            <div className="variant__right">
                                <div className="name">U стиль</div>
                                <div className="variant__icon" aria-hidden="true">
                                    <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="14" width="40" height="4" transform="rotate(90 14 0)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="rotate(90 3.5 3.5)" fill="#55532E"/>
                                        <circle cx="3.5" cy="14.5" r="3.5" transform="rotate(90 3.5 14.5)" fill="#55532E"/>
                                        <circle cx="3.5" cy="25.5" r="3.5" transform="rotate(90 3.5 25.5)" fill="#55532E"/>
                                        <circle cx="3.5" cy="36.5" r="3.5" transform="rotate(90 3.5 36.5)" fill="#55532E"/>
                                        <rect width="40" height="4" transform="matrix(4.37114e-08 1 1 -4.37114e-08 43 0)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 0)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 11)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 22)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 50 33)" fill="#55532E"/>
                                        <rect width="37" height="4" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 47 40)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 47 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 37 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 27 48)" fill="#55532E"/>
                                        <circle cx="3.5" cy="3.5" r="3.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 17 48)" fill="#55532E"/>
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="equip" aria-label="Оснащение зала">
                        <div className="equip__title">Оснащение зала</div>
                        <div className="equip__row">
                            <div className="equip__star">*</div>
                            <div className="equip__name">Ноутбук</div>
                        </div>
                        <div className="equip__row">
                            <div className="equip__star">*</div>
                            <div className="equip__name">Блокноты</div>
                        </div>
                        <div className="equip__row">
                            <div className="equip__star">*</div>
                            <div className="equip__name">Ручки</div>
                        </div>
                        <div className="equip__row">
                            <div className="equip__star">*</div>
                            <div className="equip__name">Презентер <span className="equip__note">(предоставляются по запросу)</span>
                            </div>
                        </div>
                    </div>
                    
                    <a className="cta" href="#">Отправить запрос</a>
                </aside>
                
                <section className="hero-right" aria-label="Описание и фотографии">
                    <button className="tour" type="button" aria-label="Тур 360 градусов">
                        <span className="t1">Тур</span>
                        <span className="t2">360°</span>
                    </button>
                    
                    <div className="hero-right__top">
                        <p>Бальный зал — просторная площадка для&nbsp;мероприятий с размахом. Подходит
                            для&nbsp;конференций, презентаций и торжественных событий, где важны масштаб и статус.
                            
                            Высокие потолки, дневной свет и продуманная планировка создают комфорт для гостей и
                            организаторов. Пространство легко адаптируется под разные форматы — от классической рассадки
                            до банкетов.</p>
                        <p>Зал оснащён современным оборудованием для&nbsp;мероприятий любого уровня. Два светодиодных
                            экрана обеспечивают качественную визуализацию, а встроенная акустика — чистый звук по всему
                            залу.
                            
                            Климат-контроль и профессиональное освещение позволяют настроить атмосферу под формат
                            события — от деловой встречи до вечернего приёма.</p>
                    </div>
                    
                    <div className="photos" aria-label="Фото зала">
                        <div className="photo">
                            <img src={z1}
                                 alt="Бальный зал — рассадка столами"/>
                            <button className="zoom" type="button" aria-label="Увеличить фото">
                                <span>[ увеличить ]</span></button>
                        </div>
                        <div className="photo">
                            <img src={z2}
                                 alt="Бальный зал — рассадка театром"/>
                        </div>
                        <div className="photo">
                            <img src={z3}
                                 alt="Бальный зал — дополнительный ракурс"/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="divider" aria-hidden="true"></div>
        </main>
    </Page>
}