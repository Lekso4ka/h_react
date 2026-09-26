import React from "react";
import { useT } from "../../../Ctx";
import { Link } from "../../../ui/Link";
import { Block, Item } from "./style";

export const Promo = () => {
    const t = useT();
    const data = [
        {
            tooltip: t("promoTooltip"),
            main_text: t("promoMain"),
            color_text: t("promoColor"),
            text: ["main_text", "color_text"],
            additional: t("promoExtra"),
            link: { href: "/", title: t("more") },
            image: "promo",
        },
        {
            tooltip: t("promoTooltip"),
            main_text: t("promoMain"),
            color_text: t("promoColor"),
            text: ["main_text", "color_text"],
            additional: t("promoExtra"),
            link: { href: "/", title: t("more") },
            image: "promo",
        },
    ];

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
