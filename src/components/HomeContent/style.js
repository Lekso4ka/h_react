import styled from "@emotion/styled"
import img from "../../assets/img"

export const Hero = styled.div`
    min-height: 76rem;
    position: relative;
    background: rgba(0, 0, 0, 0.40);

    video {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        object-fit: cover;
        object-position: center;
    }

    .line {
        height: 7.6rem;
        border-bottom: .1rem solid rgba(255, 246, 240, 0.30);
        margin: 0 1.6rem 3.1rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
        height: 3.6rem;

        button {
            display: flex;
            padding: .6rem 2.4rem .8rem;
            border-radius: 50px;
            border: 1px solid rgba(255, 246, 240, 0.20);
            backdrop-filter: blur(8px);
            width: 7.6rem;
            box-sizing: border-box;
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 400;
            line-height: normal;
            text-transform: lowercase;
            color: rgba(255, 255, 255, 0.40);
            justify-content: center;
            align-items: center;

            &:nth-of-type(${ ({ activeBtn }) => activeBtn }) {
                border-radius: 60px;
                border-color: transparent;
                color: var(--Beige, #FFF6F0);
                background: rgba(255, 246, 240, 0.20);
            }
        }
    }

    h1 {
        padding: 18.6rem 0 1.8rem;
        color: var(--Beige, #FFF6F0);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 34px;
        font-style: italic;
        font-weight: 400;
        line-height: 110%; /* 37.4px */
    }

    h4 {
        color: #FFF;
        text-align: center;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        padding: 0 1.7rem 11.6rem;
    }

    .divider {
        width: .1rem;
        height: 9rem;
        background: rgba(255, 255, 255, 0.20);
        margin: 0 auto 2.9rem;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 3.4rem;
            top: 0;
            left: 0;
            background-color: #fff;
            transform: translate(0, -100%);
            animation: scroll 5s linear infinite;
            border-radius: .1rem;
        }
    }

    .hotels {
        display: grid;
        gap: .1rem;
    }

    .activities {
        display: none;
        position: absolute;
        right: 4.7rem;
        bottom: 4rem;
        color: rgba(255, 246, 240, 0.80);
        font-family: "Playfair Display";
        font-size: 2rem;
        font-style: italic;
        font-weight: 400;
        line-height: 120%; /* 24px */

        p {
            font-size: 1.6rem;
            padding: 1.4rem 0 2.2rem; /* 24px */
        }

        a {
            color: var(--Beige, #FFF6F0);
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

    @keyframes scroll {
        from {
            transform: translate(0, -100%);
        }
        to {
            transform: translate(0, calc(9rem + 100%));
        }
    }

    @media (min-width: 576px) {
        min-height: 100vh;
        box-sizing: border-box;
        .line {
            display: none;
        }

        display: grid;
        grid-template-rows: auto auto auto auto 1fr;
        align-content: flex-start;
        padding: 13.6rem 2.9rem 2.4rem;
        //justify-content: center;
        justify-items: center;
        .activities {
            display: block;
            width: 27.1rem;
        }

        .buttons {
            gap: 2.2rem;
            height: 3.8rem;

            button {
                font-size: 2rem;
                font-weight: 500;
                width: 9.6rem;
                border-radius: 5rem;
            }
        }

        h1 {
            padding: 29.3rem 0 2.4rem;
            font-size: 5.4rem;
        }

        h4 {
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 33.6px */
            width: 51.8rem;
            padding: 0 0 7.1rem;
        }

        .divider {
            margin: 0;
        }

        .hotels {
            align-self: flex-end;
            justify-self: flex-start;
            width: max-content;
            display: grid;
            grid-template-columns: repeat(2, 61rem);
            gap: 2.3rem;
        }
    }
`

export const HotelCard = styled.div`
    z-index: 1;
    display: grid;
    background: var(--Beige, #FFF6F0);
    grid-template-columns: auto auto;
    justify-content: space-between;
    justify-items: flex-start;
    gap: 1.2rem;
    padding: 2rem 1.6rem;
    align-items: center;
    position: relative;

    h2 {
        color: var(--Red, #96281F);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 33.6px */
        letter-spacing: 0.028rem;
    }

    button {
        padding: 0;
        color: var(--Black-2, #2F3034);
        height: auto;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 500;
        line-height: 120%; /* 19.2px */
        letter-spacing: 0.016rem;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 10%; /* 1.6px */
        text-underline-offset: 30%; /* 4.8px */
        text-underline-position: from-font;
    }

    .stars {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .4rem;
        justify-self: flex-end;

        svg {
            width: 1.6rem;
        }
    }

    span {
        justify-self: flex-end;
        color: rgba(47, 48, 52, 0.80);
        text-align: center;
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 15.4px */
    }

    .card {
        position: absolute;
        bottom: 0;
        height: max-content;
        pointer-events: none;
        overflow: hidden;
    }

    .content {
        pointer-events: auto;
        transition: transform .3s linear;
        ${ ({ active }) => active ? `transform: translate(0,0);` : `transform: translate(0,calc(100% + .1rem));` }
        bottom: 0;
        background: var(--Beige, #FFF6F0);
        padding: 1.8rem 1.6rem 2.6rem;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        button {
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 11px */
            text-transform: uppercase;
            text-decoration: none;

            svg {
                width: 2.2rem;
            }

            display: flex;
            gap: .8rem;
            align-items: center;
        }

        h2 {
            padding: .8rem 0 1.2rem;
            font-size: 3.4rem;
            font-weight: 500;
            line-height: 100%; /* 34px */
            letter-spacing: normal;
        }

        p {
            display: flex;
            gap: .6rem;
            align-items: center;
            color: var(--Black-2, #2F3034);
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */

            span {
                font-size: 2.1rem;
                font-style: normal;
                font-weight: 200;
                line-height: 110%; /* 23.1px */
            }

        }

        .img {
            height: 27.4rem;
            background-image: url("${ img.h_banner }");
            background-size: cover;
            background-position: center;
            margin: 1rem 0 1.4rem;
        }

        .text {
            font-size: 1.6rem;
            line-height: 130%; /* 20.8px */
            padding-bottom: 4rem;
        }

        .links {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(2, 1fr);
            justify-items: flex-start;

            a {
                color: var(--Black-2, #2F3034);
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
        }
    }

    @media (min-width: 576px) {
        gap: 2rem;
        padding: 1.8rem 2.4rem;
        grid-auto-flow: dense;
        h2 {
            font-size: 4.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
        }

        span {
            font-family: Manrope;
            font-size: 1.8rem;
            grid-column-start: 2;
            grid-row-start: 1;
        }

        button {
            font-size: 1.8rem;
            line-height: 110%;
            letter-spacing: normal;
        }

        .stars {
            grid-row-start: 2;
            grid-column-start: 2;
            gap: .6rem;
        }

        .content {
            padding: 2.4rem 2.4rem 3rem;

            button {
                font-size: 1.2rem;
                gap: 1.2rem;

                svg {
                    width: 3.2rem;
                }
            }

            .stars svg {
                width: 2.2rem;
            }

            h2 {
                font-size: 5.4rem;
                font-style: normal;
                font-weight: 400;
                padding: 1.4rem 0 1.8rem;
            }

            p {
                font-size: 1.6rem;
                gap: 1rem;

                span {
                    font-size: 3.6rem;
                }
            }

            .img {
                margin: 1.1rem 0 1.8rem;
                height: 34.4rem;
            }

            .text {
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 23.4px */
                padding-bottom: 8.5rem;
            }

            .links {
                grid-template-columns: auto auto;
                gap: 3.9rem;

                a {
                    color: var(--Black-2, #2F3034);
                    font-size: 1.8rem;
                }
            }

        }
    }
`

export const Section1 = styled.section`

    @media (min-width: 576px) {
    
    }
`
export const Section2 = styled.section`

    @media (min-width: 576px) {
    
    }
`
export const Section3 = styled.section`

    @media (min-width: 576px) {
    
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
                color: var(--Beige, #FFF6F0);
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
                
                a {
                        color: var(--Black-2, #2F3034);
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
                        
                        a {
                                font-size: 1.8rem;
                        }
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
        color: var(--Beige, #FFF6F0);
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