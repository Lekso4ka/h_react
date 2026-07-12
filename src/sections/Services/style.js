import styled from "@emotion/styled";
import img from "../../assets/img";

export const Container = styled.div`
    padding: ${({page}) => page ? "7.8rem" : "0"} 1.6rem 9rem;
    position: relative;
    .top {
        padding-top: 3.4rem;
        position: relative;
        &::before {
            width: .1rem;
            content: "";
            height: 2.4rem;
            left: calc(50% - .05rem);
            position: absolute;
            top: 0;
            background: rgba(150, 40, 31, 0.20);
        }
        nav {
            margin-bottom: 14.2rem;
        }
    }
    @media (min-width: 576px) {
        padding: ${({page}) => page ? "9.2rem 2.4rem 2.4rem" : "0 2.4rem 1.4rem"};
        .top {
            padding-top: 3.9rem;
            display: flex;
            justify-content: space-between;
            position: relative;
            &::before {
                height: 1.4rem;
            }
            nav {
                margin-bottom: 0;
            }
        }
        &::after {
            width: .1rem;
            content: "";
            height: 1.4rem;
            left: calc(50% - .05rem);
            position: absolute;
            bottom: ${({page}) => page ? 1 : 0}rem;
            background: rgba(150, 40, 31, 0.20);
        }
        
    }
`

export const Tabs = styled.div`
    display: flex;
    gap: 5.9rem;
    padding-bottom: 1.8rem;
    
    @media (min-width: 576px) {
        justify-content: flex-end;
        gap: 3.2rem;
        padding-bottom: 0;
    }

`

export const Section = styled.section`
    display: grid;
    h2 {
        color: #000;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 48.4px */
        padding: 5.4rem 0 4rem;
        position: relative;
        &::before {
            width: .1rem;
            content: "";
            height: 1.4rem;
            left: calc(50% - .05rem);
            position: absolute;
            top: 0;
            background: rgba(150, 40, 31, 0.20);
        }
        
    }
    .text {
        display: grid;
        gap: 4rem;
        color: #000;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 17.6px */
    }
    .tabs {
        display: flex;
        padding: 7.4rem 0 2.2rem;
        gap: 8rem;
    }
    .img {
        height: 42.8rem;
        background-image: ${ ({ pic }) => `url(${ img[pic] })` };
        background-position: center;
        background-size: cover;
        margin-bottom: 2rem;
        transition: background-image 200ms linear;
    }
    .fix {
        display: grid;
        grid-column-end: span 2;
        grid-template-columns: 76.7rem 1fr;
        gap: 18rem;
    }
    @media (min-width: 576px) {
        grid-template-columns: 76.7rem 1fr;
        gap: 3.6rem 18rem;
        ${ ({ page }) => page ? `
        padding: 8.6rem 0 15rem;
    ` : `
        padding: 14.9rem 0 15rem;
    ` }
        align-content: flex-start;
        h2 {
            padding: 0;

            &::before {

                display: none;
            }
        }
        .caption {
            display: grid;
            gap: 5.5rem;
            justify-content: space-between;
            align-items: baseline;
        }
        .tabs {
            padding: 0;
            gap: 20.4rem;
        }

        .text {
            gap: 2.4rem;
            grid-template-columns: 45rem 45rem;
            align-items: flex-start;
            color: var(--Black-2, #2F3034);
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 130%; /* 23.4px */
        }
        .img {
            margin-bottom: 0;
        }
    }
`
