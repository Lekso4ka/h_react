import React from "react"
import { EventsContent } from "../components/EventsContent";
import { HomeContent } from "../sections/Home";


export const Home = () => {
    return <>
        <HomeContent/>
        <EventsContent/>
    </>
}