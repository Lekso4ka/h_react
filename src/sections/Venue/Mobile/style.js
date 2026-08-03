import styled  from "@emotion/styled";

export const Content = styled.div`
    overflow: hidden;
    h1 {
        color: #000;
        font-family: "Playfair Display";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 35.2px */
        padding: 0 0 1.4rem 1.6rem;
    }
`
export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(${({cnt}) => cnt}, 36rem);
    height: 56rem;
    padding: 0 1.6rem;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    ::-webkit-scrollbar-track {
        margin: 0 1.6rem;
    }
`
export const Image = styled.div`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${({ bg }) => mediaUrl(bg)});
    background-position: center;
    background-size: cover;
    position: relative;
    a {
        top: 1.6rem;
        left: 1.6rem;
    }
`

export const Block = styled.div`
    padding: 4.8rem 1.6rem 2.4rem;
    position: relative;
    .line {
        border-top-color: var(--Green, #55532E);
    }
    .plan {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        //transform: rotate(${({rotate}) => rotate});
       
        svg {
            position: absolute;
            ${ ({ rotate }) => rotate !== 0 ? `
            transform: rotate(${ rotate }deg);
            ` : ""
            };
        }
    }
    .link {
        display: flex;
        justify-content: center;
        padding-bottom: 6rem;
    }
    &::after {
        content: "";
        width: .1rem;
        height: 2.4rem;
        position: absolute;
        left: calc(50% - .05rem);
        bottom: 0;
        background: var(--Green, #55532E);
    }
`
export const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5.6rem 0;
    padding-bottom: 5rem;
`

export const InfoItem = styled.div`
    display: grid;
    gap: 1.4rem;
    h4 {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
    }
    p {
        color: #000;
        font-family: "Playfair Display";
        font-size: 5.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 54px */
        display: flex;
        gap: .6rem;
        align-items: baseline;
        span {
            font-size: 2.4rem;
            line-height: inherit;
        }
    }
`

export const Text = styled.div`
    padding: 5rem 0 7rem;
    color: var(--Black-2, #2F3034);
    font-family: Manrope;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
    display: grid;
    gap: 2.08rem;
    p:nth-of-type(2) {
        padding-bottom: 1.92rem;
    }
`
export const Variants = styled.div`
    padding: 1.2rem 0 7rem;
    display: grid;
    gap: 2.4rem;
    box-sizing: border-box;
    grid-template-columns: auto auto;
    justify-content: space-between;
    overflow: hidden;
    //max-width: calc(100vw - 3.2rem);
    .buttons {
        position: relative;
        display: flex;
        justify-content: flex-end;
        button {
            width: 1.2rem;
            height: 1.2rem;
            pointer-events: none;
            border-radius: 50%;
            background: var(--Green, #55532E);
            
            &:nth-of-type(1) {
                opacity: 1;
                animation: pulse1 2s infinite;
            }
            &:nth-of-type(2) {
                opacity: .3;
                margin-left: -.2rem;
                animation: pulse2 2s infinite;
            }
        }
        @keyframes pulse1 {
            0% {
                opacity: 1
            }
            66% {
                opacity: .3
            }
            100% {
                opacity: 1
            }
        }
        @keyframes pulse2 {
            0% {
                opacity: .3
            }
            66% {
                opacity: 1
            }
            100% {
                opacity: .3
            }
        }
    }
    .v-block {
        grid-column-end: span 2;
        overflow: hidden;
        //width: calc(100vw - 3.2rem);
    }
    .v {
        display: grid;
        grid-template-columns: repeat(${({cnt}) => cnt}, auto);
        gap: 5.4rem;
        overflow-x: auto;
        overflow-y: hidden;
        justify-content: flex-start;
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
    }
`
export const Variant = styled.div`
    display: grid;
    min-width: 6.2rem;
    width: max-content;
    justify-content: flex-start;
    justify-items: center;
    .digit {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 54px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 54px */
        padding-bottom: 2.7rem;
    }
    svg {
        height: 5.5rem;
    }
    h5 {
        padding-top: 2.2rem;
        color: var(--Green, #55532E);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
    }
`

export const Options = styled.div`
    display: grid;
    padding: 9rem 0 6.6rem;
    h4 {
        color: rgba(28, 28, 28, 0.80);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 14px */
        padding-bottom: 1.4rem;
    }
    li {
        position: relative;
        padding: 1.1rem 0 1.1rem 1.1rem;
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
        border-top: 1px solid var(--Green, #55532E);
        &::before {
            content: "*";
            position: absolute;
            left: 0;
        }
        span {
            color: rgba(28, 28, 28, 0.60);
            font-family: Manrope;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 10px */
        }
    }
    &>span {
        border-top: 1px solid var(--Green, #55532E);
        display: inline-block;
        padding-top: 1rem;
        color: rgba(28, 28, 28, 0.60);
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
    }
`

export const Formats = styled.div`
    border: .1rem solid var(--Green, #55532E);
    padding: 2.6rem 2.6rem 3.9rem;
    margin-bottom: 7rem;

    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: italic;
        font-weight: 500;
        line-height: 120%; /* 28.8px */
        padding-bottom: 3.5rem;
    }

    ul {
        column-count: 2;
        //column-gap: 3.8rem;
        padding-bottom: 1.8rem;
    }

    li {
        display: grid;
        grid-template-columns: 1.7rem 1fr;
        gap: 1.5rem;
        padding-bottom: 2.2rem;

        span {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 12px */
        }
        .text {
            font-size: 1.4rem;
        }
    }

    svg {
        display: block;
        width: 21rem;
        margin: 0 auto;
    }
`