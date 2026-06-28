import styled from "@emotion/styled";
import img from "../../../assets/img";

export const Section3 = styled.section`
    height: 64rem;
    background-image: url(${ ({ pic }) => img[pic] });
    background-position: center;
    background-size: cover;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    box-sizing: border-box;
    padding: 4rem 2rem;
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
    & > * {
        position: relative;
        z-index: 1;
    }
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 1.4rem 0 3.6rem;
    }
    .tooltip {
        display: inline-flex;
        width: max-content;
        padding: 1rem 1.2rem;
        justify-content: center;
        align-items: center;
        border: .1rem solid rgba(255, 246, 240, 0.40);
        background: #FFF6F0;
        backdrop-filter: blur(12px);
        color: var(--Red, #96281F);
        font-family: "Playfair Display";
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 100%; /* 18px */
    }
    @media (min-width: 576px) {
        height: 71.5rem;
        background-size: 100% auto;
        
        justify-content: center;
        align-items: center;
        transition: background-size 1s;
        &:hover {
            background-size: 110% auto;
        }
        &:hover::before {
            opacity: 0;
        }
        .tooltip {
            padding: 1.2rem 1.6rem;
            font-size: 1.8rem;
        }

        h2 {
            text-align: center;
            font-size: 4.4rem;
            padding: 1.6rem 0 3.6rem;
        }
    }
`