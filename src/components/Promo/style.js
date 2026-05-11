import styled from "@emotion/styled"

export const Block = styled.section`
        margin: 0 auto;
        min-height: 81.3rem;
        padding: 0 2.4rem 2rem;
        position: relative;
        background: #fff6f0;
    
    .promo__frame {
        position: absolute;
        inset: 0 2.4rem 2rem;
        pointer-events: none;
        border: 0.1rem solid rgba(150, 40, 31, 0.22);
    }
    .promo__frame::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 2rem;
        bottom: 2rem;
        width: 0.1rem;
        margin-left: -0.05rem;
        background: rgba(150, 40, 31, 0.22);
    }

    .promo__grid {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.2rem;
        max-width: 187.2rem;
        margin: 0 auto;
        padding-top: 2rem;
    }

    .promo__col {
        text-align: center;
        padding: 7.6rem 2rem 6.8rem;
        min-width: 0;
    }

    .promo__eyebrow {
        margin: 0 0 1.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.1;
        color: #96281f;
    }

    .promo__title {
        margin: 0 auto 6.4rem;
        max-width: 66.1rem;
        font-family: "Playfair Display", Georgia, serif;
        font-weight: 500;
        font-size: 3.4rem;
        line-height: 1.1;
        color: #2f3034;
    }
    .promo__title em {
        font-style: italic;
        font-weight: 500;
        color: #2f3034;
    }

    .promo__figure {
        margin: 0 auto 2.6rem;
        width: 22.4rem;
        height: 32rem;
        overflow: hidden;
        background: #e8e4dc;
    }
    .promo__figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .promo__lead {
        margin: 0 auto 4.6rem;
        max-width: 63.6rem;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 1.2;
        color: #2f3034;
    }

    .promo__more {
        font-family: "Playfair Display", Georgia, serif;
        font-style: italic;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 1.1;
        color: #2f3034;
        text-decoration: underline;
        text-underline-offset: 0.3rem;
        text-decoration-thickness: 0.1rem;
    }

`