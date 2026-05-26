import React from "react";
import {Link} from "react-router-dom";

import {Icon} from "../Icon"
import {
    HeaderBlock,
    HeaderButton,
    HeaderLang,
    HeaderLink,
    HeaderLink2,
    HeaderMenu,
    HeaderMenu2,
    HeaderName
} from "./style";

export const Header = () => {
    return <HeaderBlock>
        <HeaderMenu>
            <HeaderLink>
                <span>Отели</span>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink>
                <Link to={"/activities"}>Активности</Link>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink>
                <Link to={"/zal"}>Услуги</Link>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink>
                <Link to={"/events"}>События</Link>
                <Icon name="plus"/>
            </HeaderLink>
        </HeaderMenu>
        <HeaderName><Link to={"/"}>Голден<br/>Тюлип & Тюлип<br/>Инн</Link></HeaderName>
        <HeaderMenu2>
            <HeaderLink>
                <Link to={"/actions"}>Акции</Link>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink2>
                Контакты
            </HeaderLink2>
            <HeaderButton>
                Бронировать
            </HeaderButton>
            <HeaderLang>
                <span>ru</span>
                <span>|</span>
                <span>en</span>
            </HeaderLang>
        </HeaderMenu2>
    </HeaderBlock>
}