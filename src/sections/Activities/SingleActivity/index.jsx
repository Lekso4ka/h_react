import React from "react";
import { Link } from "../../../ui/Link";
import { getActivitiesById } from "../../../data";
import { Section } from "./style";

export const SingleActivity = ({name}) => {
    const data = getActivitiesById(name);
    return <Section bg={data.subImage}>
        <div className="tooltip">[ Активности ]</div>
        <h2>{data.subTitle}</h2>
        <p>{data.subText}</p>
        <Link
            color={"light"}
            hover={"light"}
            to={`/activities/${name}`}
        >К активностям</Link>
    </Section>
}