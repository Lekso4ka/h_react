import styled from "@emotion/styled";
import { css } from "@emotion/react";

const openPanel = css`
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
    transition-delay: 0s;
`;

export const Widget = styled.div`
    --accent: #96281f;
    position: fixed;
    left: max(var(--callback-left, 3rem), env(safe-area-inset-left, 0px));
    bottom: calc(var(--callback-bottom, 3rem) + env(safe-area-inset-bottom, 0px));
    z-index: 11;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    color: var(--accent);

    &, * {
        box-sizing: border-box;
    }

    @media (max-width: 575px) {
        left: max(var(--callback-left, 1.6rem), env(safe-area-inset-left, 0px));
        bottom: calc(var(--callback-bottom, 1.6rem) + env(safe-area-inset-bottom, 0px));
    }

    @media (prefers-reduced-motion: reduce) {
        &, & * {
            transition: none !important;
        }
    }

    &[data-open="true"] .icon-phone {
        opacity: 0;
        transform: rotate(55deg) scale(.8);
    }

    &[data-open="true"] .icon-close {
        opacity: 1;
        transform: rotate(0) scale(1);
    }
`;

export const Panel = styled.section`
    position: absolute;
    left: 0;
    bottom: 8.8rem;
    width: 25.8rem;
    height: 35rem;
    background: #fff6f0;
    max-width: calc(100vw - var(--callback-left, 3rem) - 3rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px));
    max-height: calc(100dvh - var(--callback-bottom, 3rem) - 11.8rem - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
    overflow: auto;
    overscroll-behavior: contain;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(1.4rem) scale(.97);
    transform-origin: bottom left;
    transition: opacity 320ms ease, transform 420ms cubic-bezier(.22, 1, .36, 1), visibility 0s 420ms;

    ${({ $open }) => $open && openPanel}

    @media (max-width: 575px) {
        bottom: calc(7.2rem + 1.6rem);
        max-width: calc(100vw - var(--callback-left, 1.6rem) - 1.6rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px));
        max-height: calc(100dvh - var(--callback-bottom, 1.6rem) - 16.6rem - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
    }

    @media (max-width: 575px) and (max-height: 520px) {
        height: auto;
    }
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    min-height: 35rem;
    padding: 14rem 2rem 2rem;

    @media (max-width: 575px) and (max-height: 520px) {
        min-height: 0;
        padding-top: 7.2rem;
    }
`;

export const Ornament = styled.svg`
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 21.8rem;
    height: 3.1rem;
    max-width: calc(100% - 4rem);
`;

export const Heading = styled.h2`
    margin: 0;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 110%;
    white-space: nowrap;

    @media (max-width: 575px) {
        white-space: normal;
    }
`;

export const Links = styled.nav`
    margin-top: 2.3rem;
    width: max-content;
    min-width: min(19.2rem, 100%);
    max-width: 100%;
`;

export const ContactLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    height: 4.8rem;
    border-top: 1px solid rgb(150 40 31 / 10%);
    color: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 110%;
    white-space: nowrap;

    @media (max-width: 575px) {
        height: auto;
        min-height: 4.8rem;
        white-space: normal;
    }

    &:last-child {
        border-bottom: 1px solid rgb(150 40 31 / 10%);
    }

    svg {
        width: 2.4rem;
        height: 2.4rem;
        flex-shrink: 0;
    }

    svg, span {
        transition: opacity 250ms ease;
    }

    &:hover svg, &:hover span {
        opacity: .6;
    }

    &:focus-visible {
        outline: 0.2rem solid var(--accent);
        outline-offset: 0.4rem;
    }
`;

const toggleIcon = css`
    position: absolute;
    inset: 0;
    width: 7.2rem;
    height: 7.2rem;
    transition: opacity 260ms ease, transform 420ms cubic-bezier(.22, 1, .36, 1);

    rect[stroke] {
        transition: stroke-opacity 300ms ease;
    }
`;

export const Toggle = styled.button`
    position: relative;
    display: block;
    width: 7.2rem;
    height: 7.2rem;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #fff6f0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    .icon-phone, .icon-close {
        ${toggleIcon}
    }

    .icon-close {
        opacity: 0;
        transform: rotate(-70deg) scale(.8);
    }

    &:hover svg rect[stroke],
    &:focus-visible svg rect[stroke] {
        stroke-opacity: 1;
    }

    &:focus-visible {
        outline: 0.2rem solid var(--accent);
        outline-offset: 0.4rem;
    }
`;
