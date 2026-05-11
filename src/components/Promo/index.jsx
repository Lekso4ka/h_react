import React from "react";
import { Block } from "./style";
export const Promo = () => {
    return <Block>
        <div className="promo__frame" aria-hidden="true"></div>
        <div className="promo__grid">
            <div className="promo__col">
                <p className="promo__eyebrow">Весеннее предложение</p>
                <h1 className="promo__title">
                    Раннее бронирование на&nbsp;апрель и май. Твоя весна в горах&nbsp;—
                    <em>идеальное время для отдыха и&nbsp;перезагрузки.</em>
                </h1>
                <figure className="promo__figure">
                    <img src="https://picsum.photos/seed/spring1/224/320" width="224" height="320" alt=""/>
                </figure>
                <p className="promo__lead">
                    Планируйте поездку заранее и&nbsp;получите скидку 20% от&nbsp;стандартного тарифа с
                    завтраком на&nbsp;заезды в апреле и мае 2026 года.
                </p>
                <a className="promo__more" href="#">Подробнее</a>
            </div>
            <div className="promo__col">
                <p className="promo__eyebrow">Весеннее предложение</p>
                <h2 className="promo__title">
                    Раннее бронирование на&nbsp;апрель и май. Твоя весна в горах&nbsp;—
                    <em>идеальное время для отдыха и&nbsp;перезагрузки.</em>
                </h2>
                <figure className="promo__figure">
                    <img src="https://picsum.photos/seed/spring2/224/320" width="224" height="320" alt=""/>
                </figure>
                <p className="promo__lead">
                    Планируйте поездку заранее и&nbsp;получите скидку 20% от&nbsp;стандартного тарифа с
                    завтраком на&nbsp;заезды в апреле и мае 2026 года.
                </p>
                <a className="promo__more" href="#">Подробнее</a>
            </div>
        </div>
    </Block>
}