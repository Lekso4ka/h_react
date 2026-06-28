import styled from "@emotion/styled";
import img from "../../../assets/img";

export const Section3 = styled.section`
    height: 71.5rem;
    background-image: url(${ ({ pic }) => img[pic] });
    background-position: center;
    background-size: 100% auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover {
        background-size: 110% auto;
    }

    transition: background-size 1s;
    &::before {
        content: "";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.40);
        opacity: 1;
        transition: opacity 1s;
    }

    &:hover::before {
        opacity: 0;
    }
    & > * {
        z-index: 1;
    }
    .tooltip {
        display: inline-flex;
        padding: 1.2rem 1.6rem;
        justify-content: center;
        align-items: center;
        border: .1rem solid rgba(255, 246, 240, 0.40);
        background: #FFF6F0;
        backdrop-filter: blur(12px);
        color: var(--Red, #96281F);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 100%; /* 18px */
    }

    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 500;
        line-height: normal;
        padding: 1.6rem 0 3.6rem;
    }
`