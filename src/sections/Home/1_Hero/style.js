import styled from "@emotion/styled";

import img from "../../../assets/img";

export const Content = styled.div`
    min-height: 76rem;
    position: relative;
    background: rgba(0, 0, 0, 0.40);
    overflow: hidden;

    .line {
        height: 7.8rem;
        border-bottom: .1rem solid ${ ({ theme }) => theme.colors.light_30 };
        margin: 0 1.6rem 3.1rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
    }

    h1 {
        padding: 18.6rem 0 1.8rem;
        color: ${ ({ theme }) => theme.colors.light };
        text-align: center;
        font-family: ${ ({ theme }) => theme.fonts.display };
        font-size: 34px;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
    }

    h4 {
        color: #FFF;
        text-align: center;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding: 0 1.7rem 11.6rem;
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

    .hotels {
        display: grid;
        gap: .1rem;
    }

    .activities {
        display: none;
        position: absolute;
        right: 4.7rem;
        bottom: 4rem;
        color: ${ ({ theme }) => theme.colors.light_80 };
        font-size: 2rem;
        font-style: italic;
        font-weight: 400;
        line-height: 120%; /* 24px */

        span {
            font-family: "Playfair Display";
        }

        p {
            font-size: 1.6rem;
            padding: 1.4rem 0 2.2rem; /* 24px */
            font-style: normal;
        }
    }

    @keyframes scroll {
        from {
            transform: translate(0, -100%);
        }
        to {
            transform: translate(0, 100%);
        }
    }

    @media (min-width: 576px) {
        min-height: 108rem;
        box-sizing: border-box;
        .line {
            display: none;
        }

        display: grid;
        grid-template-rows: auto auto auto auto 1fr;
        align-content: flex-start;
        padding: 13.6rem 2.9rem 2.4rem;
        justify-items: center;
        .activities {
            display: block;
            width: 27.1rem;
        }

        .buttons {
            gap: 2.2rem;
            height: 3.8rem;
        }

        h1 {
            padding: 29.3rem 0 2.4rem;
            font-size: 5.4rem;
        }

        h4 {
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 33.6px */
            width: 51.8rem;
            padding: 0 0 7.1rem;
        }

        .divider {
            margin: 0;
        }

        .hotels {
                width: 100%;
            align-self: flex-end;
            justify-self: flex-start;
            //width: max-content;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.3rem;
        }
    }
`

export const HotelCard = styled.div`
    z-index: 1;
    display: grid;
    background: ${({theme}) => theme.colors.light};
    grid-template-columns: auto auto;
    justify-content: space-between;
    justify-items: flex-start;
    gap: 1.2rem;
    padding: 2rem 1.6rem;
    align-items: center;
    position: relative;

    h2 {
        color: ${({theme}) => theme.colors.red};
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
    }

    .stars {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .4rem;
        justify-self: flex-end;

        svg {
            width: 1.6rem;
        }
    }

    span {
        justify-self: flex-end;
        color: rgba(47, 48, 52, 0.80);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 15.4px */
    }

    .card {
        position: absolute;
        bottom: 0;
        height: max-content;
        pointer-events: none;
        overflow: hidden;
    }

    .content {
        pointer-events: auto;
        transition: transform .3s linear;
        ${ ({ active }) => active ? `transform: translate(0,0);` : `transform: translate(0,calc(100% + .1rem));` }
        bottom: 0;
        height: 64.2rem;
        box-sizing: border-box;
        background: var(--Beige, #FFF6F0);
        padding: 1.8rem 1.6rem 2.6rem;
        display: grid;
        grid-template-rows: auto auto auto auto 1fr auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        button {
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 11px */
            text-transform: uppercase;
            text-decoration: none;

            svg {
                width: 2.2rem;
            }

            display: flex;
            gap: .8rem;
            align-items: center;
        }

        h2 {
            padding: .8rem 0 1.2rem;
            font-size: 3.4rem;
            font-weight: 400;
            line-height: 100%; /* 34px */
            letter-spacing: normal;
        }

        p {
            display: flex;
            gap: .6rem;
            align-items: center;
            color: var(--Black-2, #2F3034);
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */

            span {
                font-size: 2.1rem;
                font-style: normal;
                font-weight: 200;
                line-height: 110%; /* 23.1px */
            }

        }

        .img {
            height: 27.4rem;
            background-image: url("${ ({bg}) => img[bg] }");
            background-size: cover;
            background-position: center;
            margin: 1rem 0 1.4rem;
        }

        .text {
            font-size: 1.6rem;
            line-height: 130%; /* 20.8px */
            padding-bottom: 4rem;
        }

        .links {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(2, 1fr);
            justify-items: flex-start;
        }
    }

    @media (min-width: 576px) {
        gap: 2rem;
        padding: 1.8rem 2.4rem;
        grid-auto-flow: dense;
        h2 {
            font-size: 4.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
        }

        span {
            font-family: Manrope;
            font-size: 1.8rem;
            grid-column-start: 2;
            grid-row-start: 1;
        }

        button {
            font-size: 1.8rem;
            line-height: 110%;
            letter-spacing: normal;
        }

        .stars {
            grid-row-start: 2;
            grid-column-start: 2;
            gap: .6rem;
        }

        .content {
            padding: 2.4rem 2.4rem 3rem;
            height: 79.5rem;

            button {
                font-size: 1.2rem;
                gap: 1.2rem;

                svg {
                    width: 3.2rem;
                }
            }

            .stars svg {
                width: 2.2rem;
            }

            h2 {
                font-size: 5.4rem;
                font-style: normal;
                font-weight: 400;
                padding: 1.4rem 0 1.8rem;
            }

            p {
                font-size: 1.6rem;
                gap: 1rem;

                span {
                    font-size: 3.6rem;
                }
            }

            .img {
                margin: 1.1rem 0 1.8rem;
                height: 34.4rem;
            }

            .text {
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
                display: block;
            }

            .links {
                grid-template-columns: auto auto;
                gap: 3.9rem;
                justify-content: flex-start;
            }

        }
    }
`

export const Sticky = styled.button`
    height: 7.5rem;
    background-color: #96281F;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 7;
    color: #FFF6F0;
    font-family: "Playfair Display";
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: .04em;
    line-height: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity .4s;

    &::before {
        content: "";
        position: absolute;
        top: 1.2rem;
        bottom: 1.2rem;
        left: 1rem;
        right: 1rem;
        border: .1rem solid #FFF6F0;
    }
`
export const ActivityCard = styled.div`
    position: absolute;
    background: var(--Beige, #FFF6F0);
    height: 36.4rem;
    bottom: 6.4rem;
    left: 1rem;
    right: 1rem;
    z-index: 10;
    padding: 1.2rem 1rem 4.8rem;
    box-sizing: border-box;
    opacity: ${ ({ active }) => active ? 1 : 0 };
    pointer-events: ${ ({ active }) => active ? "auto" : "none" };
    transition: opacity 1s;
    border: 1px solid var(--Green, #55532E);

    .video {
        position: relative;
        z-index: 1;
        height: 20rem;
        & > div {
            opacity: 1;
        }
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 21.6px */
        text-align: center;
            padding: 1.8rem 0 2.4rem;
    }
        .text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
        }
        button {
                position: absolute;
                top: 2.2rem;
                right: 2rem;
                width: 2.4rem;
                height: 2.4rem;
                background: var(--Beige, #FFF6F0);
                z-index: 2;
                
                path {
                        fill: var(--Black-2, #2F3034);
                }
        }
        

    @media (min-width: 576px) {
        height: 12rem;
        border: none;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        padding: 10px;
        grid-template-columns: 23.6rem 1fr auto;
        gap: 2rem;
        position: relative;
        z-index: 8;

        .video {
            height: 100%;
        }
        .text {
                align-items: flex-start;
        }
        

        p {
            text-align: left;
                padding: 0;
        }

        button {
                position: static;
            background: var(--Black-2, #2F3034);

            path {
                fill: var(--Beige, #FFF6F0);
            }
        }
    }
`