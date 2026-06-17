import React from "react"
import { EventsContent } from "../components/EventsContent";
import { HomeBanner } from "../components/HomeBanner";
import { HomeContent } from "../components/HomeContent";
import { HS2 } from "../components/HS2";


export const Home = () => {
    return <>
        <HomeContent/>
        <EventsContent/>
        {/*<HomeBanner/>*/}
        {/*<HS2/>*/}
    </>
}