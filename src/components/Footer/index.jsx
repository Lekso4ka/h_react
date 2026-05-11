import React from "react";
import { Block } from "./style";

export const Footer = () => {
    return <Block className="ftr" aria-label="Подвал сайта" data-node-id="206:8401">
        <p className="ftr__title">Голден тюлип &amp; Тюлип инн</p>
        
        <div className="ftr__main">
            <div className="ftr__col ftr__col--sub">
                <div className="ftr__cap">Рассылка</div>
                <p className="ftr__subText">
                    Подпишитесь на рассылку и оставайтесь в курсе новостей и особых предложений.
                </p>
                <div className="ftr__fields">
                    <div className="ftr__field">
                        <div className="ftr__fieldLabel">Имя</div>
                        <div className="ftr__line"></div>
                    </div>
                    <div className="ftr__field">
                        <div className="ftr__fieldLabel">Почта</div>
                        <div className="ftr__line"></div>
                    </div>
                </div>
                <a className="ftr__u" href="#">Подписаться</a>
                <div className="ftr__agree">
                    <span className="ftr__check" aria-hidden="true"></span>
                    <span>
              Даю свое <span className="ftr__agreeEm">согласие на обработку</span> моих персональных данных в
              соответствии с <span className="ftr__agreeEm">политикой конфиденциальности</span>.
            </span>
                </div>
            </div>
            
            <div className="ftr__cols">
                <div className="ftrCol">
                    <div className="ftr__cap ftrCol__t">Отели</div>
                    <a className="ftrCol__a" href="#">Отель Голден Тюлип</a>
                    <a className="ftrCol__a" href="#">Отель Тюлип Инн</a>
                    <a className="ftrCol__a" href="#">Вакансии</a>
                    <a className="ftrCol__a" href="#">Контакты</a>
                </div>
                <div className="ftrCol">
                    <div className="ftr__cap ftrCol__t">Навигация</div>
                    <a className="ftrCol__a" href="#">Активности</a>
                    <a className="ftrCol__a" href="#">Рестораны</a>
                    <a className="ftrCol__a" href="#">СПА центр</a>
                    <a className="ftrCol__a" href="#">Услуги отеля</a>
                    <a className="ftrCol__a" href="#">Мероприятия</a>
                    <a className="ftrCol__a" href="#">Конференц залы</a>
                    <a className="ftrCol__a" href="#">Акции</a>
                    <a className="ftrCol__a" href="#">Афиша</a>
                </div>
                <div className="ftrCol">
                    <div className="ftr__cap ftrCol__t">Информация</div>
                    <a className="ftrCol__a" href="#">Сотрудничество</a>
                    <a className="ftrCol__a" href="#">Правила отеля</a>
                    <a className="ftrCol__a" href="#">Ответы на вопросы</a>
                </div>
            </div>
            
            <div className="ftr__soc">
                <div className="ftr__socCap">СОЦ. СЕТИ</div>
                <div className="ftr__vk">Вконтакте</div>
            </div>
        </div>
        
        <div className="ftr__bottomLine"></div>
        <div className="ftr__bottom">
            <div className="ftr__copy">© 2026 все права защищены</div>
            <a className="ftr__muted" href="#">политика конфиденциальности</a>
            <a className="ftr__muted" href="#">правовая информация</a>
        </div>
    </Block>
}