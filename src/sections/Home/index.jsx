import React, { useState } from "react";
import { Activities } from "./Activities";
import { Hero } from "./Hero";
import { Images } from "./Images";
import { Nav } from "./Nav";

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
    </>
}