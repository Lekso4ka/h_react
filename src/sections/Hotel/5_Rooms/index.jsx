import React from "react";
import { useT } from "../../../Ctx";
import { Link } from "../../../ui/Link";
import { Section3 } from "./style";

export const Rooms = ({data, link, name}) => {
    const t = useT();
    return <Section3 pic={data.bg}>
        <div className="tooltip">{name}</div>
        <h2>{data.caption}</h2>
        <Link
            to={link}
            color={"light"}
            hover={"light"}
        >{ t("toRooms") } { link }</Link>
    </Section3>
}