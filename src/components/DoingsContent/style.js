import styled from "@emotion/styled"
import img from "../../assets/img"

export const Top = styled.section`
        margin: 0 1.6rem 2rem;
        border-top: .1rem solid rgba(150, 40, 31, 0.20);
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
        padding: 10.3rem 0 16rem;
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        gap: 3.4rem;
        h3 {
                color: var(--Black-2, #2F3034);
                font-family: Manrope;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: 120%;
                letter-spacing: 0.028rem;
        }
        h1 {
                color: var(--Black-2, #2F3034);
                text-align: center;
                font-family: "Playfair Display";
                font-size: 28px;
                font-style: normal;
                font-weight: 400;
                line-height: 110%; /* 30.8px */
                span {
                        color: var(--Red, #96281F);
                        font-style: italic;
                }
        }
        @media (min-width: 576px) {
            padding: 13.4rem 0 13.4rem;
            margin: 0 2.4rem 2rem;
            gap: 1.8rem;
            h3 {
                font-size: 1.6rem;
                letter-spacing: 0.032rem;
            }

            h1 {
                font-size: 6.4rem;
                letter-spacing: 0.064rem;
                width: 96.6rem;
            }
        }
`

export const Content = styled.section`
 column-count: 1;
    column-rule: .12rem solid rgba(150, 40, 31, 0.20);
    column-gap: 0;
        
        overflow: hidden;
        @media (min-width: 576px) {
                column-count: 3;
                padding: 0 2.4rem 10rem;
        }
`

export const Article = styled.article`
    padding: 4.6rem 2.4rem;
    break-inside: avoid;
    &:not(:first-of-type) {
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
        margin: 0 1.6rem;
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
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding: 1.6rem 0 4.6rem;
    }

    

    a {
        color: var(--Red, #96281F);
    }

    .img {
        height: 19.6rem;
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

    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding: 1.4rem 0 1.8rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }

    &:first-of-type {
        background-color: #FFF3E3;
        padding: 1.6rem 1.6rem 4.6rem;
        display: grid;
        align-content: center;
        justify-items: center;
        align-items: center;
        text-align: center;
        
        h5 {
            color: var(--Red, #96281F);
            text-align: center;
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
            text-transform: uppercase;
        }

        .img {
            grid-row-start: 1;
            height: 52.4rem;
            width: 100%;
            margin-bottom: 6.6rem;
        }

        h3 {
            padding: ${ ({ singleText }) => singleText ? 0 : "1.6rem 0 2.4rem" };
        }
        p {
            padding: 0 0 4.6rem;
        }
    }

    @media (min-width: 576px) {
        padding: 7.6rem;
        &:not(:first-of-type) {
            margin: 0;
        }
        .img {
            height: 43.4rem;
        }
        h3 {
            font-size: 3.4rem;
            line-height: 110%; /* 37.4px */
            padding: ${ ({ singleText }) => singleText ? 0 : "1.4rem 0 3.4rem" };

            ${ ({ singleText }) => singleText ? `
            line-height: 120%; /* 40.8px */
            letter-spacing: 0.034rem;
        ` : "" }
        
        }
        p {
            font-size: 2.2rem;
            padding: 2.8rem 0 4.6rem;
        }

        &:first-of-type {
            width: calc(100% + 4.8rem);
            column-span: all;
            padding: 0 0 0 calc(50% + 2.4rem);
            position: relative;
            left: -2.4rem;
            box-sizing: border-box;
            //margin-left: calc(50% + 2.4rem);
            height: 84.8rem;

            .img {
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                grid-row-start: auto;
                margin-bottom: 0;
            }

            h3 {
                padding: 1.4rem 0 8.2rem;
            }

            p {
                padding: 0 0 5.6rem;
                width: 56.8rem;
            }
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
            &:hover {
                color: #A03229;
            }
        }
`