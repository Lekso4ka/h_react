import React from 'react';
import { useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getActivitiesById } from "../data";
import { ActivitiesContent } from "../sections/Activities";

export const Activities = () => {
    const { activity } = useParams();
    return <>
        <Seo {...getActivitiesById(activity)?.seo} />
        <ActivitiesContent/>
    </>
}