import styled from "@emotion/styled"


export const Banner = styled.section`
    height: 100vh;
    position: relative;
    padding: 0 2.4rem 2.2rem;
    display: grid;
    align-content: flex-end;
    box-sizing: border-box;
    overflow: hidden;
    video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        z-index: -1;
    }
`
export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    
    h2 {
        color: #FFF6F0;
        font-family: "Playfair Display";
        font-size: 5.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%;
    }
    h4 {
        color: #FFF;
        text-align: center;
        width: 51.8rem;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 33.6px */
    }
`
export const Line = styled.div`
    display: grid;
    grid-template-columns: 61rem 61rem 1fr;
    gap: 2.2rem;
    position: relative;
    z-index: 2;
`
export const Hotel = styled.div`
    height: 12rem;
    box-sizing: border-box;
    background: #FFF6F0;
    padding: 1.8rem 2.4rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    gap: 2rem;
    h3 {
        color: #96281F;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 400;
        line-height: 100%; /* 44px */
        text-transform: capitalize;
    }
    span {
        color: #2F3034;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 110%;
        justify-self: flex-end;
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
        cursor: pointer;
        justify-self: flex-start;
    }
    .stars {
        display: flex;
        align-items: center;
        gap: .6rem;
        justify-self: flex-end;
        svg {
            width: 1.6rem;
        }
    }
`
export const Title = styled.div`

`