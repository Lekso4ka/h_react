import React, { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { mediaUrl } from "../../../utils/mediaUrl";
import { PopupClose, PopupEnd, PopupPhoto, PopupScroller, PopupTrack } from "./style";

export const PhotoPopup = ({ images = [], active, index, offset, onClose, closeLabel }) => {
    const scrollerRef = useRef(null);
    const dragRef = useRef({ y: 0, moved: false });

    useLayoutEffect(() => {
        if (!active) return;
        const scroller = scrollerRef.current;
        const photo = scroller?.querySelector(`[data-index="${index}"]`);
        if (!scroller || !photo) return;
        scroller.scrollTop = Math.max(0, photo.offsetTop - offset);
    }, [active, index, offset]);

    useEffect(() => {
        if (!active) return undefined;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [active, onClose]);

    if (!active) return null;

    return createPortal(
        <PopupScroller
            ref={scrollerRef}
            $offset={offset}
            onPointerDown={(event) => {
                dragRef.current = { y: event.clientY, moved: false };
            }}
            onPointerMove={(event) => {
                if (Math.abs(event.clientY - dragRef.current.y) > 8) dragRef.current.moved = true;
            }}
            onClick={() => {
                if (!dragRef.current.moved) onClose();
            }}
        >
            <PopupTrack $offset={offset}>
                <PopupClose
                    type="button"
                    $offset={offset}
                    aria-label={closeLabel}
                    onClick={(event) => {
                        event.stopPropagation();
                        onClose();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M5 0H7V12H5V0Z" fill="#2F3034"/>
                        <path d="M12 5V7H0V5H12Z" fill="#2F3034"/>
                    </svg>
                </PopupClose>
                {images.map((src, i) => (
                    <PopupPhoto
                        key={`${src}-${i}`}
                        data-index={i}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img src={mediaUrl(src)} alt="" draggable={false}/>
                    </PopupPhoto>
                ))}
                <PopupEnd/>
            </PopupTrack>
        </PopupScroller>,
        document.body
    );
};
