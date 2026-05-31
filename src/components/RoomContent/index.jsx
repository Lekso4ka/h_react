import React, { useEffect, useMemo, useRef, useState } from "react";
import hData from "../../data/hotels.json";
import img from "../../assets/img";

import { Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Icon } from "../Icon";
import {Breadcrumbs} from "../Breadcrumbs";
import { decodeRouteParam, getRoomById } from "../../data/rooms";
import { Variants } from "../Variants";
import {
    AsideColumn, Block,
    Button,
    Caption,
    GalleryImage,
    HeaderBlock,
    ImagesBlock, Info,
    List1, List2,
    MainText, Options,
    SecondaryText,
    TextTop
} from "./style";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export const RoomContent = () => {
    const { hotel, id, variant } = useParams();
    const v = decodeRouteParam(variant)
    console.log(v)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const ref1 = useRef()
    const ref2 = useRef()
    
    function remToPixels(rem) {
        const size = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return rem * size;
    }
    
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);
    const infoRef = useRef(null);
    const asideRef = useRef(null);
    
    const room = getRoomById(hotel, id);
    
    if (!room) return <Navigate to={ `/rooms/${ hotel }` } replace/>;
    
    const galleryImages = useMemo(() => {
        console.log(room[v].images)
        if (room[v].images?.length) return room[v].images;
    }, [room[v].images, room.id]);
    
    useEffect(() => {
        if (ref1) {
            const h = ref1.current.scrollHeight;
            ref1.current.style.height = active1 ? `${ h }px` : `2rem`
            //ref1.current.scrollIntoView({
            //    behavior: 'smooth',
            //    block: 'end',
            //    inline: 'end'
            //})
            active1 ? window.scrollBy({
                top: h - remToPixels(2),
                behavior: "smooth"
            }) : window.scrollBy({
                top: -(h - remToPixels(8.1)),
                behavior: "smooth"
            })
        }
    }, [active1]);
    useEffect(() => {
        if (ref2) {
            const h = ref2.current.scrollHeight;
            ref2.current.style.height = active2 ? `${ h }px` : `2rem`
            //ref1.current.scrollIntoView({
            //    behavior: 'smooth',
            //    block: 'end',
            //    inline: 'end'
            //})
            active2 ? window.scrollBy({
                top: h - remToPixels(2),
                behavior: "smooth"
            }) : window.scrollBy({
                top: -(h - remToPixels(8.1)),
                behavior: "smooth"
            })
        }
    }, [active2]);
    useGSAP(
        () => {
            const section = sectionRef.current;
            const gallery = galleryRef.current;
            const info = infoRef.current;
            const aside = asideRef.current;
            if (!section || !gallery || !info || !aside) return;
            const mm = gsap.matchMedia();

            mm.add(`(min-width: 320px)`, () => {
                const syncAsideHeight = () => {
                    aside.style.minHeight = `${info.offsetHeight}px`;
                };

                syncAsideHeight();

                const trigger = ScrollTrigger.create({
                    trigger: section,
                    start: () => {
                        syncAsideHeight();
                        const pinTop = window.innerHeight - info.offsetHeight;
                        return `top ${pinTop}px`;
                    },
                    end: () => {
                        syncAsideHeight();
                        const diff = gallery.offsetHeight - info.offsetHeight;
                        return `+=${Math.max(0, diff)}`;
                    },
                    pin: info,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                });

                return () => trigger.kill();
            });

            return () => mm.revert();
        },
        { scope: sectionRef, dependencies: [id] }
    );
    
    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;
        
        const refresh = () => ScrollTrigger.refresh();
        const images = gallery.querySelectorAll("img");
        let pending = 0;
        
        images.forEach((img) => {
            if (img.complete) return;
            pending += 1;
            img.addEventListener("load", onLoad);
            img.addEventListener("error", onLoad);
        });
        
        function onLoad() {
            pending -= 1;
            if (pending <= 0) refresh();
        }
        
        const id = requestAnimationFrame(refresh);
        
        return () => {
            cancelAnimationFrame(id);
            images.forEach((img) => {
                img.removeEventListener("load", onLoad);
                img.removeEventListener("error", onLoad);
            });
        };
    }, [id, galleryImages]);
    
    return <Block ref={ sectionRef }>
        <div ref={ galleryRef }>
            <HeaderBlock>
                <Breadcrumbs data={[
                    {text: "Главная", link: "/"},
                    {text: hData[hotel].name, link: `/hotel/${ hotel }`},
                    {text: "Номера", link: `/rooms/${ hotel }`},
                    {text: room.name, link: ""},
                ]}/>
                { room.variants.length > 1 && <Variants
                    arr={ room.variants }
                    active={ v }
                    h={ hotel }
                    id={ id }
                /> }
            </HeaderBlock>
            <Caption>
                <h1>{ room.name }</h1>
                {v !== "default" && <strong>[ { v } ]</strong>}
            </Caption>
            <ImagesBlock >
                { galleryImages.map((src, i) => (
                    <GalleryImage key={ i } src={ img[src] } alt="" loading={ i === 0 ? "eager" : "lazy" }/>
                )) }
            </ImagesBlock>
        </div>
        <AsideColumn ref={ asideRef }>
            <Info ref={ infoRef }>
                <TextTop>
                    <h2>Основные параметры</h2>
                    <div className={ "tl" }>
                        <span>{ room[v].size }</span>
                        <span>м<sup>2</sup></span>
                    </div>
                    <div className={ "tr" }>
                        <span>до</span>
                        <span>{ room[v].cnt }</span>
                        м<sup>гостей</sup>
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
                { room[v].options.length > 0 && <Options>
                    <h2>Оснащение номера</h2>
                    <ul>
                        { room[v].options.map(item => <li key={ item }>
                            <Icon name={ "check-circle" }/>
                            <span>{ item }</span>
                        </li>) }
                    </ul>
                </Options> }
                <List1 active={ room[v].options.length === 0 ? true : active1 } ref={ ref1 }>
                    {/*<div >*/ }
                    { room[v].options.length > 0 && <h2 onClick={ () => setActive1(!active1) }>
                        Всё оснащение номера
                        <Icon name={ "plus" }/>
                    </h2> }
                    <ul>
                        { room[v].all_options.map((el, i) => <li key={ el.title }>
                            { el.title }
                            <ul>
                                { el.list.map((item, j) => <li key={ j }>{ item }</li>) }
                            </ul>
                        </li>) }
                    </ul>
                </List1>
                <List2 ref={ ref2 } active={ active2 }>
                    <h2 onClick={ () => setActive2(!active2) }>
                        Услуги по запросу
                        <Icon name={ "plus" }/>
                    </h2>
                    <ul>
                        { room[v].services.map(el => <li key={ el }>{ el }</li>) }
                    </ul>
                </List2>
                <Button>Проверить доступность</Button>
            </Info>
        </AsideColumn>
    </Block>
}
