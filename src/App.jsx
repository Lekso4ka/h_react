import React from "react"
import {Routes, Route} from "react-router"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { Promo } from "./components/Promo";
import { RoomDiv } from "./components/RoomDiv";
import { Actions } from "./pages/Actions";
import { Activities } from "./pages/Activities";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { Zal } from "./pages/Zal";

export const App = () => {
    return <div>
        <Header/>
        <Routes>
            <Route path="/" exec element={<Home/>}/>
            <Route path="/room" exec element={<Room/>}/>
            <Route path="/activities" exec element={<Activities/>}/>
            <Route path="/events" exec element={<Events/>}/>
            <Route path="/zal" exec element={<Zal/>}/>
            <Route path="/actions" exec element={<Actions/>}/>
            
        </Routes>
        {/*<Map/>*/}
        <Footer/>
    </div>
}