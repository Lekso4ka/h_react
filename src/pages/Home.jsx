import React from "react"
import { EventsContent } from "../components/EventsContent";
import { HomeContent1 } from "../components/HomeContent";
import { HomeContent } from "../sections/Home";


export const Home = () => {
    return <>
        <HomeContent1/>
        <EventsContent/>
    </>
}