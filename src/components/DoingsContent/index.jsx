import React, { useEffect, useRef, useState } from "react";
import { useT } from "../../Ctx";
import { mediaUrl } from "../../utils/mediaUrl";
import { useLocation } from "react-router-dom";
import { Link } from "../../ui/Link";
import { SingleActivity } from "../../sections/Activities/SingleActivity";
import { Article, BtnBlock, Content, Top } from "./style";

import { getDoings } from "../../data";
import { lines } from "../../utils/lines";

const PREVIEW_COUNT = 9;

export const DoingsContent = () => {
    const t = useT();
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
    const contentRef = useRef()
    const btnRef = useRef()
    const data = getDoings()
    const preview = data.slice(0, PREVIEW_COUNT)
    const rest = data.slice(PREVIEW_COUNT)

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
        if (!c) return;

        for (let i = 0; i < c.children.length; i++) {
            c.children[i].style.borderBottom = "";
        }
        if (!b) return;

        const top = b.getBoundingClientRect().top;
        for (let i = 0; i < c.children.length; i++) {
            const bot = c.children[i].getBoundingClientRect().bottom;
            if (Math.abs(top - bot) < 50) {
                c.children[i].style.borderBottom = "none";
            }
        }
    }, [showAll, data.length])
    
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
                    <h5 id={ el.tooltip }>{ lines(el.tooltip) }</h5>
                    <h3 dangerouslySetInnerHTML={ { __html: el.title } }></h3>
                    <div className="img"/>
                    <p dangerouslySetInnerHTML={ { __html: el.text } }/>
                    <Link to={ `/article/${ el.id }` }>{ lines(t("read")) }</Link>
                </Article>
        }
    }
    
    return <>
        <Top>
            <h3>{ lines(t("rosaKhutor")) }</h3>
            <h1>{ lines(t("doingsTitle")) } <span>{ lines(t("doingsTitleAccent")) }</span></h1>
        </Top>
        <Content ref={contentRef}>
            { preview.map((el, i) => renderArticle(el, `preview-${ el.id ?? i }`)) }
            { rest.length > 0 && (
                <BtnBlock ref={btnRef}>
                    <button onClick={ () => setShowAll((open) => !open) }>
                        { showAll ? lines(t("hideArticles")) : lines(t("allArticles")) }
                    </button>
                </BtnBlock>
            ) }
            { showAll && rest.map((el, i) => renderArticle(el, `rest-${ el.id ?? i }`)) }
        </Content>
        <SingleActivity name={ "summer" }/>
    </>
}