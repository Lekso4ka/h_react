import React from 'react';
import { useParams } from "react-router-dom";
import { EventsContent } from "../sections/Events";
import { NotFound } from "./NotFound";

const EVENTS = new Set(["venues", "default"]);

export const Events = () => {
    const { event } = useParams();
    if (!EVENTS.has(event)) return <NotFound />;
    return <EventsContent page/>
}