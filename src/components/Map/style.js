import styled from "@emotion/styled"

export const Block = styled.section`
    position: relative;
    background: var(--Gray-1, #565861);
    display: grid;
    grid-template-rows: 43.825rem 62.9rem;
    overflow: hidden;
`
export const Content = styled.div`
    padding: 7rem 2.4rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6rem 4.1rem;
    align-content: flex-start;
    align-items: baseline;
    overflow: hidden;

    & > * {
        position: relative;
    }

    p {
        color: var(--Beige, #FFF6F0);
        font-size: 2rem;
        font-weight: 400;
        line-height: 120%; /* 24px */

        &:not(:first-of-type) {
            &::before {
                content: "";
                height: 8.3rem;
                width: .1rem;
                background-color: var(--Beige, #FFF6F0);
                position: absolute;
                left: -3rem;
                top: -1rem;
                opacity: .4;
            }
        }

        &:nth-of-type(3)::before {
            height: 16.2rem;
        }

        &:nth-of-type(4)::before {
            height: 20rem;
        }
    }

    div::after {
        content: "";
        height: .1rem;
        background-color: var(--Beige, #FFF6F0);
        position: absolute;
        left: 0;
        right: .1rem;
        bottom: -3rem;
        opacity: .4;
    }

    div:not(:first-of-type) {
        &::before {
            content: "";
            height: 9.7rem;
            width: .1rem;
            background-color: var(--Beige, #FFF6F0);
            position: absolute;
            left: -3rem;
            bottom: -1rem;
            opacity: .4;
        }

        &::after {
            left: -1.9rem;
        }
    }

    .title {
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 12.4rem;
        font-weight: 500;
        line-height: 110%; /* 136.4px */
    }

    .tooltip {
        display: inline-flex;
        padding: 0 0 .8rem 1.4rem;
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 500;
        line-height: 110%; /* 48.4px */
        text-transform: lowercase;
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