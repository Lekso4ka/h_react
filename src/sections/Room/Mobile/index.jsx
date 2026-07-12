import React, { useId, useRef, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { Tour } from "../../../components/Tour";
import { Variants } from "../../../components/Variants";
import hData from "../../../data/hotels.json";
import { decodeRouteParam, getRoomById } from "../../../data/rooms";
import { Breadcrumbs } from "../../../ui/Breadcrumbs";
import { Icon } from "../../../ui/Icon";
import { Line } from "../../../ui/Line";
import { AccItem } from "./AccItem";
import {
    Block,
    Content,
    Image,
    Images,
    Button,
    MainText,
    Options,
    SecondaryText,
    TextTop,
    OptLite, Opt1
} from "./style";

export const Mobile = () => {
    const { hotel, id, variant } = useParams();
    const v = decodeRouteParam(variant)
    const room = getRoomById(hotel, id);
    if (!room) return <Navigate to={ `/rooms/${ hotel }` } replace/>;
    
    return <Block>
        <div className="wrapper">
            <Breadcrumbs data={ [
                { text: "Главная", link: "/" },
                { text: "Номера", link: `/rooms/${ hotel }` },
                { text: room.name, link: "" },
            ] }/>
            { room.variants.length > 1 && <Variants
                arr={ room.variants }
                active={ v }
                h={ hotel }
                id={ id }
            /> }
            <div className="variant">{ v === "default" ? "" : `[ ${v} ]` }</div>
            <h1>{ room.name }</h1>
            <Line/>
        </div>
        <Images cnt={ room[v].images.length }>
            { room[v].images.map((el, i) => <Image key={ i } bg={ el }>{ (i === 0 && room[v].tour_link) && <Tour
                link={ room[v].tour_link }
                pos/>
            }</Image>) }
        </Images>
        <Content>
            <TextTop>
                <h2>Основные параметры</h2>
                <div className={ "tl" }>
                    <span>{ room[v].size }</span>
                    <span>м<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>до</span>
                    <span>{ room[v].guests }</span>
                    <span>гостей</span>
                </div>
                <div className={ "bl" }>
                    { room[v].beds }
                </div>
                <div className={ "br" }>
                    { room[v].view }
                </div>
            </TextTop>
            <MainText>
                { room[v].text.map((el, i) => <p key={ i }>{ el }</p>) }
            </MainText>
            <SecondaryText>
                { room[v].tooltip }
            </SecondaryText>
            { room[v].options.length > 0 && <>
            <Line/>
            <Options>
                <h2>Оснащение номера</h2>
                <ul>
                    { room[v].options.map(item => <li key={ item }>
                        <Icon name={ "check-circle" }/>
                        <span>{ item }</span>
                    </li>) }
                </ul>
            </Options>
            </>}
            { room[v].options.length === 0
                ? <Opt1>
                    { room[v].all_options.map(el => <OptLite key={ el.title }>
                        <h4>{ el.title }</h4>
                        <ul>
                            { el.list.map((item, i) => <li key={ i }>{ item }</li>) }
                        </ul>
                    </OptLite>) }
                </Opt1>
                : <AccItem title={ "Всё оснащение номера" } data={ room[v].all_options } variant={ "opt1" }/>
            }
            <AccItem title={ "Услуги по запросу" } data={ room[v].services } variant={ "opt2" }/>
        </Content>
        <Button>Проверить доступность</Button>
    </Block>
}