import styled from "@emotion/styled";
import images from "../../assets/images";
import img from "../../assets/img";

export const Hero = styled.section`
    height: 76rem;
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${img.i6}) lightgray 50% / cover no-repeat;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #0000004D;
    
    }
`
export const Section1 = styled.section`
    padding: 6rem 2.4rem 0;
    .top {
        display: grid;
        grid-template-columns: 1fr 45.2rem 45.2rem;
        gap: 4.6rem 18rem;
        justify-content: flex-end;
    }
    .title {
        width: 59rem;
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
        gap: .8rem;
        flex-wrap: wrap;
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
        h1 {
            color: #96281F;
            font-family: "Playfair Display", sans-serif;
            font-size: 9rem;
            font-weight: 400;
            line-height: 1.1;
            flex: 1;
            width: 100%;
        }
    }
    .stars {
        display: flex;
        align-items: center;
        gap: .6rem;
        flex: 50%;
        svg {
            width: 1.8rem;
            height: 1.8rem;
        }
    }
    p {
        color: var(--Black, #1C1C1C);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
    }
    p.address {
        color: var(--Black-2, #2F3034);
        line-height: 1.1; /* 19.8px */
    }
    a {
        color: #000;
        font-family: "Playfair Display", sans-serif;
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
    .content {
        padding-top: 15rem;
        width: 152.4rem;
        display: grid;
        gap: 6rem;
        margin: 0 auto;
        h2 {
            color: var(--Black, #1C1C1C);
            text-align: center;
            font-family: "Playfair Display", sans-serif;
            font-size: 5.4rem;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
        }
        .video {
            height: 76rem;
            background: rgba(0, 0, 0, 0.20);
        }
    }
`

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
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 45px */
    }
    .img-left {
        height: 67rem;
        width: 54.4rem;
        background-image: ${({pic1}) => `url(${img[pic1]})`};
        background-position: center;
        background-size: cover;
        margin: 0 auto;
    }
    .img-right {
        width: 100%;
        height: 104.2rem;
        background-image: ${({pic2}) => `url(${img[pic2]})`};
        background-position: center;
        background-size: cover;
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
export const Section3 = styled.section`
    padding: 15rem 2.4rem;
    h2 {
        color: #000;
        font-family: "Playfair Display", sans-serif;
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.1;
    }
    .line {
        margin: 2.4rem 0 3.4rem;
        height: .1rem;
        background: rgba(150, 40, 31, 0.20);
    }
    .content {
        display: grid;
        grid-template-columns: 78.9rem 1fr;
        gap: 15.8rem;
    }
    .tooltips {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        span:not(.digit) {
            padding-bottom: 1.2rem;
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", sans-serif;
            font-size: 2.6rem;
            line-height: 1.2;
        }
        div {
            display: flex;
            gap: 1rem;
            align-items: flex-end;
        }
    }
    .digit {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display", sans-serif;
        font-size: 7.4rem;
        line-height: 1.20;
        
    }
    .img {
        margin-top: 2rem;
        background-image: ${({pic}) => `url(${img[pic]})`};
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 50.4rem;
    }
    li {
        padding: 1.4rem 0;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        opacity: .6;
        color: var(--Black-2, #2F3034);
        cursor: pointer;
        .name {
            font-family: "Playfair Display", sans-serif;
            font-size: 3.4rem;
            line-height: 1.5;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        sup {
            font-family: Manrope, sans-serif;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.2;
        }
        .variants {
            font-size: 1.4rem;
            line-height: 1.3;
            display: flex;
            gap: .6rem;
            align-items: center;
        }
        .divider {
            color: rgba(47, 48, 52, 0.20);
            font-size: 2.6rem;
            font-weight: 200;
            line-height: 1.3;
        }
        &:not(:last-of-type) {
            border-bottom: .1rem solid rgba(150, 40, 31, 0.10);;
        }
        &:hover {
           opacity: 1;
        }
        
    }
`
