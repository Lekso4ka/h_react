import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import img from "../../assets/img"

import data from "../../data/activities.json";
import { Icon } from "../../ui/Icon";
import { SingleActivity } from "../SingleActivity";
import { Tour } from "../Tour";
import { Block, Btn, Content, Hero, HeroLink, Image, ImgItem, Item, List, Other, VideoContainer } from "./style";

export const ActivitiesContent = () => {
    const { activity } = useParams()
    const navigate = useNavigate();
    const [activeItems, setActiveItems] = useState([])
    const [other, setOther] = useState(activity === "winter" ? "summer" : "winter")
    useEffect(() => {
        const arr = []
        data[activity].list.forEach(el => {
            arr.push(0)
        })
        setActiveItems(arr)
        setOther(activity === "winter" ? "summer" : "winter")
    }, [activity])
    return <>
        <Hero bg={ data[activity].image }>
            <h1>{ data[activity].name }</h1>
            <div>
                <HeroLink
                    isActive={ activity === "summer" }
                    onClick={ () => navigate("/activities/summer") }
                >лето</HeroLink>
                <HeroLink
                    isActive={ activity === "winter" }
                    onClick={ () => navigate("/activities/winter") }
                >зима</HeroLink>
            </div>
        </Hero>
        <Block>
            <p dangerouslySetInnerHTML={ { __html: data[activity].text_top } }/>
            <Content>
                { data[activity].list.map((el, i) => <Fragment key={ i }>
                    <Image bg={ el.image }>
                        <h2>{ el.name }</h2>
                    </Image>
                    <List>
                        { el.items.map((item, j) => <Item
                            key={ j }
                            isActive={ activeItems[i] === j }
                        >
                            <h5>{ item.tooltip }</h5>
                            <h3>{ item.title } { j }</h3>
                            <ImgItem bg={ item.image }/>
                            <p>{ item.text }</p>
                            <Icon
                                name="arrow"
                                left
                                color="#96281F"
                                onClick={() => setActiveItems(prev => prev.map((e, index) => index === i ? (j === 0 ? el.items.length - 1 : j - 1) : e))}
                            />
                            <Icon
                                name="arrow"
                                left={false}
                                color="#96281F"
                                onClick={() => setActiveItems(prev => prev.map((e, index) => index === i ? (j === el.items.length - 1 ? 0 : j + 1) : e))}
                            />
                        </Item>) }
                        <div className="buttons">{ el.items.map((it, j) => <Btn
                            key={j}
                            isActive={ activeItems[i] === j }
                            onClick={ () => setActiveItems(prev => prev.map((el, index) => index === i ? j : el)) }
                        />) }
                        </div>
                    </List>
                </Fragment> ) }
            </Content>
            <p dangerouslySetInnerHTML={ { __html: data[activity].text_bottom } }/>
        </Block>
        <VideoContainer>
            <video src={img.vi_gastro} autoPlay/>
            <div>
                <Tour dark link={""} pos style={{top: "2.4rem", right: "2.4rem", left: "auto"}}/>
                <h2>BRANCHE</h2>
                <Link className="link" to={""}>Резерв стола</Link>
            </div>
        </VideoContainer>
        <SingleActivity name={other}/>
    </>
}