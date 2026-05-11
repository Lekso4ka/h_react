import styled from "@emotion/styled"

export const Block = styled.section`

        margin: 0 auto;
        height: 106.8rem;
        min-height: 106.8rem;
        background: #565861;
        color: #fff6f0;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;

    .mapBlock__stats {
        padding: 7rem 2.4rem 0;
        max-width: 192rem;
        margin: 0 auto;
    }

    .mapBlock__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        min-height: 38.6rem;
        border-bottom: 0.1rem solid rgba(255, 246, 240, 0.18);
        padding-bottom: 2rem;
    }

    .mapBlock__stat {
        padding: 0 2.2rem 0 0;
        border-right: 0.1rem solid rgba(255, 246, 240, 0.25);
    }
    .mapBlock__stat:last-child {
        border-right: 0;
        padding-right: 0;
    }

    .mapBlock__top {
        display: flex;
        align-items: flex-end;
        gap: 0.8rem;
        flex-wrap: wrap;
    }

    .mapBlock__n {
        font-family: "Playfair Display", Georgia, serif;
        font-weight: 500;
        font-size: 12.4rem;
        line-height: 1.1;
    }

    .mapBlock__suf {
        font-family: "Playfair Display", Georgia, serif;
        font-weight: 500;
        font-size: 4.4rem;
        line-height: 1.1;
        text-transform: lowercase;
        transform: translateY(-1.2rem);
        opacity: 0.95;
    }

    .mapBlock__txt {
        margin-top: 1.4rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.2;
        max-width: 45.2rem;
    }

    .mapBlock__map {
        position: relative;
        width: 100%;
        flex: 1 1 auto;
        min-height: 0;
    }

    .mapBlock__map svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity: 0.96;
    }

    @media (max-width: 90rem) {
        .mapBlock__grid {
            grid-template-columns: 1fr 1fr;
        }
        .mapBlock__stat {
            border-right: 0;
            padding: 0 0 2.4rem;
            border-bottom: 0.1rem solid rgba(255, 246, 240, 0.15);
        }
        .mapBlock__stat:nth-child(2n) {
            padding-left: 2rem;
        }
    }
`