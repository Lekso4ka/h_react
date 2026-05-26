import React from 'react';
import {Link} from 'react-router-dom';
import { Block, Nav, Room } from "./style";
import p2 from "../../assets/images/Rectangle 4.jpg"
import p3 from "../../assets/images/Rectangle 5.jpg"
import p1 from "../../assets/images/Rectangle 3.jpg"
import p4 from "../../assets/images/Rectangle 340.jpg"
import p5 from "../../assets/images/Rectangle 341.jpg"

export const HS2 = () => {
    return <>
    <Block>
        <h2>[ Атмосфера и пространство ]</h2>
        <p>Комфортный отдых среди горных склонов курорта.
            Архитектура отеля продолжает природный пейзаж, <span>а светлые интерьеры, натуральные материалы и выверенные пропорции создают спокойную и сдержанную атмосферу.</span></p>
        <img src={ p1 } alt=""/>
        <img src={ p2 } alt=""/>
        <img src={ p3 } alt=""/>
        <div className="txt">Архитектура, свет и тишина формируют атмосферу отеля.</div>
    </Block>
    <Nav>
        <h2>[ Возможности отеля ]</h2>
        <nav>
            <Link to={"/activities"}>Активности</Link>
            <Link to={"/"}>СПА центр</Link>
            <Link to={"/"}>Рестораны</Link>
            <Link to={"/contacts"}>Услуги отеля</Link>
            <Link to={"/events"}>Мероприятия</Link>
            <Link to={"/zal"}>Конференц залы</Link>
            <Link to={"/actions"}>Акции</Link>
            <Link to={"/"}>Афиша</Link>
        </nav>
        <div className="rooms">
            <Room img={p4}>
                <span>Голден Тюлип</span>
                <h3>Номера и сьюты</h3>
                <Link to={"/room"}>К номерам</Link>
            </Room>
            <Room img={p5}>
                <span>Тюлип Инн</span>
                <h3>Номера и сьюты</h3>
                <Link to={"/room"}>К номерам</Link>
            </Room>
        </div>
    </Nav>
    </>
}