import styled from "@emotion/styled"

export const Block = styled.a`
    width: 6.8rem;
    height: 5.8rem;
    ${({pos}) => pos ? `
        position: absolute;
        top: 2.4rem;
        left: 3rem;
        z-index: 2;
    `: "" }
    box-sizing: border-box;
    padding: .8rem 1.2rem;
    display: grid;
    background: ${({dark}) => dark ? "var(--Green, #55532E);" : "var(--Beige, #FFF6F0)"};
    color: ${({dark}) => dark ? "var(--Beige, #FFF6F0)" : "#2F3034"};
    span:first-of-type {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
    }
    span:last-of-type {
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-weight: 400;
        line-height: normal;
    }
    @media (min-width: 576px) {
        width: 8.5rem;
        height: 6.9rem;
        padding: 1rem 2rem;
        span:first-of-type {
            font-size: 1.6rem;
        }
        span:last-of-type {
            font-size: 2.4rem;
        }
        
    }
`