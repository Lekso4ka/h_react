import styled from "@emotion/styled"
import img from "../../assets/img"

export const Block = styled.div`
    background: var(--Beige, #FFF6F0);
    padding: 0 2.4rem;

    & > p {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 52.8px */
        letter-spacing: 0.044rem;

        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
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
    @media (min-width: 576px) {
    
    }
`

export const Hero = styled.section`
    height: 76rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    padding: 11.8rem 0 9.2rem;
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 70.4px */
        letter-spacing: 0.064rem;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 2.2rem;
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
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    padding: 3.1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 2.2rem;
    grid-auto-rows: 92rem;
    grid-auto-flow: dense;
`

export const Image = styled.div`
    background-image: url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-of-type(2n) {
        grid-column-start: 2;
    }
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 6.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 80%; /* 51.2px */
        letter-spacing: 0.064rem;
    }
`

export const List = styled.ul`
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
`

export const Item = styled.li`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 11rem 13.5rem 11.6rem;
    display: ${({ isActive }) => isActive ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    h5 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        text-transform: uppercase;
    }
    h3 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 52.8px */
        letter-spacing: 0.044rem;
        padding: 1.8rem 0 3.6rem;
    }
    p {
        padding-top: 3.6rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
    }
`

export const ImgItem = styled.div`
    background-image: url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;
    width: 29.3rem;
    height: 40rem;
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

