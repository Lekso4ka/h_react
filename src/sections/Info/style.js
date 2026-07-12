import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 8.9rem 0 9rem;

    .line {
        margin: 0 1.6rem 0;
    }

    @media (min-width: 576px) {
        padding: 10.2rem 0 15.1rem;
    }
`

export const Buttons = styled.div`
    display: grid;
    justify-items: flex-start;
    grid-template-columns: auto auto auto;
    gap: 2.8rem;
    padding-left: 1.6rem;
    @media (min-width: 576px) {
        grid-template-columns: 108.3rem 1fr;
        gap: 4.6rem;
        padding-left: 2.4rem;
    }
`