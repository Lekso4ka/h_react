import styled from "@emotion/styled"

export const Block = styled.footer`
    background-color: #1C1C1C;
    height: 72.3rem;
    color: #FFF;
    padding: 7.5rem 2.4rem 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr auto;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    gap: 9.2rem;
`

export const Caption = styled.h4`
    color: var(--Beige, #FFF6F0);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 11.6rem;
    font-weight: 500;
    line-height: 100px; /* 86.207% */
    text-transform: uppercase;
    grid-column-end: span 2;
`
export const Bottom = styled.div`
    padding-top: 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, .2);
    color: rgba(255, 255, 255, .4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-end: span 2;
`
export const Title = styled.h5`
    opacity: .2;
    text-transform: uppercase;
    margin-bottom: 2.2rem;
    &:not(:first-of-type) {
        margin-top: 5.2rem;
    }
`
export const List = styled.nav`
    display: grid;
    gap: 1.2rem;
`

export const Right = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: flex-start;
`

export const Left = styled.div`
    p {
        width: 46.2rem;
        padding-bottom: 4.8rem;
    }
    .form-row {
        display: flex;
        gap: 2.2rem;
        padding-bottom: 1.4rem;
    }
    input:not([type="checkbox"]) {
        background-color: transparent;
        padding: 0 0 1.1rem;
        border: none;
        border-bottom: .1rem solid #fff;
        outline: none;
        color: inherit;
        width: 29.4rem;
    }
    input[type=checkbox] {
        display: none;
        &+label {
            display: flex;
            align-items: center;
            padding-left: 3.2rem;
            position: relative;
            color: rgba(255, 255, 255, .6);
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 100%; /* 12px */
            width: 36rem;
            user-select: none;
            a {
                color: #fff;
            }
            &::before {
                content: "";
                width: 2rem;
                height: 2rem;
                box-sizing: border-box;
                border: .2rem solid #fff;
                position: absolute;
                left: 0;
            }
        }
        &:active+label::before {
            background-color: #fff6f0;
        }
    }
    button {
        margin-top: 2.8rem;
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 19.8px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: 10%; /* 1.8px */
        text-underline-offset: 30%; /* 5.4px */
        text-underline-position: from-font;
    }
`