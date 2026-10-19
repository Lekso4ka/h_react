import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 90;
    background: rgba(0, 0, 0, 0.4);
    overflow: hidden;
    overscroll-behavior: none;
    touch-action: none;
`;

export const Panel = styled.div`
    position: absolute;
    top: 9.6rem;
    left: 1.6rem;
    width: 36.4rem;
    height: 59.2rem;
    background: ${({ theme }) => theme.colors.light};
    box-sizing: border-box;

    @media (min-width: 576px) {
        top: 2.4rem;
        left: 2.4rem;
        right: 2.4rem;
        width: auto;
        height: 33.3rem;
    }
`;

export const Title = styled.p`
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    width: 33.2rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.red};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 2.8rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.01em;

    @media (min-width: 576px) {
        top: 3.4rem;
        left: 3.4rem;
        width: 58rem;
        font-size: 4.4rem;
    }
`;

export const Aside = styled.div`
    position: absolute;
    top: 22.6rem;
    left: 1.6rem;
    bottom: 3.6rem;
    width: 33.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 576px) {
        top: 3.4rem;
        left: 78.9rem;
        bottom: 3.4rem;
        width: 42.5rem;
    }
`;

export const Text = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0;

    @media (min-width: 576px) {
        font-family: ${({ theme }) => theme.fonts.display};
        font-size: 2.6rem;
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: 0.01em;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 3.4rem;

    a {
        text-decoration: underline;
        text-underline-offset: 0.14em;
        text-decoration-thickness: 0.06em;

        &::after {
            content: none;
        }
    }

    @media (min-width: 576px) {
        gap: 4.4rem;
    }
`;
