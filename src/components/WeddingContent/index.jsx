import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "../../ui/Link";
import { Icon } from "../../ui/Icon";
import { Video } from "../../ui/Video";
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

export const WeddingContent = () => {
    const formHandler = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.elements.consent.checked) return;
        const payload = {
            name: form.elements.name.value.trim(),
            phone: form.elements.phone.value.trim(),
            source: "wedding",
        };
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
            form.reset();
        } catch (err) {
            console.error(err);
        }
    }
    return <>
        <Hero>
            <Video data={ ["we_1"] } index={0}/>
            <h4>МЕСТО ДЛЯ ГЛАВНОГО СОБЫТИЯ</h4>
            <h1>Свадьба в серце гор</h1>
            <p>Панорамные виды, особенная атмосфера и моменты, которые останутся с вами навсегда.</p>
            <div className="list">
                <ul>
                    <li>В самом сердце<br/>Роза Хутор</li>
                    <li>Панорамная площадка с видом<br/>на Кавказские горы</li>
                    <li>Выездная регистрация<br/>на высоте</li>
                </ul>
            </div>
        </Hero>
        <Section1>
            <div className="title">
                <h4>Почему именно здесь</h4>
                <h2>Ваш день без лишних забот</h2>
            </div>
            <div className="img1"></div>
            <div className="content">
                <div className="line"/>
                <p>Мы позаботимся о каждой детали, что бы вы могли наслаждаться самым важным – друг другом и
                    этим
                    незабываемым днем. Опытная команда отеля возьмет на себя всю организацию торждества любой
                    сложности – от камерной свадьбы до масштабного праздника.</p>
                <Link to="">Запросить предложение</Link>
            </div>
            <div className="img2"></div>
        </Section1>
        <Section2>
            <div className="content">
                <h4>молодоженам</h4>
                <h2>Особый подарок<br/>от отеля</h2>
                <ul>
                    <li>
                        <span>01</span>
                        <p>Люкс для первой брачной<br/>ночи</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>Романтический завтрак<br/>в номер</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>Комплимент для<br/>молодоженов</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>Сертификат на годовщину<br/>свадьбы</p>
                    </li>
                </ul>
            </div>
            <div className="img">
                <span>-15%</span>
                <p>Скидка на проживание<br/>для гостей свадьбы</p>
            </div>
        </Section2>
        <Section3>
            <h4>уникальное предложение</h4>
            <h2>Обзорная площадка<br/>360° над горами</h2>
            <p>Идеальное место для церемонии, фотосессии и праздничного ужина на фоне горных вершин.</p>
            <Section3Gallery/>
            <div className="tooltip tooltip1">
                <span>360°</span>
                <p>Панорамный обзор без<br/>преград с видом на Кавказские<br/>горы.</p>
            </div>
            <div className="tooltip tooltip2">
                <span>100</span>
                <p>Максимально количество<br/>гостей для комфортного<br/>размещения.</p>
            </div>
        </Section3>
        <Section4>
            <h2>Выберите свой<br/>идеальный сценарий</h2>
            <ul>
                <li>
                    <div className="img img1"/>
                    <h3>Выездная регистрация</h3>
                    <p>Обменяйтесь клятвами на фоне горных вершин и панорамных видов Роза Хутор. Мы поможем
                        организовать
                        церемонию до мельчайших деталей, чтобы этот момент остался в памяти навсегда.</p>
                </li>
                <li>
                    <div className="img img2"/>
                    <h3>Фотосессия в горах</h3>
                    <p>Живописные локации, горные панорамы и мягкий свет создают идеальные условия для свадебной
                        съёмки.
                        Каждая фотография сохранит эмоции вашего дня и красоту Кавказских гор на долгие годы.</p>
                </li>
                <li>
                    <div className="img img3"/>
                    <h3>Свадебный ужин</h3>
                    <p>От уютного семейного вечера до торжества с большим количеством гостей. Изысканное меню,
                        безупречный сервис и атмосфера, созданная специально для вашего праздника.</p>
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
                    <p>Выездная регистрация</p>
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
                    <p>Свадебный торт</p>
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
                <h4>Свадьба в серце гор</h4>
                <h2>Начните подготовку вашей свадьбы</h2>
                <p>Оставьте заявку и мы подготовим для вас<br/> индивидуальное предложение.</p>
                <form onSubmit={ formHandler }>
                    <input type="text" name="name" placeholder="Ваше имя" required/>
                    <input type="tel" name="phone" placeholder="Телефон" required/>
                    <label className="consent">
                        <input type="checkbox" name="consent" required/>
                        Даю свое <Link to="">согласие на обработку</Link> моих персональных данных в соответствии с <Link to="">политикой конфиденциальности</Link>.
                    </label>
                    <button type="submit">Запросить предложение</button>
                </form>
            </div>
        </Section6>
    </>
}