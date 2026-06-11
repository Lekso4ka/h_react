import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SingleActivity } from "../SingleActivity";
import { Article, BtnBlock, Content, Top } from "./style";

import data from "../../data/doings.json";
import img from "../../assets/img"

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
    
    useEffect(() => {
        const arr = []
        let n = randomize(20), item
        while (n < 5) {
            n = randomize(20)
        }
        while (n--) {
            item = {...randomize(data)};
            console.log(item)
            item.type = item.type === "article" ? randomize(["article","article","article", "image", "text", "article"]) : item.type;
            item.order = n
            arr.push(item)
        }
        setMoreData(arr)
    }, []);
    
    useEffect(() => {
        console.log(moreData)
    }, [moreData]);
    
    const renderArticle = (el, i) => {
        console.log(el.type)
        switch(el.type) {
            case "image":
                return <Article key={`art_${i}`} bg={el.src}>
                    <div className="img"/>
                </Article>
            case "video":
                return <Article key={`art_${i}`} >
                    <video src={img[el.src]} autoPlay/>
                </Article>
            case "text":
                return <Article key={`art_${i}`} singleText>
                    <h3 dangerouslySetInnerHTML={{__html: el.text}}></h3>
                </Article>
            default:
                return <Article key={`art_${i}`} bg={el.src}>
                    <h5>{el.tooltip}</h5>
                    <h3 dangerouslySetInnerHTML={{__html: el.title}}></h3>
                    <div className="img"/>
                    <p dangerouslySetInnerHTML={{__html: el.text}}/>
                    <Link to={el.link}>Читать</Link>
                </Article>
        }
    }
    
    return <>
        <Top>
            <h3>[ Роза Хутор ]</h3>
            <h1>События и мероприятия <span>горного курорта</span></h1>
        </Top>
        <Content>
            {data.map((el, i) => renderArticle(el, i))}
            <BtnBlock>
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Скрыть в" : "В"}се статьи
                </button>
            </BtnBlock>
            {showAll && moreData.map((el, i) => renderArticle(el, i))}
        </Content>
        <SingleActivity name={"summer"}/>
    </>
}