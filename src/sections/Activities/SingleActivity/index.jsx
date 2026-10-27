import React from "react";
import { useT } from "../../../Ctx";
import { Link } from "../../../ui/Link";
import { getActivitiesById } from "../../../data";
import { Section } from "./style";
import { lines } from "../../../utils/lines";

export const SingleActivity = ({name}) => {
    const t = useT();
    const data = getActivitiesById(name);
    return <Section bg={data.subImage}>
        <div className="tooltip">{ lines(t("activitiesTag")) }</div>
        <h2>{lines(data.subTitle)}</h2>
        <p>{lines(data.subText)}</p>
        <Link
            color={"light"}
            hover={"light"}
            to={`/activities/${name}`}
        >{ lines(t("toActivities")) }</Link>
    </Section>
}