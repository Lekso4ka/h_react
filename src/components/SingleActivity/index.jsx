import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/activities.json";
import { Section } from "./style";

export const SingleActivity = ({name}) => {
    return <Section bg={data[name].subImage}>
        <div className="tooltip">[ Активности ]</div>
        <h2>{data[name].subTitle}</h2>
        <p>{data[name].subText}</p>
        <Link to={`/activities/${name}`}>К активностям</Link>
    </Section>
}