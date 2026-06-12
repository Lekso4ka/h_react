import React from "react";
import { Content } from "./style";

export const VariantItem = ({ isActive, clickHandler, children }) => {
    return <Content
        active={ isActive }
        onClick={ clickHandler }
    >{ children }</Content>
    
}