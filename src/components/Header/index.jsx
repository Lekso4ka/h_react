import React, { useRef, useState, useCallback, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Icon } from "../Icon"
import { Dropdown } from "./Dropdown";
import { NavItem } from "./NavItem";
import {
    BarBg,
    HeaderBlock,
    HeaderButton,
    HeaderLang,
    HeaderLink,
    HeaderLink2,
    HeaderMenu,
    HeaderMenu2,
    HeaderName, Shell
} from "./style";

const light = ["/"]

//import { setLanguage } from "../../app/i18n";
import { ALL_MENU_NAV, LEFT_NAV, RIGHT_NAV } from "./data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SCROLL_RANGE = 80;
const HEADER_HEIGHT = 92;

const LIGHT_BG = "#fff6f0";

export const Header = () => {
    const shellRef = useRef(null);
    const bgRef = useRef(null);
    const scrolledRef = useRef(false);
    const menuOpenRef = useRef(false);
    const navigate = useNavigate();
    const location = useLocation()
    const isHeroRouteRef = useRef(false);
    
    const [activeMenuId, setActiveMenuId] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isHeroRoute = !light.includes(location.pathname);
    const lightHeader = !isHeroRoute || scrolled || menuOpen;
    isHeroRouteRef.current = isHeroRoute;
    const activeMenu = useMemo(
        () => ALL_MENU_NAV.find((item) => item.id === activeMenuId) ?? null,
        [activeMenuId]
    );
    
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
        menuOpenRef.current = false;
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
                    if (!isHeroRouteRef.current || menuOpenRef.current) return;
                    
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
    
    const navigateToHash = useCallback(
        (id) => {
            closeMenu();
            if (location.pathname !== "/") {
                navigate(`/#${ id }`);
                return;
            }
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        },
        [closeMenu, navigate, location.pathname]
    );
    
    const handleDropdownNavigate = useCallback(
        (href) => {
            closeMenu();
            
            if (!href || href === "#") return;
            
            if (href.startsWith("/")) {
                navigate(href);
                return;
            }
            
            if (href.startsWith("#")) {
                const id = href.slice(1);
                if (location.pathname !== "/") {
                    navigate(`/#${ id }`);
                    return;
                }
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        [closeMenu, navigate, location.pathname]
    );
    
    return <Shell
        ref={ shellRef }
        onMouseLeave={ handleShellLeave }
    >
        <HeaderBlock light={ lightHeader }>
            <BarBg
                ref={ bgRef }
                light={ lightHeader }
                aria-hidden="true"
            />
            <HeaderMenu>
                { LEFT_NAV.map((item) => <NavItem
                    light={ lightHeader }
                    key={ item.id }
                    item={ item }
                    active={ menuOpen && activeMenuId === item.id }
                    onEnter={ openMenu }
                    onNavigate={ navigateToHash }
                />) }
            </HeaderMenu>
            <HeaderName><Link to={ "/" } state={ { id: "home" } }>Голден<br/>Тюлип & Тюлип<br/>Инн</Link></HeaderName>
            <HeaderMenu2>
                { RIGHT_NAV.map((item) => <NavItem
                    light={ lightHeader }
                    key={ item.id }
                    item={ item }
                    active={ menuOpen && activeMenuId === item.id }
                    onEnter={ openMenu }
                    onNavigate={ navigateToHash }
                />) }
                <HeaderButton>
                    Бронировать
                </HeaderButton>
                <HeaderLang>
                    <span>ru</span>
                    <span>|</span>
                    <span>en</span>
                </HeaderLang>
                {/*<LangSwitch aria-label="Выбор языка">*/ }
                {/*    <LangBtn*/ }
                {/*        type="button"*/ }
                {/*        $active={lang === "ru"}*/ }
                {/*        onClick={() => switchLang("ru")}*/ }
                {/*    >*/ }
                {/*        RU*/ }
                {/*    </LangBtn>*/ }
                {/*    <LangDivider aria-hidden="true">|</LangDivider>*/ }
                {/*    <LangBtn*/ }
                {/*        type="button"*/ }
                {/*        $active={lang === "en"}*/ }
                {/*        onClick={() => switchLang("en")}*/ }
                {/*    >*/ }
                {/*        EN*/ }
                {/*    </LangBtn>*/ }
                {/*</LangSwitch>*/ }
            </HeaderMenu2>
        </HeaderBlock>
        
        <Dropdown
            activeId={ activeMenuId }
            open={ menuOpen }
            top={ HEADER_HEIGHT }
            columns={ activeMenu?.columns ?? [] }
            brands={ activeMenu?.brands ?? [] }
            onNavigate={ handleDropdownNavigate }
        />
    </Shell>
}

const Inner = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: 24px;
    padding: 0 clamp(16px, 3vw, 48px);
`;

const navItemStyles = `
	font-family: inherit;
	font-size: 12px;
	font-weight: 500;
	line-height: 1;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.88);
	background: transparent;
	border: 0;
	padding: 8px 0;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	text-decoration: none;
	transition: color 160ms ease, opacity 160ms ease;
	white-space: nowrap;

	&:hover {
		color: #fff;
	}
`;

const LeftNav = styled.nav`
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 28px);
    justify-self: start;

    @media (max-width: ${ (p) => p.theme.breakpoints.xl }px) {
        gap: 14px;
    }

    @media (max-width: ${ (p) => p.theme.breakpoints.lg }px) {
        display: none;
    }
`;

const RightNav = styled.nav`
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 28px);
`;

const NavButton = styled.button`
    ${ navItemStyles }
    color: ${ (p) => (p.$active ? "#fff" : "rgba(255, 255, 255, 0.88)") };
`;

const NavAnchor = styled.a`
    ${ navItemStyles }
`;

const Plus = styled.span`
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0;
    opacity: 0.9;
`;

const Logo = styled.a`
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    text-align: center;
    color: #fff;
    text-decoration: none;

    span {
        font-family: inherit;
        font-size: clamp(11px, 1vw, 13px);
        font-weight: 500;
        line-height: 1.15;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }
`;

const RightBlock = styled.div`
    justify-self: end;
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 24px);

    @media (max-width: ${ (p) => p.theme.breakpoints.lg }px) {
        gap: 10px;
    }
`;

const BookButton = styled.button`
    border: 0;
    padding: 12px 18px;
    background: #8f1d1d;
    color: #fff;
    font-family: inherit;
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 160ms ease, transform 120ms ease;

    &:hover {
        background: #7a1818;
    }

    &:active {
        transform: translateY(1px);
    }

    @media (max-width: ${ (p) => p.theme.breakpoints.md }px) {
        padding: 10px 12px;
        font-size: 10px;
    }
`;

const LangSwitch = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    @media (max-width: ${ (p) => p.theme.breakpoints.sm }px) {
        display: none;
    }
`;

const LangBtn = styled.button`
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${ (p) => (p.$active ? "#fff" : "rgba(255, 255, 255, 0.42)") };
    transition: color 160ms ease;

    &:hover {
        color: #fff;
    }
`;

const LangDivider = styled.span`
    color: rgba(255, 255, 255, 0.28);
    font-size: 11px;
    line-height: 1;
`;
