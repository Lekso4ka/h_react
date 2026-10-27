import React from "react";
import { useT } from "../../../Ctx";
import { Link } from "../../../ui/Link";
import { Section3 } from "./style";
import { lines } from "../../../utils/lines";

export const Rooms = ({data, link, name}) => {
    const t = useT();
    return <Section3 pic={data.bg}>
        <div className="tooltip">{lines(name)}</div>
        <h2>{lines(data.caption)}</h2>
        <Link
            to={link}
            color={"light"}
            hover={"light"}
        >{ lines(t("toRooms")) }</Link>
    </Section3>
}