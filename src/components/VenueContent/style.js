import styled  from "@emotion/styled";
import img from "../../assets/img"
import c from "../../assets/cursors"
export const Block = styled.div`
    padding: 0 2.4rem;
    display: grid;
    gap: 6.4rem;
    h1 {
        color: #000;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 70.4px */
    }
`

export const Content = styled.main`
    display: grid;
    grid-template-columns: 1fr 29.2rem 92.5rem;
    gap: 18rem;
    position: relative;
    padding-bottom: 13.6rem;
    align-content: flex-start;
    &::before {
        content: "";
        position: absolute;
        height: .1rem;
        left: 0;
        right: 0;
        background: var(--Green, #55532E);
        bottom: 9.4rem;
    }
    &::after {
        content: "";
        position: absolute;
        width: .1rem;
        height: 2.4rem;
        left: calc(50% - .05rem);
        background: var(--Green, #55532E);
        bottom: 7rem;
    }
    &>a {
        position: fixed;
        bottom: 2.4rem;
        color: var(--Black, #1C1C1C);
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
    .plan>svg {
        width: 100%;
        margin-bottom: 5rem;
    }
`

export const Info = styled.div`
    display: grid;
    gap: 7rem;
    padding-bottom: 7.6rem;
    
`
export const InfoItem = styled.div`
    display: grid;
    gap: 1.4rem;
    h4 {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
    }
    p {
        color: #000;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 64px */
        span {
            color: #000;
            font-family: "Playfair Display";
            font-size: 3.4rem;
            padding-left: .6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 34px */
        }
    }
`

export const Variant = styled.div`
    padding: .8rem 0 1.6rem;
    border-top: .1rem solid var(--Green, #55532E);
    display: grid;
    grid-template-columns: repeat(2, 12.4rem);
    justify-content: space-between;
    gap: 3.8rem;
    align-items: baseline;
    &:last-of-type {
        padding-bottom: 2rem;
        border-bottom: .1rem solid var(--Green, #55532E);
    }
    h5 {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
        &:last-of-type {
            justify-self: center;
        }
    }
    .digit {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
    svg {
        justify-self: center;
    }
`

export const Options = styled.div`
    display: grid;
    gap: 1.4rem;
    padding-top: 5rem;
    h4 {
        color: rgba(28, 28, 28, 0.80);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 14px */
    }
    li {
        position: relative;
        padding: 1.1rem 0 1.1rem 1.8rem;
        color: #1C1C1C;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
        border-top: 1px solid var(--Green, #55532E);
        &::before {
            content: "*";
            position: absolute;
            left: 0;
        }
        &:last-of-type {
            border-bottom: 1px solid var(--Green, #55532E);
        }
        span {
            color: rgba(28, 28, 28, 0.60);
            font-family: Manrope;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 10px */
        }
    }
    &>span {
        display: inline-block;
        padding-top: 1rem;
        color: rgba(28, 28, 28, 0.60);
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
    }
`
export const Text = styled.div`
column-count: 2;
    column-gap: 2.2rem;
    padding: 2.8rem 0 1.8rem;
    border-top: .1rem solid #55532E;
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        margin-bottom: 1.2em;/* 21.6px */
    }
`
export const Images = styled.div`
    display: grid;
    gap: 2rem;
    align-content: flex-start;
    position: relative;
`

export const Image = styled.div`
    background-image: url(${({ bg }) => img[bg]});
    background-position: center;
    background-size: cover;
    height: 59.8rem;
    cursor: url(${c.v1}), pointer;
`

export const Formats = styled.div`
    border: .1rem solid var(--Green, #55532E);
    background: var(--Beige, #FFF6F0);
    padding: 2.6rem;
    display: grid;
    height: 40.7rem;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    box-sizing: border-box;
    gap: 3.6rem;
    margin-bottom: 5rem;
    align-content: flex-start;
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: italic;
        font-weight: 500;
        line-height: 120%; /* 33.6px */
    }
    ul {
        display: grid;
        gap: 2rem;
        align-content: flex-start;
    }
    svg {
        width: 21rem;
        justify-self: center;
    }
    li {
        display: flex;
        align-items: center;
        gap: 2.2rem;
    span:first-of-type {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
    }
        span:last-of-type {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
            display: inline-block;
            width: max-content;
        }
    }
`