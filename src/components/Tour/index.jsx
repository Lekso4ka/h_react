import React from 'react';
import { useT } from "../../Ctx";
import { Block } from "./style";

export const Tour = ({link, dark, pos, ...rest}) => {
    const t = useT();
    return <Block
        href={link}
        target="_blank"
        dark={dark}
        pos={pos}
        className="tour"
        {...rest}
    >
        <span>{t("tour")}</span>
        <span>360°</span>
    </Block>
}