import React from "react"
import { Seo } from "../components/Seo";
import { getMain } from "../data";
import { EventsContent } from "../sections/Events";
import { HomeContent } from "../sections/Home";


export const Home = () => {
    return <>
        <Seo {...getMain()?.seo} />
        <HomeContent/>
        <EventsContent/>
    </>
}