import styled from "@emotion/styled"

export const Container = styled.div`
    padding: 7.8rem 0 0;
    &::before {
        width: .1rem;
        content: "";
        height: 2.4rem;
        left: calc(50% - .05rem);
        position: absolute;
        top: 7.8rem;
        background: rgba(150, 40, 31, 0.20);
    }
    @media (min-width: 576px) {
        padding: 9.2rem 2.4rem 0;
        &::before {
            height: 1.4rem;
            top: 9.2rem;
        }
    }
`