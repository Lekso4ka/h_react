import React from "react";
import { Link } from "../../../ui/Link";
import { Section3 } from "./style";

export const Rooms = ({data, name}) => {
    return <Section3 pic={data.bg}>
        <div className="tooltip">{name}</div>
        <h2>{data.caption}</h2>
        <Link
            to={data.room_link}
            color={"light"}
            hover={"light"}
        >К номерам</Link>
    </Section3>
}