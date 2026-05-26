import React from 'react';
import styled from "@emotion/styled"
import e1 from "../assets/images/Ev1.png"
import e2 from "../assets/images/Ev2.png"

const Page = styled.div`
    position: relative;
    padding: 15rem 2.3rem 12rem;
    --black-2: #2f3034;
    --black-2-60: rgba(47, 48, 52, 0.6);
    --black-2-80: rgba(47, 48, 52, 0.8);
    --green: #55532e;
    --beige: #fff6f0;
    --beige-2: #f2ecde;
    --card-bg: #fff3e3;
    --card-border: rgba(255, 246, 240, 0.3);
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Hero */
    .hero {
        padding-top: 4.8rem;
        max-width: 187.3rem;
    }

    .hero__inner {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 4rem;
    }

    .hero__title {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 4.4rem;
        line-height: 1.1;
        max-width: 60.9rem;
        flex-shrink: 0;
    }

    .hero__texts {
        display: flex;
        flex-wrap: nowrap;
        gap: 17.5rem;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 1.2;
        flex-shrink: 0;
    }

    .hero__texts p {
        max-width: 45.2rem;
    }

    .hero__texts p:last-child {
        max-width: 45rem;
    }

    /* Tabs */
    .section {
        margin-top: 6.4rem;
        max-width: 234.7rem;
    }

    .tabs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 127.8rem;
        margin-bottom: 3rem;
    }

    .tab {
        display: flex;
        flex-direction: column;
        gap: .1rem;
        align-items: flex-start;
    }

    .tab--right {
        align-items: flex-start;
        width: 17.6rem;
    }

    .tab--left {
        width: 20rem;
        align-items: flex-end;
        text-align: right;
    }

    .tab__num {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.2;
    }

    .tab--inactive .tab__num,
    .tab--inactive .tab__label {
        color: var(--black-2-60);
    }

    .tab__row {
        display: flex;
        align-items: center;
        gap: .6rem;
    }

    .tab__icon {
        display: flex;
        align-items: center;
        padding: .2rem .4rem;
    }

    .tab__icon span {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
    }

    .tab--active .tab__icon span {
        background: var(--black-2);
    }

    .tab--inactive .tab__icon span {
        border: .1rem solid #000;
        background: transparent;
    }

    .tab__label {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 1.1;
        white-space: nowrap;
    }

    /* Cards row */
    .cards {
        display: flex;
        gap: 2.3rem;
        align-items: center;
    }

    .venue {
        display: flex;
        gap: 2.2rem;
        align-items: flex-end;
        flex-shrink: 0;
    }

    .venue__info {
        background: var(--card-bg);
        width: 29.4rem;
        min-height: 57.3rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    .venue__info--fisht {
        padding-right: 4.2rem;
    }

    .venue__body {
        display: flex;
        flex-direction: column;
        gap: 4.6rem;
    }

    .venue__head {
        display: flex;
        flex-direction: column;
        gap: 3.6rem;
    }

    .venue__head--fisht {
        gap: 7.3rem;
        max-width: 10.1rem;
    }

    .venue__title {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        font-size: 3.4rem;
        line-height: 1.1;
    }

    .tour-btn {
        position: relative;
        width: 8.5rem;
        height: 6.9rem;
        background: var(--green);
        border: none;
        cursor: pointer;
        text-align: left;
        padding: 0;
    }

    .tour-btn__label {
        position: absolute;
        top: 1.0rem;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.1;
        color: var(--beige);
        white-space: nowrap;
    }

    .tour-btn__deg {
        position: absolute;
        top: 2.7rem;
        left: 2rem;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 2.4rem;
        color: var(--beige);
        white-space: nowrap;
    }

    .venue__details {
        display: flex;
        flex-direction: column;
        gap: 4.7rem;
    }

    .venue__stats-block {
        display: flex;
        flex-direction: column;
        gap: 4.6rem;
    }

    .venue__stats {
        display: flex;
        gap: 2.5rem;
        align-items: center;
    }

    .venue__stats--fisht {
        gap: 5.3rem;
    }

    .stat {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    }

    .stat--capacity {
        gap: 1.5rem;
    }

    .stat__label {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1;
        color: var(--green);
    }

    .stat__label--cap {
        line-height: 0.9;
    }

    .stat__value {
        display: flex;
        align-items: flex-end;
        gap: .4rem;
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        color: var(--black-2);
        white-space: nowrap;
    }

    .stat__value-num {
        font-size: 5.4rem;
        line-height: 1;
    }

    .stat__value-unit {
        font-size: 2.4rem;
        line-height: 1;
        padding-bottom: .4rem;
    }

    .stat__value-single {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        font-size: 5.4rem;
        line-height: 1;
        text-transform: uppercase;
    }

    .events {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        max-width: 15.3rem;
    }

    .events__title {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1;
    }

    .events__list {
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    .events__item {
        display: flex;
        align-items: center;
        gap: .6rem;
    }

    .events__item::before {
        content: '';
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: var(--black-2-80);
        flex-shrink: 0;
    }

    .events__item span {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.4;
        color: var(--black-2-80);
        white-space: nowrap;
    }

    .venue__link {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        font-style: italic;
        font-size: 1.8rem;
        line-height: 1.1;
        color: var(--black-2);
        text-decoration: underline;
        text-underline-offset: .2rem;
    }

    .venue__link:hover {
        opacity: 0.75;
    }

    .venue__image {
        display: block;
        object-fit: cover;
        flex-shrink: 0;
    }

    .venue__image--overview {
        width: 76.7rem;
        height: 57.1rem;
    }

    .venue__image--fisht {
        width: 92.5rem;
        height: 57.1rem;
    }

    /* Next button */
    .btn-next {
        position: fixed;
        right: 4.8rem;
        bottom: 4.8rem;
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
        padding: 4.8rem 3.6rem;
        cursor: pointer;
        z-index: 10;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-next:hover {
        transform: scale(1.03);
        box-shadow: 0 .8rem 3.2rem rgba(47, 48, 52, 0.12);
    }

    .btn-next span {
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: .048rem;
        text-transform: uppercase;
        text-align: center;
        color: var(--black-2);
        white-space: nowrap;
    }

    @media (max-width: 140rem) {
        .hero__inner {
            flex-direction: column;
            align-items: flex-start;
        }

        .hero__texts {
            flex-direction: column;
            gap: 2.4rem;
        }

        .hero__texts p,
        .hero__texts p:last-child {
            max-width: none;
        }
    }
`

export const Events = () => {
    return <Page className="page">
        <header className="hero">
            <div className="hero__inner">
                <h1 className="hero__title">Мероприятия и события любого формата, где важны атмосфера и детали.</h1>
                <div className="hero__texts">
                    <p>Проводите встречи, презентации и конференции в&nbsp;удобных залах с продуманной атмосферой.
                        Пространства легко адаптируются под формат и&nbsp;количество гостей.</p>
                    <p>От камерных ужинов до больших праздников. Красивые залы, внимательная команда и детали, которые
                        делают каждое событие по-настоящему особенным.</p>
                </div>
            </div>
        </header>
        
        <section className="section">
            <nav className="tabs" aria-label="Категории площадок">
                <div className="tab tab--left tab--active">
                    <span className="tab__num">[ 9 ]</span>
                    <div className="tab__row">
                        <div className="tab__icon"><span></span></div>
                        <span className="tab__label">Конференц залы</span>
                    </div>
                </div>
                <div className="tab tab--right tab--inactive">
                    <span className="tab__num">[ 2 ]</span>
                    <div className="tab__row">
                        <div className="tab__icon"><span></span></div>
                        <span className="tab__label">Мероприятия</span>
                    </div>
                </div>
            </nav>
            
            <div className="cards">
                <article className="venue">
                    <div className="venue__info">
                        <div className="venue__body">
                            <div className="venue__head">
                                <h2 className="venue__title">Обзорная площадка</h2>
                                <button type="button" className="tour-btn" aria-label="Тур 360 градусов">
                                    <span className="tour-btn__label">Тур</span>
                                    <span className="tour-btn__deg">360°</span>
                                </button>
                            </div>
                            <div className="venue__details">
                                <div className="venue__stats-block">
                                    <div className="venue__stats">
                                        <div className="stat">
                                            <span className="stat__label">Площадь</span>
                                            <div className="stat__value">
                                                <span className="stat__value-num">250</span>
                                                <span className="stat__value-unit">м²</span>
                                            </div>
                                        </div>
                                        <div className="stat stat--capacity">
                                            <span className="stat__label stat__label--cap">Вместимость</span>
                                            <span className="stat__value-single">100</span>
                                        </div>
                                    </div>
                                    <div className="events">
                                        <h3 className="events__title">Мероприятия</h3>
                                        <ul className="events__list">
                                            <li className="events__item"><span>Фуршет</span></li>
                                            <li className="events__item"><span>Кофе-брейк</span></li>
                                            <li className="events__item"><span>Свадебная регистрация</span></li>
                                            <li className="events__item"><span>Кинопоказ</span></li>
                                            <li className="events__item"><span>Спортивная тренировка</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="#" className="venue__link">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <img
                        className="venue__image venue__image--overview"
                        src={e1}
                        alt="Обзорная площадка — терраса с видом на горы"
                        width="767"
                        height="571"
                    />
                </article>
                
                <article className="venue">
                    <div className="venue__info venue__info--fisht">
                        <div className="venue__body">
                            <div className="venue__head venue__head--fisht">
                                <h2 className="venue__title">Фишт</h2>
                                <button type="button" className="tour-btn" aria-label="Тур 360 градусов">
                                    <span className="tour-btn__label">Тур</span>
                                    <span className="tour-btn__deg">360°</span>
                                </button>
                            </div>
                            <div className="venue__details">
                                <div className="venue__stats-block">
                                    <div className="venue__stats venue__stats--fisht">
                                        <div className="stat">
                                            <span className="stat__label">Площадь</span>
                                            <div className="stat__value">
                                                <span className="stat__value-num">49</span>
                                                <span className="stat__value-unit">м²</span>
                                            </div>
                                        </div>
                                        <div className="stat stat--capacity">
                                            <span className="stat__label stat__label--cap">Вместимость</span>
                                            <span className="stat__value-single">16</span>
                                        </div>
                                    </div>
                                    <div className="events">
                                        <h3 className="events__title">Мероприятия</h3>
                                        <ul className="events__list">
                                            <li className="events__item"><span>Конференции</span></li>
                                            <li className="events__item"><span>Совещание</span></li>
                                            <li className="events__item"><span>Банкет</span></li>
                                            <li className="events__item"><span>Встречи с партнерами</span></li>
                                            <li className="events__item"><span>Фуршет</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="#" className="venue__link">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <img
                        className="venue__image venue__image--fisht"
                        src={e2}
                        alt="Зал Фишт — конференц-зал"
                        width="925"
                        height="571"
                    />
                </article>
            </div>
        </section>
        
        <button type="button" className="btn-next" aria-label="Следующий слайд">
            <span>[ дальше ]</span>
        </button>
    </Page>
}