import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getActivitiesById } from "../data";
import { ActivitiesContent } from "../sections/Activities";
import { NotFound } from "./NotFound";

export const Activities = () => {
    const { activity } = useParams();
    const data = getActivitiesById(activity);
    if (!data) return <NotFound />;
    return <>
        <Seo {...data.seo} />
        <ActivitiesContent/>
    </>
}