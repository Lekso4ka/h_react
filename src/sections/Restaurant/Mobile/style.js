import styled from "@emotion/styled"
import { mediaUrl } from "../../../utils/mediaUrl"

export const Section = styled.section`
    .tour {
        top: 1.6rem;
        left: 1.6rem;
        width: 6.2rem;
    }
    .page-top {
        display: grid;
        grid-template-rows: 64.4rem auto;
        gap: 2rem;
        
    }
    .top {
        padding: 9rem 0 0;
        display: grid;
        grid-template-rows: auto 64.4rem auto;
        .t2 {
            padding-top: 2rem;
        }
    }
    .wrapper {
        padding: 0 1.6rem;
    }
    h1, h2 {
        color: #000;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 48.4px */
        padding-bottom: 1.2rem;
    }
    .tooltip {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 90%; /* 12.6px */
        padding-bottom: 3rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-bottom: 4rem;
    }
    .t2 {
        padding-bottom: 4.2rem;
    }
    .content {
        padding: 0 1.6rem;
        display: grid;
        grid-template-columns: 17.4rem 1fr;
        gap: 1.6rem 1rem;
        align-content: flex-start;
        align-items: flex-start;
        .line {
            grid-column-end: span 2;
        }
        p {
            color: var(--Green, #55532E);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
            padding: 0;
            &:nth-of-type(3) {
                grid-row-start: 2;
                grid-column-start: 2;
            }
        }
        .digit {
            color: var(--Black-2, #2F3034);
            text-align: center;
            font-family: "Playfair Display";
            font-size: 5.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 5.7rem;
            text-transform: uppercase;
        }
        .img {
            margin: .8rem 0 3rem;
            height: 17.2rem;
            background-image: ${ ({ pic }) => `url(${ mediaUrl(pic) })` };
            background-position: center;
            background-size: cover;
        }
        .link {
            grid-row-start: 6;
        }
    }
`