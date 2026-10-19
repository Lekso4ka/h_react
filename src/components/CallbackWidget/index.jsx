import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { ChatIcon, CloseToggleIcon, EmailIcon, OrnamentIcon, PhoneToggleIcon, TelIcon } from "./icons";
import { ContactLink, Heading, Inner, Links, Ornament, Panel, Toggle, Widget } from "./style";

const LINKS = [
    { href: "tel:+78622431300", label: "+7 (862) 243-13-00", Icon: TelIcon },
    { href: "mailto:reservation@gt-hotel.ru", label: "reservation@gt-hotel.ru", Icon: EmailIcon },
    { href: "https://t.me/gt-hotel", label: "@gt-hotel", Icon: ChatIcon, external: true },
];

export const CallbackWidget = () => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const toggleRef = useRef(null);
    const panelRef = useRef(null);
    const uid = useId().replace(/:/g, "");
    const panelId = `callback-panel-${uid}`;
    const headingId = `callback-heading-${uid}`;

    openRef.current = open;

    const setOpenState = (next) => {
        const resolved = typeof next === "function" ? next(openRef.current) : next;
        if (!resolved && panelRef.current?.contains(document.activeElement)) {
            toggleRef.current?.focus({ preventScroll: true });
        }
        setOpen(resolved);
    };

    useLayoutEffect(() => {
        if (panelRef.current) panelRef.current.inert = !open;
    }, [open]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key !== "Escape" || !openRef.current) return;
            setOpenState(false);
            toggleRef.current?.focus({ preventScroll: true });
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <Widget data-open={open ? "true" : "false"}>
            <Panel
                ref={panelRef}
                id={panelId}
                $open={open}
                aria-labelledby={headingId}
                aria-hidden={!open}
            >
                <Inner>
                    <Ornament as={OrnamentIcon} />
                    <Heading id={headingId}>Связаться с нами:</Heading>
                    <Links aria-label="Способы связи">
                        {LINKS.map(({ href, label, Icon, external }) => (
                            <ContactLink
                                key={href}
                                href={href}
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
                            >
                                <Icon />
                                <span>{label}</span>
                            </ContactLink>
                        ))}
                    </Links>
                </Inner>
            </Panel>
            <Toggle
                ref={toggleRef}
                type="button"
                aria-controls={panelId}
                aria-expanded={open}
                aria-label={open ? "Закрыть контакты" : "Открыть контакты"}
                onClick={() => setOpenState((value) => !value)}
            >
                <PhoneToggleIcon />
                <CloseToggleIcon />
            </Toggle>
        </Widget>
    );
};
