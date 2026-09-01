import styled from "@emotion/styled"
import { mediaUrl } from "../../../utils/mediaUrl"
import c from "../../../assets/cursors"

export const Section = styled.section`
    padding: 3.4rem 0 1.4rem;
    position: relative;
    &::before {
        content: "";
        width: .1rem;
        height: 1.4rem;
        position: absolute;
        top: 0;
        left: calc(50% - .05rem);
        background: rgba(150, 40, 31, 0.20);
    }
    &::after {
        content: "";
        width: .1rem;
        height: 1.4rem;
        position: absolute;
        bottom: 0;
        left: calc(50% - .05rem);
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
        background-image: ${({pic}) => `url(${mediaUrl(pic)})`};
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 50.4rem;
        transition: background-image 200ms linear;
    }
    ul {
        ${(p) =>
                p.$hideCursor
                        ? `
		cursor: none;

		&,
		& * {
			cursor: none !important;
		}
	`
                        : ""}
    }
    li {
        padding: 2.4rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--Black-2, #2F3034);
        position: relative;
        
        .name {
            font-family: "Playfair Display", sans-serif;
            font-size: 3.4rem;
            line-height: 1.5;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            opacity: .6;
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
            opacity: .6;
        }
        .divider {
            color: rgba(47, 48, 52, 0.20);
            font-size: 2.6rem;
            font-weight: 200;
            line-height: 1.3;
            opacity: 1;
        }
        &:not(:last-of-type) {
            &::after {
                content: "";
                height: .1rem;
                width: 100%;
                position: absolute;
                bottom: 0;
                background-color: rgba(150, 40, 31, 0.10);
            }
        }
        &:last-of-type {
            padding-bottom: 1.4rem;
        }
        
        &:hover {
            .name {
                opacity: 1;
            }
            .variants {
                opacity: 1;
            }
            a {
                display: flex;
            }
        }
        a {
            justify-content: center;
            align-items: center;
            color: var(--Beige, #FFF6F0);
            font-size: 1.2rem;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.048rem;
            text-transform: uppercase;
            width: 12rem;
            height: 12rem;
            border-radius: 100%;
            box-sizing: border-box;
            border: .1rem solid rgba(255, 246, 240, 0.30);
            background: var(--Black-2, #2F3034);
            backdrop-filter: blur(10px);
            position: absolute;
            left: 22.1rem;
            bottom: 2.4rem;
            display: none;
        }
    }
`