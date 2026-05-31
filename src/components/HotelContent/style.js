import styled from "@emotion/styled";
import img from "../../assets/img";

export const Hero = styled.section`
    height: 76rem;
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${img.h_banner}) lightgray 50% / cover no-repeat;
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
        grid-template-columns: auto auto;
        align-self: flex-start;
        display: grid;
        justify-content: space-between;
        width: max-content;
        gap: .8rem;
        flex-wrap: wrap;
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
            &>span {
                    justify-self: flex-end;
            }
        h1 {
            color: #96281F;
            font-family: "Playfair Display", sans-serif;
            font-size: 9rem;
            font-weight: 400;
            line-height: 1.1;
            grid-column-end: span 2;
            width: max-content;
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
        font-size: 4.4rem;
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
        background: ${({pic2}) => `url(${img[pic2.pic]}) ${pic2.pos}`};
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
        background: ${({pics, pos}) => `url(${img[pics.image_1]}) ${pos.image_1}`};
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
        background: ${({pics, pos}) => `url(${img[pics.image_2]}) ${pos.image_2}`};
        position: absolute;
        left: 22.1rem;
        top: 31.4rem;
    }
    .img-lb {
        width: 45.2rem;
        height: 33.9rem;
        background: ${({pics, pos}) => `url(${img[pics.image_4]}) ${pos.image_4}`};
        position: absolute;
        left: 2.4rem;
        bottom: 18.9rem;
    }
    .img-rt {
        width: 45.1rem;
        height: 33.9rem;
        background: ${({pics, pos}) => `url(${img[pics.image_3]}) ${pos.image_3}`};
        position: absolute;
        right: 2.4rem;
        top: 30.3rem;
    }
    .img-rb {
        width: 25.4rem;
        height: 34.4rem;
        background: ${({pics, pos}) => `url(${img[pics.image_5]}) ${pos.image_5}`};
        position: absolute;
        right: 22.1rem;
        bottom: 15rem;
    }
`

export const Section5 = styled.section`
    padding: 12rem 2.4rem;
    border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    display: grid;
    grid-template-columns: 1fr 124.1rem;
    gap: 10rem 17.9rem;
        align-content: flex-start;
        align-items: flex-start;
    .caption {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0 8.5rem;
        align-items: flex-end;
        color: var(--Green, #55532E);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.3;
        h2 {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", serif;
            font-size: 4.4rem;
            font-weight: 400;
            line-height: 1.1;
        }
        .digit {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display", serif;
            font-size: 7.4rem;
            font-weight: 500;
            line-height: 1.1;
            text-transform: uppercase;
        }
    }
    .text {
        display: grid;
        grid-template-columns: repeat(2, 55.6rem);
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.3;
        gap: 4.6rem 7.6rem;
        a {
            font-family: "Playfair Display", serif;
            font-style: italic;
            line-height: 1.1;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: 10%; /* 1.8px */
            text-underline-offset: 30%; /* 5.4px */
            text-underline-position: from-font;
        }
    }
    .menu {
        display: grid;
        grid-template-columns: 29.4rem auto;
        gap: 0 2.2rem;
        align-content: flex-start;
        .img {
            height: 31.6rem;
            background-image: ${({pic}) => `url(${img[pic]})`};
            background-position: center;
            background-size: cover;
        }
        li {
            display: grid;
            padding: 1.6rem 0;
            border-top: .1rem solid rgba(150, 40, 31, 0.20);
            color: var(--Black-2, #2F3034);
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.3;
        }
        .title {
            display: grid;
            gap: 4.6rem;
                align-content: flex-start;
            h3 {
                color: #000;
                font-family: "Playfair Display", serif;
                font-size: 4.4rem;
                font-weight: 400;
                line-height: 1.1;
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
            }
        }
    }
    .carousel {
        height: 73.6rem;
    }
`


export const Section6 = styled.section`
    display: grid;
    grid-template-columns: 76.7rem 1fr;
    gap: 6.8rem 18rem;
    padding: 13rem 2.4rem 15rem;
    align-content: flex-start;
    .caption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    h2 {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-weight: 400;
        line-height: 110%; /* 48.4px */
    }
    .text {
        display: grid;
        gap: 2.4rem;
        grid-template-columns: 45rem 45rem;
        align-items: flex-start;
        color: var(--Black-2, #2F3034);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 130%; /* 23.4px */
    }
    .img {
        height: 42.8rem;
        background-image: ${({pic}) => `url(${img[pic]})`};
        background-position: center;
        background-size: cover;
    }
`

export const ServiceItem = styled.div`
    color: ${({active}) => active ? "#2F3034" : "rgba(47,48,52,0.6)"};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 110%; /* 19.8px */
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    &::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        border: .1rem solid #000;
        position: absolute;
        box-sizing: border-box;
        left: -2.2rem;
        ${({active}) => active ? "background: var(--Black-2, #2F3034);": ""}
    }
    &::after {
        right: -.6rem;
            transform: translate(100%, 0);
        bottom: 1.5rem;
        position: absolute;
        content: "[ ${({cnt}) => cnt} ]";
        color: var(--Black-2, #2F3034);
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 120%; /* 19.2px */
    }
`



