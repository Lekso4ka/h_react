import React, { useState } from "react";
import { useT } from "../../Ctx";
import { AFFICHE_FILTERS } from "../../i18n/strings";
import { Link } from "../../ui/Link";
import { getAffiche } from "../../data"
import { parseDate } from "../../utils/parseDate";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Icon } from "../../ui/Icon";
import { VariantItem } from "../Variants/VariantItem";
import { Container, Content, Filter, Item, Line } from "./style";

const afficheLabel = (value, t) => {
    const found = AFFICHE_FILTERS.find((item) => item.value === value);
    return found ? t(found.key) : value;
};

export const AfficheContent = () => {
    const t = useT();
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
            {text: t("home"), link: ""},
            {text: t("poster"), link: ""}
        ]}/>
        <h1>{ t("afficheTitle") }</h1>
        <Content>
            <Filter active={activeFilter}>
                <div className="top" onClick={() => setActiveFilter(!activeFilter)}>
                    <Icon name={"plus"}/>
                    <span>{ t("filter") }</span>
                </div>
                <div className="bottom">
                    { AFFICHE_FILTERS.map((item) => <VariantItem
                        key={item.value}
                        className={"affiche"}
                        isActive={filters.includes(item.value)}
                        clickHandler={() => updFilter(item.value)}
                    >
                        { t(item.key) }
                    </VariantItem>) }
                </div>
            </Filter>
            {data.filter(el => filters.length > 0 ? filters.includes(el.variant) : true).map((el, i) => <Item key={i} bg={el.src}>
                <div className="img"/>
                <h5>{ afficheLabel(el.variant, t) }</h5>
                <h2>{el.title}</h2>
                <div className="time">
                    <span>{parseDate(el.date,"without-year")}</span>
                    <span className="divider"/>
                    <span>{el.time}</span>
                </div>
                <Link to={el.link}>{ t("more") }</Link>
            </Item>)}
        </Content>
        <Line/>
    </Container>
}