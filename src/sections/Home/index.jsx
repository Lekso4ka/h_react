import React, { useState } from "react";
import { Hero } from "./Hero";

export const HomeContent = () => {
    const [weather, setWeather] = useState("winter");
    
    return <>
        <Hero
            weather={weather}
            setWeather={setWeather}
        />
    </>
}