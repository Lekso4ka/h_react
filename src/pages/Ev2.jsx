import React from "react"
import styled from "@emotion/styled"
import a1 from "../assets/events/87489baf30ebfc869e74cc76fb0f23c82c007649.png"
import a2 from "../assets/events/c9bfae24334ae3b8dc72ee7bf83d9cdeb71fdb7d.png"
import a3 from "../assets/events/6372e810818bf05fc659d2c3c5b5d09d75c399a6.png"
import a4 from "../assets/events/000cb1df101129e74c6aaed121a605aba53a1add.png"
import a5 from "../assets/events/7e463f919c5bd512d79bc2c1a1210d03b10d620e.png"
import a6 from "../assets/events/f30e4c1585302e99863f5188f93294cf396d1087.png"
import a7 from "../assets/events/463bfc96a8f58489eb7b68e83a3520eea3203107.png"
import a8 from "../assets/events/1b8d18a4c4e50431ce19c5adb82051ba07840dbd.png"
import a9 from "../assets/events/0321b5aa6fb5256795187ebe6ce8479681c1c456.png"
import a10 from "../assets/events/e6f8ad49615fd77653bd11728245b50ed62e7916.png"


const Page = styled.div`
        --color-black: #1c1c1c;
        --color-black-2: #2f3034;
        --color-beige: #fff6f0;
        --color-red: #96281f;
        --color-white: #ffffff;
        --color-muted: rgba(47, 48, 52, 0.55);
        --color-line: rgba(28, 28, 28, 0.12);
        --color-rule: rgba(150, 40, 31, 0.2);
        --color-feature-bg: #fff3e3;
        --color-text-soft: #565861;

        --font-serif: "Cormorant Garamond", "Times New Roman", serif;
        --font-sans: "Manrope", system-ui, sans-serif;

        --page-width: 1920px;
        --gutter: 20px;
        --content-inset: 88px;
        --card-width: 479px;
        --col-gap: 153px;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

        scroll-behavior: smooth;

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


    /* Intro hero */
    .intro {
        position: relative;
        max-width: var(--page-width);
        margin: 0 auto;
        min-height: 539px;
        padding: 48px var(--gutter) 40px;
        background: var(--color-beige);
        text-align: center;
        overflow: hidden;
    }

    .intro__bg {
        position: absolute;
        inset: 0;
        background-color: var(--color-beige);
        background-image: url(${a10});
        background-position: center top;
        background-size: 100% auto;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    .intro__content,
    .intro__rule {
        position: relative;
        z-index: 1;
    }

    .intro__rule {
        position: relative;
        display: flex;
        justify-content: center;
        height: 15px;
    }

    .intro__rule-line {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: var(--color-rule);
    }

    .intro__rule-mark {
        position: relative;
        z-index: 1;
        width: 1px;
        height: 14px;
        background: var(--color-rule);
    }

    .intro__rule--top {
        margin-bottom: 36px;
    }

    .intro__rule--bottom {
        margin-top: 36px;
    }

    .intro__eyebrow {
        margin: 0 0 18px;
        color: var(--color-black-2);
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.02em;
    }

    .intro__title {
        margin: 0 auto;
        max-width: 966px;
        font-family: var(--font-serif);
        font-size: clamp(42px, 4.6vw, 64px);
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: 0.01em;
    }

    .intro__title-main {
        color: var(--color-black-2);
        font-style: normal;
    }

    .intro__title-accent {
        color: var(--color-red);
        font-style: italic;
    }

    /* Featured split */
    .feature {
        display: grid;
        grid-template-columns: minmax(0, 960px) minmax(0, 1fr);
        max-width: var(--page-width);
        margin: 0 auto;
        min-height: 848px;
        background: var(--color-feature-bg);
    }

    .feature__media {
        min-height: 420px;
    }

    .feature__image {
        width: 100%;
        height: 100%;
        min-height: 420px;
        object-fit: cover;
    }

    .feature__body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px clamp(24px, 4vw, 80px);
    }

    .feature__copy {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 82px;
        max-width: 678px;
        text-align: center;
    }

    .feature__head {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        width: 100%;
    }

    .feature__label {
        margin: 0;
        color: var(--color-red);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 1.1;
        text-transform: uppercase;
    }

    .feature__title {
        margin: 0;
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: clamp(28px, 2.2vw, 34px);
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: 0.01em;
    }

    .feature__rest {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 46px;
        width: 100%;
    }

    .feature__text {
        margin: 0;
        max-width: 568px;
        color: var(--color-text-soft);
        font-size: 22px;
        font-weight: 500;
        line-height: 1.3;
    }

    .feature__link {
        display: inline-block;
        color: var(--color-red);
        font-family: var(--font-serif);
        font-size: 18px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.2s;
    }

    .feature__link:hover {
        opacity: 0.7;
    }

    /* Articles grid */
    .grid-section {
        padding: 0 var(--gutter) 0;
        background: var(--color-beige);
    }

    .grid-section__inner {
        position: relative;
        max-width: var(--page-width);
        margin: 0 auto;
        padding: 0 clamp(var(--gutter), 4.6vw, var(--content-inset));
    }

    .grid-section__divider {
        height: 1px;
        background: var(--color-rule);
    }

    .grid-section__divider--top {
        margin-bottom: 0;
    }

    .articles {
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, var(--card-width)));
        gap: 0 var(--col-gap);
        padding: 77px 0 0;
    }

    .articles::before,
    .articles::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background: var(--color-rule);
        pointer-events: none;
    }

    .articles::before {
        left: calc(var(--card-width) + var(--col-gap) / 2 - 0.5px);
    }

    .articles::after {
        left: calc((var(--card-width) + var(--col-gap)) * 2 + var(--col-gap) / 2 - 0.5px);
    }

    .articles__col {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: var(--card-width);
    }

    .articles__lead {
        margin: 0;
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: clamp(28px, 2.2vw, 34px);
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: 0.01em;
    }

    .articles__lead--second {
        margin-top: 0;
        margin-bottom: 153px;
        font-family: var(--font-serif);
        font-size: clamp(28px, 2.2vw, 34px);
        line-height: 1.2;
    }

    .articles__lead-accent {
        color: var(--color-red);
        font-style: italic;
    }

    .articles__col--center .card--offset {
        margin-top: 108px;
    }

    .articles__col--center .card--offset-lg {
        margin-top: 153px;
    }

    .articles__col--right .card--compact + .card--compact {
        margin-top: 153px;
    }

    .articles__col--right .card--offset-sm {
        margin-top: 153px;
    }

    /* Card */
    .card {
        display: flex;
        flex-direction: column;
        margin-bottom: 99px;
    }

    .card:last-child {
        margin-bottom: 0;
    }

    .card__head {
        margin-bottom: 34px;
    }

    .card__head--compact {
        margin-bottom: 24px;
    }

    .card__label {
        margin: 0 0 14px;
        color: var(--color-red);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 1.1;
        text-transform: uppercase;
    }

    .card__title {
        margin: 0;
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: clamp(26px, 2vw, 34px);
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: 0.01em;
    }

    .card__title--compact {
        font-size: clamp(24px, 1.8vw, 34px);
    }

    .card__body {
        display: flex;
        flex-direction: column;
        gap: 28px;
        margin-bottom: 28px;
    }

    .card__image {
        width: 100%;
        height: 434px;
        object-fit: cover;
    }

    .card__text {
        margin: 0;
        color: var(--color-black-2);
        font-size: 22px;
        font-weight: 500;
        line-height: 1.3;
    }

    .card__link {
        align-self: flex-start;
        color: var(--color-red);
        font-family: var(--font-serif);
        font-size: 18px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.2s;
    }

    .card__link:hover {
        opacity: 0.7;
    }

    /* Section footer */
    .grid-section__footer-links {
        padding: 83px 0 101px;
    }

    .grid-section__footer-links .grid-section__divider:first-child {
        margin-bottom: 32px;
    }

    .grid-section__footer-links .grid-section__divider:last-child {
        margin-top: 53px;
    }

    .grid-section__all {
        display: block;
        width: fit-content;
        margin: 0 auto;
        color: var(--color-red);
        font-family: var(--font-serif);
        font-size: 18px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.2s;
    }

    .grid-section__all:hover {
        opacity: 0.65;
    }

    /* Summer CTA */
    .summer {
        position: relative;
        min-height: 884px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px var(--gutter);
        color: var(--color-white);
        overflow: hidden;
    }

    .summer__bg {
        position: absolute;
        inset: 0;
        background-color: #4a5f6b;
        background-image:
                linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
                url("assets/events/e2ef1fe4a8aaa1b530e3134c2fae3d983a4b40d8.png"),
                url("assets/events/e01766434fde37e9d8d89d399f0a0d367d572ed9.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .summer__content {
        position: relative;
        z-index: 1;
        max-width: 618px;
        text-align: center;
    }

    .summer__eyebrow {
        margin: 0 0 16px;
        color: var(--color-beige);
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 1.2;
    }

    .summer__title {
        margin: 0 0 28px;
        color: var(--color-beige);
        font-family: var(--font-serif);
        font-size: clamp(40px, 4vw, 64px);
        font-style: italic;
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: 0.01em;
    }

    .summer__text {
        margin: 0 auto 132px;
        max-width: 449px;
        color: rgba(255, 246, 240, 0.8);
        font-size: 20px;
        line-height: 1.2;
    }

    .summer__link {
        display: inline-block;
        color: var(--color-beige);
        font-family: var(--font-serif);
        font-size: 18px;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.2s;
    }

    .summer__link:hover {
        opacity: 0.75;
    }

    /* Responsive */
    @media (max-width: 1600px) {
        :root {
            --col-gap: clamp(32px, 5vw, 80px);
            --card-width: 100%;
        }

        .articles {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0 var(--col-gap);
        }

        .articles::before,
        .articles::after {
            display: none;
        }

        .articles__col {
            width: 100%;
        }

        .articles__lead--second {
            margin-bottom: 64px;
        }

        .articles__col--center .card--offset,
        .articles__col--center .card--offset-lg,
        .articles__col--right .card--compact + .card--compact,
        .articles__col--right .card--offset-sm {
            margin-top: 0;
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

        .feature {
            grid-template-columns: 1fr;
            min-height: auto;
        }

        .feature__image {
            min-height: 360px;
            max-height: 520px;
        }

        .articles {
            grid-template-columns: 1fr 1fr;
            gap: 48px 32px;
            padding-top: 48px;
        }

        .articles__col--right {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px 32px;
            width: 100%;
        }

        .articles__col--right .card {
            width: 100%;
        }

    }

    @media (max-width: 768px) {
        :root {
            --gutter: 16px;
        }

        .intro {
            padding-top: 32px;
            padding-bottom: 28px;
        }

        .intro__rule--top {
            margin-bottom: 24px;
        }

        .intro__rule--bottom {
            margin-top: 24px;
        }

        .feature__body {
            padding: 32px 0;
        }

        .feature__copy {
            gap: 32px;
        }

        .card__text,
        .feature__text {
            font-size: 18px;
        }

        .articles {
            grid-template-columns: 1fr;
            gap: 48px;
        }

        .articles__col--right {
            grid-template-columns: 1fr;
        }

        .card {
            margin-bottom: 0;
        }

        .articles__col {
            gap: 48px;
        }

        .articles__lead--second {
            margin-bottom: 0;
        }

        .card__image {
            height: auto;
            aspect-ratio: 479 / 434;
        }

        .summer {
            min-height: 560px;
        }

        .summer__text {
            margin-bottom: 48px;
        }

        .grid-section__footer-links {
            padding: 48px 0 64px;
        }
    }

`
export const Ev2 = ()=> {
    return <Page >
        
        <section className="intro" aria-labelledby="intro-title">
            <div className="intro__bg" aria-hidden="true"></div>
            
            <div className="intro__rule intro__rule--top" aria-hidden="true">
                <span className="intro__rule-line"></span>
                <span className="intro__rule-mark"></span>
            </div>
            
            <div className="intro__content">
                <p className="intro__eyebrow">[ Роза Хутор ]</p>
                <h1 className="intro__title" id="intro-title">
                    <span className="intro__title-main">События и&nbsp;мероприятия </span>
                    <em className="intro__title-accent">горного курорта</em>
                </h1>
            </div>
            
            <div className="intro__rule intro__rule--bottom" aria-hidden="true">
                <span className="intro__rule-line"></span>
                <span className="intro__rule-mark"></span>
            </div>
        </section>
        
        <section className="feature" aria-labelledby="feature-title">
            <div className="feature__media">
                <img
                    className="feature__image"
                    src={a1}
                    alt="Гости за ужином при свечах в ресторане курорта"
                    width="960"
                    height="848"
                />
            </div>
            <div className="feature__body">
                <div className="feature__copy">
                    <div className="feature__head">
                        <p className="feature__label">Жизнь курорта</p>
                        <h2 className="feature__title" id="feature-title">
                            Роза Хутор зимой:<br/>
                            время событий, вкуса и&nbsp;впечатлений
                        </h2>
                    </div>
                    <div className="feature__rest">
                        <p className="feature__text">
                            Сезон в&nbsp;горах объединяет гастрономию, культуру и&nbsp;атмосферные события.<br/>
                            Здесь каждый день формирует настроение отдыха и&nbsp;оставляет свои впечатления.
                        </p>
                        <a className="feature__link" href="#">Читать</a>
                    </div>
                </div>
            </div>
        </section>
        
        <main className="grid-section">
            <div className="grid-section__inner">
                <div className="grid-section__divider grid-section__divider--top" aria-hidden="true"></div>
                
                <div className="articles">
                    <div className="articles__col articles__col--left">
                        <p className="articles__lead">
                            Зимой Роза Хутор
                            <em className="articles__lead-accent">становится центром событий в&nbsp;горах.</em>
                        </p>
                        <p className="articles__lead articles__lead--second">
                            Гастрономия, фестивали и&nbsp;новые имена задают ритм сезона.
                        </p>
                        
                        <article className="card">
                            <header className="card__head">
                                <p className="card__label">Гастрономия</p>
                                <h2 className="card__title">
                                    Высокая кухня и&nbsp;гастрономические ужины<br/>
                                    в&nbsp;атмосфере зимних гор
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a2}
                                    alt="Шеф-повар оформляет блюдо"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Зимой Роза Хутор становится местом встреч с&nbsp;сильными шефами. Авторские ужины,
                                    специальные меню и&nbsp;гастрономические события, ради которых стоит приехать.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                        
                        <article className="card">
                            <header className="card__head">
                                <p className="card__label">Опыт и впечатления</p>
                                <h2 className="card__title">
                                    Больше, чем отдых:<br/>
                                    события, эмоции и&nbsp;атмосфера гор
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a3}
                                    alt="Гостья на балконе с видом на горы"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Роза Хутор&nbsp;— это не&nbsp;только трассы и&nbsp;природа. Это события, эмоции
                                    и&nbsp;моменты, которые делают поездку по-настоящему насыщенной.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                    
                    </div>
                    
                    <div className="articles__col articles__col--center">
                        <article className="card">
                            <header className="card__head">
                                <p className="card__label">Люди и истории</p>
                                <h2 className="card__title">
                                    Новые имена и&nbsp;гастрономические проекты, которые задают тон сезону
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a4}
                                    alt="Авторское блюдо в ресторане"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Поп-ап проекты и&nbsp;приглашённые шефы задают ритм гастрономической жизни курорта.
                                    Каждый визит&nbsp;— это новая подача и&nbsp;новый взгляд на&nbsp;привычные вкусы.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                        
                        <article className="card card--offset">
                            <header className="card__head">
                                <p className="card__label">События</p>
                                <h2 className="card__title">
                                    Зимний сезон, наполненный событиями и&nbsp;яркими впечатлениями
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a5}
                                    alt="Дети на зимнем курорте"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Зимой курорт наполняется жизнью: фестивали, ужины, тематические вечера
                                    и&nbsp;специальные программы. Каждый день можно открыть что-то новое.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                        
                        <article className="card card--offset-lg">
                            <header className="card__head">
                                <p className="card__label">Культура</p>
                                <h2 className="card__title">
                                    Концерты и&nbsp;живые выступления в&nbsp;атмосфере зимних гор
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a6}
                                    alt="Музыкант играет на трубе"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Музыка становится частью отдыха: камерные концерты, живые выступления
                                    и&nbsp;вечерние программы в&nbsp;пространствах курорта. Звук, который усиливает
                                    впечатления от&nbsp;места.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                    </div>
                    
                    <div className="articles__col articles__col--right">
                        <article className="card">
                            <header className="card__head">
                                <p className="card__label">Гастрономия</p>
                                <h2 className="card__title">
                                    Рестораны и&nbsp;ужины,<br/>
                                    ради которых возвращаются снова
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a7}
                                    alt="Гости в ресторане курорта"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Рестораны курорта собирают гостей на&nbsp;ужины, где важна каждая деталь:
                                    от&nbsp;локальных продуктов до&nbsp;подачи. Здесь еда становится частью впечатления.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                        
                        <article className="card card--compact">
                            <header className="card__head card__head--compact">
                                <p className="card__label">События</p>
                                <h2 className="card__title card__title--compact">
                                    Гастрономические вечера<br/>
                                    и&nbsp;особые события курорта
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a8}
                                    alt="Церемония на открытом воздухе в горах"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Дегустации, ужины с&nbsp;сет-меню и&nbsp;встречи с&nbsp;шефами. Форматы разные,
                                    но&nbsp;объединяет одно&nbsp;— атмосфера и&nbsp;внимание к&nbsp;деталям.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                        
                        <article className="card card--compact card--offset-sm">
                            <header className="card__head card__head--compact">
                                <p className="card__label">События</p>
                                <h2 className="card__title card__title--compact">
                                    Гастрономические вечера<br/>
                                    и&nbsp;особые события курорта
                                </h2>
                            </header>
                            <div className="card__body">
                                <img
                                    className="card__image"
                                    src={a9}
                                    alt="Вид на горы и озеро с террасы"
                                    width="479"
                                    height="434"
                                    loading="lazy"
                                />
                                <p className="card__text">
                                    Дегустации, ужины с&nbsp;сет-меню и&nbsp;встречи с&nbsp;шефами. Форматы разные,
                                    но&nbsp;объединяет одно&nbsp;— атмосфера и&nbsp;внимание к&nbsp;деталям.
                                </p>
                            </div>
                            <a className="card__link" href="#">Читать</a>
                        </article>
                    </div>
                </div>
                
                <div className="grid-section__footer-links">
                    <div className="grid-section__divider" aria-hidden="true"></div>
                    <a className="grid-section__all" href="#">Все статьи</a>
                    <div className="grid-section__divider" aria-hidden="true"></div>
                </div>
            </div>
        </main>
        
        <section className="summer" aria-labelledby="summer-title">
            <div className="summer__bg" aria-hidden="true"></div>
            <div className="summer__content">
                <p className="summer__eyebrow">[ Активности ]</p>
                <h2 className="summer__title" id="summer-title">Лето в&nbsp;Роза Хутор</h2>
                <p className="summer__text">
                    Откройте для себя сезон, в&nbsp;котором движение и&nbsp;отдых звучат в&nbsp;одном ритме.
                </p>
                <a className="summer__link" href="#">К активностям</a>
            </div>
        </section>
    </Page>
    
}