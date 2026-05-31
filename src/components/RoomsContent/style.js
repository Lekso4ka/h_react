import styled from "@emotion/styled"
import img from "../../assets/img"

export const Block = styled.div`
    padding: 0 2.4rem 2.8rem;
`
export const Section = styled.section`
    padding: 13.4rem 0 0;
    h2 {
        color: #000;
        font-family: "Playfair Display", sans-serif;
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.1;
    }
    .line {
        margin: 2.4rem 0 3.4rem;
        height: .1rem;
        background: rgba(150, 40, 31, 0.20);
    }
    .line-b {
        margin: 3.4rem 0 0;
        height: .1rem;
        background: rgba(150, 40, 31, 0.20);
    }
    .content {
        display: grid;
        grid-template-columns: 78.9rem 1fr;
        gap: 15.8rem;
    }
    .tooltips {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        span:not(.digit) {
            padding-bottom: 1.2rem;
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", sans-serif;
            font-size: 2.6rem;
            line-height: 1.2;
        }
        div {
            display: flex;
            gap: 1rem;
            align-items: flex-end;
        }
    }
    .digit {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display", sans-serif;
        font-size: 7.4rem;
        line-height: 1.20;
        
    }
    .img {
        margin-top: 2rem;
        background-image: ${({pic}) => `url(${img[pic]})`};
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 50.4rem;
        transition: background-image 200ms linear;
    }
    li {
        padding: 1.4rem 0;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        color: var(--Black-2, #2F3034);
        cursor: pointer;
        position: relative;
        .name {
            font-family: "Playfair Display", sans-serif;
            font-size: 3.4rem;
            line-height: 1.5;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            opacity: .6;
        }
        sup {
            font-family: Manrope, sans-serif;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.2;
        }
        .variants {
            font-size: 1.4rem;
            line-height: 1.3;
            display: flex;
            gap: .6rem;
            align-items: center;
            opacity: .6;
        }
        .divider {
            color: rgba(47, 48, 52, 0.20);
            font-size: 2.6rem;
            font-weight: 200;
            line-height: 1.3;
            opacity: 1;
        }
        &:not(:last-of-type) {
            margin-bottom: 1.1rem;
            &::after {
                content: "";
                height: .1rem;
                width: 100%;
                position: absolute;
                bottom: -1rem;
                background-color: rgba(150, 40, 31, 0.10);
            }
        }
        &:not(:last-of-type) {
            margin-top: 1rem;
        }
        
        &:hover {
            .name {
                opacity: 1;
            }
            .variants {
                opacity: 1;
            }
            a {
                display: flex;
            }
        }
        a {
            justify-content: center;
            align-items: center;
            color: var(--Beige, #FFF6F0);
            font-size: 1.2rem;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.048rem;
            text-transform: uppercase;
            width: 12rem;
            height: 12rem;
            border-radius: 100%;
            box-sizing: border-box;
            border: .1rem solid rgba(255, 246, 240, 0.30);
            background: var(--Black-2, #2F3034);
            backdrop-filter: blur(10px);
            position: absolute;
            left: 22.1rem;
            bottom: 2.4rem;
            display: none;
        }
    }
`