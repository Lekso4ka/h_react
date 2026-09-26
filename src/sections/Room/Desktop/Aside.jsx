import React, { useEffect, useRef, useState } from "react";
import { useT } from "../../../Ctx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Icon } from "../../../ui/Icon";
import { AccItem } from "./AccItem";
import { Button, Info, MainText, Options, SecondaryText, TextTop, Opt1, OptLite } from "./style";

gsap.registerPlugin(useGSAP);

export const RoomAside = ({ room, v, infoRef, onLayoutChange }) => {
    const t = useT();
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [h, setH] = useState(0)
    const expandedRef = useRef(0);
    
    const notifyLayout = (phase) => {
        onLayoutChange?.({ phase, expanded: expandedRef.current });
    };
    useEffect(() => {
        const info = infoRef.current;
        if (info) {
            setH(info.offsetHeight);
        }
    }, [])
    
    useEffect(() => {
        const info = infoRef.current;
            expandedRef.current = info.offsetHeight - h;
            notifyLayout("animating");
            
            setTimeout(() => {
                console.log(h, info.offsetHeight - h)
                expandedRef.current = info.offsetHeight - h;
                notifyLayout("animating");
            }, 100)
        
    }, [isOpen1, isOpen2])
    
    return <Info ref={ infoRef }>
        <div>
            <TextTop>
                <h2>{ t("roomParams") }</h2>
                <div className={ "tl" }>
                    <span>{ room[v].size }</span>
                    <span>{ t("sqm") }<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>{ t("upTo") }</span>
                    <span>{ room[v].guests }</span>
                    <sup>{ t("guests") }</sup>
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
                <h2>{ t("roomEquipment") }</h2>
                <ul>
                    { room[v].options.map(item => <li key={ item }>
                        <Icon name={ "check-circle" }/>
                        <span>{ item }</span>
                    </li>) }
                </ul>
            </Options> }
            { room[v].options.length === 0
                ? <Opt1>
                    { room[v].all_options.map(el => <OptLite key={ el.title }>
                        <h4>{ el.title }</h4>
                        <ul>
                            { el.list.map((item, i) => <li key={ i }>{ item }</li>) }
                        </ul>
                    </OptLite>) }
                </Opt1>
                : <AccItem title={ t("allRoomEquipment") } data={ room[v].all_options } variant={ "opt1" }
                           cb={ setIsOpen1 }/>
            }
            <AccItem
                title={ t("onRequestServices") }
                data={ room[v].services }
                variant={ "opt2" }
                cb={ setIsOpen2 }
            />
        </div>
        <Button>{ t("checkAvailability") }</Button>
    </Info>
    
}


