import styled from "@emotion/styled"
import img from "../../assets/img"
export const Block = styled.section`
    padding: 0 2.4rem 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.2rem;
`

export const Item = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 7.6rem 13.2rem 10.2rem;
    align-items: center;
    position: relative;
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    ${({isLeft}) => isLeft ? `
        &::after {
            content: "";
            position: absolute;
            height: calc(100% - 2.2rem);
            right: -1.05rem;
            top: 1.1rem;
            width: .1rem;
            background-color: rgba(150, 40, 31, 0.20);
        }
    ` : ""}
    h5 {
        color: var(--Red, #96281F);
        font-family: Manrope;
        font-size: 1.6px;
        font-weight: 400;
        line-height: 110%; /* 17.6px */
    }
    h3 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        padding: 1.8rem 0 2.8rem;
        .color {
            color: #88243C;
            font-style: italic;
        }
    }
    .img {
        width: 22.4rem;
        height: 32rem;
        background-image: url(${({pic}) => img[pic]});
        background-position: center;
        background-size: cover;
    }
    p {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
        padding: 2.6rem 0 4.6rem;
    }
    a {
        color: var(--Black-2, #2F3034);
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