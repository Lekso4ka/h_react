import React from 'react';
import { V1 } from "./V1";
import { V2 } from "./V2";
import { V3 } from "./V3";
import { V4 } from "./V4";
import { V5 } from "./V5";

export const Vector = ({name, ...rest}) => {
    switch (name) {
        case "Театр":
        case "Theatre":
        case "Theater":
            return <V1 {...rest}/>
        case "Банкет":
        case "Banquet":
            return <V2 {...rest}/>
        case "Класс":
        case "Classroom":
        case "Class":
            return <V3 {...rest}/>
        case "Квадрат":
        case "Square":
            return <V4 {...rest}/>
        case "U стиль":
        case "U-style":
        case "U style":
            return <V5 {...rest}/>
        default:
            return <V1 {...rest}/>
    }
}