import styled from "@emotion/styled"
import img from "../../assets/img"

export const Top = styled.section`
    padding: 13.4rem 0 13.4rem;
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    margin: 0 2.4rem 2rem;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 1.8rem;
    h3 {
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: 0.032rem;
    }
    h1 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 70.4px */
        letter-spacing: 0.064rem;
        width: 96.6rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
`

export const Content = styled.section`
 column-count: 3;
    column-rule: .1rem solid rgba(150, 40, 31, 0.20);
    column-gap: 0;
        padding: 0 2.4rem 10rem;
        overflow: hidden;
`

export const Article = styled.article`
    padding: 7.6rem;
    break-inside: avoid;
    &:not(:first-of-type) {
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);;
    }
    h5 {
        color: var(--Red, #96281F);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 15.4px */
        text-transform: uppercase;
    }
    
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
        padding: ${({singleText}) => singleText ? 0 : "1.4rem 0 3.4rem"};
        ${({singleText}) => singleText ? `
            line-height: 120%; /* 40.8px */
            letter-spacing: 0.034rem;
        `: ""}
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 28.6px */
        padding: 2.8rem 0 4.6rem;
    }
    a {
        color: var(--Red, #96281F);
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
    .img {
        height: 43.4rem;
        background-image: url("${ ({ bg }) => img[bg] }");
        background-position: center;
        background-size: cover;
    }

    video {
        width: 100%;
        height: 45.5rem;
        object-fit: cover;
        object-position: center;
    }
    &:first-of-type {
            width: calc(100% + 4.8rem);
            column-span: all;
            background-color:#FFF3E3;
            display: grid;
            padding: 0 0 0 calc(50% + 2.4rem);
            position: relative;
            left: -2.4rem;
            box-sizing: border-box;
            //margin-left: calc(50% + 2.4rem);
            height: 84.8rem;
            align-content: center;
            //justify-content: center;
            justify-items: center;
            align-items: center;
            text-align: center;
            .img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
            }
            h3 {
                    padding: 1.4rem 0 8.2rem;
            }
            p {
                    padding: 0 0 5.6rem;
                    width: 56.8rem;
            }
    }
`

export const BtnBlock = styled.div`
border-top: .1rem solid rgba(150, 40, 31, 0.20);
border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
        column-span: all;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6.3rem 0;
        button {
            color: var(--Red, #96281F);
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