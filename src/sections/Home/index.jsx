import React, { useState } from "react";
import { getMain } from "../../data";
import { Activities } from "./4_Activities";
import { Hero } from "./1_Hero";
import { Hotels } from "./6_Hotels";
import { Images } from "./2_Images";
import { Nav } from "./3_Nav";
import { Restaurants } from "./7_Restaurants";
import { Spa } from "./5_Spa";

export const HomeContent = () => {
    const season = getMain()?.default_season === "summer" ? "summer" : "winter";
    const [weather, setWeather] = useState(season);
    
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
