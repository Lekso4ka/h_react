import React, { useRef, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { useT } from "../../../Ctx";
import { Tour } from "../../../components/Tour";
import { Variants } from "../../../components/Variants";
import { decodeRouteParam, getRoomById } from "../../../data/rooms";
import { bookingLinkProps } from "../../../utils/tlBooking";
import { Breadcrumbs } from "../../../ui/Breadcrumbs";
import { Icon } from "../../../ui/Icon";
import { Line } from "../../../ui/Line";
import { AccItem } from "./AccItem";
import { PhotoPopup } from "./PhotoPopup";
import { lines } from "../../../utils/lines";
import {
    Block,
    Content,
    Image,
    Images,
    Button,
    MainText,
    Options,
    SecondaryText,
    TextTop,
    OptLite, Opt1, BtnWrap, ButtonPad
} from "./style";

export const Mobile = () => {
    const t = useT();
    const { hotel, id, variant } = useParams();
    const v = decodeRouteParam(variant)
    const room = getRoomById(hotel, id);
    const imagesRef = useRef(null);
    const dragRef = useRef({ x: 0, y: 0, moved: false });
    const [popup, setPopup] = useState(null);
    if (!room) return <Navigate to={ `/rooms/${ hotel }` } replace/>;

    const images = room[v].images || [];
    const openPhoto = (index) => {
        const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 10;
        const min = 4.4 * root;
        const shot = imagesRef.current?.firstElementChild;
        const top = (shot || imagesRef.current)?.getBoundingClientRect().top ?? 32 * root;
        setPopup({ index, offset: Math.max(top, min) });
    };
    
    return <Block>
        <div className="wrapper">
            <Breadcrumbs data={ [
                { text: t("home"), link: "/" },
                { text: t("rooms"), link: `/rooms/${ hotel }` },
                { text: room.name, link: "" },
            ] }/>
            { room.variants.length > 1 && <Variants
                arr={ room.variants }
                active={ v }
                h={ hotel }
                id={ id }
            /> }
            <div className="variant">{ v === "default" ? "" : `[ ${ v } ]` }</div>
            <h1>{ lines(room.name) }</h1>
            <Line/>
        </div>
        <Images
            ref={ imagesRef }
            cnt={ images.length }
            onPointerDown={ (event) => {
                dragRef.current = { x: event.clientX, y: event.clientY, moved: false, down: true };
            } }
            onPointerMove={ (event) => {
                if (!dragRef.current.down || dragRef.current.moved) return;
                const dx = Math.abs(event.clientX - dragRef.current.x);
                const dy = Math.abs(event.clientY - dragRef.current.y);
                if (dx > 8 || dy > 8) dragRef.current.moved = true;
            } }
            onPointerUp={ () => {
                dragRef.current.down = false;
            } }
            onPointerCancel={ () => {
                dragRef.current.down = false;
            } }
        >
            { images.map((el, i) => <Image
                key={ i }
                bg={ el }
                onClick={ (event) => {
                    if (event.target.closest("a") || dragRef.current.moved) return;
                    openPhoto(i);
                } }
            >{ (i === 0 && room[v].tour_link) && <Tour
                link={ room[v].tour_link }
                pos/>
            }</Image>) }
        </Images>
        <PhotoPopup
            images={ images }
            active={ Boolean(popup) }
            index={ popup?.index ?? 0 }
            offset={ popup?.offset ?? 0 }
            closeLabel={ t("close") }
            onClose={ () => setPopup(null) }
        />
        <Content>
            <TextTop>
                <h2>{ lines(t("roomParams")) }</h2>
                <div className={ "tl" }>
                    <span>{ room[v].size }</span>
                    <span>{ lines(t("sqm")) }<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>{ lines(t("upTo")) }</span>
                    <span>{ room[v].guests }</span>
                    <span>{ lines(t("guests")) }</span>
                </div>
                <div className={ "bl" }>
                    { lines(room[v].beds) }
                </div>
                <div className={ "br" }>
                    { lines(room[v].view) }
                </div>
            </TextTop>
            <MainText>
                { room[v].text.map((el, i) => <p key={ i }>{ lines(el) }</p>) }
            </MainText>
            <SecondaryText>
                { lines(room[v].tooltip) }
            </SecondaryText>
            { room[v].options.length > 0 && <>
                <Line/>
                <Options>
                    <h2>{ lines(t("roomEquipment")) }</h2>
                    <ul>
                        { room[v].options.map(item => <li key={ item }>
                            <Icon name={ "check-circle" }/>
                            <span>{ lines(item) }</span>
                        </li>) }
                    </ul>
                </Options>
            </> }
            { room[v].options.length === 0
                ? <Opt1>
                    { room[v].all_options.map(el => <OptLite key={ el.title }>
                        <h4>{ lines(el.title) }</h4>
                        <ul>
                            { el.list.map((item, i) => <li key={ i }>{ lines(item) }</li>) }
                        </ul>
                    </OptLite>) }
                </Opt1>
                : <AccItem title={ t("allRoomEquipment") } data={ room[v].all_options } variant={ "opt1" }/>
            }
            <AccItem title={ t("onRequestServices") } data={ room[v].services } variant={ "opt2" }/>
        </Content>
        <BtnWrap>
            <ButtonPad>
                <Button {...bookingLinkProps(room[v].availability_link)}>{ lines(t("checkAvailability")) }</Button>
            </ButtonPad>
        </BtnWrap>
        
    </Block>
}