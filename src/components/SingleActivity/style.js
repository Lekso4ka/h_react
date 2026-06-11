import styled from "@emotion/styled";
import img from "../../assets/img";

export const Section = styled.section`
    height: 88.4rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 60rem;
    grid-template-rows: auto auto 1fr auto;
    padding: 27rem 0 28.1rem;
    align-content: center;
    justify-content: center;
    justify-items: center;
    .tooltip {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
    }
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 70.4px */
        letter-spacing: 0.064rem;
        padding: 1.6rem 0 2.8rem;
    }
    p {
        color: rgba(255, 246, 240, 0.80);
        width: 45rem;
        text-align: center;
        font-family: Manrope;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 24px */
    }
    a {
        color: var(--Beige, #FFF6F0);
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
`