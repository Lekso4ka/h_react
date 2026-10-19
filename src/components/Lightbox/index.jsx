import React, { useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useT } from "../../Ctx";
import { Link } from "../../ui/Link";
import { Actions, Aside, Overlay, Panel, Text, Title } from "./style";

const lockScroll = () => {
    const html = document.documentElement;
    const body = document.body;
    const prev = {
        htmlOverflow: html.style.overflow,
        bodyOverflow: body.style.overflow,
        bodyPosition: body.style.position,
        bodyTop: body.style.top,
        bodyLeft: body.style.left,
        bodyRight: body.style.right,
        bodyWidth: body.style.width,
    };

    window.scrollTo(0, 0);
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const block = (event) => {
        event.preventDefault();
    };
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });

    return () => {
        window.removeEventListener("wheel", block);
        window.removeEventListener("touchmove", block);
        html.style.overflow = prev.htmlOverflow;
        body.style.overflow = prev.bodyOverflow;
        body.style.position = prev.bodyPosition;
        body.style.top = prev.bodyTop;
        body.style.left = prev.bodyLeft;
        body.style.right = prev.bodyRight;
        body.style.width = prev.bodyWidth;
        window.scrollTo(0, 0);
    };
};

export const Lightbox = ({ active = true }) => {
    const t = useT();

    useLayoutEffect(() => {
        if (!active) return undefined;
        return lockScroll();
    }, [active]);

    if (!active || typeof document === "undefined") return null;

    return createPortal(
        <Overlay role="dialog" aria-modal="true" aria-labelledby="renovation-lightbox-title">
            <Panel>
                <Title id="renovation-lightbox-title">{ t("renovationTitle") }</Title>
                <Aside>
                    <Text>{ t("renovationText") }</Text>
                    <Actions>
                        <Link to="/hotel/golden-tulip">{ t("renovationHotel") }</Link>
                        <Link to="/rooms/golden-tulip">{ t("renovationRooms") }</Link>
                    </Actions>
                </Aside>
            </Panel>
        </Overlay>,
        document.body,
    );
};
