import { useEffect, useRef, useState } from "react";

function isMousePointer(event) {
	return !event.pointerType || event.pointerType === "mouse";
}

export function useCursor({ zoneRef, dragging = false }) {
	const [visible, setVisible] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const insideRef = useRef(false);
	const draggingRef = useRef(false);

	useEffect(() => {
		draggingRef.current = dragging;
		if (dragging) {
			setVisible(true);
			return;
		}
		if (!insideRef.current) {
			setVisible(false);
		}
	}, [dragging]);

	useEffect(() => {
		const zone = zoneRef.current;
		if (!zone) return;

		const syncVisible = () => {
			setVisible(insideRef.current || draggingRef.current);
		};

		const updatePosition = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		const onPointerEnter = (event) => {
			if (!isMousePointer(event)) return;
			insideRef.current = true;
			updatePosition(event);
			syncVisible();
		};

		const onPointerLeave = (event) => {
			if (!isMousePointer(event)) return;
			insideRef.current = false;
			if (!draggingRef.current) {
				syncVisible();
			}
		};

		const onPointerMove = (event) => {
			if (!isMousePointer(event)) return;
			if (!insideRef.current && !draggingRef.current) return;
			updatePosition(event);
		};

		const onWindowPointerUp = () => {
			if (!draggingRef.current) return;
			requestAnimationFrame(() => {
				if (!insideRef.current) {
					setVisible(false);
				}
			});
		};

		zone.addEventListener("pointerenter", onPointerEnter);
		zone.addEventListener("pointerleave", onPointerLeave);
		zone.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerup", onWindowPointerUp);

		return () => {
			zone.removeEventListener("pointerenter", onPointerEnter);
			zone.removeEventListener("pointerleave", onPointerLeave);
			zone.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", onWindowPointerUp);
		};
	}, [zoneRef]);

	return { visible, position };
}
