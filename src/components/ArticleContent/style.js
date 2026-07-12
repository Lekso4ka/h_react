import styled from "@emotion/styled";
import img from "../../assets/img";

export const Hero = styled.section`
    padding: 0 1.6rem;
    .title {
        padding: 10.5rem 1.6rem;
        display: grid;
        gap: 3.4rem;
        justify-content: center;
    }
    h4 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 15.4px */
        text-transform: uppercase;
    }
    h1 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 30.8px */
        width: 30.4rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
    @media (min-width: 576px) {
        padding: 0 2.4rem;
        .title {
            padding: 13.9rem 0 13.5rem;
            gap: 1.8rem;
        }
        h1 {
            font-size: 6.4rem;
            width: auto;
            max-width: 106.2rem;
        }
    }
    
`
export const Section1 = styled.section`
    padding: 2.6rem 4rem 9rem;
    display: grid;
    h2 {
        padding-bottom: 4rem;
        color: var(--Red, #96281F);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.28px;
    }
    .img {
        height: 40rem;
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
        ${({bg}) => bg ? `background-image: url("${img[bg]}")` : ""};
        margin-bottom: 4rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        &:not(:last-of-type) {
            margin-bottom: 2.2rem;
        }
    }
    .text {
        padding-bottom: 3.8rem;
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
    }
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding-bottom: 2.8rem;
    }
    @media (min-width: 576px) {
        padding: 3rem 18.2rem 15rem 2.4rem;
        grid-template-columns: 76.7rem 1fr;
        gap: 0 18rem;
        grid-auto-flow: dense;
        align-content: flex-start;
        grid-template-rows: auto auto auto auto 1fr;
        .img {
            height: 81.8rem;
            grid-row: 1 / 6;
        }
        h2 {
            padding: 6rem 0 5rem;
            font-size: 4.4rem;
            font-style: normal;
            letter-spacing: 0.044rem;
        }
        p {
            font-size: 2.2rem;
            &:not(:last-of-type) {
                margin-bottom: 3rem;
            }
        }
        .text {
            font-size: 3.4rem;
            letter-spacing: 0.034rem;
            padding-bottom: 9rem;
        }
        h3 {
            font-size: 3.4rem;
            letter-spacing: 0.034rem;
            padding-bottom: 4rem;
        }
    }
`
export const SectionC = styled.div`
    height: 66rem;
    display: grid;
    .tour {
        display: none;
    }
    .dots {
        right: auto;
        
    }
`

export const Section2 = styled.section`
    padding: 9rem 4rem 0;
    display: grid;
    .img {
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
        height: 40rem;
        margin-bottom: 4rem;
    }
    .img1 {
        ${({bg1}) => bg1 ? `background-image: url("${img[bg1]}");` : ""}
    }
    .img2 {
        ${({bg2}) => bg2 ? `background-image: url("${img[bg2]}");` : ""}
    }
    h2 {
        padding-bottom: 2.8rem;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        &:not(:last-of-type) {
            margin-bottom: 2.8rem;
        }
    }
    @media (min-width: 576px) {
        padding: 14rem 18.2rem 0 2.4rem;
        grid-template-columns: 60.9rem 1fr;
        gap: 0 33.8rem;
        grid-template-rows: auto auto auto 1fr;
        align-content: flex-start;
        .img1 {
            height: 81.8rem;
            margin-bottom: 0;
            grid-row-end: span 4;
        }
        .img2 {
            margin: 6rem 0;
            width: 29.4rem;
            height: 33.5rem;
        }
        h2 {
            font-size: 3.4rem;
            letter-spacing: 0.034rem;
            padding-bottom: 4rem;
        }
        p {
            font-size: 2.2rem;
            &:not(:last-of-type) {
                margin-bottom: 3rem;
            }
        }
    }
`

export const Section3 = styled.section`
    padding: 9rem 4rem;

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding-bottom: 2.8rem;
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
    }

    ul {
        padding: 4rem 0;
        display: grid;
        gap: 4rem;
    }

    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding-bottom: 4.6rem;
    }

    a {
        color: var(--Red, #96281F);
    }

    @media (min-width: 576px) {
        padding: 15rem 2.4rem 15rem 18.2rem;
            h2 {
                    font-size: 3.4rem;
                    letter-spacing: 0.034rem;
                    padding: 0 0 2rem 78.9rem;
            }
            p {
                    font-size: 2.2rem;
                    padding: 0 0 0 78.9rem;
                    width: 54.1rem;
            }
            ul {
                    padding: 6rem 0 2rem;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 17.9rem;
            }
            h3 {
                    font-size: 3.4rem;
                    letter-spacing: 0.034rem;
                    padding: 0 0 4.6rem 63.1rem;
            }
            a {
                    display: inline-block;
                    margin: 0 0 0 63.1rem;
            }
    }
`
export const Section3Item = styled.li`
    display: grid;
    justify-items: flex-start;
    gap: 2rem;
    color: #fff;
    font-family: "Playfair Display";
    font-size: 1.8rem;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
    position: relative;
    &::before {
        content: "";
        height: 31.2rem;
        width: 24.2rem;
        background-position: center;
        background-size: cover;
            ${ ({ bg }) => bg ? `background-image:  linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ img[bg] }");` : "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)" }
    }

    &:nth-of-type(2n)::before {
        justify-self: flex-end;
    }

    @media (min-width: 576px) {
        justify-items: stretch;
        span {
            position: absolute;
            bottom: 3rem;
            left: 3rem;
            font-size: 2.2rem;
            line-height: 130%; /* 28.6px */
        }
        &::before {
            content: "";
            height: 56.6rem;
            width: 45.2rem;
        }
        &:nth-of-type(2n)::before {
            justify-self: stretch;
        }
        &:nth-of-type(1) {
            transform: translate(0, -6rem);
        }
        &:nth-of-type(3) {
            transform: translate(0, -4rem);
        }
    }

`

export const Section4 = styled.section`
    display: grid;
    gap: 4rem;
    position: relative;

    .img {
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
    }

    .img1 {
        ${ ({ bg1 }) => bg1 ? `background-image: url("${ img[bg1] }");` : "" }
        height: 66rem;
    }

    .img2 {
        ${ ({ bg2 }) => bg2 ? `background-image: url("${ img[bg2] }");` : "" }
            height: 33.5rem;
            width: 24.2rem;
            margin-right: 4rem;
            justify-self: flex-end;
    }

    .text {
        padding: 0 4rem;
        display: grid;
        gap: 2.8rem;
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
    }

    h2 {

        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
    }

    @media (min-width: 576px) {
        padding: 0 2.4rem;
            grid-template-columns: 92.5rem 1fr;
            gap: 18rem;
            align-content: flex-start;
            align-items: flex-start;
            .img1 {
                    height: 68.3rem;
            }
            .img2 {
                    position: absolute;
                    top: 0;
                    right: 2.4rem;
                    margin-right: 0;
                    width: 29.4rem;
            }
            .text {
                    padding-top: 39.5rem;
                    font-size: 2.2rem;
            }
            h2 {
                    font-size: 3.4rem;
                    letter-spacing: 0.034rem;
            }
    }
`

export const Section5 = styled.section`
    padding: 9rem 4rem;
    color: #fff;

    h2 {
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding-bottom: 2.8rem;
    }

    p {
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
    }

    .img_text {
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-style: italic;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
    }

    .img {
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
        ${ ({ bg }) => bg ? `background-image: url("${ img[bg] }")` : "" };
        margin: 4rem 0 2rem;
        height: 40rem;
    }

    @media (min-width: 576px) {
        padding: 15.7rem 18.2rem 12rem;
        h2 {
            font-size: 3.4rem;
            letter-spacing: 0.034rem;
            padding-bottom: 4rem;
        }

        p {
            max-width: 86rem;
            font-size: 2.2rem;
        }

        .img {
            height: 68.3rem;
        }

        .img_text {
            font-size: 2.2rem;
            position: absolute;
            transform: translate(3.4rem, calc(-100% - 5.1rem));
            width: 59.7rem;
        }
    }
`
export const Section6 = styled.div`
        .text {
        padding: 0 1.6rem 9rem;
                p {
                        padding: 4.1rem 2.4rem;
                        color: var(--Black-2, #2F3034);
                        font-family: "Playfair Display";
                        font-size: 2.8rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 120%; /* 33.6px */
                        letter-spacing: 0.028rem;
                }
        }
    .img {
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
        ${({bg}) => bg ? `background-image: url("${img[bg]}");` : ""}
            height: 40rem;
            margin: 0 4rem 9rem;
    }
    @media (min-width: 576px) {
        padding: 0 2.4rem 12rem;
            .text {
                    padding: 0 0 12rem;
                    p {
                    max-width: 156.9rem;
                            padding: 6rem 15rem;
                            margin: 0 auto;
                            text-align: center;
                            font-size: 4.4rem;
                            letter-spacing: 0.044rem;
                    }
            }
            .img {
                    margin: 0;
                    height: 68.3rem;
            }
    }
`
export const Section7 = styled.section`
        background: var(--Bege-2, #F2ECDE);
        .top {
                padding: 4rem;
            display: grid;
            color: var(--Black-2, #2F3034);
            a {
                color: var(--Red, #96281F);
                width: max-content;
            }
        }
    h2 {
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding-bottom: 2.8rem;
    }
    p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
    }
    ul {
        margin: 3rem 0 4.6rem;
        display: grid;
        grid-auto-rows: 4.2rem;
        gap: 1.6rem;
    }
    li {
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        max-width: 26rem;
        box-sizing: border-box;
        padding-left: 2.4rem;
        position: relative;
        &::before {
            position: absolute;
            content: "";
            width: .4rem;
            height: .4rem;
            left: 1rem;
            top: 1rem;
            background-color: var(--Black-2, #2F3034);
            border-radius: 50%;
        }
        
    }
    .bottom {
        padding: 9rem 1.6rem;
    }
    .tabs {
        padding: 5.2rem 0;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        a {
            border-radius: 3rem;
            border: .1rem solid var(--Red, #96281F);
            display: flex;
            padding: .8rem 1.8rem;
            color: var(--Red, #96281F);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
            text-transform: uppercase;
        }
        &::after,
        &::before {
            content: "";
            position: absolute;
            height: 2.4rem;
            width: .1rem;
            background: rgba(150, 40, 31, 0.20);
            left: calc(50% - .05rem)
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }
    }
        
    @media (min-width: 576px) {
        .top {
            grid-template-columns: 50rem 1fr;
            gap: 4.6rem 13.2rem;
            padding: 6rem 26.8rem 0 18.2rem;
        }
        h2 {
            padding-bottom: 5.7rem;
            font-size: 3.4rem; /* 40.8px */
            letter-spacing: 0.034rem;
        }
        p {
            font-size: 2.2rem;
        }
        ul {
            display: block;
            column-count: 2;
            column-gap: 18rem;
            padding: 0;
            margin: 0;
        }
        li {
            margin-bottom: 4.6rem;
            padding-left: 3rem;
            font-size: 2rem;
            max-width: 36.5rem;
            &::before {
                width: .5rem;
                height: .5rem;
                left: 1.25rem;
                top: 1.25rem;
            }
            &:nth-of-type(2n) {
                margin-bottom: 0;
            }
        }
        .bottom {
            padding: 6rem 2rem;
        }
        .tabs {
            justify-content: center;
            padding: 6.7rem 0;
            gap: 3.6rem;
            a {
                padding: 1.2rem 2.2rem;
            }
            &::after,
            &::before {
                height: 1.4rem;
            }
        }
    }
`
