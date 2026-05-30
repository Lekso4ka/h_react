import React from "react";
import { Arrow } from "./Arrow";
import { Bracket } from "./Bracket";
import { CheckCircle } from "./CheckCircle";

import {Plus} from "./Plus"
import { Star } from "./Star";

export const Icon = ({name, color, left}) => {
    const getIcon = () => {
        switch (name) {
            case "plus": return <Plus color={ color }/>
            case "star": return <Star color={ color }/>
            case "arrow": return <Arrow color={ color } left={left}/>
            case "bracket": return <Bracket color={ color } left={left}/>
            case "check-circle": return <CheckCircle color={ color }/>
        }
    }
    return (getIcon())
}