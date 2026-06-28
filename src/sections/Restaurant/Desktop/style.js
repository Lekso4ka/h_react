import styled from "@emotion/styled"
import img from "../../../assets/img"

export const Section = styled.section`
    ${ ({ page }) => page ? "" : `
        padding: 12.4rem 2.4rem 15rem;
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    ` }
    display: grid;
    grid-template-columns: 1fr 124.1rem;
    gap: 10rem 17.9rem;
    align-content: flex-start;
    align-items: flex-start;
    grid-auto-flow: dense;

    .caption {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0 8.5rem;
        align-items: flex-end;
        color: var(--Green, #55532E);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.3;

        ${ ({ page }) => page ? "grid-row-start: 2;" : "" }
        h2 {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", serif;
            font-size: 4.4rem;
            font-weight: 400;
            line-height: 1.1;
        }

        .digit {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", serif;
            font-size: 7.4rem;
            font-weight: 500;
            line-height: 1.1;
            text-transform: uppercase;
        }
    }

    .text {
        display: grid;
        grid-template-columns: repeat(2, 55.6rem);
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
        gap: 4.6rem 7.6rem;

        ${ ({ page }) => page ? "grid-row-start: 2;" : "" }
        
    }

    .menu {
        display: grid;
        grid-template-columns: 29.4rem auto;
        gap: 0 2.2rem;
        align-content: flex-start;

        .img {
            height: 31.6rem;
            background-image: ${ ({ pic }) => `url(${ img[pic] })` };
            background-position: center;
            background-size: cover;
        }

        li {
            display: grid;
            padding: 1.6rem 0;
            border-top: .1rem solid rgba(150, 40, 31, 0.20);
            color: var(--Black-2, #2F3034);
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.3;
        }

        .title {
            display: grid;
            gap: 4.6rem;
            align-content: flex-start;

            h3 {
                color: #000;
                font-family: "Playfair Display", serif;
                font-size: 4.4rem;
                font-weight: 400;
                line-height: 1.1;
            }
        }
    }

    .carousel {
        height: 73.6rem;
    }
`