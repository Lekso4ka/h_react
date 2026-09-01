import styled from "@emotion/styled";

import img from "../../../assets/img";

export const Content = styled.section`
    padding: 6rem 0rem;

    h4 {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        letter-spacing: 0.028rem;
        padding-bottom: 4rem;
        text-align: center;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.3rem;
        padding-right: 9.4rem;

        a {
            font-size: 3.4rem;
            font-weight: 400;
            font-style: normal;
            line-height: 110%; /* 37.4px */
            letter-spacing: .01em;
            transition-property: color, text-decoration-color;
            transition-duration: .2s;
            position: relative;
            display: flex;
            align-items: center;

            span {
                opacity: 0;
                position: absolute;
                color: inherit;
                font-family: Manrope;
                top: -.3rem;
                right: -2rem;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 600;
                line-height: 120%; /* 14.4px */
            }

            &::before {
                position: absolute;
                right: -1.2rem;
                content: "/";
                display: inline-block;
                font-style: normal;
                color: #F0EAE6;
                font-size: 3.4rem;
                font-weight: 400;
                transform: translate(100%, 0);
            }

            &:hover {
                color: var(--Red, #96281F);
                text-decoration-color: var(--Red, #96281F);

                span {
                    opacity: 1;
                }
                &::before {
                    color: var(--Red, #96281F);
                }

            }
        }
    }

    .list {
        display: none;
    }

    @media (min-width: 576px) {
        padding: 15rem 2.4rem 13.6rem;
        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
            padding-bottom: 4.5rem;
        }

        nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 4.6rem 8.8rem;
            justify-content: flex-end;
            padding: 0 22rem 16.1rem 10rem;

            a {
                font-size: 5.4rem;
                letter-spacing: 0.054rem;

                span {
                    font-size: 1.6rem;
                    right: -3rem;
                    top: -1rem;
                }
            }
        }

        .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.2rem;
            height: 71.5rem;
        }

        .room {
            background-position: center;
            background-size: 100% auto;
            background-repeat: no-repeat;
            padding: 3.4rem 4rem;
            display: grid;
            position: relative;
            justify-content: flex-start;
            gap: 1.6rem;
            align-items: flex-end;
            align-content: flex-end;
            justify-items: flex-start;

            &:hover {
                background-size: 110% auto;
            }

            transition: background-size 1s;

            &:nth-of-type(1) {
                background-image:  url("${ ({ bg1 }) => img[bg1] }");
            }

            &:nth-of-type(2) {
                background-image: url("${ ({ bg2 }) => img[bg2] }");
            }

            &::before {
                content: "";
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.40);
                opacity: 1;
                transition: opacity 1s;
            }

            &:hover::before {
                opacity: 0;
            }

            & > * {
                z-index: 1;
            }

            h4 {
                border: .1rem solid rgba(255, 246, 240, 0.40);
                background: #FFF6F0;
                backdrop-filter: blur(12px);
                color: var(--Red, #96281F);
                padding: 1.2rem 1.6rem;
                font-family: "Playfair Display";
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 100%; /* 18px */
            }

            h2 {
                color: var(--Beige, #FFF6F0);
                text-align: center;
                font-family: "Playfair Display";
                font-size: 4.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                padding-bottom: 3rem;
            }

        }
    }
`