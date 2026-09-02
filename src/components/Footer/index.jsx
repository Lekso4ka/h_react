import React, { useState } from "react";
import { useT } from "../../Ctx";
import { Block, Bottom, Caption, Left, List, Right, Title } from "./style";

const SUBSCRIBED_KEY = "newsletter-subscribed";

export const Footer = () => {
    const t = useT();
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

    return <Block aria-label={ t("footerAria") }>
        <Caption>{ t("brandFooter") }</Caption>
        
        <Left>
            <Title>{ t("newsletter") }</Title>
            <p>{ t("newsletterText") }</p>
            <form onSubmit={ formHandler }>
                <div className="form-row">
                    <label>
                        <input type="text" name="name" placeholder={ t("name") } required/>
                    </label>
                    <label>
                        <input type="email" name="email" placeholder={ t("email") } required/>
                    </label>
                </div>
                <label className="consent">
                    <input type="checkbox" name="consent" required={!subscribed}/>
                    <span>{ t("consent") } <a href="/policy">{ t("consentLink") }</a> { t("consentMid") } <a href="/policy">{ t("policyLink") }</a>{ t("consentEnd") }</span>
                </label>
                <button type="submit" disabled={ subscribed || sending }>
                    { subscribed ? t("subscribed") : t("subscribe") }
                </button>
            </form>
            <div className="address">
            <Title>{ t("hotelsAddress") }</Title>
            <p>{ t("addressValue") }</p>
            </div>
        </Left>
        <Right>
            <div>
                <Title>{ t("hotels") }</Title>
                <List>
                    <a href="/hotel/golden-tulip">{ t("hotelGolden") }</a>
                    <a href="/hotel/tulip-inn">{ t("hotelTulip") }</a>
                    <a href="/vacancies">{ t("vacancies") }</a>
                </List>
            
            </div>
            <div>
                <Title>{ t("navigation") }</Title>
                <List>
                    <a href="/activities/summer">{ t("activities") }</a>
                    <a href="">{ t("spa") }</a>
                    <a href="/restaurant/golden-tulip">{ t("restaurants") }</a>
                    <a href="/services/golden-tulip">{ t("hotelServices") }</a>
                    <a href="/events/default">{ t("events") }</a>
                    <a href="/events/venues">{ t("venues") }</a>
                    <a href="/stock/golden-tulip">{ t("offers") }</a>
                    <a href="/affiche">{ t("poster") }</a>
                </List>
            </div>
            <div className="ftrCol">
                <Title>{ t("information") }</Title>
                <List>
                    <a href="/info">{ t("legalInfo") }</a>
                    <a href="/rules">{ t("hotelRules") }</a>
                </List>
            </div>
            <div>
                <Title>{ t("socials") }</Title>
                <List>
                    <a href="">{ t("vk") }</a>
                </List>
            </div>
            <div>
                <Title>{ t("contacts") }</Title>
                <List>
                    <a href="mailto:reservation@gt-hotel.ru">reservation@gt-hotel.ru</a>
                    <a href="tel:+7(862)2431300">+7 (862) 243-13-00</a>
                </List>
            </div>
        </Right>
        
        <Bottom>
            <span>{ t("copyright") }</span>
            <a href="/policy">{ t("policyLower") }</a>
        </Bottom>
    </Block>
}
