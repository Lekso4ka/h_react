import styled from "@emotion/styled";

export const Content = styled.section`
    display: grid;
    h2 {
        grid-row-start: 2;
        padding: 4rem 1.6rem 0;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
    .vi {
        height: 64.4rem;
        width: 100%;
        position: relative;
    }
    
    @media (min-width: 576px) {
        padding-top: 15rem;
        width: 152.4rem;
        gap: 6rem;
        margin: 0 auto;

        h2 {
            color: var(--Black, #1C1C1C);
            text-align: center;
            font-size: 5.4rem;
            grid-row-start: auto;
        }

        .video {
            transform-origin: top center;
            height: 76rem;
        }
    }

`