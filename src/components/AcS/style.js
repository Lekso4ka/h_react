import styled from "@emotion/styled"
import a1 from "../../assets/images/Ac1.jpg"
import a2 from "../../assets/images/Ac2.png"

import a5 from "../../assets/images/Ac5.png"

export const Banner = styled.section`
    height: 76rem;
    background-image: url(${a1});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    h1 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 64px;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 70.4px */
        letter-spacing: 0.64px;
    }
`

export const Content = styled.section`
    padding: 8rem 2.4rem 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2.2rem;
    .text {
        grid-column-end: span 2;
        justify-self: center;
        width: 122.4rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 52.8px */
        letter-spacing: 0.044rem;
        padding-bottom: 9rem;
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
        margin-bottom: 1.3rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
    .text2 {
        grid-column-end: span 2;
        justify-self: center;
        width: 122.4rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 52.8px */
        letter-spacing: 0.044rem;
        padding-top: 5.3rem;
        border-top: .1rem solid rgba(150, 40, 31, 0.20);
        margin-bottom: 1.3rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
    .card1 {
        height: 92rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0 23rem;
        background-image: url(${a2});
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 64px;
        font-style: italic;
        font-weight: 400;
        line-height: 80%; /* 51.2px */
        letter-spacing: 0.64px;
    }
    .card2 {
        height: 92rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.6rem;
        h4 {
            color: var(--Black-2, #2F3034);
            text-align: center;
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 19.2px */
            text-transform: uppercase;
        }
        h3 {
            color: var(--Red, #96281F);
            text-align: center;
            font-family: "Playfair Display";
            font-size: 4.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 52.8px */
            letter-spacing: 0.044rem;
        }
        img {
            width: 29.3rem;
            height: 40rem;
            object-position: center;
            object-fit: cover;
        }
        p {
            width: 60.6rem;
            color: var(--Black-2, #2F3034);
            text-align: center;
            font-family: Manrope;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 21.6px */
        }
    }
`