import styled from "@emotion/styled";
import img from "../../../assets/img";
export const Hero = styled.div`
    height: 84.4rem;
    box-sizing: border-box;
    position: relative;
    background: url(${ ({ bg }) => img[bg] }) lightgray 50% / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 7.8rem 1.6rem 21.1rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000080
    }
    .line {
        position: relative;
        z-index: 1;
        width: 100%;
        background-color: rgba(255, 246, 240, 0.30);
    }
    .divider {
        position: relative;
        z-index: 1;
        width: .1rem;
        height: 9rem;
        background: ${ ({ theme }) => theme.colors.white_20 };
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${ ({ theme }) => theme.colors.white };
            transform: translate(0, -100%);
            animation: scroll 2s linear infinite;
            border-radius: .1rem;
        }
    }
    @media (min-width: 576px) {
        height: 76rem;
        &::before {
            background-color: #0000004D
        }
        .line,
        .divider {
            display: none;
        }
    }
    @keyframes scroll {
        from {
            transform: translate(0, -100%);
        }
        to {
            transform: translate(0, 100%);
        }
    }
`
export const Title = styled.section`
    display: grid;
    padding: 2.4rem 1.6rem 4rem;
    .address {
        grid-row-start: 1;
        color: #000;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 18.2px */
        padding-bottom: 0;
    }
    .title {
        padding: 1.8rem 0 2.8rem;
        display: flex;
        flex-direction: column-reverse;
        gap: 1.6rem;
        &>span {
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
        }
    }
    h1 {
        color: var(--Red, #96281F);
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 44px */
        text-transform: capitalize;
    }
    p {
        color: var(--Black, #1C1C1C);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-bottom: 2rem;
    }
    .link {
        padding-top: 2.7rem;
        display: flex;
        width: max-content;
        color: #000;
    }
    @media (min-width: 576px) {
        padding: 6rem 2.4rem 0;
        grid-template-columns: 1fr 45.2rem 45.2rem;
        gap: 4.6rem 18rem;
        justify-content: flex-end;
        .address {
            grid-row-start: auto;
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 600;
            line-height: 110%; /* 17.6px */
        }
        .title {
            grid-template-columns: auto auto;
            align-self: flex-start;
            display: grid;
            justify-content: space-between;
            width: max-content;
            gap: .8rem;
            flex-wrap: wrap;
            padding: 0;
            
            

            & > span {
                color: var(--Black-2, #2F3034);
                justify-self: flex-end;
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 1.3;
            }

            h1 {
                font-size: 9rem;
                font-weight: 400;
                line-height: 1.1;
                grid-column-end: span 2;
                width: max-content;
            }
        }

        .stars {
            display: flex;
            align-items: center;
            gap: .6rem;
            flex: 50%;

            svg {
                width: 1.8rem;
                height: 1.8rem;
            }
        }

        p {
            color: var(--Black, #1C1C1C);
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 1.3;
            padding-bottom: 0;
        }

        .link {
            color: #2F3034;
            padding-top: 0;
        }
    }
`