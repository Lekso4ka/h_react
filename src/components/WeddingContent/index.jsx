import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/img"
import { Icon } from "../Icon";
import { Hero, Section1, Section2, Section3, Section4, Section5, Section6 } from "./style";

export const WeddingContent = () => {
    const formHandler = (e) => {
        e.preventDefault();
    }
    return <>
        <Hero>
            <video src={ img.we_1 } autoPlay/>
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
        <Section3 active={ 3 }>
            <h4>уникальное предложение</h4>
            <h2>Обзорная площадка<br/>360° над горами</h2>
            <p>Идеальное место для церемонии, фотосессии и праздничного ужина на фоне горных вершин.</p>
            <div className="images">
                <span className="arrow"><Icon name={ "arrow" } color="#FFF"/></span>
                <span className="arrow right"><Icon name={ "arrow" } left={ false } color="#FFF"/></span>
                <div className="img img1"/>
                <div className="img img2"/>
                <div className="img img3"/>
                <div className="img img4"/>
                <div className="img img5"/>
            </div>
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
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="tel" placeholder="Телефон"/>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check">Даю свое <Link to="">согласие на обработку</Link> моих персональных данных в соответствии с <Link to="">политикой конфиденциальности</Link>.</label>
                    <button type="submit">Запросить предложение</button>
                </form>
            </div>
        </Section6>
    </>
}