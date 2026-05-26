import React from "react"
import styled from "@emotion/styled"
import a1 from "../assets/625b115e2603dcc3097a449b3058c4d8e4953834.png"
import a2 from "../assets/ca7183388e3891c60bfcbbe6c557cbcf026c23c2.png"
import a3 from "../assets/00b11b0806aa106bab97075ebdfb2b9a024e3e3a.png"
import a4 from "../assets/24e5c85580a6add8221434916bf4fd095de86656.svg"
import a5 from "../assets/4227d1a88d888d873500c2f90bfa97d463a9161e.png"
import a6 from "../assets/76519af66a3e0275c629696578ac011dab9889dd.png"
import a7 from "../assets/6f781a31cfd987a89feae9feba4766bc545c2857.png"
import a8 from "../assets/2bd6630ac55249cf1b40f7638bd33b65a03971e9.png"
import a9 from "../assets/70c25cdcc9c40414e03ced1730e5d980d48c3d00.png"
import a10 from "../assets/62494f4371bb9363d4795898b9c8b6ec3baedf82.png"

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
        --gutter: 24px;
        --card-radius: 12px;
        --image-radius: 8px;

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
        background: var(--color-white);
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
    

    /* Hero */
    .hero {
        position: relative;
        min-height: 760px;
        display: flex;
        align-items: flex-end;
        padding: 0 var(--gutter) 72px;
        color: var(--color-white);
        overflow: hidden;
    }

    .hero__bg {
        position: absolute;
        inset: 0;
        background-color: #4a5258;
    }

    .hero__bg-inner {
        position: absolute;
        inset: 0;
        overflow: hidden;
    }

    .hero__bg::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
    }

    .hero__bg-image {
        position: absolute;
        left: 0;
        width: 100%;
        max-width: none;
        height: 179.81%;
        top: -61.37%;
        object-fit: cover;
        object-position: center 55%;
    }

    .hero__content {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: var(--page-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(280px, 609px);
        gap: 48px;
        align-items: end;
    }

    .hero__title {
        margin: 0;
        color: var(--color-beige);
        font-family: var(--font-serif);
        font-size: clamp(48px, 4.2vw, 64px);
        font-weight: 500;
        line-height: 1.1;
    }

    .hero__intro {
        margin: 0;
        color: var(--color-beige);
        font-size: 18px;
        line-height: 1.3;
    }

    /* Main — cards overlap hero (~210px per Figma y=550 vs hero 760) */
    .main {
        position: relative;
        z-index: 2;
        margin-top: -210px;
        padding: 0 var(--gutter) 80px;
    }

    .main__inner {
        max-width: var(--page-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    /* Vacancy card */
    .vacancy {
        background: var(--color-white);
        border-radius: var(--card-radius);
        padding: 34px 34px 40px;
    }

    .vacancy__grid {
        display: grid;
        grid-template-columns: minmax(220px, 1.05fr) minmax(280px, 1.35fr) minmax(300px, 1.2fr);
        gap: 40px 48px;
        align-items: start;
    }

    .vacancy__title {
        margin: 0 0 28px;
        color: var(--color-black-2);
        font-family: var(--font-serif);
        font-size: clamp(32px, 2.4vw, 44px);
        font-weight: 500;
        line-height: 1.1;
    }

    .vacancy__meta {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-bottom: 28px;
    }

    .vacancy__meta-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: baseline;
        padding: 12px 0;
        border-top: 1px solid var(--color-line);
    }

    .vacancy__meta-row:first-child {
        border-top: none;
        padding-top: 0;
    }

    .vacancy__meta-label {
        margin: 0;
        color: var(--color-red);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .vacancy__meta-note {
        margin: 0;
        color: rgba(28, 28, 28, 0.6);
        font-size: 14px;
        letter-spacing: 0;
        text-transform: none;
    }

    .vacancy__meta-value {
        margin: 0 0 8px;
        color: var(--color-black);
        font-family: var(--font-sans);
        font-size: 16px;
        font-weight: 500;
        line-height: 1.1;
    }

    .vacancy__meta-value--sm {
        font-size: 14px;
        color: rgba(28, 28, 28, 0.6);
        text-align: right;
    }

    .vacancy__meta-footnote {
        margin: 8px 0 0;
        color: var(--color-muted);
        font-size: 12px;
        line-height: 1.35;
    }

    .vacancy__feedback {
        display: inline-block;
        margin-top: auto;
        padding-top: 24px;
        color: var(--color-black);
        font-size: 13px;
        border-bottom: 1px solid currentColor;
        transition: opacity 0.2s;
    }

    .vacancy__feedback:hover {
        opacity: 0.65;
    }

    .vacancy__aside {
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    .vacancy__photos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 17px;
    }

    .vacancy__photos--reverse .vacancy__photo:first-child {
        order: 2;
    }

    .vacancy__photos--reverse .vacancy__photo:last-child {
        order: 1;
    }

    .vacancy__photo {
        width: 100%;
        aspect-ratio: 284 / 414;
        object-fit: cover;
        border-radius: var(--image-radius);
    }

    /* Content blocks */
    .vacancy__content {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .vacancy__block {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .vacancy__block--duties {
        gap: 26px;
    }

    .vacancy__block-title {
        margin: 0;
        color: var(--color-green);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: 1.1;
        text-transform: uppercase;
    }

    .vacancy--muted .vacancy__block-title {
        color: rgba(47, 48, 52, 0.7);
    }

    .vacancy__list {
        margin: 0;
        padding: 0 0 0 27px;
        max-width: 452px;
        color: var(--color-black-2);
        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;
        list-style-type: disc;
    }

    .vacancy__list li + li {
        margin-top: 0;
    }

    /* Contact */
    .contact__title {
        margin: 0 0 16px;
        color: var(--color-green);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: normal;
        text-transform: uppercase;
    }

    .contact__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .contact__item {
        border-bottom: 1px solid var(--color-green);
    }

    .contact__link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 0;
        color: var(--color-black);
        font-size: 15px;
        transition: opacity 0.2s;
    }

    .contact__link:hover {
        opacity: 0.65;
    }

    .contact__arrow {
        flex-shrink: 0;
        display: block;
    }

    /* Left column layout */
    .vacancy__left {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    /* Responsive */
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

        .hero__content {
            grid-template-columns: 1fr;
            gap: 24px;
        }

        .vacancy__grid {
            grid-template-columns: 1fr 1fr;
        }

        .vacancy__aside {
            grid-column: 1 / -1;
        }
    }

    @media (max-width: 768px) {
        .header {
            position: relative;
            background: var(--color-black);
            padding-bottom: 20px;
        }

        .hero {
            min-height: 520px;
            padding-top: 0;
        }

        .hero__content {
            padding-top: 24px;
        }

        .vacancy {
            padding: 24px 20px 28px;
        }

        .vacancy__grid {
            grid-template-columns: 1fr;
            gap: 28px;
        }

        .vacancy__photos {
            max-width: 520px;
        }
    }

`
export const Vac = ()=> {
    return <Page className="page">
        
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__bg" aria-hidden="true">
                <div className="hero__bg-inner">
                    <img
                        className="hero__bg-image"
                        src={a1}
                        alt=""
                        width="1920"
                        height="760"
                    />
                </div>
            </div>
            <div className="hero__content">
                <h1 className="hero__title" id="hero-title">Вакансии</h1>
                <p className="hero__intro">
                    Трудоустройство в нашем отеле&nbsp;— это возможность работать в&nbsp;большом и&nbsp;дружном
                    коллективе на&nbsp;самом живописном курорте, найти друзей из&nbsp;разных уголков страны,
                    получить новые знания на&nbsp;тренингах и&nbsp;развиваться как профессионал.
                </p>
            </div>
        </section>
        
        <main className="main">
            <div className="main__inner">
                <article className="vacancy" id="bartender">
                    <div className="vacancy__grid">
                        <div className="vacancy__left">
                            <h2 className="vacancy__title">Бармен</h2>
                            <a className="vacancy__feedback" href="#">Обратная связь</a>
                        </div>
                        
                        <div className="vacancy__content">
                            <section className="vacancy__block">
                                <h3 className="vacancy__block-title">Условия:</h3>
                                <ul className="vacancy__list">
                                    <li>предоставляется питание и&nbsp;проживание;</li>
                                    <li>ДМС&nbsp;после 6&nbsp;месяцев работы;</li>
                                    <li>доступ к&nbsp;канатным подъемникам курорта;</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Обязанности:</h3>
                                <ul className="vacancy__list">
                                    <li>грамотное консультирование гостей по&nbsp;меню;</li>
                                    <li>поддержание чистоты и&nbsp;порядка в&nbsp;баре и&nbsp;в&nbsp;служебных зонах;
                                    </li>
                                    <li>
                                        оперативное разрешение возникающих у&nbsp;гостей проблем, предотвращение
                                        конфликтных
                                        и&nbsp;проблемных ситуаций;
                                    </li>
                                    <li>участие в&nbsp;организации банкетов, конференций и&nbsp;фуршетов;</li>
                                    <li>работа с&nbsp;кассой, работа в&nbsp;iiko, ведение соответствующей
                                        документации.
                                    </li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Требования</h3>
                                <ul className="vacancy__list">
                                    <li>опыт работы в&nbsp;ресторанах и&nbsp;барах отеля будет являться преимуществом;
                                    </li>
                                    <li>ответственность, внимательность, умение работать в&nbsp;многозадачном режиме;
                                    </li>
                                    <li>стрессоустойчивость, вежливость, тактичность.</li>
                                </ul>
                            </section>
                        </div>
                        
                        <aside className="vacancy__aside">
                            <div className="vacancy__photos">
                                <img
                                    className="vacancy__photo"
                                    src={a2}
                                    alt="Коктейль за стойкой бара"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                                <img
                                    className="vacancy__photo"
                                    src={a3}
                                    alt="Бармен готовит напиток"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="contact">
                                <h3 className="contact__title">Связаться</h3>
                                <ul className="contact__list">
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Телеграм</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>MAX месенджер</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Почта отеля</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Позвонить</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </article>
                
                <article className="vacancy" id="maid">
                    <div className="vacancy__grid">
                        <div className="vacancy__left">
                            <h2 className="vacancy__title">Горничная</h2>
                            
                            <div className="vacancy__meta">
                                <div className="vacancy__meta-row">
                                    <p className="vacancy__meta-label">Выплаты</p>
                                    <p className="vacancy__meta-note">[в&nbsp;месяц]</p>
                                </div>
                                <p className="vacancy__meta-value">Два раза</p>
                                
                                <div className="vacancy__meta-row">
                                    <p className="vacancy__meta-label">Оформление</p>
                                    <p className="vacancy__meta-value vacancy__meta-value--sm">по ТК РФ</p>
                                </div>
                                <p className="vacancy__meta-footnote">В&nbsp;соответствии с&nbsp;трудовым кодексом</p>
                            </div>
                            
                            <a className="vacancy__feedback" href="#">Обратная связь</a>
                        </div>
                        
                        <div className="vacancy__content">
                            <section className="vacancy__block">
                                <h3 className="vacancy__block-title">Условия:</h3>
                                <ul className="vacancy__list">
                                    <li>ДМС&nbsp;после 6&nbsp;месяцев работы;</li>
                                    <li>предоставляется питание и&nbsp;проживание;</li>
                                    <li>сезонный ски-пасс.</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Обязанности:</h3>
                                <ul className="vacancy__list">
                                    <li>уборка номерного фонда отеля;</li>
                                    <li>
                                        подготовка и&nbsp;корректное использование инвентаря и&nbsp;профессиональной
                                        химии для
                                        работы;
                                    </li>
                                    <li>соблюдение стандартов и&nbsp;технологии работы.</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Требования</h3>
                                <ul className="vacancy__list">
                                    <li>аналогичный опыт работы приветствуется;</li>
                                    <li>готовность к&nbsp;физическим нагрузкам;</li>
                                    <li>внимательность и&nbsp;аккуратность;</li>
                                    <li>наличие действующей мед. книжки или готовность сделать.</li>
                                </ul>
                            </section>
                        </div>
                        
                        <aside className="vacancy__aside">
                            <div className="vacancy__photos vacancy__photos--reverse">
                                <img
                                    className="vacancy__photo"
                                    src={a5}
                                    alt="Коридор отеля"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                                <img
                                    className="vacancy__photo"
                                    src={a6}
                                    alt="Горничная убирает номер"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="contact">
                                <h3 className="contact__title">Связаться</h3>
                                <ul className="contact__list">
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Телеграм</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>MAX месенджер</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Почта отеля</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Позвонить</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </article>
                
                <article className="vacancy vacancy--muted" id="waiter">
                    <div className="vacancy__grid">
                        <div className="vacancy__left">
                            <h2 className="vacancy__title">Официант</h2>
                            
                            <div className="vacancy__meta">
                                <div className="vacancy__meta-row">
                                    <p className="vacancy__meta-label">Выплаты</p>
                                    <p className="vacancy__meta-note">[в&nbsp;месяц]</p>
                                </div>
                                <p className="vacancy__meta-value">Два раза</p>
                                
                                <div className="vacancy__meta-row">
                                    <p className="vacancy__meta-label">Оформление</p>
                                    <p className="vacancy__meta-value vacancy__meta-value--sm">по ТК РФ</p>
                                </div>
                                <p className="vacancy__meta-footnote">В&nbsp;соответствии с&nbsp;трудовым кодексом</p>
                            </div>
                            
                            <a className="vacancy__feedback" href="#">Обратная связь</a>
                        </div>
                        
                        <div className="vacancy__content">
                            <section className="vacancy__block">
                                <h3 className="vacancy__block-title">Условия:</h3>
                                <ul className="vacancy__list">
                                    <li>предоставляется питание и&nbsp;проживание;</li>
                                    <li>ДМС&nbsp;после 6&nbsp;месяцев работы;</li>
                                    <li>доступ к&nbsp;канатным подъемникам курорта.</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Обязанности:</h3>
                                <ul className="vacancy__list">
                                    <li>встреча гостей, создание особой гостеприимной атмосферы;</li>
                                    <li>поддержание чистоты и&nbsp;порядка в&nbsp;ресторане и&nbsp;в&nbsp;служебных
                                        зонах;
                                    </li>
                                    <li>оперативное разрешение возникающих у&nbsp;гостей проблем;</li>
                                    <li>участие в&nbsp;организации банкетов и&nbsp;конференций;</li>
                                    <li>обслуживание гостей по&nbsp;a la carte.</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Требования</h3>
                                <ul className="vacancy__list">
                                    <li>аналогичный опыт работы приветствуется;</li>
                                    <li>ответственность, внимательность, тактичность;</li>
                                    <li>наличие действующей мед. книжки или готовность сделать.</li>
                                </ul>
                            </section>
                        </div>
                        
                        <aside className="vacancy__aside">
                            <div className="vacancy__photos">
                                <img
                                    className="vacancy__photo"
                                    src={a7}
                                    alt="Официант в ресторане"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                                <img
                                    className="vacancy__photo"
                                    src={a8}
                                    alt="Поднос с напитками"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="contact">
                                <h3 className="contact__title">Связаться</h3>
                                <ul className="contact__list">
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Телеграм</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>MAX месенджер</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Почта отеля</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Позвонить</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </article>
                
                <article className="vacancy vacancy--muted" id="handyman">
                    <div className="vacancy__grid">
                        <div className="vacancy__left">
                            <h2 className="vacancy__title">Разнорабочий</h2>
                            <a className="vacancy__feedback" href="#">Обратная связь</a>
                        </div>
                        
                        <div className="vacancy__content">
                            <section className="vacancy__block">
                                <h3 className="vacancy__block-title">Условия:</h3>
                                <ul className="vacancy__list">
                                    <li>предоставляется питание и&nbsp;проживание;</li>
                                    <li>ДМС&nbsp;после 6&nbsp;месяцев работы;</li>
                                    <li>доступ к&nbsp;канатным подъемникам курорта;</li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Обязанности:</h3>
                                <ul className="vacancy__list">
                                    <li>грамотное консультирование гостей по&nbsp;меню;</li>
                                    <li>поддержание чистоты и&nbsp;порядка в&nbsp;баре и&nbsp;в&nbsp;служебных зонах;
                                    </li>
                                    <li>
                                        оперативное разрешение возникающих у&nbsp;гостей проблем, предотвращение
                                        конфликтных
                                        и&nbsp;проблемных ситуаций;
                                    </li>
                                    <li>участие в&nbsp;организации банкетов, конференций и&nbsp;фуршетов;</li>
                                    <li>работа с&nbsp;кассой, работа в&nbsp;iiko, ведение соответствующей
                                        документации.
                                    </li>
                                </ul>
                            </section>
                            <section className="vacancy__block vacancy__block--duties">
                                <h3 className="vacancy__block-title">Требования</h3>
                                <ul className="vacancy__list">
                                    <li>опыт работы в&nbsp;ресторанах и&nbsp;барах отеля будет являться преимуществом;
                                    </li>
                                    <li>ответственность, внимательность, умение работать в&nbsp;многозадачном режиме;
                                    </li>
                                    <li>стрессоустойчивость, вежливость, тактичность.</li>
                                </ul>
                            </section>
                        </div>
                        
                        <aside className="vacancy__aside">
                            <div className="vacancy__photos">
                                <img
                                    className="vacancy__photo"
                                    src={a9}
                                    alt="Разнорабочий с инструментами"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                                <img
                                    className="vacancy__photo"
                                    src={a10}
                                    alt="Сотрудник в лобби отеля"
                                    width="284"
                                    height="414"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="contact">
                                <h3 className="contact__title">Связаться</h3>
                                <ul className="contact__list">
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Телеграм</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>MAX месенджер</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Почта отеля</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                    <li className="contact__item">
                                        <a className="contact__link" href="#"><span>Позвонить</span><img
                                            className="contact__arrow"
                                            src={a4} alt="" width="11"
                                            height="8"/></a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </article>
            </div>
        </main>
    </Page>
    
}