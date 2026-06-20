import styled from "@emotion/styled";

import img from "../../../assets/img";

export const Content = styled.section`
    display: grid;
    padding: 0 1.6rem;
    grid-auto-flow: dense;
    position: relative;

    .img {
        background-position: center;
        background-size: cover;
        opacity: ${({ visible }) => visible ? 1 : 0};
        transition: opacity 4000ms;
    }

    .img1 {
        background-image: url("${ ({ bg1 }) => img[bg1] }");
        height: 48.5rem;
        margin-bottom: 6rem;
    }

    .img2 {
        background-image:  url("${ ({ bg2 }) => img[bg2] }");
        height: 48.2rem;
        grid-row-start: 1;
        margin-bottom: 4.8rem;
    }

    .img3 {
        background-image: url("${ ({ bg3 }) => img[bg3] }");
        height: 42.4rem;
        width: 30.6rem;
        margin: 0 auto 6rem;
    }

    h4 {
        padding: 9rem 0 4rem;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        letter-spacing: 0.028rem;
    }

    .tooltip {
        color: #96281F;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
        padding-bottom: 11.5rem;
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding-bottom: 6rem;

        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }

    @media (min-width: 576px) {
        padding: 13rem 2.4rem 0;
        grid-template-columns: repeat(3, 1fr);
        gap: 15rem 2.3rem;
        .line {
            display: none;
        }

        .img1 {
            height: 68rem;
            margin-bottom: 0;
        }

        .img2 {
            height: 68rem;
            grid-row-start: auto;
            margin-bottom: 0;
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),url("${ ({ bg2 }) => img[bg2] }");
        }

        .img3 {
            width: 100%;
            height: 68rem;
            margin-bottom: 0;
        }

        p {
            grid-column-end: span 2;
            padding: 0 1.2rem 0 0;
            font-size: 4.4rem;
            letter-spacing: 0.044rem;
        }

        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
            padding: 0;
        }

        .tooltip {
            color: var(--Beige, #FFF6F0);
            font-size: 2.4rem;
            line-height: 120%; /* 28.8px */
            width: 48.9rem;
            position: absolute;
            left: calc(50% - 24.45rem);
            padding-bottom: 0;
            bottom: 6.2rem;
        }
    }
`
