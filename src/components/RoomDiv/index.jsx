import React, {useState, useRef, useEffect} from "react";
import { Icon } from "../Icon";
import { Variants } from "../Variants";
import data from "../../assets/rooms.json";
import images from "../../assets/images";

import {
    Breadcrumbs, Button,
    Caption,
    Container,
    HeaderBlock,
    ImagesBlock, List1, List2,
    MainText,
    Options,
    SecondaryText,
    TextTop
} from "./style";
const variants = ["Базовый", "Вид на реку", "Гостям с ОВЗ"]
export const RoomDiv = () => {
    const [v, setV] = useState(variants[0]);
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const ref1 = useRef()
    const ref2 = useRef()
    function remToPixels(rem) {
        const size = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return rem * size;
    }
    useEffect(() => {
        if (ref1) {
            const h = ref1.current.scrollHeight;
            ref1.current.style.height = active1 ? `${ h }px` : `2rem`
            //ref1.current.scrollIntoView({
            //    behavior: 'smooth',
            //    block: 'end',
            //    inline: 'end'
            //})
            active1 ? window.scrollBy({
                top: h - remToPixels(2),
                behavior: "smooth"
            }) : window.scrollBy({
                top: -(h - remToPixels(8.1)) ,
                behavior: "smooth"
            })
        }
    }, [active1]);
    useEffect(() => {
        if (ref2) {
            const h = ref2.current.scrollHeight;
            ref2.current.style.height = active2 ? `${ h }px` : `2rem`
            //ref1.current.scrollIntoView({
            //    behavior: 'smooth',
            //    block: 'end',
            //    inline: 'end'
            //})
            active2 ? window.scrollBy({
                top: h - remToPixels(2),
                behavior: "smooth"
            }) : window.scrollBy({
                top: -(h - remToPixels(8.1)) ,
                behavior: "smooth"
            })
        }
    }, [active2]);
    return <Container>
        <div>
            <HeaderBlock>
                <Breadcrumbs>
                    <a href="/">Главная</a>
                    <span>/</span>
                    <a href="/rooms">Номера</a>
                    <span>/</span>
                    <span>Стандартный номер</span>
                </Breadcrumbs>
                <Variants arr={variants} active={v} setActive={setV}/>
            </HeaderBlock>
            <Caption>
                <h1>Стандартный номер</h1>
                <strong>[ {v} ]</strong>
            </Caption>
            <ImagesBlock>
                <img src={images.img1} alt=""/>
                <img src={images.img2} alt=""/>
                <img src={images.img3} alt=""/>
                <img src={images.img4} alt=""/>
                <img src={images.img5} alt=""/>
                <img src={images.img6} alt=""/>
            </ImagesBlock>
        </div>
        <div>
            <TextTop>
                <h2>Основные параметры</h2>
                <div className={ "tl" }>
                    <span>{ data[v].size }</span>
                    <span>м<sup>2</sup></span>
                </div>
                <div className={ "tr" }>
                    <span>до</span>
                    <span>{data[v].cnt}</span>
                    м<sup>гостей</sup>
                </div>
                <div className={ "bl" }>
                    Двуспальная или две односпальные кровати
                </div>
                <div className={ "br" }>
                    Вид во двор
                </div>
            </TextTop>
            <MainText>
                <p>{data[v].text1}</p>
                <p>{data[v].text2}</p>
            </MainText>
            <SecondaryText>
                {data[v].text3}
            </SecondaryText>
            <Options>
            <h2>Оснащение номера</h2>
            <ul>
                {data[v].options.map(item => <li key={item}>
                    <Icon name={"check-circle"}/>
                    <span>{item}</span>
                </li>)}
            </ul>
            </Options>
            <List1  active={active1} ref={ref1}>
                {/*<div >*/}
                <h2 onClick={() => setActive1(!active1)}>
                    Всё оснащение номера
                    <Icon name={"plus"}/>
                </h2>
                <ul>
                    <li>
                        Комфорт
                        <ul>
                            <li>– ортопедический матрас</li>
                        </ul>
                    </li>
                    <li>
                        Технологии
                        <ul>
                            <li>– высокоскоростной Wi-Fi</li>
                            <li>– кабельное телевидение</li>
                            <li>– телефон</li>
                        </ul>
                    </li>
                    <li>
                        Удобства
                        <ul>
                            <li>– система климат-контроля</li>
                            <li>– рабочее место</li>
                            <li>– сейф</li>
                            <li>– чайный набор</li>
                            <li>– чайник</li>
                            <li>– гладильная доска</li>
                            <li>– утюг</li>
                        </ul>
                    </li>
                    <li>
                        Санузел
                        <ul>
                            <li>– душ</li>
                            <li>– косметические средства</li>
                            <li>– халаты</li>
                            <li>– тапочки</li>
                            <li>– фен</li>
                        </ul>
                    </li>
                </ul>
                {/*</div>*/}
            </List1>
            <List2 ref={ref2} active={active2}>
                <h2 onClick={ () => setActive2(!active2) }>
                    Услуги по запросу
                    <Icon name={ "plus" }/>
                </h2>
                <ul>
                    <li>мини-бар</li>
                    <li>питьевая вода</li>
                    <li>меню подушек</li>
                </ul>
            </List2>
            <Button>Проверить доступность</Button>
        </div>
    </Container>
}