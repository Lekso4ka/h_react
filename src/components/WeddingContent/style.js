import styled from "@emotion/styled"

import img from "../../assets/img"

export const Hero = styled.section`
    height: 84.4rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%);
    &::before {
        content: "";
        height: .1rem;
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        top: 7.6rem;
        background: rgba(255, 246, 240, 0.30);
    }
    video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        object-fit: cover;
        object-position: center;
    }
    h4 {
        color: #FFF;
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
        text-transform: uppercase;
        width: 13.8rem;
    }
    h1 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 4.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 44px */
        width: 32.8rem;
        padding: .4rem 0 1.6rem;
    }
    p {
        width: 35.8rem;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
    }
    .list {
        width: 100%;
        overflow-x: auto;
        position: absolute;
        left: 1rem;
        bottom: 4.2rem;
    }
    ul {
        display: flex;
        width: max-content;
        height: 3.6rem;
        padding: 1.8rem 6.2rem;
        gap: 8.8rem;
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(17px);
        li {
            flex-shrink: 0;
            width: max-content;
            position: relative;
            color: #FFF6F0;
            text-align: center;
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 17.6px */
            &:not(:first-of-type)::before {
                content: "";
                position: absolute;
                width: .1rem;
                height: 3.2rem;
                background-color: rgba(255, 255, 255, 0.60);
                left: -4.35rem;
                top: .2rem;
            }
        }
    }

    @media (min-width: 576px) {
        height: 88rem;
        &::before {
            display: none;
        }
        h4 {
            font-size: 1.4rem;
            width: max-content;
        }
        h1 {
            font-size: 6.4rem;
            width: max-content;
            padding: 1.4rem 0 3.6rem;
            line-height: 1.1;
        }
        p {
            width: 53.1rem;
            font-size: 1.8rem;
        }
        .list {
            //left: 27.4rem;
            //right: 27.4rem;
            bottom: 6.4rem;
            width: auto;
            left: auto;
            margin: 0 auto;
        }
        ul {
            width: auto;
            gap: 18.8rem;
            padding: 3.6rem 11.7rem;
            height: 4rem;
            li {
                font-size: 1.8rem;
                min-width: 21.4rem ;
                width: auto;
                &:not(:first-of-type)::before {
                    width: .1rem;
                    height: 7.2rem;
                    left: -9.35rem;
                    top: -1.6rem;
                }
            }
        }
    }
`

export const Section1 = styled.section`
    padding: 10rem 1rem 0;
    display: grid;
    justify-items: center;
    .img1 {
        background-image: url("${img.we_2}");
        grid-row-start: 1;
        height: 54.4rem;
        background-position: center;
        background-size: cover;
        width: calc(100% - 1.2rem);
    }
    .title {
        padding: 10rem 0 4.4rem;
    }
    h4 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
        text-transform: uppercase;
    }
    h2 {
        padding-top: 1.8rem;
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        max-width: 37.6rem;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
        font-size: 1.6rem;
        font-weight: 500;
        text-align: center;
    }
    .line {
        height: 25.2rem;
        width: .1rem;
        background-color: rgba(150, 40, 31, 0.20);
        margin-bottom: 4.4rem;
    }
    p {
        padding-bottom: 4.6rem;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-style: normal;
        line-height: 120%; /* 19.2px */
    }
    a {
        color: var(--Black, #1C1C1C);
        font-family: "Playfair Display";
        font-style: italic;
        line-height: 110%; /* 17.6px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.6px */
        text-underline-offset: 30%; /* 4.8px */
        text-underline-position: from-font;
    }
    .img2 {
        width: calc(100% - 1.2rem);
        margin-top: 10rem;
        height: 54.4rem;
        background-image: url("${img.we_3}");
        background-position: center;
        background-size: cover;
    }
    @media (min-width: 576px) {
        grid-template-columns: 60.9rem 1fr 60.9rem;
        padding: 15rem 2.4rem 0;
        gap: 15rem 4.4rem;
        .img1 {
            grid-row-start: auto;
            margin-top: 6.4rem;
            height: 80.7rem;
            width: 100%;
        }
        .img2 {
            height: 80.7rem;
            width: 100%;
            margin-top: 0;
            transform: translate(0, -12.6rem);
        }
        .title {
            grid-column-end: span 3;
            padding: 0;
        }
        h2 {
            font-size: 6.4rem;
            width: 68.5rem;
            max-width: none;
            padding-top: 1.8rem;
        }
        .line {
            height: 32.2rem;
            margin-bottom: 2.4rem;
        }
        .content {
            padding: 0;
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
`
export const Section2 = styled.section`
    padding: 10rem 0 0;
    .content {
        padding: 0 2.4rem;
    }
    h4 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
    }
    h2 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        padding-top: 1.8rem;
    }
    ul {
        display: grid;
        margin: 4.4rem 0 10rem;
        height: 35.8rem;
        position: relative;
        li {
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-left: .1rem solid rgba(150, 40, 31, 0.20);
            border-right: .1rem solid rgba(150, 40, 31, 0.20);
            padding: 1.6rem 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            span {
                color: var(--Red, #96281F);
                text-align: center;
                font-family: "Playfair Display";
                font-size: 6.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: 110%; /* 70.4px */
            }
            p {
                color: #1C1C1C;
                text-align: center;
                font-family: Manrope;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 19.2px */
            }
            &:not(:first-of-type) {
                display: none;
            }
        }
    }
    .img {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img.we_4});
        background-position: center;
        background-size: cover;
        height: 59.4rem;
        box-sizing: border-box;
        padding: 10.8rem 1.8rem 18rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.8rem;
        color: #FFF6F0;
        font-family: "Playfair Display";
        span {
            font-size: 6.4rem;
            font-weight: 500;
            line-height: 110%; /* 70.4px */
        }
        p {
            text-align: center;
            font-size: 2.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 33.6px */
        }
    }
    @media (min-width: 576px) {
        padding: 15rem 2.4rem 0;
        .content {
            padding: 0;
        }
        h4 {
            font-size: 1.4rem;
        }
        h2 {
            font-size: 6.4rem;
        }
        ul {
            margin: 2.4rem 0 15rem;
            height: 56.8rem;
            grid-template-columns: repeat(4, 1fr);
            li {
                position: static;
                padding: 6.1rem 0 4.5rem;
                &:not(:first-of-type) {
                    display: flex;
                }
                &:first-of-type {
                    border-left: none;
                }
                &:last-of-type {
                    border-right: none;
                }
                span {
                    font-size: 6.4rem;
                }
                p {
                    font-size: 1.8rem;
                }
            }
        }
        .img {
            padding: 9.7rem 0 11.3rem;
            background-position: 0 -172.8278rem;
            background-size: 100% 718.334%;
            height: 39.1rem;
            gap: 2.9rem;
            p {
                font-size: 3.4rem;
            }
        }
    }
`
export const Section3 = styled.section`
    padding: 10rem 1.6rem;
    display: grid;
    h4 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
    }
    h2 {
        padding: 1.8rem 0 2.8rem;
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
    }
    &>p {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        width: 29rem;
        margin: 0 auto;
    }
    .images {
        height: 54.4rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            cursor: pointer;
            border-radius: 50%;
            border: .1rem solid transparent;
            padding: 1.4rem;
            z-index: 2;
            left: 1rem;
            :hover {
                border-color: rgba(255, 246, 240, 0.20);
                backdrop-filter: blur(7px);
            }
            &.right {
                left: auto;
                right: 1rem;
            }
            svg {
                width: 2.1rem;
            }
        }
        .img {
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            flex-shrink: 0;
        }
       
    }
    .img1 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_5}");
    }
    .img2 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_6}");
    }
    .img3 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_7_1}");
    }
    .img4 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_8}");
    }
    .img5 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_9}");
    }
    .tooltip {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.6rem;
        span {
            color: #000;
            font-family: "Playfair Display";
            font-size: 6.4rem;
            font-weight: 500;
            line-height: 110%; /* 70.4px */
        }
         p {
             color: var(--Black-2, #2F3034);
             text-align: center;
             font-family: Manrope;
             font-size: 1.8rem;
             font-style: normal;
             font-weight: 500;
             line-height: 120%; /* 21.6px */
         }
    }
    .tooltip1 {
        padding: 4.4rem 0;
        grid-row-start: 4;
    }
    .tooltip2 {
        padding-top: 4.6rem;
    }
    @media (min-width: 576px) {
        width: 108.2rem;
        grid-template-columns: repeat(2, 1fr);
        padding: 15rem 41.9rem 0;
        h4 {
            font-size: 1.4rem;
            justify-self: center;
            grid-column-end: span 2;
        }
        h2 {
            grid-column-end: span 2;
            padding-top: 1.6rem;
            color: var(--Black-2, #2F3034);
            font-size: 6.4rem;
        }
        &>p {
            grid-column-end: span 2;
            width: 60.7rem;
            font-size: 1.8rem; /* 21.6px */
            padding-bottom: 5.4rem;
        }
        
        .images {
            grid-column-end: span 2;
            overflow: visible;
            height: 54rem;
            gap: 10rem;
            .arrow {
                padding: 2rem;
                svg {
                    width: 3.1rem;
                    path {
                        fill: var(--Beige, #FFF6F0)
                    };
                }
                left: calc(-50vw + 50% + 4.2rem);
                &.right {
                    right: calc(-50vw + 50% + 4.2rem);
                }
            }
            .img3 {
                background-position: 0 -49.484rem;
                background-size: 100% 300.673%;
            }
            .img {
                transform-origin: 100% center;
            }
            .img:not(:nth-of-type(${({ active }) => active})) {
                transform: scale(125%);
                
            }
            .img:nth-of-type(${({ active }) => active})~.img {
                transform-origin: 0 center;
            }
            
        }
        .tooltip {
            span {
                color: var(--Black-2, #2F3034);
            }
        }
        .tooltip1 {
            grid-row-start: auto;
            padding-top: 4.2rem;
            padding-bottom: 0;
        }
        .tooltip2 {
            padding-top: 4.2rem;
        }
    }
`
export const Section4 = styled.section`
    padding: 10.8rem 1.6rem 0;
    h2 {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        padding-bottom: 4.4rem;
    }
    .img {
        background-position: center;
        background-size: cover;
        height: 54rem;
    }
    .img1 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_10}");
    }
    .img2 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_11}");
    }
    .img3 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${img.we_12}");
    }
    ul {
        display: grid;
        gap: 4.4rem;
    }
    li {
        gap: 1.8rem;
        display: flex;
        position: relative;
        flex-direction: column;
        color: var(--Black-2, #2F3034);
        text-align: center;
        h3 {
            font-family: "Playfair Display";
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 26.4px */
        }
        p {
            text-align: center;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 19.2px */
        }
    }
    @media (min-width: 576px) {
        padding: 15rem 0 0;
        h2 {
            color: var(--Black-2, #2F3034);
            font-size: 6.4rem;
            padding-bottom: 5.4rem;
        }
        ul {
            grid-template-columns: repeat(3, 1fr);
            gap: .1rem;
        }
        li {
            height: 95.2rem;
            box-sizing: border-box;
            padding: 11.4rem 9.1rem;
            gap: 3.2rem;
            justify-content: flex-end;
            color: #FFF6F0;
            h3 {
                font-size: 3.4rem;
            }
            p {
                font-size: 1.8rem;
            }
        }
        .img {
            position: absolute;
            height: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
        
    }
`
export const Section5 = styled.section`
    padding: 13.3rem 1.6rem 5.4rem;
    display: grid;

    .line {
        display: none;
    }

    .title {
        display: grid;
        gap: 1.8rem;
        padding-bottom: 1.8rem;
    }

    h4 {
        color: var(--Red, #96281F);
        text-align: center;
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
    }

    h2 {
        color: #000;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
    }

    .images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 25.2rem;
        gap: 1rem;
        padding-bottom: 1rem;
    }

    .img {
        background-position: center;
        background-size: cover;
    }

    .img1 {
        background-image: url("${ img.we_13 }");
    }

    .img2 {
        background-image: url("${ img.we_14 }");
    }

    .img3 {
        grid-column-end: span 2;
        grid-row-start: 1;
        background-image: url("${ img.we_15 }");
    }

    li {
        border-top: .1rem solid rgba(150, 40, 31, 0.20);
        display: flex;
        align-items: flex-start;
        padding: 1.8rem 3.5rem;
        position: relative;
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 26.4px */
        span {
            position: absolute;
            left: 0;
            color: var(--Red, #96281F);
            font-size: 1.4rem; /* 15.4px */
            line-height: 1.1;
        }
    }

    li:last-of-type {
        border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
    }

    @media (min-width: 576px) {
        padding: 2.4rem;
        gap: 2.3rem;
        align-content: flex-start;
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        .line {
            display: block;
            border-top: .1rem solid rgba(150, 40, 31, 0.20);
            grid-column-end: span 2;
        }
        .title {
            padding-left: 15.8rem;
            gap: 1.4rem;
        }
        h4 {
            color: var(--Red, #96281F);
            text-align: left;
            font-size: 1.4rem;
        }
        h2 {
            text-align: left;
            color: var(--Black-2, #2F3034);
            font-size: 6.4rem;
        }
        .images {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.2rem;
            height: 28.4rem;
        }
        .img3 {
            grid-column-end: span 1;
            grid-row-start: auto;
        }
        ul {
            padding-top: 23.2rem;
            column-count: 2;
            grid-column-end: span 2;
            grid-column-gap: 2.3rem;
        }
        li {
            padding-left: 15.8rem;
            font-size: 3.4rem;
            span {
                font-size: 1.6rem;
            }
        }
        li:nth-of-type(4n) {
            border-bottom: .1rem solid rgba(150, 40, 31, 0.20);
        }
    }
`

export const Section6 = styled.section`
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding: 13.9rem 1.6rem 6rem;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("${img.we_16}");
    background-position: bottom;
    background-size: cover;
    .content {
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(17px);
        padding: 4.6rem 0;
        box-sizing: border-box;
        max-width: 47.6rem;
        display: grid;
        grid-template-rows: auto auto auto 1fr;
    }
    h4 {
        color: #FFF;
        text-align: center;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 14.4px */
        text-transform: uppercase;
    }
    h2 {
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        width: 30.6rem;
        margin: 1.8rem auto 2.4rem;
    }
    p {
        color: #FFF;
        text-align: center;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        padding-bottom: 3.8rem;
    }
    form {
        display: grid;
        gap: 1.6rem;
        padding: 0 1.9rem;
    }
    input:not([type="checkbox"]) {
        padding: 0 0 1.6rem;
        height: auto;
        //width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: .1rem solid rgba(255, 255, 255, 0.20);
        display: flex;
        color: #fff;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        &:focus {
            border-bottom-color: #96281F;
        }
        &:first-of-type{
            margin-bottom: .8rem;
        }
        &::placeholder {
            color: rgba(255, 255, 255, 0.40);
        }
        &::-moz-placeholder {
            color: rgba(255, 255, 255, 0.40);
        }
        &:-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.40);
        }
        &::-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.40);
        }
    }
    input[type=checkbox] {
        display: none;
        &+label {
            display: block;
            padding-left: 2.8rem;
            position: relative;
            color: rgba(255, 255, 255, 0.60);
            font-family: Manrope;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            user-select: none;
            a {
                color: #fff;
            }
            &::before {
                content: "";
                width: 1.8rem;
                height: 1.8rem;
                box-sizing: border-box;
                border: .2rem solid #fff;
                position: absolute;
                left: 0;
                @media (min-width: 576px) {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
        &:active+label::before {
            background-color: #fff6f0;
        }
    }
    button {
        margin-top: 2.8rem;
        padding: 0;
        color: rgba(255, 255, 255, 0.40);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.6px */
        text-underline-offset: 30%; /* 4.8px */
        text-underline-position: from-font;
    }
    @media (min-width: 576px) {
        background-position: center;
        padding: 13rem 0 18.4rem;
        .content {
            padding: 4rem 3.2rem 8.7rem;
        }
        h2 {
            font-size: 3.4rem;
            width: auto;
            margin: 2.6rem 0 3rem;
        }
        p {
            font-size: 1.4rem;
            font-style: normal;
            padding-bottom: 8.1rem;
        }
        form {
            gap: 3.4rem;
        }
        input:first-of-type{
            margin-bottom: 0;
        }
        label{
            margin-top: .3rem;
            padding-left: 3.2rem;
            &:before {
                width: 2rem;
                height: 2rem
            }
        }
        button {
            margin-top: 3.3rem;
            font-size: 1.8rem;
        }
    }
`