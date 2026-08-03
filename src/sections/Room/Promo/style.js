import styled from "@emotion/styled"
import { mediaUrl } from "../../../utils/mediaUrl"
export const Block = styled.section`
    padding: 0 1.6rem;
    @media (min-width: 576px) {
        padding: 0 2.4rem 6rem;
        display: grid;
        gap: 2.2rem;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Item = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    padding: 10rem 0 7.6rem;
    position: relative;
    &::before {
        width: .1rem;
        content: "";
        height: 2.4rem;
        left: calc(50% - .05rem);
        position: absolute;
        top: 0;
        background: rgba(150, 40, 31, 0.20);
    }
    h5 {
        color: var(--Red, #96281F);
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 13.2px */
    }
    h3 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 26.4px */
        padding: 1.4rem 0 2.4rem;
        .color {
            color: #88243C;
            font-style: italic;
        }
    }
    .img {
        width: 22.4rem;
        height: 32rem;
        background-image: url(${({pic}) => mediaUrl(pic)});
        background-position: center;
        background-size: cover;
    }
    p {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
        padding: 2.4rem 0 4.6rem;
        width: 31rem;
    }
    @media (min-width: 576px) {
        
        padding: 7.6rem 13.2rem 10.2rem;
        
        position: relative;
        
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
            font-size: 1.6rem;
        }
        h3 {
            font-size: 3.4rem;
            padding: 1.8rem 0 2.8rem;
        }
        p {
            font-size: 1.8rem;
            line-height: 120%; /* 21.6px */
            padding: 2.6rem 0 4.6rem;
        }
    }
`