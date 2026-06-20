import React, { useState } from "react";
import { Activities } from "./Activities";
import { Hero } from "./Hero";
import { Hotels } from "./Hotels";
import { Images } from "./Images";
import { Nav } from "./Nav";
import { Restaurants } from "./Restaurants";
import { Spa } from "./Spa";

export const HomeContent = () => {
    const [weather, setWeather] = useState("winter");
    
    return <>
        <Hero
            weather={weather}
            setWeather={setWeather}
        />
        <Images/>
        <Nav
            weather={weather}
        />
        <Activities
            weather={weather}
            setWeather={setWeather}
        />
        <Spa/>
        <Hotels/>
        <Restaurants/>
    </>
}