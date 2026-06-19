import styled from "@emotion/styled"
import img from "../../assets/img"


export const Section1 = styled.section`
    display: grid;
    padding: 0 1.6rem;
    grid-auto-flow: dense;
    position: relative;

    .img {
        background-position: center;
        background-size: cover;
        opacity: ${({ visible }) => visible ? 1 : 0};
        transition: opacity 2000ms;
    }

    .img1 {
        background-image: url("${ ({ bg1 }) => img[bg1] }");
        height: 48.5rem;
        margin-bottom: 6rem;
    }

    .img2 {
        background-image: url("${ ({ bg2 }) => img[bg2] }");
        height: 48.2rem;
        grid-row-start: 1;
        margin-bottom: 4.8rem;
    }

    .img3 {
        background-image: url("${ ({ bg3 }) => img[bg3] }");
        height: 42.4rem;
        width: 30.6rem;
        margin: 0 auto 6rem;
    }

    h4 {
        padding: 9rem 0 4rem;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        letter-spacing: 0.028rem;
    }

    .tooltip {
        color: #96281F;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
        padding-bottom: 11.5rem;
    }

    p {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding-bottom: 6rem;

        span {
            color: var(--Red, #96281F);
            font-style: italic;
        }
    }

    @media (min-width: 576px) {
        padding: 13rem 2.4rem 0;
        grid-template-columns: repeat(3, 1fr);
        gap: 15rem 2.3rem;
        .line {
            display: none;
        }

        .img1 {
            height: 68rem;
        }

        .img2 {
            height: 68rem;
            grid-row-start: auto;
        }

        .img3 {
            width: 100%;
            height: 68rem;
        }

        p {
            grid-column-end: span 2;
            padding: 0 1.2rem 0 0;
            font-size: 4.4rem;
            letter-spacing: 0.044rem;
        }

        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
            padding: 0;
        }

        .tooltip {
            color: var(--Beige, #FFF6F0);
            font-size: 2.4rem;
            line-height: 120%; /* 28.8px */
            width: 48.9rem;
            position: absolute;
            left: calc(50% - 24.45rem);
            bottom: 6.2rem;
        }
    }
`


export const Section2 = styled.section`
    padding: 6rem 2.4rem;

    h4 {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
        letter-spacing: 0.028rem;
        padding-bottom: 4rem;
        text-align: center;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.3rem;
        padding-right: 8rem;

        a {
            font-size: 3.4rem;
            font-weight: 400;
            font-style: normal;
            line-height: 110%; /* 37.4px */
            letter-spacing: .01em;
            transition-property: color, text-decoration-color;
            transition-duration: .2s;
            position: relative;
            display: flex;
            align-items: center;

            span {
                opacity: 0;
                position: absolute;
                color: inherit;
                font-family: Manrope;
                top: -.3rem;
                right: -2rem;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 600;
                line-height: 120%; /* 14.4px */
            }
            &::before {
                position: absolute;
                right: -2.4rem;
                content: "/";
                display: inline-block;
                font-style: normal;
                color: #F0EAE6;
                font-size: 7.4rem;
                font-weight: 400;
                line-height: inherit;
                letter-spacing: inherit;
                transform: translate(100%, 0);
            }
            &:last-of-type::before {
                opacity: 0;
            }

            &:hover {
                color: var(--Red, #96281F);
                text-decoration-color: var(--Red, #96281F);
                span {
                    opacity: 1;
                }
                
            }
        }
    }

    .list {
        display: none;
    }

    @media (min-width: 576px) {
        padding: 15rem 2.4rem 13.6rem;
        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
            padding-bottom: 4.5rem;
        }

        nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 4.6rem 8.8rem;
            justify-content: flex-end;
            padding: 0 22rem 16.1rem 10rem;

            a {
                font-size: 5.4rem;
                letter-spacing: 0.054rem;

                span {
                    font-size: 1.6rem;
                    right: -3rem;
                    top: -1rem;
                }
            }
        }

        .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.2rem;
            height: 71.5rem;
        }

        .room {
            background-position: center;
            background-size: auto 100%;
            padding: 3.4rem 4rem;
            display: grid;
            position: relative;
            justify-content: flex-start;
            gap: 1.6rem;
            align-items: flex-end;
            align-content: flex-end;
            justify-items: flex-start;
            &:hover {
                background-size: auto 115%;
            }
            transition: background-size 2s;
            
            &:nth-of-type(1) {
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("${ ({ bg1 }) => img[bg1] }");
            }

            &:nth-of-type(2) {
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("${ ({ bg2 }) => img[bg2] }");
            }
            &::before {
                content: "";
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.40);
                opacity: 0;
                transition: opacity 2s;
            }
            &:hover::before {
                opacity: 1;
            }
            &> * {
                z-index: 1;
            }
            

            h4 {
                border: .1rem solid rgba(255, 246, 240, 0.40);
                background: #FFF6F0;
                backdrop-filter: blur(12px);
                color: var(--Red, #96281F);
                padding: 1.2rem 1.6rem;
                font-family: "Playfair Display";
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 100%; /* 18px */
            }

            h2 {
                color: var(--Beige, #FFF6F0);
                text-align: center;
                font-family: "Playfair Display";
                font-size: 4.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                padding-bottom: 3rem;
            }

        }
    }
`
export const Section3 = styled.section`
    background: var(--Bege-2, #F2ECDE);
    position: relative;
    padding: 1rem 0;

    &::before,
    &::after {
        position: absolute;
        content: "";
        width: .1rem;
        height: 2.4rem;
        left: calc(50% - .05rem);
        background: rgba(150, 40, 31, 0.20);
    }

    &::before {
        top: 1rem;
    }

    &::after {
        bottom: 1rem;
    }

    .content {
        display: grid;
        padding: 9.4rem 2.4rem 2.6rem;
    }

    h4 {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0.028rem;
        text-align: center;
    }

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
        padding: 2.8rem 0 3.6rem;

        span {
            color: var(--Red, #96281F);
        }
    }

    p {
        color: #2F3034;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding-bottom: 1.6rem;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    a {
        position: absolute;
        bottom: 7.9rem;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
    }

    .list-container {
        padding: 0 0 13.2rem;
        overflow: hidden;
    }

    .list {
        padding: 0 1.6rem;
        display: grid;
        overflow-x: auto;
        grid-template-columns: repeat(3, 32rem);
        gap: 3.2rem;
        position: relative;

        &::before,
        &::after {
            position: absolute;
            content: "";
            left: 1.6rem;
            width: 102.4rem;
            height: .1rem;
            background: rgba(150, 40, 31, 0.20);
        }

        &::before {
            top: 0
        }

        &::after {
            bottom: 0
        }
    }

    .item {
        display: grid;
        grid-template-rows: 48.2rem auto;
        gap: 2.4rem;
        padding: 1.6rem 0 2.6rem;
        position: relative;

        p {
            color: #2F3034;
            font-size: 1.6rem;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 130%;
            padding-bottom: 0; /* 20.8px */
        }

        &:not(:first-of-type)::before {
            left: -1.6rem;
            position: absolute;
            content: "";
            width: .1rem;
            height: 100%;
            background: rgba(150, 40, 31, 0.20);
        }

        .img {
            background-position: center;
            background-size: cover;
            padding: 1.6rem;
            color: var(--Beige, #FFF6F0);
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 400;
            line-height: 100%; /* 16px */
            text-transform: lowercase;
        }

        .img1 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg1 }) => img[bg1] }");
        }

        .img2 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg2 }) => img[bg2] }");
        }

        .img3 {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("${ ({ bg3 }) => img[bg3] }");
        }
    }

    @media (min-width: 576px) {
        padding: 2rem 0 2rem 2.5rem ;
        display: grid;
        grid-template-columns: 60.9rem 1fr;
        &::before {
            left: 32.9rem;
            top: 2rem;
        }

        &::after {
            left: 32.9rem;
            bottom: 2rem;
        }

        .line {
            grid-column-end: span 2;
            margin-right: 2.5rem;
        }

        .content {
            padding: 4.1rem 0 8rem;
            align-content: flex-start;
            justify-items: center;
        }

        .buttons {
            grid-row-start: 1;
            padding-bottom: 14rem;
            justify-content: center;
            gap: 2.2rem;
        }

        h4 {
            font-size: 1.6rem;
            letter-spacing: 0.032rem;
        }

        h2 {
            width: 47.8rem;
            font-size: 4.4rem;
            line-height: 110%; /* 48.4px */
            letter-spacing: 0.044rem;
            text-align: center;
            padding: 3.4rem 0 2.6rem;

            span {
                font-style: italic;
            }
        }

        p {
            font-size: 1.8rem;
            text-align: center;
            padding-bottom: 28.2rem;
            width: 39.6rem;
        }

        a {
            position: relative;
            bottom: 0;
        }

        .list-container {
            padding: 0;
        }

        .list {
            &::before,
            &::after {
                display: none;
            }

            padding: 0 2.1rem;
            grid-template-columns: repeat(3, 45.2rem);
            gap: 4.3rem;
            height: 100%;
        }

        .item {
            grid-template-rows: 69rem auto;
            gap: 3.4rem;

            p {
                font-size: 1.8rem;
            }

            &:first-of-type::before {
                position: absolute;
                content: "";
                width: .1rem;
                left: -2.1rem;
                height: 100%;
                background: rgba(150, 40, 31, 0.20);
            }

            &:not(:first-of-type)::before {
                left: -2.1rem;
            }

            &:last-of-type::after {
                position: absolute;
                content: "";
                width: .1rem;
                right: -2.1rem;
                height: 100%;
                background: rgba(150, 40, 31, 0.20);
            }

            .img {
                padding: 2.4rem;
                font-size: 2.4rem;
                font-weight: 500;
                line-height: 120%; /* 28.8px */
            }
        }

    }
`
export const Section4 = styled.section`
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
export const Section5 = styled.section`
        padding: 0 1.6rem 9rem;
        background: var(--Bege-2, #F2ECDE);
        position: relative;
        overflow: hidden;
        
        h2 {
                padding: 52.4rem 2rem 53.6rem 0;
                color: var(--Black-2, #2F3034);
                font-family: "Playfair Display";
                font-size: 3.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: 134%; /* 45.56px */
                text-transform: uppercase;
                position: relative;
                z-index: 1;
        }
        
        p {
                color: var(--Black-2, #2F3034);
                font-family: Manrope;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 130%; /* 23.4px */
                padding-bottom: 4.6rem;
        }
        
        .links {
                display: flex;
                gap: 3rem;
        }
        
        .img {
                background-position: center;
                background-size: cover;
                position: absolute;
        }
        
        .img1 {
                background-image: url("${ ({ bg1 }) => img[bg1] }");
                width: 17.3rem;
                height: 18.2rem;
                right: -1.5rem;
                top: 18.6rem;
        }
        
        .img2 {
                background-image: url("${ ({ bg2 }) => img[bg2] }");
                width: 26.6rem;
                height: 37.4rem;
                top: 9rem;
                left: -7.6rem;
        }
        
        .img3 {
                background-image: url("${ ({ bg3 }) => img[bg3] }");
                width: 26.6rem;
                height: 37.4rem;
                top: 97.2rem;
                left: -7.6rem;
        }
        
        .img4 {
                background-image: url("${ ({ bg4 }) => img[bg4] }");
                width: 17.4rem;
                height: 24.4rem;
                top: 91rem;
                right: -1.6rem;
        }
        
        .img5 {
                background-image: url("${ ({ bg5 }) => img[bg5] }");
                width: 14.2rem;
                height: 17.2rem;
                top: 119.6rem;
                right: 1.6rem;
        }
        
        .img6 {
                background-image: url("${ ({ bg6 }) => img[bg6] }");
                width: 29.4rem;
                height: 22.1rem;
                display: none;
        }
        
        @media (min-width: 576px) {
                padding: 15rem 0 42.6rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                h2 {
                        max-width: 124.8rem;
                        text-align: center;
                        font-size: 5.4rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 120%; /* 64.8px */
                        text-transform: uppercase;
                        padding: 0 0 2.6rem;
                }
                
                p {
                        text-align: center;
                        font-size: 1.8rem;
                        max-width: 76.2rem;
                        padding-bottom: 6.6rem;
                }
                
                .img1 {
                        position: static;
                        width: 61rem;
                        height: 40.8rem;
                        margin-bottom: 4.7rem;
                }
                
                .links {
                        justify-content: center;
                        gap: 2.4rem;
                }
                
                .img6 {
                        display: block;
                        top: 105.9rem;
                        left: 36.2rem
                }
                
                .img2 {
                        width: 25.4rem;
                        height: 34.4rem;
                        top: 15rem;
                        left: 18.3rem;
                }
                
                .img3 {
                        width: 45.2rem;
                        height: 33.9rem;
                        top: 62.6rem;
                        left: 2.4rem;
                }
                
                .img4 {
                        width: 25.4rem;
                        height: 34.4rem;
                        top: 69rem;
                        right: 22.2rem;
                }
                
                .img5 {
                        width: 45.1rem;
                        height: 33.9rem;
                        top: 21.9rem;
                        right: 2.5rem;
                }
        }
`
export const Section6 = styled.section`
    
    position: relative;
    height: 84.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${ ({ bg }) => img[bg] });
    background-position: center;
    background-size: cover;

    .tour {
        left: 1.6rem;
        top: 1.6rem;
    }

    h2 {
        color: var(--Beige, #FFF6F0);
        font-family: "Playfair Display";
        font-size: 3.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 37.4px */
        text-transform: uppercase;
    }

    img {
        width: 100%;
        height: 5.1rem;
        object-position: center;
        object-fit: cover;

        &.active {
            transition: transform .5s linear;
            transform: translate(calc((-100% - 1rem) * ${ ({ cnt }) => cnt }), 0);
        }

        border: 1px solid rgba(255, 246, 240, 0.40);
        box-sizing: border-box;
        cursor: pointer;
    }

    .list-container {
        position: absolute;
        margin: 0 3.5rem;
        overflow: hidden;
        bottom: 11.5rem;
        left: 0;
    }

    .list {
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(9, calc(25% - 3rem / 4));
        transform: translate(calc(((25% - 3rem / 4) + 1rem) * -1), 0);
    }

    .cnt {
        position: absolute;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        bottom: 4.2rem;

        .active {
            font-size: 3.4rem;
        }
    }

    .link {
        position: absolute;
        bottom: 20.9rem;
    }

    @media (min-width: 576px) {
        height: 96rem;
        h2 {
            font-size: 4.4rem;
        }

        .link {
            font-size: 1.8rem;
            bottom: 23.6rem;
        }

        .tour {
            left: 2.4rem;
            top: 2.4rem;
        }

        img {
            height: 10.4rem;

            &.active {
                transform: translate(calc((-100% - 2.2rem) * ${ ({ cnt }) => cnt }), 0);
            }
        }

        .list-container {
            margin: 0 61.5rem;
            bottom: 8rem;
        }

        .list {
            gap: 2.2rem;
            grid-template-columns: repeat(9, calc(25% - 6.6rem / 4));
            transform: translate(calc(((25% - 6.6rem / 4) + 2.2rem) * -1), 0);
        }

        .cnt {
            bottom: 8rem;
            right: 2.4rem;
            font-size: 3.4rem;

            .active {
                ont-size: 6.4rem;
            }
        }
    }
`