import React from "react";

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
                <span>Активности</span>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink>
                <span>Услуги</span>
                <Icon name="plus"/>
            </HeaderLink>
            <HeaderLink>
                <span>События</span>
                <Icon name="plus"/>
            </HeaderLink>
        </HeaderMenu>
        <HeaderName>Голден<br/>Тюлип & Тюлип<br/>Инн</HeaderName>
        <HeaderMenu2>
            <HeaderLink>
                <span>Акции</span>
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