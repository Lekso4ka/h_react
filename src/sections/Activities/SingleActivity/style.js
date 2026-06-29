import styled from "@emotion/styled";
import img from "../../../assets/img";

export const Section = styled.section`
    height: 84.4rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    display: grid;
    box-sizing: border-box;
    padding: 31.2rem 1.6rem 0;
    align-content: flex-start;
    justify-content: center;
    justify-items: center;
    .tooltip {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
    }
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
        letter-spacing: 0.034rem;
        padding: 1.4rem 0 2rem;
    }
    p {
        color: rgba(255, 246, 240, 0.80);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        padding-bottom: 4.6rem;
    }
    @media (min-width: 576px) {
        height: 88.4rem;
        grid-template-columns: 60rem;
        grid-template-rows: auto auto 1fr auto;
        padding: 27rem 0 28.1rem;
        align-content: center;
        
        .tooltip {
            font-size: 1.6rem;
        }

        h2 {
            font-size: 6.4rem;
            letter-spacing: 0.064rem;
            padding: 1.6rem 0 2.8rem;
        }

        p {
            width: 45rem;
            font-size: 2rem;
        }
    }
`