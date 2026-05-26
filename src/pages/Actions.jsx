import React from 'react';
import styled from "@emotion/styled"
import a1 from "../assets/625b115e2603dcc3097a449b3058c4d8e4953834.png"
import a2 from "../assets/7465242fdf78ef448e7064122210e6057f60f861.svg"
import a3 from "../assets/490ebf61c15c288ecb3f07850b0d900472c6ea7d.svg"
import a5 from "../assets/162bd9777cbdda45a962f0928958636b6cd97fbe.png"
import a6 from "../assets/51a563dde89853a5217017794ccd78e6842db109.svg"
import a8 from "../assets/54daff3afe70f3d2b7a8c1ad261a745d400a82d4.png"


const Page = styled.div`
        --color-black: #1c1c1c;
        --color-black-2: #2f3034;
        --color-green: #55532e;
        --color-beige: #fff6f0;
        --color-red: #96281f;
        --color-white: #ffffff;
        --color-muted: rgba(47, 48, 52, 0.55);
        --color-line: rgba(28, 28, 28, 0.12);

        --font-serif: "Playfair Display", "Times New Roman", serif;
        --font-sans: "Manrope", system-ui, sans-serif;

        --page-width: 1920px;
        --gutter: 48px;
        --promo-gap: 40px;
        --image-radius: 0;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

        scroll-behavior: smooth;
        margin: 0;
        color: var(--color-black-2);
        font-family: var(--font-sans);
        font-size: 15px;
        line-height: 1.45;
        background: var(--color-beige);
        -webkit-font-smoothing: antialiased;

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font: inherit;
        cursor: pointer;
        border: none;
        background: none;
    }
    
        min-width: 320px;

    /* Header */
    .header {
        position: absolute;
        inset: 0 0 auto;
        z-index: 10;
        padding: 28px var(--gutter) 0;
    }

    .header__inner {
        max-width: var(--page-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 24px;
    }

    .header__nav {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .header__nav--left {
        justify-content: flex-start;
    }

    .header__nav--right {
        justify-content: flex-end;
    }

    .header__link {
        color: var(--color-white);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        white-space: nowrap;
        transition: opacity 0.2s;
    }

    .header__link:hover {
        opacity: 0.75;
    }

    .header__logo {
        margin: 0;
        color: var(--color-white);
        font-family: var(--font-serif);
        font-size: clamp(16px, 1.2vw, 22px);
        font-weight: 500;
        letter-spacing: 0.08em;
        line-height: 1.15;
        text-align: center;
        text-transform: uppercase;
    }

    .header__actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;
    }

    .header__book {
        padding: 12px 22px;
        background: var(--color-red);
        color: var(--color-white);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        transition: background 0.2s;
    }

    .header__book:hover {
        background: #7a2019;
    }

    .header__lang {
        color: var(--color-white);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .header__lang span {
        opacity: 0.45;
        margin: 0 6px;
    }

    /* Hero */
    .hero {
        position: relative;
        min-height: 760px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 120px var(--gutter) 72px;
        color: var(--color-white);
        overflow: hidden;
    }

    .hero__bg {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background-color: #3d4349;
    }

    .hero__bg::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
    }

    .hero__bg-image {
        position: absolute;
        left: 0;
        width: 100%;
        max-width: none;
        height: 249%;
        top: -105%;
        object-fit: cover;
    }

    .hero__title {
        position: relative;
        z-index: 1;
        margin: 0;
        color: var(--color-beige);
        font-family: var(--font-serif);
        font-size: clamp(44px, 4.8vw, 64px);
        font-style: italic;
        font-weight: 400;
        line-height: 1.1;
        text-align: center;
        white-space: nowrap;
    }

    /* Promotions */
    .promotions {
        padding: 58px var(--gutter) 100px;
        background: var(--color-beige);
    }

    .promotions__inner {
        position: relative;
        max-width: calc(var(--page-width) - var(--gutter) * 2);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--promo-gap);
    }

    .promotions__timeline {
        position: absolute;
        left: 244px;
        top: 0;
        bottom: 0;
        width: 2px;
        pointer-events: none;
    }

    .promotions__timeline-line {
        width: 2px;
        height: 100%;
        object-fit: fill;
    }

    /* Promo block */
    .promo {
        display: grid;
        grid-template-columns: 244px 451px minmax(0, 1fr);
        column-gap: 0;
        align-items: start;
        min-height: 582px;
    }

    .promo__sidebar {
        position: relative;
        padding: 20px 24px 0 0;
        align-self: stretch;
    }

    .promo__sidebar-line {
        display: block;
        width: 136px;
        height: 1px;
    }

    .promo__sidebar-line--top {
        margin-bottom: 20px;
    }

    .promo__sidebar-line:not(.promo__sidebar-line--top) {
        margin-top: 20px;
    }

    .promo__label {
        margin: 0;
        max-width: 136px;
        color: var(--color-green);
        font-size: 18px;
        font-weight: 400;
        line-height: 1.1;
    }

    .promo__label--wide {
        max-width: 243px;
        padding-top: 0;
    }

    .promo__media {
        width: 451px;
        max-width: 100%;
    }

    .promo__image {
        width: 100%;
        height: 582px;
        object-fit: cover;
    }

    .promo__content {
        display: flex;
        flex-direction: column;
        padding: 0 0 0 clamp(32px, 5vw, 186px);
        min-height: 582px;
    }

    .promo__title {
        margin: 0 0 48px;
        max-width: 573px;
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: clamp(32px, 2.5vw, 44px);
        font-weight: 500;
        font-style: normal;
        line-height: 1.1;
    }

    .promo__title--compact {
        max-width: 470px;
        margin-bottom: 48px;
    }

    .promo__highlight {
        color: var(--color-red);
        font-style: italic;
    }

    .promo__text {
        margin: 0 0 46px;
        max-width: 495px;
        color: var(--color-black-2);
        font-size: 18px;
        line-height: 1.2;
    }

    .promo__features {
        display: grid;
        grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
        gap: 16px 48px;
        margin: 0 0 0;
        padding: 0;
        list-style: none;
    }

    .promo__feature {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        color: var(--color-green);
        font-size: 16px;
        line-height: 1.1;
    }

    .promo__icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
    }

    .promo__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 24px 48px;
        margin-top: auto;
        padding-top: 0;
    }

    .promo__link {
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: 18px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration: underline;
        text-underline-offset: 0.15em;
        transition: opacity 0.2s;
    }

    .promo__link:hover {
        opacity: 0.65;
    }

    /* Responsive */
    @media (max-width: 1400px) {
        .promotions__timeline {
            display: none;
        }

        .promo {
            grid-template-columns: 200px minmax(280px, 451px) minmax(0, 1fr);
        }

        .promo__content {
            padding-left: 40px;
        }
    }

    @media (max-width: 1200px) {
        .header__inner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
        }

        .header__nav--left,
        .header__nav--right,
        .header__actions {
            justify-content: center;
        }

        .promo {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            min-height: auto;
        }

        .promo__sidebar {
            grid-column: 1 / -1;
            padding: 0;
        }

        .promo__sidebar-line,
        .promotions__timeline {
            display: none;
        }

        .promo__label,
        .promo__label--wide {
            max-width: none;
        }

        .promo__media {
            width: 100%;
        }

        .promo__image {
            height: auto;
            aspect-ratio: 451 / 582;
        }

        .promo__content {
            grid-column: 1 / -1;
            min-height: auto;
            padding-left: 0;
        }

        .promo__title {
            margin-bottom: 24px;
        }

        .promo__title--compact {
            margin-bottom: 24px;
        }

    }

    @media (max-width: 768px) {
        :root {
            --gutter: 24px;
        }

        .header {
            position: relative;
            background: var(--color-black);
            padding-bottom: 20px;
        }

        .hero {
            min-height: 420px;
            padding-top: 24px;
        }

        .promotions {
            padding-top: 40px;
            padding-bottom: 64px;
        }

        .promo {
            grid-template-columns: 1fr;
            gap: 24px;
        }

        .promo__features {
            grid-template-columns: 1fr;
            gap: 12px;
        }

        .promo__actions {
            padding-top: 24px;
        }
    }

`

export const Actions = () => {
    return <Page>
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__bg" aria-hidden="true">
                <img
                    className="hero__bg-image"
                    src={a1}
                    alt=""
                    width="1920"
                    height="760"
                />
            </div>
            <h1 className="hero__title" id="hero-title">Акции отеля</h1>
        </section>
        
        <main className="promotions">
            <div className="promotions__inner">
                <div className="promotions__timeline" aria-hidden="true">
                    <img
                        className="promotions__timeline-line"
                        src={a2}
                        alt=""
                        width="2"
                        height="1195"
                    />
                </div>
                
                <article className="promo">
                    <aside className="promo__sidebar">
                        <img
                            className="promo__sidebar-line promo__sidebar-line--top"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                        <p className="promo__label">Весеннее предложение</p>
                        <img
                            className="promo__sidebar-line"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={a5}
                            alt="Гости на горном курорте весной"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title">
                            Раннее бронирование на&nbsp;апрель и&nbsp;май. Твоя весна в&nbsp;горах&nbsp;—
                            <em className="promo__highlight">идеальное время для отдыха и&nbsp;перезагрузки.</em>
                        </h2>
                        <p className="promo__text">
                            Планируйте поездку заранее и&nbsp;получите скидку 20% от&nbsp;стандартного тарифа
                            с&nbsp;завтраком на&nbsp;заезды в&nbsp;апреле и&nbsp;мае 2026&nbsp;года.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Скидка 20% на&nbsp;стандартный тариф с&nbsp;завтраком</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Проживание с&nbsp;01.04 по&nbsp;31.05.2026</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                            <a className="promo__link" href="#">Подробнее</a>
                        </div>
                    </div>
                </article>
                <article className="promo">
                    <aside className="promo__sidebar">
                        <p className="promo__label promo__label--wide">
                            Полупансион: завтрак и&nbsp;ужин Комфортный тариф для тех, кто хочет полностью
                            отключиться от&nbsp;бытовых забот.
                        </p>
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={a8}
                            alt="Сервированный стол в ресторане отеля"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title promo__title--compact">
                            Полупансион: завтрак и&nbsp;ужин <em className="promo__highlight">включены</em>
                        </h2>
                        <p className="promo__text">
                            Выберите удобный формат отдыха с&nbsp;включённым завтраком и&nbsp;ужином. Идеально
                            для гостей, которые ценят комфорт и&nbsp;предсказуемый бюджет.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Доступно для всех категорий номеров</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Бронирование на&nbsp;официальном сайте</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                        </div>
                    </div>
                </article>
                <article className="promo">
                    <aside className="promo__sidebar">
                        <img
                            className="promo__sidebar-line promo__sidebar-line--top"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                        <p className="promo__label">Весеннее предложение</p>
                        <img
                            className="promo__sidebar-line"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={a5}
                            alt="Гости на горном курорте весной"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title">
                            Раннее бронирование на&nbsp;апрель и&nbsp;май. Твоя весна в&nbsp;горах&nbsp;—
                            <em className="promo__highlight">идеальное время для отдыха и&nbsp;перезагрузки.</em>
                        </h2>
                        <p className="promo__text">
                            Планируйте поездку заранее и&nbsp;получите скидку 20% от&nbsp;стандартного тарифа
                            с&nbsp;завтраком на&nbsp;заезды в&nbsp;апреле и&nbsp;мае 2026&nbsp;года.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Скидка 20% на&nbsp;стандартный тариф с&nbsp;завтраком</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Проживание с&nbsp;01.04 по&nbsp;31.05.2026</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                            <a className="promo__link" href="#">Подробнее</a>
                        </div>
                    </div>
                </article>
                <article className="promo">
                    <aside className="promo__sidebar">
                        <p className="promo__label promo__label--wide">
                            Полупансион: завтрак и&nbsp;ужин Комфортный тариф для тех, кто хочет полностью
                            отключиться от&nbsp;бытовых забот.
                        </p>
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={a8}
                            alt="Сервированный стол в ресторане отеля"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title promo__title--compact">
                            Полупансион: завтрак и&nbsp;ужин <em className="promo__highlight">включены</em>
                        </h2>
                        <p className="promo__text">
                            Выберите удобный формат отдыха с&nbsp;включённым завтраком и&nbsp;ужином. Идеально
                            для гостей, которые ценят комфорт и&nbsp;предсказуемый бюджет.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Доступно для всех категорий номеров</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Бронирование на&nbsp;официальном сайте</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                        </div>
                    </div>
                </article>
                <article className="promo">
                    <aside className="promo__sidebar">
                        <img
                            className="promo__sidebar-line promo__sidebar-line--top"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                        <p className="promo__label">Весеннее предложение</p>
                        <img
                            className="promo__sidebar-line"
                            src={a3}
                            alt=""
                            width="136"
                            height="1"
                        />
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={a5}
                            alt="Гости на горном курорте весной"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title">
                            Раннее бронирование на&nbsp;апрель и&nbsp;май. Твоя весна в&nbsp;горах&nbsp;—
                            <em className="promo__highlight">идеальное время для отдыха и&nbsp;перезагрузки.</em>
                        </h2>
                        <p className="promo__text">
                            Планируйте поездку заранее и&nbsp;получите скидку 20% от&nbsp;стандартного тарифа
                            с&nbsp;завтраком на&nbsp;заезды в&nbsp;апреле и&nbsp;мае 2026&nbsp;года.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Скидка 20% на&nbsp;стандартный тариф с&nbsp;завтраком</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Проживание с&nbsp;01.04 по&nbsp;31.05.2026</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                            <a className="promo__link" href="#">Подробнее</a>
                        </div>
                    </div>
                </article>
                <article className="promo">
                    <aside className="promo__sidebar">
                        <p className="promo__label promo__label--wide">
                            Полупансион: завтрак и&nbsp;ужин Комфортный тариф для тех, кто хочет полностью
                            отключиться от&nbsp;бытовых забот.
                        </p>
                    </aside>
                    
                    <div className="promo__media">
                        <img
                            className="promo__image"
                            src={ a8 }
                            alt="Сервированный стол в ресторане отеля"
                            width="451"
                            height="582"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="promo__content">
                        <h2 className="promo__title promo__title--compact">
                            Полупансион: завтрак и&nbsp;ужин <em className="promo__highlight">включены</em>
                        </h2>
                        <p className="promo__text">
                            Выберите удобный формат отдыха с&nbsp;включённым завтраком и&nbsp;ужином. Идеально
                            для гостей, которые ценят комфорт и&nbsp;предсказуемый бюджет.
                        </p>
                        <ul className="promo__features">
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Доступно для всех категорий номеров</span>
                            </li>
                            <li className="promo__feature">
                                <img
                                    className="promo__icon"
                                    src={a6}
                                    alt=""
                                    width="16"
                                    height="16"
                                />
                                <span>Бронирование на&nbsp;официальном сайте</span>
                            </li>
                        </ul>
                        <div className="promo__actions">
                            <a className="promo__link" href="#">Выбрать номер</a>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </Page>
}