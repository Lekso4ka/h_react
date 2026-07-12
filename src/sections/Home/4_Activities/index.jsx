
import React, { useRef, useState } from "react";
import { ActivityBtn } from "../../../ui/ActivityBtn";
import { Cursor, useCursor } from "../../../ui/Cursor";
import { Line } from "../../../ui/Line";
import { Link } from "../../../ui/Link";
import { HorizontalDragRail } from "./HorizontalDragRail";
import { Content, Zone } from "./style";


export const Activities = ({weather, setWeather}) => {
    const zoneRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const { visible, position } = useCursor({ zoneRef, dragging });
    
    const hideNativeCursor = visible || dragging;
    return <>{weather === "winter"
        ? <Content
            bg1={ "winter_8" }
            bg2={ "winter_9" }
            bg3={ "winter_10" }
            bg4={ "winter_11" }
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
                <Zone ref={zoneRef} $hideCursor={hideNativeCursor}>
                {/*<div className="list">*/}
                    <HorizontalDragRail
                        customCursor
                        onDragStart={ () => setDragging(true) }
                        onDragEnd={ () => setDragging(false) }
                    >
                        <div className="item">
                            <div className="img img1">Катание на лыжах и сноуборде</div>
                            <p>На курорте Роза Хутор оборудовано более 100 км трасс: от зеленых для начинающих спортсменов до черных олимпийских спусков для настоящих профи. Для катания доступны северный и южный склоны хребта Аибга. </p>
                        </div>
                        <div className="item">
                            <div className="img img2">Горные аттракционы </div>
                            <p>Виражи на скорости до 40 км/ч по серпантину горной трассы родельбана в самом сердце Олимпийской деревни - настоящий всплеск адреналина и впечатлений.</p>
                        </div>
                        <div className="item">
                            <div className="img img3">Парки и фермы</div>
                            <p>Знакомство с дружелюбными альпаками, чья смешная челка, задумчивый взгляд и мягкая шерсть вызывают мгновенную улыбку у взрослых и неподдельный восторг у детей.</p>
                        </div>
                        <div className="item">
                            <div className="img img4">Путешествие по канатной дороге</div>
                            <p>Канатные дороги - это 20+ км воздушного путешествия с панорамами, от которых замирает сердце. Наслаждайтесь горными ландшафтами, звуками леса и шумом ручьев уже через несколько минут после старта.</p>
                        </div>
                    </HorizontalDragRail>
                    {/*</div>*/ }
                    <Cursor
                        visible={ visible }
                        active={ dragging }
                        x={ position.x }
                        y={ position.y }
                        label={ "[ двигать ]" }
                    />
                </Zone>
            </div>
            <Line/>
        </Content>
        : <Content
            bg1={ "summer_7" }
            bg2={ "summer_8" }
            bg3={ "summer_9" }
            bg4={ "summer_10" }
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
                <Zone ref={zoneRef} $hideCursor={hideNativeCursor}>
                    {/*<div className="list">*/}
                    <HorizontalDragRail
                        customCursor
                        onDragStart={ () => setDragging(true) }
                        onDragEnd={ () => setDragging(false) }
                    >
                        <div className="item">
                            <div className="img img1">Путешествие по канатной дороге</div>
                            <p>Канатные дороги - это 20+ км воздушного путешествия с панорамами, от которых замирает сердце. Наслаждайтесь горными ландшафтами, звуками леса и шумом ручьев уже через несколько минут после старта.</p>
                        </div>
                        <div className="item">
                            <div className="img img2">Экотропы и трекинг</div>
                            <p>На курорте доступно более 20 экотроп для самостоятельного исследования или в компании профессиональных гидов. Высокогорные трассы, легкие семейные тропы для неспешных прогулок в тени деревьев и природный парк водопадов "Менделиха". </p>
                        </div>
                        <div className="item">
                            <div className="img img3">Горные аттракционы</div>
                            <p>Виражи на скорости до 40 км/ч по серпантину горной трассы родельбана в самом сердце Олимпийской деревни - настоящий всплеск адреналина и впечатлений.</p>
                        </div>
                        <div className="item">
                            <div className="img img4">Парки и фермы </div>
                            <p>Знакомство с дружелюбными альпаками, чья смешная челка, задумчивый взгляд и мягкая шерсть вызывают мгновенную улыбку у взрослых и неподдельный восторг у детей.</p>
                        </div>
                    </HorizontalDragRail>
                    {/*</div>*/ }
                    <Cursor
                        visible={ visible }
                        active={ dragging }
                        x={ position.x }
                        y={ position.y }
                        label={ "[ двигать ]" }
                    />
                </Zone>
            </div>
            <Line/>
        </Content>
    }</>
}