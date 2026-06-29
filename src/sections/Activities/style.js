import styled from "@emotion/styled"

import img from "../../assets/img"

export const Block = styled.div`
    background: var(--Beige, #FFF6F0);
    & > p {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding: 4rem 1.3rem 5rem 1.6rem;
        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }

    
    @media (min-width: 576px) {
        padding: 0 2.4rem;
        &>p {
            text-align: center;
            font-size: 4.4rem;
            letter-spacing: 0.044rem;
        }
        & > p:first-of-type {
            width: 122.4rem;
            padding: 8rem 0 9.1rem;
            margin: 0 auto;

        }

        & > p:last-of-type {
            width: 115.4rem;
            padding: 5.3rem 0 6rem;
            margin: 0 auto;
        }
    }
`

export const Hero = styled.section`
    height: 80.4rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${ ({ bg }) => img[bg] });
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    padding: 7.8rem 1.6rem 9rem;
    display: grid;
    grid-template-rows: auto 1fr auto auto;
    align-items: flex-start;
    justify-content: center;
    justify-items: center;
    .line {
        width: 100%;
        border-top-color: rgba(255, 246, 240, 0.30);
        margin-bottom: 4.2rem;
    }
    h1 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.6rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 39.6px */
        padding: 0 2.6rem 4.6rem;
    }
    

    .but {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
        grid-row-start: 2;
    }
    .divider {
        position: relative;
        z-index: 1;
        width: .1rem;
        height: 9rem;
        background: ${ ({ theme }) => theme.colors.white_20 };
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${ ({ theme }) => theme.colors.white };
            transform: translate(0, -100%);
            animation: scroll 2s linear infinite;
            border-radius: .1rem;
        }
    }
    @media (min-width: 576px) {
        grid-template-rows: 1fr auto;
        padding: 11.8rem 0 9.2rem;
        height: 76rem;
        align-items: center;
        .line,
        .divider {
            display: none;
        }
        .but {
            gap: 2.2rem;
            grid-row-start: auto;
        }
        h1 {
            font-size: 6.4rem;
            letter-spacing: 0.064rem;
            padding: 0;
        }
    }
    @keyframes scroll {
        from {
            transform: translate(0, -100%);
        }
        to {
            transform: translate(0, 100%);
        }
    }
`


export const HeroLink = styled.a`
    display: flex;
    cursor: pointer;
    width: 9.6rem;
    height: 3.8rem;
    box-sizing: border-box;
    //padding: .5rem 0 .7rem;
    justify-content: center;
    align-items: center;
    border-radius: 6rem;
    border: .1rem solid rgba(255, 246, 240, 0.20);
    ${ ({ isActive }) => isActive ? "background: rgba(255, 246, 240, 0.20)" : "" };
    backdrop-filter: blur(8px);
    color: ${ ({ isActive }) => isActive ? "var(--Beige, #FFF6F0)" : "rgba(255, 255, 255, 0.40)" };
    color: var(--Beige, #FFF6F0);
    font-family: "Playfair Display";
    font-size: 2rem;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    text-transform: lowercase;
`

export const Content = styled.section`
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
    padding: 3.1rem 0;
    
    display: grid;
    grid-auto-flow: dense;
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    @media (min-width: 576px) {
        gap: 2rem 2.2rem;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 92rem;
    }
`

export const Image = styled.div`
    background-image: url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55.8rem;
    
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 80%; /* 27.2px */
        letter-spacing: 0.034rem;
        width: 23.6rem;
    }
    @media (min-width: 576px) {
        height: auto;
        &:nth-of-type(2n) {
            grid-column-start: 2;
        }
        h2 {
            font-size: 6.4rem;
            letter-spacing: 0.064rem;
            width: auto;
        }
    }
`

export const List = styled.ul`
    height: 71.6rem;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .buttons {
        position: absolute;
        bottom: 8rem;
        display: flex;
        justify-content: center;
        gap: .4rem;
        width: 6rem;
    }
    svg {
        position: absolute;
        top: 28.8rem;
        width: 2.1rem;
        cursor: pointer;
        &:first-of-type{
            left: 1.6rem;
        }
        &:last-of-type{
            right: 1.6rem;
        }
    }
    @media (min-width: 576px) {
        height: auto;
        svg {
            position: absolute;
            top: 42.4rem;
            width: 3.1rem;
            cursor: pointer;
            &:first-of-type{
                left: 13rem;
            }
            &:last-of-type{
                right: 13rem;
            }
        }
    }
`

export const Item = styled.li`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 9rem 1.6rem;
    display: ${({ isActive }) => isActive ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    h5 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
    }
    h3 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 28.8px */
        letter-spacing: 0.024rem;
        padding: 1.4rem 0 2.4rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        padding-top: 2.4rem;
    }
    @media (min-width: 576px) {
        padding: 11rem 13.5rem 11.6rem;
        h5 {
            font-size: 1.6rem;
        }
        h3 {
            font-size: 4.4rem;
            letter-spacing: 0.044rem;
            padding: 1.8rem 0 3.6rem;
        }
        p {
            padding-top: 3.6rem;
            font-size: 1.8rem;
        }
    }
`

export const ImgItem = styled.div`
    background-image: url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    width: 17.4rem;
    height: 25.6rem;
    @media (min-width: 576px) {
        width: 29.3rem;
        height: 40rem;
    }
`

export const Btn = styled.button`
    width: .8rem;
    height: .8rem;
    flex-shrink: 0;
    background-color: var(--Red, #96281F);
    opacity: ${({isActive}) => isActive ? 1 : .4};
    
    border-radius: 50%;
`

export const VideoContainer = styled.div`
    height: 88.4rem;
    position: relative;
    video {
        border: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #0000004D;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        h2 {
            color: var(--Beige, #FFF6F0);
            font-family: "Playfair Display";
            font-size: 4.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%; /* 48.4px */
        }
        .link {
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
    }
`

