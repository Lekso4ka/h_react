import styled from "@emotion/styled"
import img from "../../assets/img"

export const Container = styled.div`
    background: #EFE7DD;
    padding: 1rem 0 9rem;
    .line {
        margin: 0 1.6rem 7.9rem;
    }
    @media (min-width: 576px) {
        .line {
            display: none;
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
    padding: 0 1.6rem 0;
    display: grid;
    gap: 6rem;
    overflow: hidden;
    @media (min-width: 576px) {
        padding: 0 2.4rem 15rem;
        display: grid;
        gap: 11rem;
        overflow: hidden;
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
    width: 100%;
    grid-template-columns: calc(100vw - 3.2rem);
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
    @media (min-width: 576px) {
        grid-template-columns: 108.3rem 1fr;
        gap: 2.3rem;
    }
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(${({cnt}) => cnt ? cnt : 2}, 108.3rem);
    gap: 2.3rem;
    overflow-y: hidden;
    overflow-x: auto;
    height: 57.1rem;
    //width: max-content;
    will-change: transform;
`
export const Item = styled.div`
    display: grid;
    gap: 2.2rem;
    grid-template-columns: 1fr 76.7rem;
    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        margin-bottom: 3.6rem;
    }
    .line {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.4rem;
        padding: 4.6rem 0;
        h4 {
            color: var(--Green, #55532E);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 14px */
            margin-bottom: 1.4rem;
        }
        .digit {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 5.4rem;
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
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 24px */
        }
    }
    .text {
        padding: 2rem;
        background-color: #FFF3E3;
        position: relative;
    }
    .list {
        display: grid;
        gap: 1.4rem;
        font-size: 1.2rem;
        h4 {
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 12px */
        }
        li {
            display: flex;
            align-items: center;
            position: relative;
            padding-left: .9rem;
            color: rgba(47, 48, 52, 0.80);
            font-family: Manrope;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 16.8px */
            &::before {
                content: "";
                width: .3rem;
                height: .3rem;
                position: absolute;
                left: 0;
                border-radius: 50%;
                background-color: rgba(47, 48, 52, 0.80);
            }
        }
        
    }
    .link {
        position: absolute;
        left: 2rem;
        bottom: 2rem;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-style: italic;
        font-weight: 500;
        line-height: 110%; /* 19.8px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.8px */
        text-underline-offset: 30%; /* 5.4px */
        text-underline-position: from-font;
    }
    .img {
        background-image: url(${ ({ bg }) => img[bg] });
        background-position: center;
        background-size: cover;
    }
`