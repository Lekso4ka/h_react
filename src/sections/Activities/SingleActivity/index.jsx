import React from "react";
import { useT } from "../../../Ctx";
import { Link } from "../../../ui/Link";
import { getActivitiesById } from "../../../data";
import { Section } from "./style";

export const SingleActivity = ({name}) => {
    const t = useT();
    const data = getActivitiesById(name);
    return <Section bg={data.subImage}>
        <div className="tooltip">{ t("activitiesTag") }</div>
        <h2>{data.subTitle}</h2>
        <p>{data.subText}</p>
        <Link
            color={"light"}
            hover={"light"}
            to={`/activities/${name}`}
        >{ t("toActivities") }</Link>
    </Section>
}