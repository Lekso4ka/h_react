import React, { useEffect, useRef, useState } from "react";
import { mediaUrl } from "../../utils/mediaUrl";
import { useLocation } from "react-router-dom";
import { Link } from "../../ui/Link";
import { SingleActivity } from "../../sections/Activities/SingleActivity";
import { Article, BtnBlock, Content, Top } from "./style";

import { getDoings } from "../../data";

const randomize = (data) => {
    if (Array.isArray(data)) {
        const n = Math.floor(Math.random() * data.length);
        return data[n]
    } else {
        return Math.floor(Math.random() * data);
    }
}

export const DoingsContent = () => {
    const [showAll, setShowAll] = useState(false);
    const [moreData, setMoreData] = useState(false);
    const location = useLocation();
    const contentRef = useRef()
    const btnRef = useRef()
    const data = getDoings()

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const targetId = decodeURIComponent(hash).replace("#", "");
            
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    // Скроллим от самого верха (0) до элемента
                    const elementPosition = element.getBoundingClientRect().top;
                    const scrollPosition = elementPosition + window.pageYOffset - 100;
                    
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: "smooth"
                    });
                }
            }, 300);
        }
    }, [location]);
    
    useEffect(() => {
        const c = contentRef.current;
        const b = btnRef.current;
        if (c && b) {
            let top = b.getBoundingClientRect().top;
            for (let i = 0; i < c.children.length; i++) {
                const rect = c.children[i].getBoundingClientRect()
                let bot = rect.bottom;
                if (Math.abs(top - bot) < 50) {
                    c.children[i].style.borderBottom = "none";
                }
            }
        }
    }, [contentRef.current, btnRef.current])
    
    useEffect(() => {
        const arr = []
        let n = randomize(20), item
        while (n < 5) {
            n = randomize(20)
        }
        while (n--) {
            item = { ...randomize(data) };
            item.type = item.type === "article" ? randomize(["article", "article", "article", "image", "text", "article"]) : item.type;
            item.order = n
            arr.push(item)
        }
        setMoreData(arr)
    }, []);
    
    const renderArticle = (el, i) => {
        switch (el.type) {
            case "image":
                return <Article key={ `art_${ i }` } bg={ el.src }>
                    <div className="img"/>
                </Article>
            case "video":
                return <Article key={ `art_${ i }` }>
                    <video
                        src={ mediaUrl(el.src) }
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"/>
                </Article>
            case "text":
                return <Article key={ `art_${ i }` } singleText>
                    <h3 dangerouslySetInnerHTML={ { __html: el.text } }></h3>
                </Article>
            default:
                return <Article key={ `art_${ i }` } bg={ el.src }>
                    <h5 id={ el.tooltip }>{ el.tooltip }</h5>
                    <h3 dangerouslySetInnerHTML={ { __html: el.title } }></h3>
                    <div className="img"/>
                    <p dangerouslySetInnerHTML={ { __html: el.text } }/>
                    <Link to={ `/article/${ el.id }` }>Читать</Link>
                </Article>
        }
    }
    
    return <>
        <Top>
            <h3>[ Роза Хутор ]</h3>
            <h1>События и мероприятия <span>горного курорта</span></h1>
        </Top>
        <Content ref={contentRef}>
            { data.map((el, i) => renderArticle(el, i)) }
            <BtnBlock ref={btnRef}>
                <button onClick={ () => setShowAll(!showAll) }>
                    { showAll ? "Скрыть в" : "В" }се статьи
                </button>
            </BtnBlock>
            { showAll && moreData.map((el, i) => renderArticle(el, i)) }
        </Content>
        <SingleActivity name={ "summer" }/>
    </>
}