import React from "react"
import {Routes, Route} from "react-router"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { Actions } from "./pages/Actions";
import { Activities } from "./pages/Activities";
import { Ev2 } from "./pages/Ev2";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Hotel } from "./pages/Hotel";
import { Room } from "./pages/Room";
import { Zal } from "./pages/Zal";
import {Vac} from "./pages/Vac";

export const App = () => {
    return <div>
        <Header/>
        <Routes>
            {/*<Route path="/" exec element={<Home/>}/>*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/room"  element={<Room/>}/>
            <Route path="/activities"  element={<Activities/>}/>
            <Route path="/events"  element={<Ev2/>}/>
            <Route path="/zal"  element={<Zal/>}/>
            <Route path="/actions"  element={<Actions/>}/>
            <Route path="/contacts"  element={<Vac/>}/>
            <Route path="/hotel/:id"  element={<Hotel/>}/>
        </Routes>
        {/*<Map/>*/}
        <Footer/>
    </div>
}