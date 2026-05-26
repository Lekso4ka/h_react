import styled from "@emotion/styled"

export const Block = styled.section`
    padding: 13rem 2.4rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rem 2.2rem;
    position: relative;
    h2 {
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: 0.032rem;
    }
    p {
        grid-column-end: span 2;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 44px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 52.8px */
        letter-spacing: 0.44px;
        span {
            color: var(--Red, #96281F);
        }
    }
    img {
        width: 100%;
        height: 68rem;
        object-fit: cover;
        object-position: center;
    }
    .txt {
        width: 48.9rem;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        position: absolute;
        bottom: 6.2rem;
        grid-column-end: span 3;
        justify-self: center;
    }
`

export const Nav = styled.div`
    padding: 15rem 2.4rem;
    h2 {
        text-align: center;
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: 0.032rem;
        margin-bottom: 3.4rem;
    }
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 4.6rem 8.8rem;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 5.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 59.4px */
        letter-spacing: 0.054px;
        a:hover {
            color: var(--Red, #96281F);
            font-style: italic;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: 4%; /* 2.16px */
            text-underline-offset: 26%; /* 14.04px */
            text-underline-position: from-font;
        }
    }
    .rooms {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 71.5rem;
        padding-top: 15rem;
        padding-bottom: 13.6rem;
        gap: 2.2rem;
    }
`

export const Room = styled.div`
    display: grid;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    align-content: flex-end;
    padding: 3rem 2.4rem;
    gap: 1.6rem;
    h3 {
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 500;
        line-height: normal;
        width: max-content;
        justify-self: flex-start;
    }
    span {
        display: inline-flex;
        width: max-content;
        padding: 1.2rem 1.6rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 1px solid rgba(255, 246, 240, 0.40);
        background: #FFF6F0;
        backdrop-filter: blur(12px);
        color: var(--Red, #96281F);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 100%; /* 18px */
    }
    a {
        margin-top: 3rem;
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-style: italic;
        font-weight: 500;
        line-height: 110%; /* 19.8px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.8px */
        text-underline-offset: 30%; /* 5.4px */
        text-underline-position: from-font;
    }
`