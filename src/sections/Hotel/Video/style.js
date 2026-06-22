import styled from "@emotion/styled";

export const Content = styled.section`
    padding-top: 15rem;
    width: 152.4rem;
    display: grid;
    gap: 6rem;
    margin: 0 auto;

    h2 {
        color: var(--Black, #1C1C1C);
        text-align: center;
        font-family: "Playfair Display", sans-serif;
        font-size: 5.4rem;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }

    .video {
        transform-origin: top center;
        height: 76rem;
        background: rgba(0, 0, 0, 0.20);

        video {
            object-fit: cover;
            border: none;
            width: 100%;
            height: 100%;
        }
    }

`