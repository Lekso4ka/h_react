import React from "react";
import { ActivityBtn } from "../../../ui/ActivityBtn";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { HorizontalDragRail } from "./HorizontalDragRail";
import { Content } from "./style";

export const Activities = ({weather}) => {
    return <>{weather === "winter"
        ? <Content
            bg1={ "winter_4" }
            bg2={ "winter_5" }
            bg3={ "winter_6" }
            activeBtn={ 2 }
        >
            <Line/>
            <div className="content">
                <h4>[ Активности ]</h4>
                <h2>Почувствуйте ритм гор — <span>от раннего утра до вечера</span></h2>
                <p>Сезонные маршруты, панорамные виды и продуманные сценарии отдыха помогают сочетать движение и
                    расслабление в любое время года.</p>
                <div className="buttons">
                    <ActivityBtn
                        active={weather === "summer"}
                        onClick={ () => setWeather("summer") }
                        variant={2}
                    >Лето</ActivityBtn>
                    <ActivityBtn
                        active={weather === "winter"}
                        onClick={ () => setWeather("winter") }
                        variant={2}
                    >зима</ActivityBtn>
                </div>
                <Link to={ `/activities/${ weather }` }>К активностям</Link>
            </div>
            <div className="list-container">
                
                {/*<div className="list">*/}
                    <HorizontalDragRail>
                    <div className="item">
                        <div className="img img1">Зимний ритм</div>
                        <p>Свежий снег, чистый воздух и подготовленные трассы в нескольких минутах от отеля. От
                            первых подъёмников до вечернего apres-ski — ваша зимняя история начинается здесь.</p>
                    </div>
                    <div className="item">
                        <div className="img img2">Прогулки в горах</div>
                        <p>Прогулки по живописным тропам, подъёмы над облаками и тихие панорамные точки.
                            Замедлитесь, вдохните глубже и позвольте природе задать темп вашему дню.</p>
                    </div>
                    <div className="item">
                        <div className="img img3">Восстановление</div>
                        <p>Тёплые бассейны, спа-ритуалы и пространства для восстановления. Сбросьте напряжение,
                            наполнитесь энергией и возвращайтесь к горам обновлёнными.</p>
                    </div>
                    </HorizontalDragRail>
                {/*</div>*/}
            </div>
            <Line/>
        </Content>
        : <Content
            bg1={ "summer_4" }
            bg2={ "summer_5" }
            bg3={ "summer_6" }
            activeBtn={ 1 }
        >
            <Line/>
            <div className="content">
                <h4>[ Активности ]</h4>
                <h2>Поймайте настроение гор — <span>от первых лучей до заката</span></h2>
                <p>Летние маршруты, живописные виды и спокойный отдых на высоте помогут наполнить каждый день новыми
                    впечатлениями и яркими моментами.</p>
                <div className="buttons">
                    <ActivityBtn
                        active={weather === "summer"}
                        onClick={ () => setWeather("summer") }
                        variant={2}
                    >Лето</ActivityBtn>
                    <ActivityBtn
                        active={weather === "winter"}
                        onClick={ () => setWeather("winter") }
                        variant={2}
                    >зима</ActivityBtn>
                </div>
                <Link to={ `/activities/${ weather }` }>К активностям</Link>
            </div>
            <div className="list-container">
                <div className="list">
                    <div className="item">
                        <div className="img img1">Треккинг в горах</div>
                        <p>Откройте для себя живописные маршруты среди горных вершин и альпийских лугов. Выбирайте
                            лёгкие прогулки или более продолжительные походы, наслаждаясь природой и свежим воздухом
                            на каждом шагу.</p>
                    </div>
                    <div className="item">
                        <div className="img img2">Аренда яхты</div>
                        <p>Проведите день в своём ритме: любуйтесь закатами, отдыхайте у воды и наслаждайтесь
                            атмосферой полного спокойствия. Иногда лучшие впечатления начинаются именно с паузы.</p>
                    </div>
                    <div className="item">
                        <div className="img img3">Хамам и Сауна</div>
                        <p>ТПосле насыщенного дня восстановите силы в пространстве для отдыха и расслабления. Тепло,
                            тишина и забота о себе помогут снять напряжение и почувствовать настоящее
                            обновление.</p>
                    </div>
                </div>
            </div>
            <Line/>
        </Content>
    }</>
}