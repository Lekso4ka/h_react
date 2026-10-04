import styled from "@emotion/styled";

export const Content = styled.section`
position: relative;
    height: 84.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &>* {
        z-index: 1;
    }
    .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        border-radius: 50%;
        border: .1rem solid transparent;
        padding: 1.4rem;
        z-index: 2;
        left: 1rem;
        :hover {
            border-color: rgba(255, 246, 240, 0.20);
            backdrop-filter: blur(7px);
        }
        &.right {
            left: auto;
            right: 1rem;
        }
        svg {
            width: 2.1rem;
        }
    }
    .bg {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
            img {
            position: absolute;
            opacity: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
            transform: scale(1.025);
            transition: opacity .65s ease, transform 1.2s ease;
            &.active {
                opacity: 1;
                transform: scale(1);
            }
        }
            &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.20);
            z-index: 1;
        }
        @media (prefers-reduced-motion: reduce) {
            img {
                transition-duration: 1ms;
            }
        }
    }
    .tour {
        left: 1.6rem;
        top: 1.6rem;
    }

    h2 {
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        //text-transform: uppercase;
    }

    .list-container {
        position: absolute;
        margin: 0 3.5rem;
        overflow: hidden;
        bottom: 11.5rem;
        left: 0;
        right: 0;
    }

    .list {
        gap: 1rem;
        display: flex;
        width: 100%;
        will-change: transform;
    }

    .cnt {
        position: absolute;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        bottom: 4.2rem;

        .active {
            font-size: 3.4rem;
        }
    }

    .link {
        position: absolute;
        bottom: 20.9rem;
    }

    @media (min-width: 576px) {
        height: 96rem;
        .arrow {
            padding: 2rem;
            svg {
                width: 3.1rem;
                path {
                    fill: var(--Beige, #FFF6F0)
                };
            }
            left: calc(-50vw + 50% + 4.2rem);
            &.right {
                right: calc(-50vw + 50% + 4.2rem);
            }
        }
        h2 {
            font-size: 4.4rem;
        }

        .link {
            font-size: 1.8rem;
            bottom: 23.6rem;
        }

        .tour {
            left: 2.4rem;
            top: 2.4rem;
        }

        

        .list-container {
            margin: 0 61.5rem;
            bottom: 8rem;
        }

        .list {
            gap: 2.2rem;
        }

        .cnt {
            bottom: 8rem;
            right: 2.4rem;
            font-size: 3.4rem;

            .active {
                font-size: 5.4rem;
            }
        }
    }
`

import { mediaUrl } from "../../../utils/mediaUrl";
export const Img = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url("${({bg}) => mediaUrl(bg)}");
    flex: 0 0 calc((100% - 3rem) / 4);
    height: 5.1rem;
    background-repeat: no-repeat;
    box-sizing: border-box;
    border: 1px solid transparent;
    cursor: pointer;
    @media (min-width: 576px) {
        flex-basis: calc((100% - 6.6rem) / 4);
        height: 10.4rem;

        &:hover {
            border-color: rgba(255, 246, 240, 0.40);
        }
    }
`