import React, { useEffect, useState } from "react";
import { PolicyLink } from "../PolicyLink";
import { useT } from "../../Ctx";
import { anchorProps, siteLink, siteLinkLabel } from "../../utils/staticLinks";
import { Block, Bottom, Caption, Left, List, Right, Title } from "./style";
import { armAutofillSubmit, EMAIL_PATTERN, fieldDomName, lockAutofill, noAutofillProps, readField, relockAutofill, unlockAutofill } from "../../utils/noAutofill";
import { lines } from "../../utils/lines";

const SUBSCRIBED_KEY = "newsletter-subscribed";

export const Footer = () => {
    const t = useT();
    const [subscribed, setSubscribed] = useState(false);
    useEffect(() => {
        try {
            if (sessionStorage.getItem(SUBSCRIBED_KEY) === "1") setSubscribed(true);
        } catch {
            /* ignore */
        }
    }, []);
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
                    <span>{ lines(t("consent")) } <PolicyLink>{ lines(t("consentLink")) }</PolicyLink> { lines(t("consentMid")) } <PolicyLink>{ lines(t("policyLink")) }</PolicyLink>{ lines(t("consentEnd")) }</span>
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
                    <a {...anchorProps(siteLink("footerHotelGolden"))}>{ lines(t("hotelGolden")) }</a>
                    <a {...anchorProps(siteLink("footerHotelTulip"))}>{ lines(t("hotelTulip")) }</a>
                    <a {...anchorProps(siteLink("footerVacancies"))}>{ lines(t("vacancies")) }</a>
                </List>
            
            </div>
            <div>
                <Title>{ lines(t("navigation")) }</Title>
                <List>
                    <a {...anchorProps(siteLink("footerActivities"))}>{ lines(t("activities")) }</a>
                    <a {...anchorProps(siteLink("footerSpa"))}>{ lines(t("spa")) }</a>
                    <a {...anchorProps(siteLink("footerRestaurants"))}>{ lines(t("restaurants")) }</a>
                    <a {...anchorProps(siteLink("footerServices"))}>{ lines(t("hotelServices")) }</a>
                    <a {...anchorProps(siteLink("footerEvents"))}>{ lines(t("events")) }</a>
                    <a {...anchorProps(siteLink("footerVenues"))}>{ lines(t("venues")) }</a>
                    <a {...anchorProps(siteLink("footerOffers"))}>{ lines(t("offers")) }</a>
                    <a {...anchorProps(siteLink("footerAffiche"))}>{ lines(t("poster")) }</a>
                </List>
            </div>
            <div className="ftrCol">
                <Title>{ lines(t("information")) }</Title>
                <List>
                    <a {...anchorProps(siteLink("footerInfo"))}>{ lines(t("legalInfo")) }</a>
                    <a {...anchorProps(siteLink("footerRules"))}>{ lines(t("hotelRules")) }</a>
                </List>
            </div>
            <div>
                <Title>{ lines(t("socials")) }</Title>
                <List>
                    <a {...anchorProps(siteLink("footerSocial"))}>{ lines(t("vk")) }</a>
                </List>
            </div>
            <div>
                <Title>{ lines(t("contacts")) }</Title>
                <List>
                    <a {...anchorProps(siteLink("footerEmail"))}>{ siteLinkLabel("footerEmail") }</a>
                    <a {...anchorProps(siteLink("footerPhone"))}>{ siteLinkLabel("footerPhone") }</a>
                </List>
            </div>
        </Right>
        
        <Bottom>
            <span>{ lines(t("copyright")) }</span>
            <PolicyLink>{ lines(t("policyLower")) }</PolicyLink>
        </Bottom>
    </Block>
}
