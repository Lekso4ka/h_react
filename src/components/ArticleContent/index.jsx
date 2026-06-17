import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../../data";
import { Line } from "../Line";
import {
    Carousel,
    CarouselItem,
    Hero,
    Section1,
    Section2,
    Section3, Section3Item,
    Section4,
    Section5,
    Section6,
    Section7
} from "./style";

export const ArticleContent = () => {
    const [activeImg, setActiveImg] = useState(0);
    const { article } = useParams();
    const { content: a } = getArticleById(article);
    return <>
        
        <Hero>
            <Line/>
            <div className="title">
                <h4>{ a.title.tooltip }</h4>
                <h1 dangerouslySetInnerHTML={ { __html: a.title.caption } }/>
            </div>
            <Line/>
        </Hero>
        
        <Section1 bg={ a.section_1.img }>
            <h2>{ a.section_1.caption_1 }</h2>
            <div className="img"/>
            <p className="text">{ a.section_1.text_1 }</p>
            <h3>{ a.section_1.caption_2 }</h3>
            { a.section_1.text_2.map((el, i) => <p key={ i }>{ el }</p>) }
        </Section1>
        
        <Carousel active={ activeImg }>
            <div className="buttons">
                { a.carousel.map((el, i) => <div
                    className="btn"
                    key={ i }
                    onClick={ () => setActiveImg(i) }
                />) }
            </div>
            { a.carousel.map((el, i) => <CarouselItem
                key={ i }
                bg={ el }
                active={ activeImg === i }
            />) }
        </Carousel>
        
        <Section2
            bg1={ a.section_2.img_1 }
            bg2={ a.section_2.img_2 }
        >
            <div className="img img1"/>
            <div className="img img2"/>
            <h2>{ a.section_2.caption }</h2>
            { a.section_2.text.map((el, i) => <p key={ i }>{ el }</p>) }
        </Section2>
        
        
        <Section3>
            <h2>{ a.section_3.caption }</h2>
            <p>{ a.section_3.text }</p>
            <ul>
                { a.section_3.list.map((el, i) => <Section3Item
                    key={ i }
                    bg={ el.img }
                >
                    <span dangerouslySetInnerHTML={ { __html: el.text } }/>
                </Section3Item>) }
            </ul>
            <h3 dangerouslySetInnerHTML={ { __html: a.section_3.tooltip } }/>
            <Link to={ a.section_3.link }>Смотреть номера</Link>
        </Section3>
        
        
        <Section4
            bg1={ a.section_4.img_1 }
            bg2={ a.section_4.img_2 }
        >
            <div className="img img1"></div>
            <div className="text">
                <h2>{ a.section_4.caption }</h2>
                { a.section_4.text.map((el, i) => <p key={ i }>{ el }</p>) }
            </div>
            <div className="img img2"></div>
        </Section4>
        
        <Section5 bg={ a.section_5.img }>
            <h2>{ a.section_5.caption }</h2>
            <p>{ a.section_5.text }</p>
            <div className="img"></div>
            <p className="img_text">{ a.section_5.img_text }</p>
        </Section5>
        
        <Section6 bg={ a.section_6.img }>
            <div className="text">
                <Line/>
                <p>{ a.section_6.text }
                </p>
                <Line/>
            </div>
            <div className="img"/>
        </Section6>
        
        <Section7>
            <div className="top">
                <div className="text">
                    <h2>{ a.section_7.caption }</h2>
                    <p>{ a.section_7.text }</p>
                </div>
                <ul>
                    { a.section_7.list.map((el, i) => <li key={ i }>{ el }</li>) }
                </ul>
                <Link to={ a.section_7.link }>Выбрать отель</Link>
            </div>
            <div className="bottom">
                <Line/>
                <div className="tabs">
                    { a.section_7.tags.map((el, i) => <Link
                        key={ i }
                        to={ el.link }
                    >{ el.text }</Link>) }
                </div>
                <Line/>
            </div>
        </Section7>
    </>
    
}