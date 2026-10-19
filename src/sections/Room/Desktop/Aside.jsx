import React, { useLayoutEffect, useRef } from "react";
import { useT } from "../../../Ctx";
import { externalLinkProps } from "../../../utils/externalHref";

import { Icon } from "../../../ui/Icon";
import { AccItem } from "./AccItem";
import { Button, Copy, Info, MainText, Options, SecondaryText, TextTop, Opt1, OptLite } from "./style";

export const RoomAside = ({ room, v }) => {
    const t = useT();
    const copyRef = useRef(null);

    useLayoutEffect(() => {
        const copy = copyRef.current;
        const button = copy?.previousElementSibling;
        if (!copy || !button) return;

        const stick = () => {
            const buttonTop = parseFloat(getComputedStyle(button).top);
            if (!Number.isFinite(buttonTop)) return;
            // Park the copy so its bottom edge, minus the button-sized padding, meets the button.
            copy.style.top = `${buttonTop + button.offsetHeight - copy.offsetHeight}px`;
        };

        stick();
        const observer = new ResizeObserver(stick);
        observer.observe(copy);
        window.addEventListener("resize", stick);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", stick);
            copy.style.top = "";
        };
    }, [room, v]);

    return <Info>
        <Button {...externalLinkProps(room[v].availability_link)}>{ t("checkAvailability") }</Button>
        <Copy ref={ copyRef }>
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
                : <AccItem title={ t("allRoomEquipment") } data={ room[v].all_options } variant={ "opt1" }/>
            }
            <AccItem
                title={ t("onRequestServices") }
                data={ room[v].services }
                variant={ "opt2" }
            />
        </Copy>
    </Info>
}
