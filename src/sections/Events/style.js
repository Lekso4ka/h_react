import styled from "@emotion/styled"
import { mediaUrl } from "../../utils/mediaUrl"

export const Container = styled.div`
    background: var(--Bege-2, #F2ECDE);
    padding: ${ ({ page }) => page ? "8.9rem" : "1rem" } 0 9rem;

    .line {
        margin: 0 1.6rem ${ ({ page }) => page ? 0 : "7.9rem" };
    }

    @media (min-width: 576px) {
        padding: ${ ({ page }) => page ? "10.2rem" : "15rem"} 0 15.1rem;
        .line {
            ${ ({ page }) => page ? "" : "display: none" };
        }
    }
`

export const Tooltip = styled.div`
    color: var(--Black-2, #2F3034);
    font-family: Manrope;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
    margin-bottom: 2.8rem;
    padding-left: 1.6rem;
    @media (min-width: 576px) {
        font-size: 1.6rem;
        padding-left: 2.4rem;
        margin-bottom: 2.6rem;
    }
`
export const Block = styled.div`

    display: grid;
    gap: 6rem;
    overflow: hidden;

    .bc {
        padding: 2.4rem 1.6rem 5.8rem;
        position: relative;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: calc(50% - .05rem);
            width: .1rem;
            height: 2.4rem;
            background: rgba(150, 40, 31, 0.20);
        }
    }

    @media (min-width: 576px) {
        display: grid;
        gap: 11rem;
        overflow: hidden;
        .bc {
            padding: 2.6rem 2.4rem 0;
            &::before {
                height: 1.4rem;
            }
        }
    }
`

export const Section = styled.section`
    display: grid;
    gap: 2.1rem;
    @media (min-width: 576px) {
        gap: 3rem;
    }
`
export const Top = styled.div`
    display: grid;
    width: calc(100vw - 3.2rem);
    padding-left: 1.6rem;

    h1 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-weight: 400;
        line-height: 110%; /* 48.4px */
        padding-bottom: 3.4rem;
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-right: .7rem;

        &:first-of-type {
            padding-bottom: 2.8rem;
        }
    }

    @media (min-width: 576px) {
        grid-template-columns: 1fr repeat(2, 45.2rem);
        gap: 17.5rem;
        align-content: flex-end;
        overflow: hidden;
        width: calc(100vw - 4.8rem);
        padding-left: 2.4rem;
        h1 {
            font-size: 4.4rem;
            padding-bottom: 0;
        }

        p {
            font-size: 1.8rem;
            line-height: 120%; /* 21.6px */
            padding-right: 0;

            &:first-of-type {
                padding-bottom: 0;
            }
        }
    }
`
export const Buttons = styled.div`
    display: grid;
    justify-items: flex-start;
    grid-template-columns: auto auto;
    gap: 2.8rem;
    padding-left: 1.6rem;
    @media (min-width: 576px) {
        grid-template-columns: 108.3rem 1fr;
        gap: 2.3rem;
        padding-left: 2.4rem;
    }
`
export const Content = styled.div`
    overflow: hidden;
    will-change: transform;

    .wrapper {
        padding: 0 1.6rem;
        overflow-x: auto;
        overflow-y: hidden;
        display: grid;
        grid-template-columns: repeat(${ ({ cnt }) => cnt ? cnt : 2 }, 67rem);
        gap: 1.6rem;
        height: 46.4rem;

        ::-webkit-scrollbar-track {
            margin: 0 1.6rem;
        }
    }

    @media (min-width: 576px) {
        .wrapper {
            padding: 0 2.4rem;
            grid-template-columns: repeat(${ ({ cnt }) => cnt }, 108.3rem);
            gap: 2.3rem;
            height: 57.1rem;
        }

        ::-webkit-scrollbar-track {
            margin: 0 2.4rem;
        }
    }
`
export const Item = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 42.6rem;

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        margin-bottom: 2.6rem;
        height: 4.8rem;
    }

    .line2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.6rem;
        padding: 2.6rem 0 3.8rem;

        h4 {
            color: var(--Green, #55532E);
            font-family: Manrope;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 14px */
            margin-bottom: .8rem;
        }

        .digit {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 4.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 54px */
            display: flex;
            align-items: baseline;
            gap: .4rem;
        }

        .sign {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 24px */
        }
    }

    .text {
        padding: 1.6rem;
        background-color: #FFF3E3;
        position: relative;
    }

    .list {
        display: grid;
        gap: 1.6rem;
        font-size: 1.2rem;
        font-weight: 500;

        h4 {
            color: var(--Green, #55532E);
            //color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-style: normal;
            line-height: 100%; /* 12px */
        }

        li {
            display: flex;
            align-items: center;
            position: relative;
            padding-left: .9rem;
            //color: rgba(47, 48, 52, 0.80);
            color: rgba(85, 83, 46, 0.80);
            font-family: Manrope;
            font-style: normal;
            line-height: 140%; /* 16.8px */

            &::before {
                content: "";
                width: .3rem;
                height: .3rem;
                position: absolute;
                left: 0;
                border-radius: 50%;
                background-color: rgba(85, 83, 46, 0.80);
            }
        }

    }

    .link {
        position: absolute;
        left: 1.6rem;
        bottom: 1.6rem;
    }

    .img {
        background-image: url(${ ({ bg }) => mediaUrl(bg) });
        background-position: center;
        background-size: cover;
    }

    @media (min-width: 576px) {
        gap: 2.2rem;
        grid-template-columns: 1fr 76.7rem;
        .text {
            padding: 2rem;
        }

        h2 {
            font-size: 3.4rem;
            margin-bottom: 3.6rem;
            height: 7.2rem;
        }

        .line2 {
            gap: 2.4rem;
            padding: 4.6rem 0;

            h4 {
                font-size: 1.4rem;
                font-weight: 600;
                margin-bottom: 1.4rem;
            }

            .digit {
                font-size: 5.4rem;
            }

            .sign {
                font-size: 2.4rem;
            }
        }

        .list {
            gap: 1.4rem;

            h4 {
                font-weight: 600;
            }
        }

        .link {
            left: 2rem;
            bottom: 2rem;
        }
    }
`