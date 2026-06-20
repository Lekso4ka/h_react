import React, { useRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const DRAG_LOCK_PX = 8;
const MOMENTUM_FACTOR = 0.45;
const MOMENTUM_DURATION = 0.85;

function isMousePointer(event) {
	return !event.pointerType || event.pointerType === "mouse";
}

export function HorizontalDragRail({
	children,
	className,
	gap = 20,
	edgePadding,
	customCursor = false,
	onDragStart,
	onDragEnd
}) {
	const rootRef = useRef(null);
	const viewportRef = useRef(null);
	const trackRef = useRef(null);

	const xRef = useRef(0);
	const boundsRef = useRef({ min: 0, max: 0 });
	const dragRef = useRef({
		active: false,
		pointerId: null,
		startX: 0,
		startY: 0,
		startScrollX: 0,
		deltaX: 0,
		axis: null,
		lastX: 0,
		lastTime: 0,
		velocity: 0
	});

	useGSAP(
		() => {
			const viewport = viewportRef.current;
			const track = trackRef.current;
			if (!viewport || !track) return;

			const clamp = (value) =>
				Math.min(boundsRef.current.max, Math.max(boundsRef.current.min, value));

			const applyX = (nextX, { animate = false } = {}) => {
				const clamped = clamp(nextX);
				xRef.current = clamped;
				if (animate) {
					gsap.to(track, {
						x: clamped,
						duration: MOMENTUM_DURATION,
						ease: "power3.out",
						overwrite: true
					});
				} else {
					gsap.set(track, { x: clamped, overwrite: true });
				}
			};

			const measure = () => {
				const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
				boundsRef.current = { min: -maxScroll, max: 0 };
				applyX(xRef.current);
			};

			const onPointerDown = (event) => {
				if (event.pointerType === "mouse" && event.button !== 0) return;

				gsap.killTweensOf(track);

				const now = performance.now();
				dragRef.current = {
					active: true,
					pointerId: event.pointerId,
					startX: event.clientX,
					startY: event.clientY,
					startScrollX: xRef.current,
					deltaX: 0,
					axis: null,
					lastX: event.clientX,
					lastTime: now,
					velocity: 0
				};

				viewport.setPointerCapture(event.pointerId);
				if (!customCursor) viewport.style.cursor = "grabbing";
				if (customCursor && isMousePointer(event)) onDragStart?.();
				//viewport.style.cursor = `url(${c.v3}) 60 60, grabbing`;
				
			};

			const onPointerMove = (event) => {
				const drag = dragRef.current;
				if (!drag.active || drag.pointerId !== event.pointerId) return;

				const deltaX = event.clientX - drag.startX;
				const deltaY = event.clientY - drag.startY;

				if (drag.axis === null) {
					if (Math.abs(deltaX) < DRAG_LOCK_PX && Math.abs(deltaY) < DRAG_LOCK_PX) return;
					drag.axis = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
					if (drag.axis === "y") {
						viewport.releasePointerCapture(event.pointerId);
						drag.active = false;
						if (!customCursor) viewport.style.cursor = "";
						if (customCursor && isMousePointer(event)) onDragEnd?.();
						return;
					}
				}

				if (drag.axis !== "x") return;

				event.preventDefault();

				const now = performance.now();
				const dt = now - drag.lastTime;
				if (dt > 0) {
					drag.velocity = (event.clientX - drag.lastX) / dt;
				}
				drag.lastX = event.clientX;
				drag.lastTime = now;
				drag.deltaX = deltaX;

				applyX(drag.startScrollX + deltaX);
			};

			const finishDrag = (event) => {
				const drag = dragRef.current;
				if (!drag.active || drag.pointerId !== event.pointerId) return;

				viewport.releasePointerCapture(event.pointerId);
				drag.active = false;
				if (!customCursor) viewport.style.cursor = "";
				if (customCursor && isMousePointer(event)) onDragEnd?.();

				if (drag.axis === "x") {
					const projected = xRef.current + drag.velocity * 1000 * MOMENTUM_FACTOR;
					applyX(projected, { animate: true });
				}

				drag.axis = null;
				drag.deltaX = 0;
				drag.velocity = 0;
			};

			const onPointerCancel = (event) => {
				const drag = dragRef.current;
				if (!drag.active || drag.pointerId !== event.pointerId) return;
				viewport.releasePointerCapture(event.pointerId);
				drag.active = false;
				if (!customCursor) viewport.style.cursor = "";
				if (customCursor && isMousePointer(event)) onDragEnd?.();
				applyX(xRef.current, { animate: true });
				drag.axis = null;
			};

			measure();

			const ro = new ResizeObserver(measure);
			ro.observe(viewport);
			ro.observe(track);

			viewport.addEventListener("pointerdown", onPointerDown);
			viewport.addEventListener("pointermove", onPointerMove);
			viewport.addEventListener("pointerup", finishDrag);
			viewport.addEventListener("pointercancel", onPointerCancel);

			return () => {
				ro.disconnect();
				gsap.killTweensOf(track);
				viewport.removeEventListener("pointerdown", onPointerDown);
				viewport.removeEventListener("pointermove", onPointerMove);
				viewport.removeEventListener("pointerup", finishDrag);
				viewport.removeEventListener("pointercancel", onPointerCancel);
			};
		},
		{ scope: rootRef, dependencies: [children, customCursor, onDragStart, onDragEnd], revertOnUpdate: true }
	);

	return (
		<Root ref={rootRef} className={className}>
			<Viewport ref={viewportRef} data-drag-status="grab" $customCursor={customCursor}>
				<Track ref={trackRef} $gap={gap} $edgePadding={edgePadding}>
					{children}
				</Track>
			</Viewport>
		</Root>
	);
}

const Root = styled.div`
	width: 100%;
	height: 100%;
`;

const Viewport = styled.div`
	overflow: hidden;
	width: 100%;
	cursor: ${(p) => (p.$customCursor ? "none" : "grab")};
	touch-action: pan-y;
	user-select: none;
	height: 100%;

	&:active {
		cursor: ${(p) => (p.$customCursor ? "none" : "grabbing")};
	}
`;

const Track = styled.div`
	display: flex;
	align-items: stretch;
	width: max-content;
	padding: 0 1.6rem;
	gap: 3.2rem;
	position: relative;
	
	&::before,
	&::after {
		position: absolute;
		content: "";
		left: 1.6rem;
		width: 102.4rem;
		height: .1rem;
		background: rgba(150, 40, 31, 0.20);
	}
	
	&::before {
		top: 0
	}
	
	&::after {
		bottom: 0
	}
	will-change: transform;
	touch-action: pan-y;
	@media (min-width: 576px) {
		&::before,
		&::after {
			display: none;
		}
		padding: 0 2.1rem;
		//grid-template-columns: repeat(3, 45.2rem);
		gap: 4.3rem;
		height: 100%;
	}
`;
