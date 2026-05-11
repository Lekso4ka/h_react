import React from 'react';
import {Global, css} from "@emotion/react";

import Playfair from "./fonts/PlayfairDisplay.ttf"
import Manrope from "./fonts/Manrope.ttf"

const globalSt = css`
    @font-face {
        font-family: "Playfair Display";
        src: url(${Playfair}) format("truetype");
        font-weight: 400 900;
        font-style: normal;
    }
    @font-face {
        font-family: "Manrope";
        src: url(${Manrope}) format("truetype");
        font-weight: 200 800;
        font-style: normal;
    }
    :root {
        --Black-2: #2F3034;
    }
    html {
        font-size: .52vw;
    }
    body {
        font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        margin: 0;
        min-height: 100vh;
        //overflow: hidden;
        background-color: #FFF6F0;
        color: #2F3034;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background-color: #313131;
        position: relative;
    }

    ::-webkit-scrollbar-thumb {
        background: #5e5d5d;
        border-radius: 4px;
        position: relative;
    }
`

export const GlobalStyles = () => <Global styles={globalSt} />