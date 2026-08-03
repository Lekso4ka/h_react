import styled from "@emotion/styled";
import { mediaUrl } from "../../utils/mediaUrl";

export const Container = styled.div`
    position: relative;
    .line {
        position: absolute;
        top: 7.8rem;
        left: 0;
        right: 0;
        z-index: 1;
        border-top-color: rgba(255, 246, 240, 0.30);
    }
    .hero {
        height: 84.4rem;
        box-sizing: border-box;
        padding: 0 1.6rem 10.7rem;
        display: grid;
        align-content: flex-end;
        gap: 2.6rem;
        position: relative;
        transform-style: preserve-3d;
        background-color: rgba(0, 0, 0, 0.40);
        h1 {
            color: var(--Beige, #FFF6F0);
            font-family: "Playfair Display";
            font-size: 3.6rem;
            font-weight: 500;
            line-height: 110%; /* 39.6px */
        }
        p {
            color: var(--Beige, #FFF6F0);
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 19.2px */
        }
    }
    .content {
        background: var(--Beige, #FFF6F0);
        display: grid;
        gap: 1rem;
        margin-bottom: -4rem;
        padding: 0 1.6rem 1.6rem;
    }
    @media (min-width: 576px) {
        .line {
            display: none;
        }
        .hero {
            height: 76rem;
            padding: 0 2.4rem 27.2rem;
            grid-template-columns: 1fr 60.9rem;
            gap: 0;
            h1 {
                font-size: 6.4rem;
            }
            p {
                padding-top: 2.5rem;
                font-size: 1.8rem;
                line-height: 130%;
            }
        }
        .content {
            gap: 2rem;
            padding: 0 2.4rem 3.2rem;
            margin-bottom: -21rem;
        }
    }
`

export const Item = styled.article`
    background: #FFF;
    padding: 2.4rem 2.4rem 5.9rem;
    transform: translate(0, -4rem);

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 30.8px */
        padding-bottom: 4rem;
    }

    h3 {
        color: var(--Green, #55532E);
        font-family: Manrope;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 13.2px */
        text-transform: uppercase;
        padding-bottom: 1.8rem;
    }

    .text {
        ul {
            padding-bottom: 4rem;
        }

        li {
            display: flex;
            position: relative;
            padding-left: 2.5rem;
            //color: rgba(47, 48, 52, 0.80);
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; /* 19.2px */

            &::before {
                content: "";
                width: .4rem;
                height: .4rem;
                position: absolute;
                left: 1rem;
                top: .9rem;
                border-radius: 50%;
                background-color: var(--Black-2, #2F3034);
            }
        }
    }

    .row {
        display: grid;
        gap: 1.2rem;
        padding-bottom: 4.2rem;

        h4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.3rem 0;
            border-top: .1rem solid rgba(0, 0, 0, 0.10);
            border-bottom: .1rem solid rgba(0, 0, 0, 0.10);
            color: var(--Red, #96281F);
            font-family: Manrope;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 13.2px */
            text-transform: uppercase;

            span {
                color: rgba(28, 28, 28, 0.60);
                text-transform: none;
            }
        }

        p {
            color: var(--Black, #1C1C1C);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
            width: 23.5rem;
        }
    }

    .images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding-bottom: 4rem;
    }

    .img {
        height: 24rem;
        background-position: center;
        background-size: cover;
    }

    .img1 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${ ({ pic }) => mediaUrl(pic[0]) });
    }

    .img2 {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${ ({ pic }) => mediaUrl(pic[1]) });
    }

    .links {
        padding-bottom: 3.2rem;

        li {
            padding: .8rem 0 1.1rem;
            border-top: .1rem solid var(--Green, #55532E);

            &:last-of-type {
                border-bottom: .1rem solid var(--Green, #55532E);
            }

            a {
                color: var(--Black-2, #2F3034);
                font-family: Manrope;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: 110%; /* 15.4px */
                display: flex;
                align-items: center;
                justify-content: space-between;

                svg {
                    margin-top: .3rem;
                    width: 1.1rem;
                }
            }

        }
    }

    @media (min-width: 576px) {
        transform: translate(0, -21rem);
        padding: 2.4rem 2.4rem 6rem 3.4rem;
        display: grid;
        grid-template-columns: 44rem 1fr 58.5rem;
        grid-auto-flow: dense;
        grid-template-rows: auto 1fr;
        align-content: flex-start;
        position: relative;
        .other {
            position: absolute;
            left: 3.2rem;
            bottom: 15.1rem;
        }

        .links {
            grid-column-start: 3;
            padding-bottom: 0;
            h3 {
                color: var(--Green, #55532E);
                padding-bottom: 1.8rem;
            }
            li {
                padding: .8rem 0;
                a {
                    font-size: 1.6rem;
                    svg {
                        margin-top: 0;
                        width: 1rem;
                    }
                }
            }
        }

        .link {
            grid-column-start: 1;
            align-self: flex-end;
        }

        .text {
            grid-row-end: span 2;
            padding: 3.6rem 0 0;
            width: 45.2rem;

            ul {
                padding-bottom: 6rem;
                &:last-of-type {
                    padding-bottom: 0;
                }
            }

            li {
                color: var(--Black-2, #2F3034);
                font-family: Manrope;
                font-size: 1.8rem;
                line-height: 110%; /* 19.8px */
            }
        }

        h2 {
            font-size: 4.4rem;
            padding-top: 2.6rem;
        }

        h3 {
            color: rgba(47, 48, 52, 0.70);
            font-size: 1.4rem;
            padding-bottom: 2.4rem;
        }
        .images {
            gap: 1.7rem;
            padding-bottom: 4.6rem;
        }
        .img {
            height: 41.4rem;
        }
        .row {
            gap: 1.4rem;
            padding-bottom: 3.2rem;
            width: 27.8rem;

            h4 {
                padding: 1.2rem 0;
                font-size: 1.4rem;
            }

            p {
                font-size: 1.6rem;
            }
        }
    }
`