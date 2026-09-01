import React from "react";

export const Plus = ({
    color = "#2F3034"
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none">
        <rect x="5.89453" width="2.21053" height="14" fill={color}/>
        <rect x="14" y="5.89844" width="2.21053" height="14" transform="rotate(90 14 5.89844)" fill={color}/>
    </svg>
}