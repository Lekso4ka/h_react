import React from "react"
import {Routes, Route} from "react-router"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { Activities } from "./pages/Activities";
import { Affiche } from "./pages/Affiche";
import { Doings } from "./pages/Doings";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Hotel } from "./pages/Hotel";
import { Restaurant } from "./pages/Restaurant";
import { Room } from "./pages/Room";
import { Rooms } from "./pages/Rooms";
import { Services } from "./pages/Services";
import { Venue } from "./pages/Venue";
import { Actions } from "./pages/Actions";
import {Vac} from "./pages/Vac";
import { Wedding } from "./pages/Wedding";

export const App = () => {
    return <div>
        <Header/>
        <Routes>
            <Route path="/" exec element={<Home/>}/>
            <Route path="/activities/:activity"  element={<Activities/>}/>
            {/* Мероприятия */}
            <Route path="/events/:event"  element={<Events/>}/>
            <Route path="/wedding"  element={<Wedding/>}/>
            {/* События */}
            <Route path="/doings" element={<Doings/>}/>
            <Route path="/affiche" element={<Affiche/>}/>
            
            <Route path="/stock/:id"  element={<Actions/>}/>
            <Route path="/services/:id"  element={<Services/>}/>
            <Route path="/restaurant/:id"  element={<Restaurant/>}/>
            <Route path="/vacancies"  element={<Vac/>}/>
            
            <Route path="/hotel/:id"  element={<Hotel/>}/>
            <Route path="/venue/:id"  element={<Venue/>}/>
            <Route path="/rooms/:id"  element={<Rooms/>}/>
            <Route path="/room/:hotel/:id/:variant"  element={<Room/>}/>
            
        </Routes>
        <Map/>
        <Footer/>
    </div>
}