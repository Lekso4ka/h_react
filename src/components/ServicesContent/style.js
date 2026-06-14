import styled from "@emotion/styled";
import img from "../../assets/img";

export const Container = styled.div`
    padding: 0 2.4rem ${({page}) => page ? "2.4rem" : "1.4rem"};
    .top {
        padding-top: 4.9rem;
        display: flex;
        justify-content: space-between;
    }
`
export const Line = styled.div`
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
`

export const Tabs = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5.4rem;

`

export const Section = styled.section`
    display: grid;
    grid-template-columns: 76.7rem 1fr;
    gap: 6.8rem 18rem;
    ${({page}) => page ? `
        padding: 8.6rem 0 15rem;
    ` : `
        padding: 14.9rem 0 15rem;
    `}
    align-content: flex-start;

    .caption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    h2 {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 400;
        line-height: 110%; /* 48.4px */
    }

    .text {
        display: grid;
        gap: 2.4rem;
        grid-template-columns: 45rem 45rem;
        align-items: flex-start;
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 130%; /* 23.4px */
    }

    .img {
        height: 42.8rem;
        background-image: ${ ({ pic }) => `url(${ img[pic] })` };
        background-position: center;
        background-size: cover;
    }
`
