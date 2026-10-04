import styled from "@emotion/styled";
import { mediaUrl } from "../../utils/mediaUrl";

export const Section = styled.section`
    padding: 2.6rem 4rem 9rem;
    display: grid;
    .img {
        height: 40rem;
        background-color: #D9D9D9;
        background-position: center;
        background-size: cover;
        ${({ bg }) => bg ? `background-image: url("${mediaUrl(bg)}")` : ""};
        margin-bottom: 4rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        &:not(:last-of-type) {
            margin-bottom: 2.2rem;
        }
    }
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0.024rem;
        padding-bottom: 2.8rem;
    }
    a {
        margin-top: 2.2rem;
    }
    @media (min-width: 576px) {
        padding: 3rem 18.2rem 15rem 2.4rem;
        grid-template-columns: 76.7rem 1fr;
        gap: 0 18rem;
        align-items: start;
        .img {
            height: 81.8rem;
            margin-bottom: 0;
            grid-column: 1;
            grid-row: 1;
        }
        .copy {
            grid-column: 2;
            grid-row: 1;
        }
        p {
            font-size: 2.2rem;
            &:not(:last-of-type) {
                margin-bottom: 3rem;
            }
        }
        h3 {
            font-size: 3.4rem;
            letter-spacing: 0.034rem;
            padding-bottom: 4rem;
        }
        a {
            margin-top: 3rem;
        }
    }
`
