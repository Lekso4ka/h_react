import React from "react";
import { Block, Bottom, Caption, Left, List, Right, Title } from "./style";

export const Footer = () => {
    return <Block aria-label="Подвал сайта">
        <Caption>Голден тюлип & Тюлип инн</Caption>
        
        <Left>
            <Title>Рассылка</Title>
            <p>Подпишитесь на рассылку и оставайтесь в курсе новостей и особых предложений.</p>
            <div className="form-row">
                <label>
                    <input type="text" placeholder="Имя"/>
                </label>
                <label>
                    <input type="email" placeholder="Почта"/>
                </label>
            </div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check"><span>Даю свое <a href="">согласие на обработку</a> моих персональных данных в соответствии с <a href="">политикой конфиденциальности</a>.</span></label>
            <button>Подписаться</button>
        </Left>
        <Right>
            <div>
                <Title>Отели</Title>
                <List>
                    <a href="/hotel/golden-tulip">Отель Голден Тюлип</a>
                    <a href="/hotel/tulip-inn">Отель Тюлип Инн</a>
                    <a href="">Вакансии</a>
                    <a href="/#contacts">Контакты</a>
                </List>
                <Title>СОЦ. СЕТИ</Title>
                <List>
                    <a href="">Вконтакте</a>
                </List>
            </div>
            <div>
                <Title>Навигация</Title>
                <List>
                    <a href="">Активности</a>
                    <a href="">СПА центр</a>
                    <a href="">Рестораны</a>
                    <a href="">Услуги отеля</a>
                    <a href="">Мероприятия</a>
                    <a href="">Конференц залы</a>
                    <a href="">Акции</a>
                    <a href="">Афиша</a>
                </List>
            </div>
            <div className="ftrCol">
                <Title>Информация</Title>
                <List>
                    <a href="">Сотрудничество</a>
                    <a href="">Правила отеля</a>
                    <a href="">Ответы на вопросы</a>
                </List>
            </div>
        </Right>
        
        <Bottom>
            <span>© 2026 все права защищены</span>
            <a href="">политика конфиденциальности</a>
            <a href="">правовая информация</a>
        </Bottom>
    </Block>
}