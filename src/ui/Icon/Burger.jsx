import React from "react";

export const Burger = ({
    color = "#2F3034"
}) => {
    return <svg viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" width="32" height="2" fill={ color }/>
        <rect x="12" y="6" width="16" height="2" fill={ color }/>
        <rect x="4" y="12" width="32" height="2" fill={ color }/>
    </svg>
}