import styled from "@emotion/styled";
import { mediaUrl } from "../../utils/mediaUrl";

export const Container = styled.div`
    display: grid;
    padding: 0 2.4rem 6rem;
    gap: 2.4rem;
    align-content: flex-start;
    h1 {
        padding: 6.2rem 0 2.4rem;
        color: #000;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 48.4px */
        
    }
    @media (min-width: 576px) {
        grid-template-columns: 1fr 140rem;
        h1 {
            grid-column-end: span 2;
            width: 35.3rem;
        }
    }
    
`
export const Line = styled.div`
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    
    &:first-of-type {
        margin-bottom: 1.9rem;
    }
    @media (min-width: 576px) {
        grid-column-end: span 2;
    }
`

export const Content = styled.div`
    display: grid;
    align-content: flex-start;
    gap: 2.4rem;
    position: relative;
    @media (min-width: 576px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-start: 2;
    }
`

export const Item = styled.article`
    padding: 3rem;
    position: relative;
    height: 68.4rem;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 38rem auto auto 1fr;
    gap: 1rem;
    background: #FFF;

    h5 {
        position: absolute;
        top: 5rem;
        left: 5rem;
        color: #fff;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 15.4px */
        text-transform: uppercase;
    }

    .img {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${ ({ bg }) => mediaUrl(bg) }");
        background-position: center;
        background-size: cover;
    }

    h2 {
        color: #000;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
        padding-bottom: 1rem;
    }

    .time {
        display: flex;
        align-items: center;
        gap: .8rem;
        color: #000;
        font-family: "Playfair Display";
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 22px */

        .divider {
            font-size: 2.4rem;

            &::before {
                content: "/";
            }
        }
    }

    a {
        color: var(--Black, #1C1C1C);
        align-self: flex-end;
        width: max-content;
    }
    @media (min-width: 576px) {
        &:nth-of-type(3n-1) {
            transform: translate(0, -14.4rem);
        }
    }
`

export const Filter = styled.div`
    position: absolute;
    right: 0;
    top: -4.4rem;
    align-items: center;
    z-index: 1;
    width: max-content;
    overflow: hidden;
    .top {
        display: flex;
        justify-content: flex-end;
        color: var(--Black, #1C1C1C);
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 110%; /* 19.8px */
        gap: 1.6rem;
        align-items: center;
        cursor: pointer;
        svg {
            transition: transform .2s linear;
            width: 1.4rem;
            height: 1.4rem;
            transform: rotate(${({active}) => active ? 45 : 0}deg);
        }
    }
    .bottom {
        border-top: 1px solid #2F3034;
        margin-top: 1rem;
        transform: translate(${({active}) => active ? 0 : "calc(100% + 2.4rem)" });
        transition: transform .2s linear;
        
    }
`