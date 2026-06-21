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
        img {
            position: absolute;
            opacity: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
            &.active {
                opacity: 1;
                transition: opacity .6s;
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
        display: grid;
        grid-template-columns: repeat(9, calc(25% - 3rem / 4));
        transform: translate(calc(((25% - 3rem / 4) + 1rem) * -1), 0);
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
            grid-template-columns: repeat(9, calc(25% - 6.6rem / 4));
            transform: translate(calc(((25% - 6.6rem / 4) + 2.2rem) * -1), 0);
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

import img from "../../../assets/img";
export const Img = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url("${({bg}) => img[bg]}");
    height: 5.1rem;
    background-repeat: no-repeat;
    box-sizing: border-box;
    &.active {
        transition: transform .5s linear;
        transform: translate(calc(-100% - 1rem), 0);
    }
    &.active-r {
        transition: transform .5s linear;
        transform: translate(calc(100% + 1rem), 0);
    }

    border: 1px solid transparent;
    cursor: pointer;
    &.clicked {
        border-color: rgba(255, 246, 240, 0.40);
    }
    @media (min-width: 576px) {
        height: 10.4rem;

        &.active {
            transform: translate(calc(-100% - 2.2rem), 0);
        }
        &.active-r {
            transform: translate(calc(100% + 2.2rem), 0);
        }

        &:hover {
            border-color: rgba(255, 246, 240, 0.40);
        }
    }
`