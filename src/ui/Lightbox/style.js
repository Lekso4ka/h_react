import styled  from "@emotion/styled";
import img from "../../assets/img";

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
export const Images = styled.div`
    height: 84.2rem;
    margin-left: 9.2rem;
    overflow: hidden;
    .inner {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(${({cnt}) => cnt}, 155.6rem);
        gap: 3rem;
        transform: translate(calc((155.6rem + 3rem) * -1), 0);
    }
`

export const Image = styled.div`
    background-position: center;
    background-size: cover;
    background-image: ${({active, bg}) => (active ?  `url("${img[bg]}")` : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("${img[bg]}")`)};
    position: relative;
    
    &.active {
        background-image: ${({active, bg}) => (active ?  `url("${img[bg]}")` : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("${img[bg]}")`)};
        transition-duration: .6s;
        transition-property: transform, background;
        transition-timing-function: ease-out, ease-in;
        transform: translate(calc(-100% - 3rem), 0);
    }
    &.active-r {
        background-image: ${({active, bg}) => (active ?  `url("${img[bg]}")` : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("${img[bg]}")`)};
        transition-duration: .6s;
        transition-property: transform, background;
        transition-timing-function: ease-out, ease-in;
        transform: translate(calc(100% + 3rem), 0);
    }
    
`