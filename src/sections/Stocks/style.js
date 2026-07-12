import styled from "@emotion/styled";
import img from "../../assets/img";

export const Container = styled.div`
    .hero {
        height: 73.4rem;
        box-sizing: border-box;
        padding-bottom: 6rem;
        display: grid;
        align-content: flex-end;
        justify-content: center;
        justify-items: center;
        gap: 4.6rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${img["h_banner"]});
        background-position: center;
        background-size: cover;
        h1 {
            color: var(--Beige, #FFF6F0);
            font-family: "Playfair Display";
            font-size: 3.6rem;
            font-style: italic;
            font-weight: 400;
            line-height: 110%; /* 39.6px */
        }
        .divider {
            width: .1rem;
            height: 9rem;
            background: ${ ({ theme }) => theme.colors.white_20 };
            margin: 0 auto 2.9rem;
            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: ${ ({ theme }) => theme.colors.white };
                transform: translate(0, -100%);
                animation: scroll 2s linear infinite;
                border-radius: .1rem;
            }
        }
    }
    .content {
        background: var(--Beige, #FFF6F0);
        display: grid;
        gap: 9rem;
        padding: 4rem 1.6rem 10rem;
    }
    @media (min-width: 576px) {
        .hero {
            display: block;
            height: 76rem;
            padding-bottom: 20.6rem;
            gap: 0;
            h1 {
                font-size: 6.4rem;
            }
            .divider {
                display: none;
            }
        }
        .content {
            gap: 4rem;
            padding: 5.8rem 2.4rem 12rem;
        }
    }
`

export const Item = styled.article`
    h4 {
        color: var(--Green, #55532E);
        border-top: .1rem solid;
        border-bottom: .1rem solid;
        font-family: Manrope;
        font-size: 1.4rem;
        padding: 1.6rem 0;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 15.4px */
    }
    .line {
        border-top-color: color: var(--Green, #55532E)
    }
    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 33.6px */
        padding: 2rem 0 2.6rem;
        span {
            color: #96281F;
            font-style: italic;
        }
    }
    .img {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${({pic}) => img[pic]});
        background-position: center;
        background-size: cover;
        height: 52.5rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
        padding: 2.6rem 0 5rem;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.2rem;
    }
    li {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1.4rem;
        align-content: flex-start;
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 15.4px */
    }
    .circle {
        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-top: .15rem;
        background: var(--Green, #55532E);
        svg {
            width: .2rem;
        }
    }
    .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.2rem;
        padding-top: 6rem;
    }
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: 24.3rem 45.1rem 1fr;
        gap: 7.2rem;
        height: 58.2rem;
        .img {
            height: 100%;
        }
        h4 {
            align-self: flex-start;
            width: 13.6rem;
            padding: 2rem 0;
            font-size: 1.8rem;
        }
        h5 {
            color: var(--Green, #55532E);
            font-family: Manrope;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 19.8px */
        }
        .left {
            padding: 0 34.6rem 0 11.4rem;
            display: grid;
            grid-template-rows: auto auto auto 1fr;
            gap: 4.6rem;
        }
        h2 {
            padding: 0 0 .2rem;
            font-size: 4.4rem;
            line-height: 1.1;
        }
        p {
            font-size: 1.8rem;
            line-height: 120%; /* 21.6px */
            padding: 0 7.8rem 0 0;
        }
        ul {
            gap: 3.8rem;
        }
        li {
            gap: 1.6rem;
            font-size: 1.6rem;
        }
        .links {
            padding: 0;
            align-self: flex-end;
            grid-template-columns: auto auto;
            gap: 4.8rem;
            justify-content: flex-start;
            a {
                width: max-content;
            }
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0; left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    background: rgba(0, 0, 0, 0.70);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    &.active {
        opacity: 1;
        pointer-events: auto;
        .modal-content {
            transform: translate(-2.4rem)
        }
    }
    .modal-content {
        position: absolute;
        top: 4.4rem;
        right: 0;
        width: 60.8rem;
        background: var(--Beige, #FFF6F0);
        transform: translate(100%);
        transition: transform 0.3s .3s;
        bottom: 0;
    }
    .x {
        position: absolute;
        top: 4.5rem;
        right: 4.6rem;
        width: 3.4rem;
        cursor: pointer;
    }
`

export const Data = styled.div`
    padding: 2.9rem 3rem 3rem;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    .img {
        background: url(${({pic}) => img[pic]});
        background-position: center;
        background-size: cover;
        height: 53.6rem;
        box-sizing: border-box;
        padding: 2.4rem;
        .tooltip {
            color: var(--Beige, #FFF6F0);
            font-family: Manrope;
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 90%;
            width: 23.2rem;
        }
    }
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        padding: 2.8rem 0 4.8rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 23.4px */
    }
    h4, .line {
        padding-top: 7.4rem;
    }
    h4 {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
        padding-bottom: 2.2rem;
    }
    .advantages {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4.6rem 4rem;
        li {
            color: #1C1C1C;
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 130%; /* 20.8px */
        }
    }
    .line {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 4rem;
        h4 {
            padding-top: 0;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.2;
        }
    }
    .conditions {
        li {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1.4rem;
            color: var(--Green, #55532E);
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 17.6px */
            padding: 1rem;
            border-top: .1rem solid;
            &:last-of-type {
                border-bottom: .1rem solid;
            }
        }
        .circle {
            width: 1.6rem;
            height: 1.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-top: .15rem;
            background: var(--Black-2, #2F3034);
            padding: .3rem;
            box-sizing: border-box;
            svg {
                width: .2rem;
            }
        }
    }
`