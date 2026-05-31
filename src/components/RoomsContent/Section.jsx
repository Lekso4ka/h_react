import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRooms } from "../../data/rooms";
import { pluralize } from "../../utils/pluralize";
import { Section } from "./style";

export const RoomsSection = ({data, h}) => {
    const [size, setSize] = useState(data.size)
    const [guests, setGuests] = useState(data.guests)
    const [rooms, setRooms] = useState(data.rooms)
    const [img, setImg] = useState(data.image)
    
    const roomsData = getRooms(h);
    const navigate = useNavigate();
    
    const handleOn = (id) => {
        const r = roomsData[id]
        const d = r.variants.length ? r[r.variants[0]] : r.default;
        setSize(d.size);
        setGuests(d.guests)
        setRooms(d.rooms)
        setImg(d.images[0])
    }
    const handleOff = () => {
        setSize(data.size);
        setGuests(data.guests)
        setRooms(data.rooms)
        setImg(data.image)
    }
    
    return <Section
        pic={img}
    >
        <h2>{data.caption}</h2>
        <div className="line"/>
        <div className="content">
            <div>
                <div className="tooltips">
                    <div>
                        <span className="digit">{size}</span>
                        <span>м<sup>2</sup></span>
                    </div>
                    <div>
                        <span>до</span>
                        <span className="digit">{guests}</span>
                        <span>{pluralize(guests, ["гостя", "гостей", "гостей"])}</span>
                    </div>
                    <div>
                        <span className="digit">{rooms}</span>
                        <span>{pluralize(rooms, ["комната", "комнаты", "комнат"])}</span>
                    </div>
                </div>
                <div className="img"/>
            </div>
            <ul>
                { data.variants.map(el => <li
                    key={el.id}
                    onMouseEnter={() => handleOn(el.id)}
                    onMouseLeave={handleOff}
                    onClick={() => navigate(`/room/${h}/${el.id}/${el.variants[0] || "default"}`)}
                >
                    <div className="name">
                        {el.name}
                        {el.variants.length > 1 && <sup>[ {el.variants.length} ]</sup>}
                    </div>
                    { el.variants.length > 1 && <div className="variants">
                        {el.variants.map((v,i) => <Fragment key={v}>
                            {i !== 0 && <span className="divider">/</span>}
                            <span key={v}>{v}</span>
                        </Fragment>)}
                    </div>}
                </li>) }
            </ul>
        </div>
        <div className="line-b"/>
    </Section>
}