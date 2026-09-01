import styled from "@emotion/styled"

export const Block = styled.section`
    position: relative;
    background: var(--Gray-1, #565861);
    display: grid;
    overflow: hidden;
    grid-template-rows: auto 33.2rem;
    @media (min-width: 576px) {
        grid-template-rows: 43.825rem 62.9rem;
    }
    .map {
        position: absolute;
        width: 91.2rem;
        left: -19.151rem;
        bottom: 0;
        @media (min-width: 576px) {
            position: static;
            width: 100%;
        }
    }
    
`

export const Content = styled.div`
    padding: 7.8rem 1.6rem 0;
    gap: 3.2rem 2.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 576px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 7rem 2.4rem 10rem;
        gap: 6rem;
        overflow: hidden;
    }

    & > * {
        position: relative;
    }
    p {
        color: var(--Beige, #FFF6F0);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 16.8px */
        &:nth-of-type(1) {
            padding-bottom: 4.7rem;
            &::after {
                width: .1rem;
                top: .4rem;
                right: -.6rem;
                height: 23.2rem;
            }
        }
        &:nth-of-type(3) {
            &::after {
                width: .1rem;
                top: .4rem;
                right: -.6rem;
                bottom: -1.9rem;
            }
        }
        @media (min-width: 576px) {
            font-size: 2rem;
            &:nth-of-type(1) {
                padding-bottom: 0;
                &::after {
                    width: .1rem;
                    top: -1rem;
                    right: -3rem;
                    height: auto;
                    bottom: 0;
                }
            }
            &:nth-of-type(2) {
                width: 38.5rem;
            }
            &:nth-of-type(3) {
                width: 40rem;

                &::after {
                    width: .1rem;
                    top: -1rem;
                    left: -3rem;
                    height: 16.2rem;
                }
            }
            &:nth-of-type(4) {
                &::after {
                    width: .1rem;
                    top: -1rem;
                    height: 20rem;
                    left: -3rem;
                }
            }
        }
    }
    
    div::before,
    p::before,
    div::after,
    p::after {
        content: "";
        background-color: var(--Beige, #FFF6F0);
        position: absolute;
        opacity: .4;
    }
    
    div:nth-of-type(1) {
        &::after {
            height: .1rem;
            left: 0;
            right: .6rem;
            bottom: -1.6rem;
        }
        @media (min-width: 576px) {
            &::after {
                bottom: -3rem;
                right: -1.9rem;
            }
        }
    }

    div:nth-of-type(2) {
        &::before {
            width: .1rem;
            bottom: .4rem;
            top: -4.2rem;
            left: -1.65rem;
        }

        &::after {
            height: .1rem;
            left: -.4rem;
            right: 0;
            bottom: -1.6rem;
        }
        @media (min-width: 576px) {
            &::before {
                width: .1rem;
                bottom: -1rem;
                top: 4.9rem;
                left: -2.95rem;
            }
            &::after {
                bottom: -3rem;
                right: -1.9rem;
                left: -1.9rem;
            }
        }
    }

    div:nth-of-type(3) {
        grid-row-start: 3;
        &::after {
            height: .1rem;
            left: 0;
            right: .6rem;
            bottom: -1.6rem;
        }
        @media (min-width: 576px) {
            grid-row-start: auto;
            &::before {
                width: .1rem;
                bottom: -1rem;
                top: 4.9rem;
                left: -2.95rem;
            }
            &::after {
                bottom: -3rem;
                right: -1.9rem;
                left: -1.9rem;
            }
        }
    }

    div:nth-of-type(4) {
        grid-row-start: 3;
        &::after {
            height: .1rem;
            left: -.4rem;
            right: 0;
            bottom: -1.6rem;
        }
        @media (min-width: 576px) {
            grid-row-start: auto;
            &::before {
                width: .1rem;
                bottom: -1rem;
                top: 4.9rem;
                left: -2.95rem;
            }
            &::after {
                left: -1.9rem;
                bottom: -3rem;
            }
        }
    }

    //div:not(:first-of-type) {
    //    &::before {
    //        content: "";
    //        height: 9.7rem;
    //        width: .1rem;
    //        background-color: var(--Beige, #FFF6F0);
    //        position: absolute;
    //        left: -3rem;
    //        bottom: -1rem;
    //        opacity: .4;
    //    }
    //
    //    &::after {
    //        right: 0;
    //        left: -.5rem;
    //
    //        @media (min-width: 576px) {
    //            left: -1.9rem;
    //        }
    //    }
    //
    //}

    .title {
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 5.4rem;
        font-weight: 500;
        line-height: 110%; /* 136.4px */
        @media (min-width: 576px) {
            font-size: 12.4rem;
        }
    }

    .tooltip {
        display: inline-flex;
        padding: 0 0 .6rem .7rem;
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 110%; /* 48.4px */
        text-transform: lowercase;
        @media (min-width: 576px) {
            font-size: 4.4rem;
            padding: 0 0 .8rem 1.4rem;
        }
    }
`

export const Links = styled.div`
    position: absolute;
    left: 2.4rem;
    bottom: 4.1rem;
    width: 12.8rem;
    height: 9.2rem;
    background: var(--Black, #1C1C1C);
    box-sizing: border-box;
    display: grid;
    gap: 1.1rem;
    padding: 1.4rem 0 1.6rem;
    z-index: 1;
    .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 1.6rem;
        gap: 1.6rem;
    }
    span {
        color: var(--Beige, #FFF6F0);
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 110%; /* 13.2px */
        word-break: keep-all;
        white-space: nowrap;
        display: inline-block;
        padding-left: 1.4rem;
    }
    a {
        display: flex;
        width: 100%;
        padding: .8rem 1.1rem;
        align-items: flex-start;
        justify-content: center;
        height: 3.8rem;
        box-sizing: border-box;
        background-color: rgba(255, 246, 240, 0.04);
        svg {
            width: 100%;
        }
    }
`