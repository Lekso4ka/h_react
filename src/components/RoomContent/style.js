import styled from "@emotion/styled"

export const Block = styled.div`
    padding: 0 2.4rem 6rem;
    display: grid;
    grid-template-columns: 108.2rem 1fr;
    gap: 18rem;
    position: relative;
`

export const HeaderBlock = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Caption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 3.2rem 0 2.6rem;
    border-bottom: .1rem solid #96281F33;
    h1 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 70.4px */
    }
    strong {
        color: var(--Black-2, #2F3034);
        font-size: 2rem;
        font-weight: 400;
        line-height: 110%;
        &::first-letter {
            text-transform: lowercase;
        }
    }
`

export const TextTop = styled.div`
    font-family: "Playfair Display";
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2.3rem;
    grid-template-rows: 4rem 12.84rem;
    
    h2 {
        color: var(--Black, #1C1C1C);
        font-size: 2rem;
        font-weight: 400;
        line-height: 110%;
        grid-column-end: span 2;
        align-self: center;
    }
    .tl {
        display: flex;
        gap: 1rem;
        align-items: baseline;
        color: var(--Black-2, #2F3034);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        padding: 1.5rem 0 2.4rem;
        border-bottom: .1rem solid #96281F33;
        position: relative;
        span:first-of-type {
            color: var(--Black-2, #2F3034);
            font-size: 7.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 81.4px */
        }
        &::after {
            position: absolute;
            content: "";
            width: .1rem;
            height: 10rem;
            background-color: #96281F33;
            right: -1.2rem;
            bottom: 2rem;
        }
    }
    .tr {
        display: flex;
        gap: 1rem;
        align-items: baseline;
        color: var(--Black-2, #2F3034);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        padding: 1.5rem 0 2.4rem .9rem;
        border-bottom: .1rem solid #96281F33;
        position: relative;
        span:nth-of-type(2) {
            color: var(--Black-2, #2F3034);
            font-size: 7.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 81.4px */
        }
    }
    .bl {
        display: flex;
        gap: 1rem;
        align-items: baseline;
        color: var(--Black-2, #2F3034);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 30px */
        padding: 2.4rem 02rem 5.2rem 0;
        position: relative;
        &::after {
            position: absolute;
            content: "";
            width: .1rem;
            height: 10rem;
            background-color: #96281F33;
            right: -1.2rem;
            top: 2rem;
        }
    }
    .br {
        display: flex;
        gap: 1rem;
        align-items: baseline;
        color: var(--Black-2, #2F3034);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 30px */
        padding: 2.4rem 0 0 .9rem;
        position: relative;
    }
`

export const MainText = styled.div`
    padding: 3rem 0 4rem;
    display: grid;
    gap: 2.4rem;
    color: var(--Black-2, #2F3034);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
`

export const SecondaryText = styled.div`
    color: var(--Green, #55532E);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 21.6px */
    padding: 0 10.6rem 4rem 3rem;
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    position: relative;
    &::before {
        content: "";
        width: 1.4rem;
        height: 1.4rem;
        background-color: #55532E;
        position: absolute;
        left: 0;
        top: .6rem;
    }
`

export const Options = styled.div`
    padding: 2.4rem 0;
    display: grid;
    gap: 2.4rem;
    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 22px */
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.2rem;
    }
    li {
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
        display: flex;
        align-items: center;
        gap: 1.2rem;
        svg {
            width: 2.4rem;
        }
    }
`

export const ImagesBlock = styled.div`
    padding: 2.8rem 0 0;
    display: grid;
    gap: 2rem;
`

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 6.4rem;
    justify-content: center;
    align-items: center;
    background: var(--Green, #55532E);
    color: #FFF;
    font-family: "Playfair Display";
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 110%; /* 19.8px */
    letter-spacing: 0.036rem;
    //position: sticky;
    //bottom: 1.4rem;
`

export const List1 = styled.div`
    padding: 2.4rem 0;
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    //height: 2rem;
    //transition: height .2s linear;
    //overflow: hidden;
    h2 {
        cursor: pointer;
        //height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        margin-bottom: 2.4rem;
        svg {
            transition: transform .2s linear;
            width: 1.4rem;
            transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0)"}
        }
    }
    &>ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem 2.3rem;
        &>li {
            color: var(--Green, #55532E);
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 14px */
            div {
                padding-bottom: 1.8rem;
            }
            &>ul {
                color: var(--Black-2, #2F3034);
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 500;
                line-height: 110%; /* 17.6px */
            }
        }
    }
    
`

export const List2 = styled.div`
    padding: 2.4rem 0;
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    //height: 2rem;
    transition: height .2s linear;
    overflow: hidden;
    h2 {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        margin-bottom: 2.4rem;
        svg {
            transition: transform .2s linear;
            width: 1.4rem;
            transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0)"}
        }
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.4rem;
        list-style-type: disc;
        li {
            margin-left: 2.5rem;
            color: var(--Black-2, #2F3034);
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 19.2px */
        }
    }
`

export const GalleryImage = styled.img`
    display: block;
    width: 100%;
    height: 60.3rem;
    object-fit: cover;
    overflow: hidden;
`;

export const AsideColumn = styled.div`
position: relative;
align-self: start;
`;

export const Info = styled.aside`
display: flex;
flex-direction: column;
will-change: transform;
`;

export const AccP = styled.div`
    overflow: hidden;
    height: 0;
`