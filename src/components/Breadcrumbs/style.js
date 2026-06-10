import styled from "@emotion/styled";

export const Container = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 100%;
    align-items: center;

    a {
        color: rgba(47, 48, 52, 0.40);
    }

    .active {
        font-size: 1.4rem;
        font-weight: 500;
    }
    .divider {
        color: rgba(47, 48, 52, 0.40);
        font-size: 2.4rem;
        font-weight: 200;
        line-height: 100%; /* 24px */
    }
`