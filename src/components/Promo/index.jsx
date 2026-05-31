import React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        "tooltip": "Весеннее предложение",
        "main_text": "Раннее бронирование на апрель и май. Твоя весна в горах — ",
        "color_text": "идеальное время для отдыха и перезагрузки.",
        text: ["main_text", "color_text"],
        "additional": "Планируйте поездку заранее и получите скидку 20% от стандартного тарифа с завтраком на заезды в апреле и мае 2026 года.",
        link: { href: "/", title: "Подробнее" },
        image: "promo"
    },
    {
        "tooltip": "Весеннее предложение",
        "main_text": "Раннее бронирование на апрель и май. Твоя весна в горах — ",
        "color_text": "идеальное время для отдыха и перезагрузки.",
        text: ["main_text", "color_text"],
        "additional": "Планируйте поездку заранее и получите скидку 20% от стандартного тарифа с завтраком на заезды в апреле и мае 2026 года.",
        link: { href: "/", title: "Подробнее" },
        image: "promo"
    },
]
import { Block, Item } from "./style";

export const Promo = () => {
    return <Block>
        { data.map((item, i) => <Item
            key={i}
            pic={item.image}
            isLeft={i % 2 === 0}
        >
            <h5>{item.tooltip}</h5>
            <h3>{ item.text.map((el, j) => <span
                key={j}
                className={el.includes("color") ? "color" : ""}
            >
                {item[el]}</span>) }
            </h3>
            <div className="img"></div>
            <p>{item.additional}</p>
            <Link to={item.link.href}>{item.link.title}</Link>
        </Item>)  }
    </Block>
}