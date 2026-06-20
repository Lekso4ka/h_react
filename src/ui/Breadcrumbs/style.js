import styled from "@emotion/styled";

export const Container = styled.nav`
    display: flex;
    gap: .6rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 100%;
    align-items: center;

    a {
        color: rgba(47, 48, 52, 0.40);
    }
    .divider {
        color: rgba(47, 48, 52, 0.40);
        font-size: 1.8rem;
        font-weight: 200;
        line-height: 100%; /* 24px */
    }
    @media (min-width: 576px) {
        font-size: 1.4rem;
        gap: 1rem;
        .divider {
            font-size: 2.4rem;
        }
    }
`