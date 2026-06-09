import React from "react";
import { Arrow } from "./Arrow";
import { Bracket } from "./Bracket";
import { CheckCircle } from "./CheckCircle";

import {Plus} from "./Plus"
import { Star } from "./Star";

export const Icon = ({name, color, left, ...rest}) => {
    const getIcon = () => {
        switch (name) {
            case "plus": return <Plus color={ color } {...rest}/>
            case "star": return <Star color={ color } {...rest}/>
            case "arrow": return <Arrow color={ color } left={left} {...rest}/>
            case "bracket": return <Bracket color={ color } left={left} {...rest}/>
            case "check-circle": return <CheckCircle color={ color } {...rest}/>
        }
    }
    return (getIcon())
}