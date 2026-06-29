import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../../../ui/Icon";
import { ALL_MENU_NAV } from "../data";
import { Dropdown } from "../Desktop/Dropdown";
import { AccItem } from "./AccItem";
import { Container, BarBg, NavBlock, Button } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NAV } from "./data";
const dark = ["/", "/hotel/golden-tulip", "/hotel/tulip-inn", "/activities/winter", "/activities/summer", "/actions", "/vacations", "/wedding"]

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SCROLL_RANGE = 80;
const HEADER_HEIGHT = 78;

const LIGHT_BG = "#fff6f0";

export const Mobile = () => {
    const shellRef = useRef(null);
    const bgRef = useRef(null);
    const scrolledRef = useRef(false);
    const navigate = useNavigate();
    const location = useLocation()
    const isHeroRouteRef = useRef(false);
    
    
    const [activeMenuId, setActiveMenuId] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isHeroRoute = dark.includes(location.pathname);
    const lightHeader = !isHeroRoute || scrolled || menuOpen;
    isHeroRouteRef.current = isHeroRoute;
    const activeMenu = useMemo(
        () => ALL_MENU_NAV.find((item) => item.id === activeMenuId) ?? null,
        [activeMenuId]
    );
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : null;
    }, [menuOpen])
    
    const applyBg = useCallback(
        ({ opacity, immediate = false } = {}) => {
            if (!bgRef.current) return;
            
            if (!isHeroRouteRef.current) {
                gsap.killTweensOf(bgRef.current);
                gsap.set(bgRef.current, {
                    backgroundColor: LIGHT_BG,
                    opacity: 1
                });
                return;
            }
            
            const targetOpacity =
                opacity ?? (scrolledRef.current || menuOpenRef.current ? 1 : 0);
            
            gsap.to(bgRef.current, {
                backgroundColor: LIGHT_BG,
                opacity: targetOpacity,
                duration: immediate ? 0 : 0.22,
                ease: "power2.out",
                overwrite: true
            });
        },
        []
    );
    const closeMenu = useCallback(() => {
        //menuOpenRef.current = false;
        setMenuOpen(false);
    }, []);
    useEffect(() => {
        scrolledRef.current = false;
        setScrolled(false);
        closeMenu();
        
        if (!isHeroRoute) {
            applyBg({ opacity: 1, immediate: true });
        } else {
            applyBg({ opacity: 0, immediate: true });
        }
        
        ScrollTrigger.refresh();
    }, [location.pathname, isHeroRoute, applyBg, closeMenu]);
    
    useGSAP(
        () => {
            if (!bgRef.current) return;
            
            gsap.set(bgRef.current, { backgroundColor: LIGHT_BG, opacity: isHeroRoute ? 0 : 1 });
            
            if (!isHeroRoute) return undefined;
            
            const trigger = ScrollTrigger.create({
                start: "top top",
                end: `+=${ SCROLL_RANGE }`,
                scrub: 0.35,
                onUpdate: (self) => {
                    //if (!isHeroRouteRef.current || menuOpenRef.current) return;
                    
                    gsap.set(bgRef.current, {
                        backgroundColor: LIGHT_BG,
                        opacity: self.progress
                    });
                    
                    const next = self.progress > 0.02;
                    if (scrolledRef.current !== next) {
                        scrolledRef.current = next;
                        setScrolled(next);
                    }
                }
            });
            
            return () => trigger.kill();
        },
        { scope: shellRef, dependencies: [isHeroRoute] }
    );
    
    useGSAP(
        () => {
            if (!bgRef.current) return;
            
            if (!isHeroRoute) {
                applyBg({ immediate: true });
                return;
            }
            
            if (menuOpen || scrolledRef.current) {
                applyBg({ opacity: 1 });
                return;
            }
            
            applyBg({ opacity: 0 });
        },
        { scope: shellRef, dependencies: [menuOpen, isHeroRoute, applyBg] }
    );
    
    const openMenu = useCallback((id) => {
        const item = ALL_MENU_NAV.find((nav) => nav.id === id);
        if (!item) return;
        menuOpenRef.current = true;
        setActiveMenuId(id);
        setMenuOpen(true);
    }, []);
    
    const handleShellLeave = useCallback(() => {
        closeMenu();
    }, [closeMenu]);
    
    const linkHandler = (e, src) => {
        e.preventDefault();
        closeMenu();
        navigate(src)
    }
    
    //const navigateToHash = useCallback(
    //    (id) => {
    //        console.log(id)
    //        closeMenu();
    //        document.getElementById(id)?.scrollIntoView({ behavior: "smooth"});
    //    },
    //    [closeMenu, navigate, location.pathname]
    //);
    
    //const handleDropdownNavigate = useCallback(
    //    (href) => {
    //        closeMenu();
    //
    //        if (!href || href === "#") return;
    //
    //        if (href.startsWith("/")) {
    //            navigate(href);
    //            return;
    //        }
    //
    //        if (href.startsWith("#")) {
    //            const id = href.slice(1);
    //            if (location.pathname !== "/") {
    //                navigate(`/#${ id }`);
    //                return;
    //            }
    //            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    //        }
    //    },
    //    [closeMenu, navigate, location.pathname]
    //);
    
    
    return <Container
        ref={ shellRef }
        onMouseLeave={ handleShellLeave }
        light={lightHeader}
        active={menuOpen}
    >
        
        <header >
            <BarBg
                ref={ bgRef }
                light={ lightHeader }
                aria-hidden="true"
            />
            <button>EN</button>
            <Link to="/">Голден<br/>Тюлип & Тюлип<br/>Инн</Link>
            <Icon name="burger" onClick={() => {setMenuOpen(!menuOpen)}}/>
        </header>
        <NavBlock
            activeId={ activeMenuId }
            open={ menuOpen }
            top={ HEADER_HEIGHT }
            columns={ activeMenu?.columns ?? [] }
        >
            <div className="nav">
            <nav>
                {NAV.map(el => el.hasMenu
                    ? <AccItem title={el.label} data={el.columns} key={el.id} close={closeMenu} />
                    : <Link to="" key={el.id} onClick={() => linkHandler(e, el.href)}>{el.label}</Link>)}
            </nav>
            </div>
            <div className="address">
                <h5>Адрес отелей</h5>
                <p>Россия, Краснодарский край, г. Сочи, Панорама наб., 2-3</p>
            </div>
            <Button>Бронировать</Button>
        </NavBlock>
        
    </Container>
}