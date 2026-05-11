import React from "react"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { Promo } from "./components/Promo";
import { RoomDiv } from "./components/RoomDiv";

export const App = () => {
    return <div>
        <Header/>
        <RoomDiv/>
        <Promo/>
        <Map/>
        <Footer/>
    </div>
}