import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 8.9rem 1.6rem 9rem;

    .line {
        margin: 0 1.6rem 2.4rem;
    }
    .block {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 22.4px */
        h3, p, ul, li, div {
            max-width: 108.2rem;
        }
        .line {
            margin: 4.4rem 0;
            max-width: 100%;
        }
        .line-h4 {
            margin: 0;
        }
    }
    h1 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 35.2px */
        padding: 8.8rem 0 7.3rem;
        margin: 0 auto;
        max-width: 88.6rem;

    }
    h4 {
        color: var(--Red, #96281F);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 16.8px */
        text-transform: uppercase;
        padding: 2rem 0;
    }

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 30.8px */
        margin-bottom: 4.4rem;
        margin-top: 2rem;
    }
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 24.2px */
        margin-bottom: 2.4rem;
    }
    p {
        margin: 2.24rem 0;
    }
    li {
        display: flex;
        position: relative;
        padding-left: 2.5rem;
        &::before {
            content: "";
            width: .4rem;
            height: .4rem;
            position: absolute;
            left: 1rem;
            top: 1rem;
            border-radius: 50%;
            background-color: var(--Black-2, #2F3034);
        }
    }

    @media (min-width: 576px) {
        padding: 10.2rem 2.4rem 15.1rem;
        .block {
            font-size: 1.8rem;
            line-height: 150%; /* 27px */
            padding-left: 49.8rem;
        }
        h1 {
            padding: 10.2rem 0 8.3rem;
            font-size: 6.4rem;
            height: 15.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h4 {
            padding: 1.8rem 0;
        }
        h2 {
            margin-top: 3.2rem;
            font-size: 4.4rem;
        }
        h3 {
            font-size: 4.3rem;
        }
        p {
            margin: 2.7rem 0;
        }
        li::before {
            top: 1.3rem;
        }
    }
    .
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.8rem;
    margin-bottom: 1.6rem;
    //padding-left: 1.6rem;
    @media (min-width: 576px) {
        gap: 2.3rem;
    }
`