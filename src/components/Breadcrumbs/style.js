import styled from "@emotion/styled";

export const Container = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 100%;

    a {
        color: rgba(47, 48, 52, 0.40);
    }

    span {
        font-size: 2.4rem;
        font-weight: 200;
    }

    .active {
        font-size: 1.4rem;
        font-weight: 500;
    }
`