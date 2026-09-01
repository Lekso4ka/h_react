import styled from "@emotion/styled"

export const Container = styled.div`
    position: fixed;
    height: 7.8rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    header {
        height: 100%;
        position: relative;
        z-index: 2;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 1.5rem 1.6rem;
        color: ${ ({ light }) => light ? "#2F3034" : "#fff" };
        button {
            font-family: "Playfair Display";
            width: 4rem;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 600;
            line-height: 98%; /* 15.68px */
            text-transform: uppercase;
        }
        &>a {
            text-align: center;
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 16px */
            text-transform: uppercase;
        }
        svg {
            width: 4rem;
        }
        rect {
            fill: ${ ({ light }) => light ? "#2F3034" : "#fff" };
            transition-property: transform, opacity;
            transition-duration: .2s;
            &:nth-of-type(1) {
                transform-origin: left center;
                transform: ${({active}) => active ? "rotate(17deg)" : "rotate(0)"};
            }
            &:nth-of-type(2) {
                opacity: ${({active}) => active ? 0 : 1};
            }
            &:nth-of-type(3) {
                transform-origin: left center;
                transform: ${({active}) => active ? "rotate(-17deg)" : "rotate(0)"};
            }
        }
    }
`

export const BarBg = styled.div`
	position: absolute;
	inset: 0;
	z-index: -1;
	background: var(--Beige, #FFF6F0);
	opacity: ${({light}) => light ? 1 : 0};
	pointer-events: none;
`;

export const NavBlock = styled.div`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 7.8rem 1.6rem 1.6rem;
    overflow: hidden;
    opacity: ${({open}) => open ? 1 : 0};
    background: #fff6f0;
    transition: opacity, .2s;
    pointer-events: ${ ({open}) => open ? "auto" : "none" };
    
    display: grid;
    grid-template-rows: 1fr auto auto;
    gap: 2.4rem;
    height: 100%;
    .nav {
        border-top: .1rem solid var(--Black-2, #2F3034);
        border-bottom: .1rem solid var(--Black-2, #2F3034);
        padding: 4.2rem 0;
        overflow: hidden;
    }
    nav {
        max-height: 100%;
        display: grid;
        gap: 2.2rem;
        align-content: flex-start;
        overflow: auto;
        &>a {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.064rem;
            text-transform: uppercase;
        }
    }
    .address {
        display: grid;
        gap: 1rem;
        h5 {
            color: var(--Gray-1, #565861);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        p {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.072rem;
        }
    }
`


export const AccItemSt = styled.div`
	overflow: hidden;
`;

export const AccTrigger = styled.button`
    color: var(--Black-2, #2F3034);
    font-family: "Playfair Display";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.064rem;
    text-transform: uppercase;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
	cursor: pointer;
    justify-items: flex-start;
    align-content: center;

	&:focus-visible {
		outline: 2px solid red;
		outline-offset: -2px;
	}
`;

export const AccTitle = styled.span`
    display: flex;
    align-items: baseline;
    gap: 1rem;
    span {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.4rem;
        font-style: italic;
        font-weight: 400;
        line-height: 110%;
    }
`;

export const AccButton = styled.span`
    display: flex;
    align-items: center;
    span {
        display: flex;
        height: 1.4rem;
        svg {
            height: 100%;
        }
    }
`;

export const AccPanel = styled.div`
	overflow: hidden;
`;

export const AccInner = styled.div`
    color: var(--Gray-1, #565861);
    font-family: "Playfair Display";
    padding-top: 1.4rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.064rem;
    text-transform: uppercase;
        display: grid;
        gap: 1.4rem;
        font-style: normal;
        line-height: 140%; /* 16.8px */
`;

export const Button = styled.button`
    height: 5.1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Red, #96281F);
    color: #FFF6F0;
    text-align: center;
    font-family: "Playfair Display";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.056rem;
    text-transform: uppercase;
`