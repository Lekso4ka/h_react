import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

const renderLine = ({variant}) => {
    switch (variant) {
        case "big": return ({
            height: ".04em",
            bottom: "-.26em"
        });
        default: return ({
            height: ".1em",
            bottom: "-.32em"
        });
    }
}


export const LinkSt = styled(Link)`
    color: ${({ theme, color }) => theme.colors[color || "text"]};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 500;
    line-height: 1.1;
    position: relative;
    transition-property: color;
    transition-duration: 600ms;
    transition-timing-function: cubic-bezier(0.625, 0.05, 0, 1);
    &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        transform-origin: right center;
        transform: scaleX(0) rotate(0.001deg);
        background-color: ${({ theme, color }) => theme.colors[color || "text"]};
        transition-property: transform, color, background-color;
        transition-duration: 600ms;
        transition-timing-function: cubic-bezier(0.625, 0.05, 0, 1);
        ${renderLine};
    }
    &:hover {
        color: ${({ theme, hover }) => theme.colors[hover || "red"]};
        &::after {
            transform-origin: left center;
            transform: scaleX(1) rotate(0.001deg);
            background-color: ${({ theme, hover }) => theme.colors[hover || "red"]}
        }
    }
    @media (min-width: 576px) {
        font-size: 1.8rem;
    }
`