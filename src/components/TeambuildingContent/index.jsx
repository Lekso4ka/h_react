import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "../../ui/Link";
import { Icon } from "../../ui/Icon";
import { Hero, Section1, Section2, Section3, Section4, Section5, Section6 } from "./style";

gsap.registerPlugin(useGSAP);

const SLIDE_NAMES = ["img1", "img2", "img3", "img4", "img5"];
const LOOPED_SLIDES = [...SLIDE_NAMES, ...SLIDE_NAMES, ...SLIDE_NAMES];
const SLIDE_COUNT = SLIDE_NAMES.length;
const START_INDEX = SLIDE_COUNT + 2;
const DESKTOP_MQ = "(min-width: 576px)";
const SIDE_SCALE = 1.25;

const Section3Gallery = () => {
    const rootRef = useRef(null);
    const apiRef = useRef({ next: () => {}, prev: () => {} });

    useGSAP(
        () => {
            const root = rootRef.current;
            const track = root?.querySelector(".track");
            if (!root || !track) return;

            const imgs = gsap.utils.toArray(".img", track);
            const mq = window.matchMedia(DESKTOP_MQ);
            const geoCenter = (imgs.length - 1) / 2;
            let index = START_INDEX;
            let animating = false;
            let tween;

            const isDesktop = () => mq.matches;
            const sideScale = () => (isDesktop() ? SIDE_SCALE : 1);

            const getStep = () => {
                const img = imgs[0];
                if (!img) return 0;
                const styles = getComputedStyle(track);
                const gap = parseFloat(styles.columnGap || styles.gap) || 0;
                return img.offsetWidth + gap;
            };

            const xAt = (i) => (geoCenter - i) * getStep();

            const applyOrigins = (activeIndex) => {
                imgs.forEach((img, i) => {
                    if (i === activeIndex) return;
                    gsap.set(img, {
                        transformOrigin: i < activeIndex ? "100% 50%" : "0% 50%"
                    });
                });
            };

            const applyRest = (activeIndex) => {
                const scale = sideScale();
                applyOrigins(activeIndex);
                gsap.set(track, { x: xAt(activeIndex) });
                imgs.forEach((img, i) => {
                    gsap.set(img, { scale: i === activeIndex ? 1 : scale });
                });
            };

            const settle = (i) => {
                if (i >= SLIDE_COUNT * 2) return i - SLIDE_COUNT;
                if (i < SLIDE_COUNT) return i + SLIDE_COUNT;
                return i;
            };

            const go = (dir) => {
                if (animating) return;
                animating = true;
                const from = index;
                const target = from + dir;
                const scale = sideScale();

                gsap.set(imgs[from], {
                    transformOrigin: dir > 0 ? "100% 50%" : "0% 50%"
                });

                tween?.kill();
                tween = gsap.timeline({
                    defaults: { ease: "power2.inOut", duration: 0.8, overwrite: "auto" },
                    onComplete: () => {
                        const settled = settle(target);
                        if (settled !== target) applyRest(settled);
                        else applyOrigins(target);
                        index = settled;
                        animating = false;
                    }
                });

                tween.to(track, { x: xAt(target) }, 0);
                if (isDesktop()) {
                    tween.to(imgs[from], { scale }, 0);
                    tween.to(imgs[target], { scale: 1 }, 0);
                }
            };

            gsap.set([track, ...imgs], { force3D: true });
            applyRest(index);

            apiRef.current.next = () => go(1);
            apiRef.current.prev = () => go(-1);

            const ro = new ResizeObserver(() => {
                if (animating) return;
                applyRest(index);
            });
            ro.observe(root);

            const onMq = () => {
                if (animating) return;
                applyRest(index);
            };
            mq.addEventListener("change", onMq);

            return () => {
                tween?.kill();
                ro.disconnect();
                mq.removeEventListener("change", onMq);
            };
        },
        { scope: rootRef }
    );

    return (
        <div className="images" ref={rootRef}>
            <span className="arrow" onClick={() => apiRef.current.prev()}>
                <Icon name="arrow" color="#FFF"/>
            </span>
            <span className="arrow right" onClick={() => apiRef.current.next()}>
                <Icon name="arrow" left={false} color="#FFF"/>
            </span>
            <div className="track">
                {LOOPED_SLIDES.map((name, i) => (
                    <div key={`${name}-${i}`} className={`img ${name}`}/>
                ))}
            </div>
        </div>
    );
};

export const TeambuildingContent = () => {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const formHandler = async (e) => {
        e.preventDefault();
        if (sent || sending) return;
        const form = e.currentTarget;
        if (!form.elements.consent.checked) return;
        const payload = {
            name: form.elements.name.value.trim(),
            phone: form.elements.phone.value.trim(),
            source: "teambuilding",
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
            setSent(true);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    }
    return <>
        <Hero>
            <h4>корпоративный опыт</h4>
            <h1>Тимбилдинг в сердце гор</h1>
            <p>Комплексное мероприятие для командообразования: создайте крепкие связи между членами команды через уникальные активности и совместные задания.</p>
            <div className="list">
                <ul>
                    <li>В самом сердце курорта<br/>Роза Хутор</li>
                    <li>Оборудованные залы<br/>и площадки</li>
                    <li>Уникальные активности<br/>в горах</li>
                </ul>
            </div>
        </Hero>
        <Section1>
            <div className="title">
                <h4>Почему именно здесь</h4>
                <h2>Новые высоты для вашей команды</h2>
            </div>
            <div className="img1"></div>
            <div className="content">
                <div className="line"/>
                <p>Забудьте о стандартных банкетных залах, перенесите ваш тимбилдинг, стратегическую сессию или празднование успеха в уникальную обстановку, где величие природы вдохновляет на новые свершения. В горах, на фоне захватывающих дух пейзажей, ваша команда станет крепче, а результаты — выше.</p>
                <Link to="">Запросить предложение</Link>
            </div>
            <div className="img2"></div>
        </Section1>
        <Section2>
            <div className="content">
                <h4>организаторам</h4>
                <h2>Особенные условия<br/>для вашего мероприятия</h2>
                <ul>
                    <li>
                        <span>01</span>
                        <p>Номер в подарок для<br/>организатора</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>Скидка 30% на аренду<br/>конференц залов</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>Аренда зала в подарок при<br/>бронировании банкета</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>Скидка на ски-пассы</p>
                    </li>
                </ul>
            </div>
            <div className="img">
                <p>Специальные тарифы на проживание<br/>для участников мероприятия</p>
            </div>
        </Section2>
        <Section3>
            <h4>уникальное предложение</h4>
            <h2>Восхождение на вершину</h2>
            <p>Укрепите командный дух через совместные приключения и вызовы.</p>
            <Section3Gallery/>
            <div className="tooltip tooltip1">
                <span>10+</span>
                <p>Маршрутов на выбор для любого<br/>уровня подготовки</p>
            </div>
            <div className="tooltip tooltip2">
                <span>2509</span>
                <p>Метров над уровнем моря — максимальная<br/>высота восхождения</p>
            </div>
        </Section3>
        <Section4>
            <h2>Выберите свой<br/>идеальный сценарий</h2>
            <ul>
                <li>
                    <div className="img img1"/>
                    <h3>Просторные залы</h3>
                    <p>От небольших переговорных до панорамной площадки на крыше в окружении гор, чтобы каждый почувствовал себя частью успешной команды.</p>
                </li>
                <li>
                    <div className="img img2"/>
                    <h3>Гала ужин</h3>
                    <p>Камерный вечер или шумная вечеринка с выбором «лучших из лучших», отметьте профессиональный праздник в неповторимой атмосфере.</p>
                </li>
                <li>
                    <div className="img img3"/>
                    <h3>Горные активности</h3>
                    <p>Неспешные прогулки по тропам в парке водопадов или яркое восхождение на вершину, развлекательные аттракционы или экскурсии для ярких эмоций каждого участника.</p>
                </li>
            </ul>
        </Section4>
        <Section5>
            <div className="line"/>
            <div className="title">
                <h4>Что мы организуем</h4>
                <h2>Для вашего<br/>идеального дня</h2>
            </div>
            <div className="images">
                <div className="img img1"/>
                <div className="img img2"/>
                <div className="img img3"/>
            </div>
            <ul>
                <li>
                    <span>01</span>
                    <p>Горные приключения</p>
                </li>
                <li>
                    <span>02</span>
                    <p>Банкет</p>
                </li>
                <li>
                    <span>03</span>
                    <p>Проживание гостей</p>
                </li>
                <li>
                    <span>04</span>
                    <p>Трансфер</p>
                </li>
                <li>
                    <span>05</span>
                    <p>Велком зона</p>
                </li>
                <li>
                    <span>06</span>
                    <p>Координация мероприятия</p>
                </li>
                <li>
                    <span>07</span>
                    <p>Декор</p>
                </li>
                <li>
                    <span>08</span>
                    <p>Фото и видео</p>
                </li>
            </ul>
        </Section5>
        <Section6>
            <div className="content">
                <h4>корпоратив</h4>
                <h2>Тимбилдинг в горах</h2>
                <p>Запланируйте незабываемое корпоративное мероприятие.</p>
                <form className={ sent ? "sent" : "" } onSubmit={ formHandler }>
                    <div className="form-body">
                        <div className="form-fields">
                            <input type="text" name="name" placeholder="Ваше имя" required={!sent}/>
                            <input type="tel" name="phone" placeholder="Телефон" required={!sent}/>
                            <label className="consent">
                                <input type="checkbox" name="consent" required={!sent}/>
                                Даю свое <Link to="">согласие на обработку</Link> моих персональных данных в соответствии с <Link to="">политикой конфиденциальности</Link>.
                            </label>
                        </div>
                        { sent && <p className="form-success">Спасибо за заявку! Мы подготовим для вас индивидуальное предложение.</p> }
                    </div>
                    <button type="submit" disabled={ sent || sending }>{ sent ? "Отправлено" : "Запросить предложение" }</button>
                </form>
            </div>
        </Section6>
    </>
}
