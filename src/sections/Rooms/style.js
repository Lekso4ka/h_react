import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 7.8rem 1.6rem 9rem;
    position: relative;
    nav {
        padding: 3.4rem 0 12.2rem;
    }
    &::before {
        width: .1rem;
        content: "";
        height: 2.4rem;
        left: calc(50% - .05rem);
        position: absolute;
        top: 7.8rem;
        background: rgba(150, 40, 31, 0.20);
    }
    h1{
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 39.6px */
        padding-bottom: 1.8rem;
    }
    @media (min-width: 576px) {
        padding: 9.2rem 2.4rem 2.8rem;
        &::before {
            height: 1.4rem;
            top: 9.2rem;
        }
        nav {
            padding: 3.8rem 0 12.9rem;
        }
    }
`