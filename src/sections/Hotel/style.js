import styled from "@emotion/styled";
import img from "../../assets/img";






export const Section4 = styled.section`
    padding: 15rem 2.4rem;
    background-color: var(--Bege-2, #F2ECDE);
    display: grid;
    justify-content: center;
    justify-items: center;
    position: relative;

    h2 {
        width: 122.8rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display", serif;
        font-size: 5.4rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.054rem;
        text-transform: uppercase;
    }

    p {
        padding: 2.6rem 0 6.4rem;
        width: 70rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
    }

    .img-c {
        width: 61rem;
        height: 52.4rem;
        background: ${ ({ pics, pos }) => `url(${ img[pics.image_1] }) ${ pos.image_1 }` };
        margin-bottom: 4.6rem;
    }

    a {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display", serif;
        font-size: 1.8rem;
        font-style: italic;
        font-weight: 500;
        line-height: 1.1;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.8px */
        text-underline-offset: 30%; /* 5.4px */
        text-underline-position: from-font;
    }

    .img-lt {
        width: 25.4rem;
        height: 34.4rem;
        background: ${ ({ pics, pos }) => `url(${ img[pics.image_2] }) ${ pos.image_2 }` };
        position: absolute;
        left: 22.1rem;
        top: 31.4rem;
    }

    .img-lb {
        width: 45.2rem;
        height: 33.9rem;
        background: ${ ({ pics, pos }) => `url(${ img[pics.image_4] }) ${ pos.image_4 }` };
        position: absolute;
        left: 2.4rem;
        bottom: 18.9rem;
    }

    .img-rt {
        width: 45.1rem;
        height: 33.9rem;
        background: ${ ({ pics, pos }) => `url(${ img[pics.image_3] }) ${ pos.image_3 }` };
        position: absolute;
        right: 2.4rem;
        top: 30.3rem;
    }

    .img-rb {
        width: 25.4rem;
        height: 34.4rem;
        background: ${ ({ pics, pos }) => `url(${ img[pics.image_5] }) ${ pos.image_5 }` };
        position: absolute;
        right: 22.1rem;
        bottom: 15rem;
    }
`





