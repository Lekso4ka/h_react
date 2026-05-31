import styled from "@emotion/styled"
import img from "../../assets/img"
export const Shell = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
`;
export const BarBg = styled.div`
	position: absolute;
	inset: 0;
	z-index: 0;
	background: var(--Beige, #FFF6F0);
	opacity: ${({light}) => light ? 1 : 0};
	pointer-events: none;
`;

export const HeaderBlock = styled.header`
    position: absolute;
    height: 9.2rem;
    padding: 1.8rem 2.4rem .8rem;
    top: 0;
    width: 100%;
    z-index: 1;
    border-bottom: .1rem solid ${({light}) =>
    light ? "rgba(150, 40, 31, 0.40)": "transparent"
};
    color: ${({light}) => light ? "#2F3034" : "#fff"};
    svg {
        fill: ${({light}) => light ? "#2F3034" : "#fff"};
    }
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 14rem;
    box-sizing: border-box;
    &::after {
        height: .1rem;
        background: rgba(150, 40, 31, 0.20);
        width: calc(100% - 4.8rem);
        content: "";
        position: absolute;
        bottom: -.1rem;
        left: 2.4rem;
    }
`
export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.8rem;
    position: relative;
    z-index: 1;
`
export const HeaderMenu2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7.2rem;
    position: relative;
    z-index: 1;
`
export const HeaderLink = styled.button`
    display: grid;
    grid-template-columns: 1fr 1.4rem;
    gap: 1.1rem;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
    cursor: pointer;
    align-items: center;
    svg {
        width: 1.4rem;
        height: 1.4rem;
        transition: transform 120ms ease-in-out;
        transform: rotate(${({$active}) => $active ? "45deg" : 0});
    }
`

export const HeaderLink2 = styled.a`
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
    cursor: pointer;
`
export const HeaderName = styled.div`
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 98%; /* 21.56px */
    text-transform: uppercase;
    z-index: 1;
`
export const HeaderButton = styled.button`
    display: flex;
    width: 20rem;
    height: 3.8rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #96281F;
    backdrop-filter: blur(.8rem);
    color: #FFF6F0;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
`
export const HeaderLang = styled.div`
    display: flex;
    gap: .4rem;
    align-items: center;
    font-family: "Playfair Display",serif;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: .5rem;
    span:first-of-type {
        cursor: pointer;
        opacity: .4;
    }
    span:last-of-type {
        cursor: pointer;
    }
`

export const Drop = styled.div`
	position: fixed;
    top: 9.2rem;
	left: 0;
	right: 0;
	z-index: 49;
	height: 0;
	overflow: hidden;
	background: #fff6f0;
	pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    border-bottom: .1rem solid rgba(150, 40, 31, 0.40);
`;

export const Inner = styled.div`
	opacity: 0;
`;

export const Grid = styled.div`
	display: flex;
	height: 55.8rem;
    overflow: hidden;
    justify-content: center;
`;
export const Column = styled.div`
    box-sizing: border-box;
	border-left: ${(p) => (p.$withLeftBorder ? ".1rem solid rgba(150, 40, 31, 0.40)" : "none")};
	border-right: .1rem solid rgba(150, 40, 31, 0.40);
    width: 25%;
`;
export const ColumnLink = styled.a`
	display: grid;
    grid-template-rows: auto 1fr;
    gap: 1.6rem;
	flex-direction: column;
	height: 100%;
	padding: 2.4rem;
    box-sizing: border-box;
    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 1.8rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.072rem;
        text-transform: uppercase;
    }
    .img {
        position: relative;
        padding: 2.4rem;
        background-color: #D9D9D9;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${({pic}) => img[pic]});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: .5rem;
        .digit {
            color: #fff;
            font-family: "Playfair Display";
            font-size: 3.4rem;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.136rem;
        }
        .label {
            color: #fff;
            font-family: "Playfair Display";
            font-size: 1.8rem;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.072rem;
            text-transform: uppercase;
        }
    }
`;