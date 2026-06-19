import styled from "@emotion/styled";

import img from "../../../assets/img";

export const Content = styled.section`
    background: var(--Bege-2, #F2ECDE);
    position: relative;
    padding: 1rem 0;

    &::before,
    &::after {
        position: absolute;
        content: "";
        width: .1rem;
        height: 2.4rem;
        left: calc(50% - .05rem);
        background: rgba(150, 40, 31, 0.20);
    }

    &::before {
        top: 1rem;
    }

    &::after {
        bottom: 1rem;
    }

    .content {
        display: grid;
        padding: 9.4rem 2.4rem 2.6rem;
    }

    h4 {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0.028rem;
        text-align: center;
    }

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding: 2.8rem 0 3.6rem;

        span {
            color: var(--Red, #96281F);
        }
    }

    p {
        color: #2F3034;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-bottom: 1.6rem;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    a {
        position: absolute;
        bottom: 7.9rem;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
    }

    .list-container {
        padding: 0 0 13.2rem;
        overflow: hidden;
    }

    .list {
        padding: 0 1.6rem;
        display: grid;
        overflow-x: auto;
        grid-template-columns: repeat(3, 32rem);
        gap: 3.2rem;
        position: relative;

        &::before,
        &::after {
            position: absolute;
            content: "";
            left: 1.6rem;
            width: 102.4rem;
            height: .1rem;
            background: rgba(150, 40, 31, 0.20);
        }

        &::before {
            top: 0
        }

        &::after {
            bottom: 0
        }
    }

    .item {
        width: 32rem;
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 48.2rem auto;
        gap: 2.4rem;
        padding: 1.6rem 0 2.6rem;
        position: relative;

        p {
            color: #2F3034;
            font-size: 1.6rem;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 130%;
            padding-bottom: 0; /* 20.8px */
        }

        &:not(:first-of-type)::before {
            left: -1.6rem;
            position: absolute;
            content: "";
            width: .1rem;
            height: 100%;
            background: rgba(150, 40, 31, 0.20);
        }

        .img {
            background-position: center;
            background-size: cover;
            padding: 1.6rem;
            color: var(--Beige, #FFF6F0);
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 400;
            line-height: 100%; /* 16px */
            text-transform: lowercase;
        }

        .img1 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg1 }) => img[bg1] }");
        }

        .img2 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg2 }) => img[bg2] }");
        }

        .img3 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg3 }) => img[bg3] }");
        }
    }

    @media (min-width: 576px) {
        padding: 2rem 0 2rem 2.5rem ;
        display: grid;
        grid-template-columns: 60.9rem 1fr;
        &::before {
            left: 32.9rem;
            top: 2rem;
        }

        &::after {
            left: 32.9rem;
            bottom: 2rem;
        }

        .line {
            grid-column-end: span 2;
            margin-right: 2.5rem;
        }

        .content {
            padding: 4.1rem 0 8rem;
            align-content: flex-start;
            justify-items: center;
        }

        .buttons {
            grid-row-start: 1;
            padding-bottom: 14rem;
            justify-content: center;
            gap: 2.2rem;
        }

        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
        }

        h2 {
            width: 47.8rem;
            font-size: 4.4rem;
            line-height: 110%; /* 48.4px */
            letter-spacing: 0.044rem;
            text-align: center;
            padding: 3.4rem 0 2.6rem;

            span {
                font-style: italic;
            }
        }

        p {
            font-size: 1.8rem;
            text-align: center;
            padding-bottom: 28.2rem;
            width: 39.6rem;
        }

        a {
            position: relative;
            bottom: 0;
        }

        .list-container {
            padding: 0;
        }

        .list {
            &::before,
            &::after {
                display: none;
            }

            padding: 0 2.1rem;
            grid-template-columns: repeat(3, 45.2rem);
            gap: 4.3rem;
            height: 100%;
        }

        .item {
            grid-template-rows: 69rem auto;
            gap: 3.4rem;
            width: 45.2rem;

            p {
                font-size: 1.8rem;
            }

            &:first-of-type::before {
                position: absolute;
                content: "";
                width: .1rem;
                left: -2.1rem;
                height: 100%;
                background: rgba(150, 40, 31, 0.20);
            }

            &:not(:first-of-type)::before {
                left: -2.1rem;
            }

            &:last-of-type::after {
                position: absolute;
                content: "";
                width: .1rem;
                right: -2.1rem;
                height: 100%;
                background: rgba(150, 40, 31, 0.20);
            }

            .img {
                padding: 2.4rem;
                font-size: 2.4rem;
                font-weight: 500;
                line-height: 120%; /* 28.8px */
            }
        }

    }
`