import styled from "@emotion/styled";

import img from "../../../assets/img";

export const Content = styled.section`
    padding: 0 1.6rem 9rem;
    background: var(--Bege-2, #F2ECDE);
    position: relative;
    overflow: hidden;

    h2 {
        padding: 52.4rem 2rem 53.6rem 0;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 134%; /* 45.56px */
        text-transform: uppercase;
        position: relative;
        z-index: 1;
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 23.4px */
        padding-bottom: 4.6rem;
    }

    .links {
        display: flex;
        gap: 3rem;
    }

    .img {
        background-position: center;
        background-size: cover;
        position: absolute;
    }

    .img1 {
        background-image: url("${ ({ bg }) => img[bg[0]] }");
        width: 17.3rem;
        height: 18.2rem;
        right: -1.5rem;
        top: 18.6rem;
    }

    .img2 {
        background-image: url("${ ({ bg }) => img[bg[1]] }");
        width: 26.6rem;
        height: 37.4rem;
        top: 9rem;
        left: -7.6rem;
    }

    .img3 {
        background-image: url("${ ({ bg }) => img[bg[2]] }");
        width: 26.6rem;
        height: 37.4rem;
        top: 97.2rem;
        left: -7.6rem;
    }

    .img4 {
        background-image: url("${ ({ bg }) => img[bg[3]] }");
        width: 17.4rem;
        height: 24.4rem;
        top: 91rem;
        right: -1.6rem;
    }

    .img5 {
        background-image: url("${ ({ bg }) => img[bg[4]] }");
        width: 14.2rem;
        height: 17.2rem;
        top: 119.6rem;
        right: 1.6rem;
    }

    @media (min-width: 576px) {
        padding: 15rem 0 14rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            max-width: 124.8rem;
            text-align: center;
            font-size: 5.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 64.8px */
            text-transform: uppercase;
            padding: 0 0 32rem;
        }

        p {
            text-align: center;
            font-size: 1.8rem;
            max-width: 80.3rem;
            padding: 27rem 0 4.4rem;
        }

        .img1 {
            position: static;
            width: 60.8rem;
            height: 40.7rem;
        }

        .links {
            justify-content: center;
            gap: 2.4rem;
        }

        .img2 {
            width: 25.4rem;
            height: 34.4rem;
            top: 47rem;
            left: 18.3rem;
            transform-origin: right bottom;
        }

        .img3 {
            width: 45.2rem;
            height: 33.9rem;
            top: 94.6rem;
            left: 2.4rem;
            transform-origin: right top;
        }

        .img4 {
            width: 25.4rem;
            height: 34.4rem;
            top: 101rem;
            right: 22.2rem;
            transform-origin: left bottom;
        }

        .img5 {
            width: 45.1rem;
            height: 33.9rem;
            top: 53.9rem;
            right: 2.5rem;
            transform-origin: left top;
        }
    }

`