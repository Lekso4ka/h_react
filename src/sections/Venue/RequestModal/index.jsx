import React, { useEffect } from "react";
import { Modal } from "./style";

const CalendarIcon = () => (
    <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25" fill="none" aria-hidden>
        <rect x="0.5" y="3.5" width="21" height="21" stroke="#FFF"/>
        <rect x="2" y="0" width="4" height="5" fill="#FFF"/>
        <rect x="16" y="0" width="4" height="5" fill="#FFF"/>
        <rect y="7" width="22" height="1" fill="#FFF"/>
        <text x="11" y="20" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="Manrope, sans-serif" fontWeight="500">17</text>
    </svg>
);

export const RequestModal = ({ data, active, onClose }) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = null;
        }
        return () => {
            document.body.style.overflow = null;
        };
    }, [active]);

    const formHandler = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.elements.consent.checked) return;
        const payload = {
            name: form.elements.name.value.trim(),
            phone: form.elements.phone.value.trim(),
            email: form.elements.email.value.trim(),
            venue: data.name,
            guests: form.elements.guests.value.trim(),
            eventDate: form.elements.eventDate.value.trim(),
            wishes: form.elements.wishes.value.trim(),
            source: "conference",
        };
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(json.error || "Ошибка отправки");
            }
            form.reset();
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Modal
            className={active ? "active" : ""}
            onClick={(e) => e.currentTarget === e.target ? onClose() : null}
        >
            <div className="modal-content">
                <svg
                    className="x"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34 34"
                    fill="none"
                    onClick={onClose}
                >
                    <rect width="34" height="34" fill="#2F3034"/>
                    <path
                        d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                        fill="#FFF6F0"
                    />
                </svg>
                <h3>Запрос на мероприятие</h3>
                <form onSubmit={formHandler}>
                    <div className="fields">
                        <label className="field">
                            <span>Площадка мероприятия</span>
                            <input type="text" name="venue" value={data.name} readOnly/>
                        </label>
                        <label className="field">
                            <span>Число участников</span>
                            <input type="number" name="guests" min="1" inputMode="numeric"/>
                        </label>
                        <label className="field date-field">
                            <span>Даты мероприятия</span>
                            <input type="date" name="eventDate"/>
                            <CalendarIcon/>
                        </label>
                        <label className="field">
                            <span>Имя *</span>
                            <input type="text" name="name" required/>
                        </label>
                        <label className="field">
                            <span>Телефон *</span>
                            <input type="tel" name="phone" required/>
                        </label>
                        <label className="field">
                            <span>Почта *</span>
                            <input type="email" name="email" required/>
                        </label>
                        <label className="field">
                            <span>Пожелания к мероприятию</span>
                            <input type="text" name="wishes"/>
                        </label>
                    </div>
                    <label className="consent">
                        <input type="checkbox" name="consent" required/>
                        <span>
                            Даю свое <a href="/policy">согласие на обработку</a> моих персональных данных в соответствии с <a href="/policy">политикой конфиденциальности</a>.
                        </span>
                    </label>
                    <button type="submit">Отправить запрос</button>
                    <p className="required-note">* Обязательные поля</p>
                </form>
            </div>
        </Modal>
    );
};
