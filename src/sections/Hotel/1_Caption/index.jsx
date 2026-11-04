import React from "react";
import { useCtx, useT } from "../../../Ctx";
import { Icon } from "../../../ui/Icon";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { Hero, Section1, Title } from "./style";
import { VideoSection } from "../2_Video";
import { lines } from "../../../utils/lines";

export const Caption = ({ data, id }) => {
    const {mob} = useCtx()
    const t = useT()
    const renderStars = () => {
        const arr = []
        let n = data.stars
        while (n--) {
            arr.push(<Icon name="star" key={ n }/>)
        }
        return arr;
    }
    return <>
        <Hero
            bg={ data.banner || data.banner_mobile }
            bgMobile={ data.banner_mobile || data.banner }
            pos={ data.banner_position }
            size={ data.banner_size }
            posMobile={ data.banner_mobile_position }
            sizeMobile={ data.banner_mobile_size }
        >
            <Line />
            <div className="divider"/>
            
            {/*start TL Search form script*/}
            <div id="block-search">
                <div id={ `tl-search-form-${id === "golden-tulip" ? 3934 : 3935}` } className="tl-container">
                    <a href="https://www.travelline.ru/products/tl-hotel/" rel="nofollow" target="_blank">TravelLine</a>
                </div>
            </div>
            {/*end TL Search form script*/}
        
        
        </Hero>
        <Title>
            <div className="title">
                {!mob && <div className="stars">
                    { renderStars() }
                </div>}
                <span>{ lines(data.name_tooltip) }</span>
                <h1>{ lines(data.name) }</h1>
            </div>
            <p>{ lines(data.text_1) }</p>
            <p>{ lines(data.text_2) }</p>
            <p className="address">{ lines(data.address) }</p>
            <Link to={ data.room_link }>{ lines(t("chooseRoom")) }</Link>
        </Title>
        
        
    </>
}