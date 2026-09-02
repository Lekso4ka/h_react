import React, { useState } from "react";
import { Block, Bottom, Caption, Left, List, Right, Title } from "./style";

const SUBSCRIBED_KEY = "newsletter-subscribed";

export const Footer = () => {
    const [subscribed, setSubscribed] = useState(() => {
        try {
            return sessionStorage.getItem(SUBSCRIBED_KEY) === "1";
        } catch {
            return false;
        }
    });
    const [sending, setSending] = useState(false);
    const formHandler = async (e) => {
        e.preventDefault();
        if (subscribed || sending) return;
        const form = e.currentTarget;
        if (!form.elements.consent.checked) return;
        const payload = {
            name: form.elements.name.value.trim(),
            email: form.elements.email.value.trim(),
            source: "newsletter",
        };
        setSending(true);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || "Ошибка отправки");
            }
            try {
                sessionStorage.setItem(SUBSCRIBED_KEY, "1");
            } catch { /* ignore */ }
            setSubscribed(true);
            form.reset();
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return <Block aria-label="Подвал сайта">
        <Caption>Голден тюлип & Тюлип инн</Caption>
        
        <Left>
            <Title>Рассылка</Title>
            <p>Подпишитесь на рассылку и оставайтесь в курсе новостей и особых предложений.</p>
            <form onSubmit={ formHandler }>
                <div className="form-row">
                    <label>
                        <input type="text" name="name" placeholder="Имя" required/>
                    </label>
                    <label>
                        <input type="email" name="email" placeholder="Почта" required/>
                    </label>
                </div>
                <label className="consent">
                    <input type="checkbox" name="consent" required={!subscribed}/>
                    <span>Даю свое <a href="/policy">согласие на обработку</a> моих персональных данных в соответствии с <a href="/policy">политикой конфиденциальности</a>.</span>
                </label>
                <button type="submit" disabled={ subscribed || sending }>
                    { subscribed ? "Подписка оформлена" : "Подписаться" }
                </button>
            </form>
            <div className="address">
            <Title>Адрес отелей</Title>
            <p>Россия, Краснодарский край, г. Сочи, Панорама наб., 2-3</p>
            </div>
        </Left>
        <Right>
            <div>
                <Title>Отели</Title>
                <List>
                    <a href="/hotel/golden-tulip">Отель Голден Тюлип</a>
                    <a href="/hotel/tulip-inn">Отель Тюлип Инн</a>
                    <a href="/vacancies">Вакансии</a>
                </List>
            
            </div>
            <div>
                <Title>Навигация</Title>
                <List>
                    <a href="/activities/summer">Активности</a>
                    <a href="">СПА центр</a>
                    <a href="/restaurant/golden-tulip">Рестораны</a>
                    <a href="/services/golden-tulip">Услуги отеля</a>
                    <a href="/events/default">Мероприятия</a>
                    <a href="/events/venues">Конференц залы</a>
                    <a href="/stock/golden-tulip">Акции</a>
                    <a href="/affiche">Афиша</a>
                </List>
            </div>
            <div className="ftrCol">
                <Title>Информация</Title>
                <List>
                    <a href="/info">Правовая информация</a>
                    <a href="/rules">Правила отеля</a>
                </List>
            </div>
            <div>
                <Title>СОЦ. СЕТИ</Title>
                <List>
                    <a href="">Вконтакте</a>
                </List>
            </div>
            <div>
                <Title>Контакты</Title>
                <List>
                    <a href="mailto:reservation@gt-hotel.ru">reservation@gt-hotel.ru</a>
                    <a href="tel:+7(862)2431300">+7 (862) 243-13-00</a>
                </List>
            </div>
        </Right>
        
        <Bottom>
            <span>© 2026 все права защищены</span>
            <a href="/policy">политика конфиденциальности</a>
        </Bottom>
    </Block>
}
