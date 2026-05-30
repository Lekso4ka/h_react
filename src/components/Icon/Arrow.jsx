import React from "react";

export const Arrow = ({
    color = "#FFF6F0",
    left = true
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 31" fill="none">
        { left
            ? <path
                d="M15.9262 10.0226L29 1.26763e-06L16.1639 15.6165L29 31L15.9262 21.2105L-6.82621e-07 15.6165L15.9262 10.0226Z"
                fill={ color }
            />
            : <path
                d="M13.0738 20.9774L-1.90735e-06 31L12.8361 15.3835L-5.52296e-07 6.39718e-07L13.0738 9.78947L29 15.3835L13.0738 20.9774Z"
                fill={ color }
            />
        }
    </svg>
}