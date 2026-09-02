
import React, { useRef, useState } from "react";
import { getMain } from "../../../data";
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
    const data = getMain()?.activities || {};
    const season = data[weather] || {};
    const items = season.items || [];
    
    const hideNativeCursor = visible || dragging;
    return <Content
            bg1={ items[0]?.image }
            bg2={ items[1]?.image }
            bg3={ items[2]?.image }
            bg4={ items[3]?.image }
            activeBtn={ weather === "winter" ? 2 : 1 }
        >
            <Line/>
            <div className="content">
                <h4>{ data.label }</h4>
                <h2>{ season.title } { season.title_accent && <span>{ season.title_accent }</span> }</h2>
                <p>{ season.text }</p>
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
                    <HorizontalDragRail
                        customCursor
                        onDragStart={ () => setDragging(true) }
                        onDragEnd={ () => setDragging(false) }
                    >
                        { items.map((item, index) => (
                            <div className="item" key={ `${item.title}-${index}` }>
                                <div className={ `img img${ index + 1 }` }>{ item.title }</div>
                                <p>{ item.text }</p>
                            </div>
                        )) }
                    </HorizontalDragRail>
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
}
