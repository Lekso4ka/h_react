import React, { useState } from "react";
import { Link } from "../../ui/Link";
import { getAffiche } from "../../data"
import { parseDate } from "../../utils/parseDate";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Icon } from "../../ui/Icon";
import { VariantItem } from "../Variants/VariantItem";
import { Container, Content, Filter, Item, Line } from "./style";

const variants = [
    "Спорт",
    "Концерты",
    "Гастрономия",
    "Фестивали",
    "Семья и дети",
    "Экскурсии",
    "Вечерние события",
    "Развлечения на курорте"
]

export const AfficheContent = () => {
    const [activeFilter, setActiveFilter] = useState(false)
    const [filters, setFilters] = useState([])
    const data = getAffiche()
    
    const updFilter = (v) => {
        if (filters.includes(v)) {
            setFilters(filters.filter(el => el !== v))
        } else {
            setFilters([...filters, v])
        }
    }
    return <Container>
        <Line/>
        <Breadcrumbs data={[
            {text: "Главная", link: ""},
            {text: "Афиша", link: ""}
        ]}/>
        <h1>Чем заняться на Роза Хутор</h1>
        <Content>
            <Filter active={activeFilter}>
                <div className="top" onClick={() => setActiveFilter(!activeFilter)}>
                    <Icon name={"plus"}/>
                    <span>Фильтр</span>
                </div>
                <div className="bottom">
                    { variants.map(v => <VariantItem
                        key={v}
                        className={"affiche"}
                        isActive={filters.includes(v)}
                        clickHandler={() => updFilter(v)}
                    >
                        {v}
                    </VariantItem>) }
                </div>
            </Filter>
            {data.filter(el => filters.length > 0 ? filters.includes(el.variant) : true).map((el, i) => <Item key={i} bg={el.src}>
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