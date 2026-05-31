import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import { HeaderLink, HeaderLink2 } from "./style";

export const NavItem = ({ item, active, onEnter, onNavigate, light }) => {
    const content = (
        <>
            {item.label}
            {item.hasMenu && <Icon name="plus" color={light ? "#2F3034" : "#fff"}/>}
        </>
    );
    
    if (item.hasMenu) {
        return (
            <HeaderLink
                type="button"
                $active={active}
                onMouseEnter={() => onEnter(item.id)}
                onFocus={() => onEnter(item.id)}
                onClick={() => onEnter("")}
            >
                {content}
            </HeaderLink>
        );
    }
    
    return (
        <HeaderLink2
            as={item.href?.startsWith("/") ? Link : "a"}
            to={item.href?.startsWith("/") ? item.href : undefined}
            state={{id: item.label}}
            href={item.href?.startsWith("/") ? undefined : item.href ?? "#"}
            onClick={(e) => {
                if (item.href?.startsWith("#")) {
                    e.preventDefault();
                    onNavigate(item.href.slice(1));
                }
            }}
        >
            {content}
        </HeaderLink2>
    );
}