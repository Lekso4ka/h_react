import React from "react";
import { Item } from "./style";

export const SquareItem = ({ cnt, active, children, ...rest }) => {
    return <Item
        cnt={ cnt }
        active={ active }
        {...rest}
    >
        {children}
    </Item>
}