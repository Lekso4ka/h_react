import React from "react";
import { useParams } from "react-router-dom";
import { useT } from "../../../Ctx";
import { getStocks } from "../../../data";
import { Link } from "../../../ui/Link";
import { Block, Item } from "./style";

function stripTags(value) {
    return String(value || "").replace(/<[^>]+>/g, "");
}

function cardFromStock(stock, hotel, more) {
    const raw = String(stock.name || "");
    const match = raw.match(/^([\s\S]*?)<span\b[^>]*>([\s\S]*?)<\/span>([\s\S]*)$/i);
    const main = stripTags(match ? match[1] : raw);
    const color = match ? stripTags(match[2]) : "";
    const tail = match ? stripTags(match[3]) : "";
    const text = [];
    const item = {
        tooltip: stock.tooltip_main || stock.tooltip || "",
        additional: stock.text || "",
        link: {
            href: String(stock.link || "").trim() || `/stock/${hotel}`,
            title: more,
        },
        image: stock.img || "promo",
    };

    if (main) {
        item.main_text = main;
        text.push("main_text");
    }
    if (color) {
        item.color_text = color;
        text.push("color_text");
    }
    if (tail) {
        item.tail_text = tail;
        text.push("tail_text");
    }
    if (!text.length) {
        item.main_text = "";
        text.push("main_text");
    }
    item.text = text;
    return item;
}

export const Promo = () => {
    const t = useT();
    const { hotel } = useParams();
    const data = getStocks(hotel)
        .filter((stock) => stock.show_in_rooms === true)
        .slice(0, 2)
        .map((stock) => cardFromStock(stock, hotel, t("more")));

    if (!data.length) return null;

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
