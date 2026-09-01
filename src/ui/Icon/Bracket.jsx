import React from "react"

export const Bracket = ({
    color = "#1C1C1C",
    left = true
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 5 22" fill="none">
        {left
            ? <path
                d="M1 22V0H5V1.86643H2.80769V20.1336H5V22H1Z"
                fill={ color }
            />
            : <path
                d="M4 22H0V20.1336H2.19231V1.86643H0V0H4V22Z"
                fill={ color }
            />
        }
    </svg>
}