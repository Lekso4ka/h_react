import styled from "@emotion/styled";
import img from "../../../assets/img";
export const Section2 = styled.section`
    padding: 15rem 2.4rem 15rem 4.8rem;
    display: grid;
    grid-template-columns: 1fr 92.5rem;
    gap: 4.6rem;

    .content {
        display: grid;
        justify-content: center;
    }

    span {
        color: var(--Red, #96281F);
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }

    h2 {
        padding: 2.2rem 0 4.6rem;
        color: #000;
        text-align: center;
        font-family: "Playfair Display", sans-serif;
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 45px */
    }

    .img-left {
        height: 67rem;
        width: 54.4rem;
        background-image: ${ ({ pic1 }) => `url(${ img[pic1] })` };
        background-position: center;
        background-size: cover;
        margin: 0 auto;
    }

    .img-right {
        width: 100%;
        height: 104.2rem;
        background: ${ ({ pic2 }) => `url(${ img[pic2.pic] }) ${ pic2.pos }` };
        //background: url(<path-to-image>) lightgray -318.347px 0px / 168.94% 100% no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat;
    }

    p {
        width: 61.6rem;
        margin: 2.4rem auto 0;
        color: #000;
        text-align: center;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
    }
`