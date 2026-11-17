import styled from "@emotion/styled";

export const Wrap = styled.section`
    min-height: 70rem;
    padding: 16rem 2.4rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;

    .code {
        color: ${({ theme }) => theme.colors.red};
        font-family: ${({ theme }) => theme.fonts.display};
        font-style: italic;
        font-weight: 400;
        font-size: 8rem;
        line-height: 1;
        margin-bottom: 1.6rem;
    }

    h1 {
        font-family: ${({ theme }) => theme.fonts.display};
        font-style: italic;
        font-weight: 400;
        font-size: 3.4rem;
        line-height: 110%;
        margin-bottom: 1.6rem;
    }

    .text {
        max-width: 46rem;
        font-size: 1.6rem;
        line-height: 140%;
        margin-bottom: 3.2rem;
    }

    @media (min-width: 576px) {
        min-height: 56rem;
        padding: 18rem 2.4rem 12rem;

        .code {
            font-size: 12rem;
        }

        h1 {
            font-size: 4.8rem;
        }
    }
`;
