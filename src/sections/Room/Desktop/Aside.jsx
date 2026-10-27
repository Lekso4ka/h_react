import React, { useLayoutEffect, useRef } from "react";
import { useT } from "../../../Ctx";
import { externalLinkProps } from "../../../utils/externalHref";

import { Icon } from "../../../ui/Icon";
import { AccItem } from "./AccItem";
import { Button, Copy, Info, MainText, Options, SecondaryText, TextTop, Opt1, OptLite } from "./style";
import { lines } from "../../../utils/lines";

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
        <Button {...externalLinkProps(room[v].availability_link)}>{ lines(t("checkAvailability")) }</Button>
        <Copy ref={ copyRef }>
            <TextTop>
                <h2>{ lines(t("roomParams")) }</h2>
                <div className={ "tl" }>
                    <span>{ room[v].size }</span>
                    <span>{ lines(t("sqm")) }<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>{ lines(t("upTo")) }</span>
                    <span>{ room[v].guests }</span>
                    <sup>{ lines(t("guests")) }</sup>
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
            { room[v].options.length > 0 && <Options>
                <h2>{ lines(t("roomEquipment")) }</h2>
                <ul>
                    { room[v].options.map(item => <li key={ item }>
                        <Icon name={ "check-circle" }/>
                        <span>{ lines(item) }</span>
                    </li>) }
                </ul>
            </Options> }
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
            <AccItem
                title={ t("onRequestServices") }
                data={ room[v].services }
                variant={ "opt2" }
            />
        </Copy>
    </Info>
}
