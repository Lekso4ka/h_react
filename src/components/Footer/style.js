import styled from "@emotion/styled"

export const Block = styled.footer`
   
        position: relative;
        margin: 0 auto;
        min-height: 72.3rem;
        padding-bottom: 2rem;
        background: #1c1c1c;
        color: #fff;

    .ftr__title {
        padding: 7.5rem 2.4rem 0;
        margin: 0;
        font-family: "Playfair Display", Georgia, serif;
        font-weight: 500;
        font-size: 11.6rem;
        line-height: 10rem;
        text-transform: uppercase;
        color: #fff6f0;
        text-align: center;
    }

    .ftr__main {
        display: grid;
        grid-template-columns: 46.2rem 1fr;
        gap: 3.4rem 4rem;
        padding: 8.4rem 2.4rem 0;
        align-items: start;
    }

    .ftr__cap {
        font-weight: 500;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.2);
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    .ftr__subText {
        margin-top: 2.6rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.35;
        color: #fff;
    }

    .ftr__fields {
        margin-top: 5.8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.8rem;
    }

    .ftr__fieldLabel {
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.2);
    }

    .ftr__line {
        height: 0.1rem;
        background: rgba(255, 255, 255, 0.28);
        margin-top: 1.2rem;
    }

    .ftr__u {
        display: inline-block;
        margin-top: 5.2rem;
        font-family: "Playfair Display", Georgia, serif;
        font-style: italic;
        font-size: 1.8rem;
        text-decoration: underline;
        text-underline-offset: 0.4rem;
        color: #fff;
    }

    .ftr__agree {
        margin-top: 2.6rem;
        display: flex;
        gap: 1.4rem;
        align-items: flex-start;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.2rem;
        line-height: 1.2;
        max-width: 36rem;
    }

    .ftr__check {
        width: 2rem;
        height: 2rem;
        border: 0.2rem solid #fff;
        flex: 0 0 2rem;
        margin-top: 0.1rem;
    }

    .ftr__agreeEm {
        color: #fff;
    }

    .ftr__cols {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3.4rem;
    }

    .ftrCol__t {
        margin-bottom: 1.4rem;
    }

    .ftrCol__a {
        display: block;
        font-size: 1.6rem;
        font-weight: 500;
        margin: 1rem 0;
        color: #fff;
        text-decoration: none;
    }

    .ftrCol__a:hover {
        text-decoration: underline;
    }

    .ftr__soc {
        grid-column: 1 / -1;
        padding-top: 1.6rem;
    }

    .ftr__socCap {
        font-weight: 500;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.2);
        text-transform: uppercase;
        letter-spacing: 0.02em;
        margin-bottom: 1.4rem;
    }

    .ftr__vk {
        font-size: 1.6rem;
        font-weight: 500;
    }

    .ftr__bottomLine {
        margin: 4.8rem 2.4rem 0;
        height: 0.1rem;
        background: rgba(255, 255, 255, 0.22);
    }

    .ftr__bottom {
        margin: 1.2rem 2.4rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 1.2rem;
        color: rgba(255, 255, 255, 0.4);
        font-size: 1.4rem;
        font-weight: 500;
    }

    .ftr__muted {
        color: rgba(255, 255, 255, 0.4);
        text-decoration: none;
    }

    .ftr__muted:hover {
        text-decoration: underline;
        color: rgba(255, 255, 255, 0.6);
    }
`