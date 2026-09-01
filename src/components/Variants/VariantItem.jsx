import React from "react";
import { Content } from "./style";

export const VariantItem = ({ isActive, clickHandler, children, ...rest }) => {
    return <Content
        active={ isActive }
        onClick={ clickHandler }
        {...rest}
    >{ children }</Content>
    
}