import React from "react";
import { useCtx } from "../../Ctx";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const Header = () => {
    const {mob} = useCtx();
    
    return mob ? <Mobile/> : <Desktop/>
}