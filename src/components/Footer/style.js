import styled from "@emotion/styled"

export const Block = styled.footer`
    background-color: #1C1C1C;
    color: #FFF;
    padding: 6rem 1.6rem 3.6rem;
    display: grid;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
    //height: 109.3rem;
    @media (min-width: 576px) {
        grid-template-rows: auto 1fr auto;
        //height: 72.3rem;
        padding: 7.5rem 2.4rem 2rem;
        grid-template-columns: repeat(2, 1fr);
        font-size: 1.6rem;
        //gap: 9.2rem;
    }
`

export const Caption = styled.h4`
    color: var(--Beige, #FFF6F0);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 3.4rem;
    line-height: 4rem; /* 86.207% */
    text-transform: uppercase;
    margin-bottom: 7.2rem;
    
    @media (min-width: 576px) {
        grid-column-end: span 2;
        font-size: 11.6rem;
        line-height: 10rem;
        margin-bottom: 9.2rem;
    }
`
export const Bottom = styled.div`
    padding-top: 1.4rem;
    border-top: 1px solid rgba(255, 255, 255, .2);
    color: rgba(255, 255, 255, .4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    * {
        width: 9.2rem;
    }
    a:first-of-type {
        width: 11.8rem;
        text-align: center;
    }
    a:last-of-type {
        text-align: right;
    }
    @media (min-width: 576px) {
        padding-top: 1.2rem;
        grid-column-end: span 2;
        font-size: inherit;
        * {
            width: 100%;
        }
        a:first-of-type {
            width: 100%;
        }
    }
`
export const Title = styled.h5`
    opacity: .2;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    
    @media (min-width: 576px) {
        margin-bottom: 2.2rem;
        font-size: inherit;
    }
`
export const List = styled.nav`
    display: grid;
    gap: 1.4rem;
    @media (min-width: 576px) {
        font-size: inherit;
        gap: 1.2rem;
    }
`

export const Right = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: flex-start;
    gap: 6rem 1.6rem;
    padding-bottom: 5rem;
    //div:nth-of-type(1) {
    //    grid-column-start: 2;
    //}
    div:nth-of-type(2) {
        grid-column-start: 1;
        grid-row-start: 1;
    }
    @media (min-width: 576px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 5.2rem 0;
        padding-bottom: 0;
        div:nth-of-type(2) {
            grid-column-start: 2;
            grid-row-start: 1;
            grid-row-end: span 2;
        }
    }
`

export const Left = styled.div`
    padding-bottom: 5rem;
    @media (min-width: 576px) {
        padding-bottom: 0;
    }
    .address {
        padding-top: 6rem;
        max-width: 29.4rem;
        p {
            width: 100%;
        }
        @media (min-width: 576px) {
            padding-top: 5.2rem;
        }
    }
    p {
        font-size: 1.6rem;
        padding-bottom: 3.4rem;
        @media (min-width: 576px) {
            width: 46.2rem;
            padding-bottom: 4.8rem;
            font-size: inherit;
        }
    }
    .form-row {
        display: flex;
        gap: 1rem;
        padding-bottom: 1.6rem;
        @media (min-width: 576px) {
            gap: 2.2rem;
            padding-bottom: 1.4rem;
        }
    }
    input:not([type="checkbox"]) {
        background-color: transparent;
        padding: 0 0 1.2rem;
        border: none;
        border-bottom: .1rem solid #fff;
        outline: none;
        color: inherit;
        width: 17.4rem;
        font-size: 1.2rem;
        @media (min-width: 576px) {
            font-size: inherit;
            width: 29.4rem;
            padding: 0 0 1.1rem;
        }
    }
    input[type=checkbox] {
        appearance: none;
        -webkit-appearance: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 1.8rem;
        height: 1.8rem;
        margin: 0;
        box-sizing: border-box;
        border: .2rem solid #fff;
        background-color: transparent;
        cursor: pointer;
        flex-shrink: 0;
        &:checked {
            background-color: #fff6f0;
        }
        &:focus-visible {
            outline: .1rem solid #fff;
            outline-offset: .2rem;
        }
        @media (min-width: 576px) {
            width: 2rem;
            height: 2rem;
        }
    }
    .consent {
        display: flex;
        align-items: center;
        padding-left: 3.2rem;
        position: relative;
        color: rgba(255, 255, 255, .6);
        font-size: 1rem;
        font-weight: 500;
        line-height: 120%;
        user-select: none;
        cursor: pointer;
        @media (min-width: 576px) {
            width: 36rem;
            font-size: 1.2rem;
            line-height: 100%;
        }
        a {
            color: #fff;
        }
    }
    button {
        margin-top: 2.6rem;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 19.8px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: 10%; /* 1.8px */
        text-underline-offset: 30%; /* 5.4px */
        text-underline-position: from-font;
        @media (min-width: 576px) {
            margin-top: 2.8rem;
            font-size: 1.8rem;
            line-height: 120%;
        }
    }
`