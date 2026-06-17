import React from "react";
import { Block } from "./style";

export const Container = ({bg, hh = false, children, ...rest}) => {
    return <Block bg={bg} hh={hh} {...rest}>{children}</Block>
}