import styled from "@emotion/styled"
import img from "../../../assets/img"

export const Block = styled.section`
    padding: 4.4rem 0 0;
    position: relative;
    display: grid;
    gap: 6rem;
    &::before {
        content: "";
        width: .1rem;
        height: 1.4rem;
        position: absolute;
        top: 0;
        left: calc(50% - .05rem);
        background: rgba(150, 40, 31, 0.20);
    }
`

export const Item = styled.article`
    position: relative;
    &::after {
        content: "";
        width: .1rem;
        height: 1.4rem;
        position: absolute;
        bottom: 0;
        left: calc(50% - .05rem);
        background: rgba(150, 40, 31, 0.20);
    }
    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
    }
    .text {
        display: flex;
        justify-content: space-between;
        padding: .7rem .8rem 2.8rem 0;
        &>div {
            display: flex;
            align-items: baseline;
            gap: .6rem;
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 170%; /* 27.2px */
            .digit {
                font-size: 5.4rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 54px */
            }
        }
    }
    .img {
        box-sizing: border-box;
        height: 49.2rem;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${({bg}) => img[bg]});
        background-position: center;
        background-size: cover;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        padding: 1.6rem;
        &>div {
            display: flex;
            align-items: center;
            gap: 0 .6rem;
            flex-shrink: 0;
            flex-wrap: wrap;
            
        }
        .divider {
            font-size: 2.6rem;
            font-style: normal;
            font-weight: 200;
            line-height: 130%; /* 33.8px */
        }
    }
    .link {
        display: block;
        width: max-content;
        padding: 3.6rem 0 5rem;
        margin: 0 auto;
    }
`