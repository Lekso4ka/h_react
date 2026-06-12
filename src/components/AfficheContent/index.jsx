import React from 'react';
import { Link } from "react-router-dom";
import data from "../../data/affiche.json"
import { parseDate } from "../../utils/parseDate";
import { Breadcrumbs } from "../Breadcrumbs";
import { Icon } from "../Icon";
import { VariantItem } from "../Variants/VariantItem";
import { Container, Content, Filter, Item, Line } from "./style";

const variants = [
    ""
]

export const AfficheContent = () => {
    return <Container>
        <Line/>
        <Breadcrumbs data={[
            {text: "Главная", link: ""},
            {text: "Афиша", link: ""}
        ]}/>
        <h1>Чем заняться на Роза Хутор</h1>
        <Content>
            <Filter>
                <div className="top">
                    <Icon name={"plus"}/>
                    <span>Фильтр</span>
                </div>
                {/*<div className="bottom">*/}
                {/*    { variants.map(v => <VariantItem>{v}</VariantItem>) }*/}
                {/*</div>*/}
            </Filter>
            {data.map((el, i) => <Item key={i} bg={el.src}>
                <div className="img"/>
                <h5>{ el.variant }</h5>
                <h2>{el.title}</h2>
                <div className="time">
                    <span>{parseDate(el.date,"without-year")}</span>
                    <span className="divider"/>
                    <span>{el.time}</span>
                </div>
                <Link to={el.link}>Подробнее</Link>
            </Item>)}
        </Content>
        <Line/>
    </Container>
}