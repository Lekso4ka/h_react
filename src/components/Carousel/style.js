import styled from "@emotion/styled"
import img from "../../assets/img";

export const Root = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
`;
export const Tour = styled.a`
	z-index: 2;
	cursor: pointer;
	width: 8.5rem;
	height: 6.9rem;
	position: absolute;
	top: 2.4rem;
	left: 3rem;
	box-sizing: border-box;
	padding: 1rem 2rem;
	display: grid;
	background: var(--Beige, #FFF6F0);
	span:first-of-type {
		color: var(--Black-2, #2F3034);
		font-size: 1.6rem;
		font-weight: 500;
		line-height: 110%; /* 17.6px */
	}
	span:last-of-type {
		color: var(--Black-2, #2F3034);
		font-family: "Playfair Display";
		font-size: 2.4rem;
		font-weight: 400;
		line-height: normal;
	}
`
export const Viewport = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

export const Track = styled.div`
	display: flex;
	height: 100%;
	will-change: transform;
`;

export const Slide = styled.div`
	flex: 0 0 100%;
	height: 100%;
`;

export const SlideImage = styled.div`
	width: 100%;
	height: 100%;
	background: ${({pic}) =>`linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img[pic.img]}) ${pic.pos}` };
	display: block;
	user-select: none;
`;

export const Arrow = styled.button`
	position: absolute;
	${(p) => (p.$side === "left" ? "left: 2.4rem;" : "right: 2.4rem;")}
	transform: translateY(-50%);
	z-index: 2;
	width: 3.1rem;
	height: 2.9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 120ms ease;
	svg {
		width: 100%;
		height: 100%;
	}

	&:active {
		transform: translateY(-50%) scale(0.96);
	}
`;


export const Dots = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: .4rem;
	position: absolute;
	bottom: 2.4rem;
	right: 2.4rem;
`;

export const Dot = styled.button`
	width: .8rem;
	height: .8rem;
	padding: 0;
	border-radius: 50%;
	border: .1rem solid #fff;
	background-color: ${(p) => (p.$active ? "#fff" : "transparent")};
	cursor: pointer;
	transition: background-color 200ms ease;
`;