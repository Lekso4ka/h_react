import styled from "@emotion/styled";

export const Content = styled.section`
    height: 75.4rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);

    video {
        position: absolute;
        width: 100%;
        height: 84.4rem;
        z-index: -1;
        object-fit: cover;
        object-position: center;
    }

    h4 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
    }

    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 1rem 0 9.4rem;
    }

    .line {
        width: .1rem;
        height: 5.4rem;
        background: rgba(255, 246, 240, 0.20);
    }

    a {
        padding-top: 2.4rem;
    }

    @media (min-width: 576px) {
        video {
            height: 100%
        }

        h4 {
            font-size: 1.6rem;
        }

        h2 {
            font-size: 4.4rem;
            line-height: 120%; /* 52.8px */
            letter-spacing: 0.044rem;
            padding: 3.4rem 0 2.4rem;
        }

        .line {
            height: 11.4rem;
        }

        a {
            padding-top: 2.4rem;
            font-size: 1.8rem;
        }
    }
    
`