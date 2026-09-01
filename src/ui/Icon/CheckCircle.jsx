import React from "react";

export const CheckCircle = ({color = "#55532E"}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
            d="M21 12C21 7.02943 16.9705 3 12 3C7.02943 3 3 7.02943 3 12C3 16.9705 7.02943 21 12 21C16.9705 21 21 16.9705 21 12Z"
            stroke={color} strokeWidth="1.35"/>
        <path d="M8.39844 12.4508L10.6484 14.7008L15.5984 9.30078" stroke={color} strokeWidth="1.35"/>
    </svg>
}