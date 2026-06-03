import React from "react";
import { Block } from "./style";

export const Container = ({bg, children, ...rest}) => {
    return <Block bg={bg} {...rest}>{children}</Block>
}