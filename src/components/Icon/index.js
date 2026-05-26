import React from "react";
import { CheckCircle } from "./CheckCircle";

import {Plus} from "./Plus"
import { Star } from "./Star";

export const Icon = ({name, color}) => {
    const getIcon = () => {
        switch (name) {
            case "plus": return <Plus color={ color }/>
            case "star": return <Star color={ color }/>
            case "check-circle": return <CheckCircle color={ color }/>
        }
    }
    return (getIcon())
}