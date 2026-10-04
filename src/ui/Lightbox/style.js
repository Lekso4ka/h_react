import styled  from "@emotion/styled";
import { mediaUrl } from "../../utils/mediaUrl";

export const Container = styled.div`
    opacity: 0;
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.70);
    z-index: 100;
    pointer-events: none;
    transition: opacity 0.3s;
    ${({active}) => active && `
        pointer-events: auto;
        opacity: 1;
    `}
    .close {
        height: 3.4rem;
        position: absolute;
        top: 3rem;
        right: 3rem;
        cursor: pointer;
    }
    .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        border-radius: 50%;
        border: .1rem solid transparent;
        padding: 2rem;
        z-index: 2;
        left: 1.1rem;
        :hover {
            border-color: rgba(255, 246, 240, 0.20);
            backdrop-filter: blur(7px);
        }
        &.right {
            left: auto;
            right: 1.1rem;
        }
        svg {
            width: 3rem;
            path {
                fill: var(--Beige, #FFF6F0)
            };
        }
    }
`
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

export const Images = styled.div`
    height: 84.2rem;
    margin-left: 9.2rem;
    overflow: hidden;
`

export const Track = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${({$count}) => $count}, 155.6rem);
    gap: 3rem;
    transform: translate3d(calc(${({$offset}) => $offset} * (155.6rem + 3rem)), 0, 0);
    transition: ${({$motion}) => $motion ? `transform 0.6s ${EASE}` : "none"};
`

export const Image = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url("${({$bg}) => mediaUrl($bg)}");
    position: relative;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: ${({$clear}) => $clear ? 0 : 1};
        transition: ${({$instant}) => $instant ? "none" : `opacity 0.6s ${EASE}`};
        pointer-events: none;
    }
`