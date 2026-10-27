import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useT } from "../../Ctx";
import { Block, Bottom, Caption, Left, List, Right, Title } from "./style";
import { armAutofillSubmit, EMAIL_PATTERN, fieldDomName, lockAutofill, noAutofillProps, readField, relockAutofill, unlockAutofill } from "../../utils/noAutofill";
import { lines } from "../../utils/lines";

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
            name: readField(form, "name").trim(),
            email: readField(form, "email").trim(),
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
            relockAutofill(form);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return <Block aria-label={ t("footerAria") }>
        <Caption>{ lines(t("brandFooter")) }</Caption>
        
        <Left>
            <Title>{ lines(t("newsletter")) }</Title>
            <p>{ lines(t("newsletterText")) }</p>
            <form
                autoComplete="off"
                data-no-autofill="true"
                data-form-type="other"
                data-1p-ignore="true"
                data-lpignore="true"
                onSubmit={ formHandler }
                onKeyDown={ armAutofillSubmit }
            >
                <div className="form-row">
                    <label>
                        <input
                            type="text"
                            name={ fieldDomName("name") }
                            data-field="name"
                            placeholder={ t("name") }
                            required
                            { ...noAutofillProps }
                            ref={ lockAutofill }
                            onFocus={ unlockAutofill }
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            inputMode="email"
                            name={ fieldDomName("email") }
                            data-field="email"
                            placeholder={ t("email") }
                            pattern={ EMAIL_PATTERN }
                            required
                            { ...noAutofillProps }
                            ref={ lockAutofill }
                            onFocus={ unlockAutofill }
                        />
                    </label>
                </div>
                <label className="consent">
                    <input type="checkbox" name="consent" required={!subscribed}/>
                    <span>{ lines(t("consent")) } <Link to="/policy">{ lines(t("consentLink")) }</Link> { lines(t("consentMid")) } <Link to="/policy">{ lines(t("policyLink")) }</Link>{ lines(t("consentEnd")) }</span>
                </label>
                <button type="submit" disabled={ subscribed || sending } onPointerDown={ armAutofillSubmit }>
                    { subscribed ? lines(t("subscribed")) : lines(t("subscribe")) }
                </button>
            </form>
            <div className="address">
            <Title>{ lines(t("hotelsAddress")) }</Title>
            <p>{ lines(t("addressValue")) }</p>
            </div>
        </Left>
        <Right>
            <div>
                <Title>{ lines(t("hotels")) }</Title>
                <List>
                    <a href="/hotel/golden-tulip">{ lines(t("hotelGolden")) }</a>
                    <a href="/hotel/tulip-inn">{ lines(t("hotelTulip")) }</a>
                    <a href="/vacancies">{ lines(t("vacancies")) }</a>
                </List>
            
            </div>
            <div>
                <Title>{ lines(t("navigation")) }</Title>
                <List>
                    <a href="/activities/summer">{ lines(t("activities")) }</a>
                    <a href="">{ lines(t("spa")) }</a>
                    <a href="/restaurant/golden-tulip">{ lines(t("restaurants")) }</a>
                    <a href="/services/golden-tulip">{ lines(t("hotelServices")) }</a>
                    <a href="/events/default">{ lines(t("events")) }</a>
                    <a href="/events/venues">{ lines(t("venues")) }</a>
                    <a href="/stock/golden-tulip">{ lines(t("offers")) }</a>
                    <a href="/affiche">{ lines(t("poster")) }</a>
                </List>
            </div>
            <div className="ftrCol">
                <Title>{ lines(t("information")) }</Title>
                <List>
                    <a href="/info">{ lines(t("legalInfo")) }</a>
                    <a href="/rules">{ lines(t("hotelRules")) }</a>
                </List>
            </div>
            <div>
                <Title>{ lines(t("socials")) }</Title>
                <List>
                    <a href="">{ lines(t("vk")) }</a>
                </List>
            </div>
            <div>
                <Title>{ lines(t("contacts")) }</Title>
                <List>
                    <a href="mailto:reservation@gt-hotel.ru">reservation@gt-hotel.ru</a>
                    <a href="tel:+7(862)2431300">+7 (862) 243-13-00</a>
                </List>
            </div>
        </Right>
        
        <Bottom>
            <span>{ lines(t("copyright")) }</span>
            <a href="/policy">{ lines(t("policyLower")) }</a>
        </Bottom>
    </Block>
}
