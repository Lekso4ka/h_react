import React from 'react';
import { Block } from "./style";

export const Tour = ({link, dark, pos, ...rest}) => {
    return <Block
        href={link}
        target="_blank"
        dark={dark}
        pos={pos}
        {...rest}
    >
        <span>Тур</span>
        <span>360°</span>
    </Block>
}