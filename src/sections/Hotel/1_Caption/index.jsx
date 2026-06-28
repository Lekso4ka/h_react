import React from "react";
import { useCtx } from "../../../Ctx";
import { Icon } from "../../../ui/Icon";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { Hero, Section1, Title } from "./style";
import { VideoSection } from "../2_Video";

export const Caption = ({ data }) => {
    const {mob} = useCtx()
    const renderStars = () => {
        const arr = []
        let n = data.stars
        while (n--) {
            arr.push(<Icon name="star" key={ n }/>)
        }
        return arr;
    }
    return <>
        <Hero bg={ data.banner }>
            <Line/>
            <div className="divider"/>
        </Hero>
        <Title>
            <div className="title">
                {!mob && <div className="stars">
                    { renderStars() }
                </div>}
                <span>{ data.name_tooltip }</span>
                <h1>{ data.name }</h1>
            </div>
            <p>{ data.text_1 }</p>
            <p>{ data.text_2 }</p>
            <p className="address">{ data.address }</p>
            <Link to={ data.room_link }>Выбрать номер</Link>
        </Title>
        
        
    </>
}