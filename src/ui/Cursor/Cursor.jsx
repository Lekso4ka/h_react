import React from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

export function Cursor({ visible, active = false, x = 0, y = 0, label }) {
	if (typeof document === "undefined") return null;

	return createPortal(
		<Crsr
			$visible={visible}
			$active={active}
			pos={{x, y}}
			//style={{ transform: `scale(.5)` }}
			aria-hidden="true"
		>
			<Label>{label}</Label>
		</Crsr>,
		document.body
	);
}

const Crsr = styled.div`
	position: fixed;
	top: ${ ({ pos }) => pos.y }px;
	left: ${ ({ pos }) => pos.x }px;
	z-index: 9999;
	transform: translate(-50%, -50%);
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 1px solid rgba(255, 246, 240, 0.30);
	background: rgba(255, 243, 227, 0.3);
	backdrop-filter: blur(10px);
	//color: var(--Black-2, #2F3034);
	color: #fff;
	text-align: center;
	font-family: Manrope;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: 0.048rem;
	text-transform: uppercase;
	pointer-events: none;
	user-select: none;
	opacity: ${ (p) => (p.$visible ? 1 : 0) };
	transform-origin: center center;
	transition: opacity 0.4s ease, transform .4s linear,
	scale 0.2s ease;
	scale: ${ (p) => (p.$visible && !p.$active ? 1 : p.$active ? 0.94 : .5) };
	will-change: transform, opacity;
`;

const Label = styled.span`

`;
