import React from 'react';
import { Icon } from "../Icon";
import { Banner, Content, Line, Hotel, Title } from "./style";
import video from "../../assets/images/file.mp4"
export const HomeBanner = () => {
    
    return <Banner>
        <video src={video} autoPlay></video>
        <Content>
            <h2>Зима на Розе Хутор</h2>
            <h4>Комфорт или практичность — выберите свой формат проживания</h4>
        </Content>
        <Line>
            <Hotel>
                <h3>Голден тюлип</h3>
                <span>Комфорт и сервис</span>
                <button>Выбрать</button>
                <div className="stars">
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                </div>
            </Hotel>
            <Hotel>
                <h3>Тюлип инн</h3>
                <span>Практичный формат</span>
                <button>Выбрать</button>
                <div className="stars">
                    <Icon name="star"/>
                    <Icon name="star"/>
                    <Icon name="star"/>
                </div>
            </Hotel>
            <Title></Title>
        </Line>
    </Banner>
}