import React from 'react';
import styled from "@emotion/styled"
import a1 from "../assets/images/acti.png"

const Banner = styled.section`
    padding: 15rem 0 26rem;
    box-sizing: border-box;
    height: 76rem;
    background-image: url(${a1});
    background-position: center;
    background-size: cover;
    overflow: hidden;
    display: flex;
    align-content: flex-end;
    color: var(--Beige, #FFF6F0);
    font-family: "Playfair Display";
    font-size: 64px;
    font-style: italic;
    font-weight: 400;
    line-height: 110%; /* 70.4px */
`

export const Actions = () => {
    return <>
        <Banner>
            <h1>Акции отеля</h1>
        </Banner>
    </>
}