import React, { useEffect, useMemo, useRef, useState } from "react";
import { mediaUrl } from "../../../utils/mediaUrl";
import { Tour } from "../../../components/Tour";
import { useT } from "../../../Ctx";

import { Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {Breadcrumbs} from "../../../ui/Breadcrumbs";
import { getHotelById } from "../../../data/hotels";
import { decodeRouteParam, getRoomById } from "../../../data/rooms";
import { Variants } from "../../../components/Variants";
import { Lightbox } from "../../../ui/Lightbox";
import { Cursor, useCursor } from "../../../ui/Cursor";
import { RoomAside } from "./Aside";
import { useRoomInfoPin } from "./hook";
import {
    AsideColumn, Block,
    Caption,
    Gallery,
    GalleryImage,
    HeaderBlock,
    ImagesBlock,
} from "./style";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export const Desktop = () => {
    const t = useT();
    const { hotel, id, variant } = useParams();
        const v = decodeRouteParam(variant)
        
        const sectionRef = useRef(null);
        const galleryRef = useRef(null);
        const infoRef = useRef(null);
        const asideRef = useRef(null);
        const zoneRef = useRef(null);
        const [activeLb, setActiveLb] = useState(false);
        const [lbIndex, setLbIndex] = useState(0);
        const { visible, position } = useCursor({ zoneRef });
        const showCursor = visible && !activeLb;
        
        const room = getRoomById(hotel, id);
        
        if (!room) return <Navigate to={ `/rooms/${ hotel }` } replace/>;
        
        const galleryImages = useMemo(() => {
            if (room[v].images?.length) return room[v].images;
        }, [room[v].images, room.id]);
        
        const { refreshPin } = useRoomInfoPin({
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

        useEffect(() => {
            document.body.style.overflow = activeLb ? "hidden" : "auto";
            return () => {
                document.body.style.overflow = "auto";
            };
        }, [activeLb]);
        
        return <Block ref={ sectionRef }>
            <div ref={ galleryRef }>
                <HeaderBlock>
                    <Breadcrumbs data={ [
                        { text: t("home"), link: "/" },
                        { text: getHotelById(hotel).name, link: `/hotel/${ hotel }` },
                        { text: t("rooms"), link: `/rooms/${ hotel }` },
                        { text: room.name, link: "" },
                    ] }/>
                    { room.variants.length > 1 && <Variants
                        arr={ room.variants }
                        active={ v }
                        h={ hotel }
                        id={ id }
                    /> }
                </HeaderBlock>
                <Caption>
                    <h1>{ room.name }</h1>
                    { v !== "default" && <strong>[ { v } ]</strong> }
                </Caption>
                <ImagesBlock>
                    {room[v].tour_link && <Tour pos link={ room[v].tour_link }/>}
                    <Gallery ref={ zoneRef } $hideCursor={ showCursor }>
                        { (galleryImages || []).map((src, i) => (
                            <GalleryImage
                                key={ i }
                                src={ mediaUrl(src) }
                                alt=""
                                loading={ i === 0 ? "eager" : "lazy" }
                                onClick={ () => {
                                    setLbIndex(i);
                                    setActiveLb(true);
                                } }
                            />
                        )) }
                    </Gallery>
                </ImagesBlock>
            </div>
            <AsideColumn ref={ asideRef }>
                <RoomAside
                    room={ room }
                    infoRef={ infoRef }
                    v={ v }
                />
            </AsideColumn>
            <Cursor
                visible={ showCursor }
                x={ position.x }
                y={ position.y }
                label={ t("enlarge") }
            />
            <Lightbox
                data={ galleryImages || [] }
                active={ activeLb }
                index={ lbIndex }
                close={ () => setActiveLb(false) }
            />
        </Block>
}
