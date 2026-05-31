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
import { RoomAside } from "./Aside";
import { useRoomInfoPin } from "./hook";
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
    
    const { refreshPin, handleAsideLayoutChange } = useRoomInfoPin({
        sectionRef,
        galleryRef,
        infoRef,
        asideRef,
        id
    });
    
    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;
        
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
            if (pending <= 0) refreshPin();
        }
        
        const id = requestAnimationFrame(() => refreshPin());
        
        return () => {
            cancelAnimationFrame(id);
            images.forEach((img) => {
                img.removeEventListener("load", onLoad);
                img.removeEventListener("error", onLoad);
            });
        };
    }, [id, galleryImages, refreshPin]);
    
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
            <RoomAside
                room={room}
                infoRef={infoRef}
                v={v}
                onLayoutChange={handleAsideLayoutChange}
            />
        </AsideColumn>
    </Block>
}
