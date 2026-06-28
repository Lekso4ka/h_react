import styled from "@emotion/styled";
import img from "../../../assets/img"

export const Block = styled.div`
    padding-top: 15rem;
    margin-bottom: 1.6rem;
    //position: relative;
    .wrapper {
        padding: 0 1.6rem
    }
    nav {
        padding-bottom: 3rem;
    }
    .variant {
        display: flex;
        justify-content: flex-end;
        color: #000;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 15.4px */
        padding: 2.5rem .1rem .7rem 0;
        text-transform: lowercase;
        
    }
    h1 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
        padding-bottom: 1rem;
        
    }
`

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(${({cnt}) => cnt}, 36rem);
    height: 56rem;
    padding: 1.2rem 1.6rem 1rem;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    ::-webkit-scrollbar-track {
        margin: 0 1.6rem;
            height: .2rem;
            border-radius: .3rem;
            background: rgba(47, 48, 52, 0.10);
        }
    ::-webkit-scrollbar-thumb {
        border-radius: .3rem;
        height: .2rem;
        background: var(--Green, #55532E);
    }
`
export const Image = styled.div`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${({ bg }) => img[bg]});
    background-position: center;
    background-size: cover;
    position: relative;
    a {
        top: 1.6rem;
        left: 1.6rem;
    }
`
export const Content = styled.div`
    padding: 2.6rem 1.6rem 0;
    position: relative;
    //&::after {
    //    width: .1rem;
    //    content: "";
    //    height: 2.4rem;
    //    left: calc(50% - .05rem);
    //    position: absolute;
    //    bottom: 0;
    //    background: rgba(150, 40, 31, 0.20);
    //}
`

export const TextTop = styled.div`
    font-family: "Playfair Display";
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2.4rem;
    color: #000;
    //grid-template-rows: auto 12.84rem;

    h2 {
        color: var(--Black, #1C1C1C);
        grid-column-end: span 2;
        align-self: center;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 18px */
        padding: 0 0 2.4rem .2rem;
    }

    .tl {
        display: flex;
        gap: .6rem;
        align-items: baseline;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        padding: 0 0 1.6rem;
        border-bottom: .1rem solid #96281F33;
        position: relative;

        span:first-of-type {
            font-size: 5.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 81.4px */
        }

        &::after {
            position: absolute;
            content: "";
            width: .1rem;
            height: 6rem;
            background-color: #96281F33;
            right: -1.2rem;
            bottom: 1rem;
        }
    }

    .tr {
        display: flex;
        gap: .6rem;
        align-items: baseline;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        padding: 0 0 1.6rem .5rem;
        border-bottom: .1rem solid #96281F33;
        position: relative;

        span:nth-of-type(2) {
            font-size: 5.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 81.4px */
        }
    }

    .bl {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 30px */
        padding: 2rem 0 0;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: .1rem;
            height: 6rem;
            background-color: #96281F33;
            right: -1.2rem;
            top: 1rem;
        }
    }

    .br {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        padding: 2rem 0 0 .5rem;
    }
`

export const MainText = styled.div`
    padding: 6.4rem 0;
    display: grid;
    gap: 2.4rem;
    color: var(--Black-2, #2F3034);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
`

export const SecondaryText = styled.div`
    color: var(--Green, #55532E);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 21.6px */
    padding: 0 0 6.4rem 2.4rem;
    position: relative;

    &::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        background-color: #55532E;
        position: absolute;
        left: 0;
        top: .4rem;
    }
`

export const Options = styled.div`
    padding: 2.4rem 0 6.4rem;
    display: grid;
    gap: 2.4rem;

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 22px */
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.6rem 2.4rem;
    }

    li {
        color: var(--Black-2, #2F3034);
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 17.6px */
        display: grid;
        grid-template-columns: 2rem 1fr;
        gap: 1rem;
        align-content: flex-start;
        svg {
            width: 2rem;
        }
    }
`

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 5.8rem;
    justify-content: center;
    align-items: center;
    background: var(--Green, #55532E);
    color: var(--Beige, #FFF6F0);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.056rem;
    position: sticky;
    bottom: 0;
`

export const AccItemSt = styled.div`
    overflow: hidden;
    ${({isOpt2}) => isOpt2 ? "border-bottom: .1rem solid rgba(150, 40, 31, 0.20); margin-bottom: 1.6rem;" : ""}
`;

export const AccTrigger = styled.button`
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    padding: 2.4rem 0;
    color: var(--Black-2, #2F3034);
    h3 {
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
    }
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
	cursor: pointer;
    justify-items: flex-start;
    align-content: center;
`;



export const AccButton = styled.span`
    display: flex;
    align-items: center;
    span {
        display: flex;
        height: 1.4rem;
        svg {
            height: 100%;
        }
    }
`;

export const AccPanel = styled.div`
	overflow: hidden;
`;

export const OptLite = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: Manrope;
    font-size: 1.4rem;
    font-style: normal;
    h4 {
        color: var(--Green, #55532E);
        font-weight: 600;
        line-height: 100%; /* 14px */
    }
    li {
        color: var(--Black-2, #2F3034);
        font-weight: 500;
        line-height: 120%; /* 16.8px */
    }
`
export const Opt1 = styled.div`
    display: grid;
    gap: 4rem;
    padding-bottom: 6.4rem;
    align-content: flex-start;
`;

export const Opt2 = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem 1rem;
    padding-bottom: 2.4rem;
    li {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 2.2rem;
        &::before {
            content: "";
            width: .3rem;
            height: .3rem;
            position: absolute;
            left: .85rem;
            border-radius: 50%;
            background-color: var(--Black-2, #2F3034);
        }
    }
`