import styled from "@emotion/styled";
import { mediaUrl } from "../../../utils/mediaUrl";
export const Section2 = styled.section`
    padding: 9rem 1.6rem;
    .img-left {
        background-image: ${ ({ pic1 }) => `url(${ mediaUrl(pic1) })` };
        background-position: center;
        background-size: cover;
        height: 48.2rem;
        margin-bottom: 1.6rem;
    }
    .img-right {
        height: 48.2rem;
        background-image: ${ ({ pic2 }) => `url(${ mediaUrl(pic2.pic) })` };
        background-position: center;
        background-size: cover;
        
    }
    span {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 30.8px */
        padding: 2.4rem 0 2rem;
    }
    p {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-top: 2rem;
    }
    @media (min-width: 576px) {
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
        }

        h2 {
            padding: 2.2rem 0 4.6rem;
            color: #000;
            text-align: center;
            font-size: 4.4rem;
            line-height: 100%; /* 45px */
        }

        .img-left {
            height: 67rem;
            width: 54.4rem;
            margin: 0 auto;
        }

        .img-right {
            width: 100%;
            height: 104.2rem;
            background: ${ ({ pic2 }) => `url(${ mediaUrl(pic2.pic) }) ${ pic2.pos }` };
            //background: url(<path-to-image>) lightgray -318.347px 0px / 168.94% 100% no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat;
        }

        p {
            width: 61.6rem;
            margin: 2.4rem auto 0;
            color: #000;
            text-align: center;
            font-size: 1.8rem;
        }
    }
`