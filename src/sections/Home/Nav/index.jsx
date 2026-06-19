import React from "react";
import { getVenuesCnt } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";

export const Nav = ({weather}) => {
    return <Content bg1={ "h_gt_14" } bg2={ "home_3" }>
        <h4>[ Возможности отеля ]</h4>
        <nav>
            <Link
                variant="big"
                to={ `/activities/${ weather }` }
            >Активности</Link>
            <Link
                variant="big"
                to=""
            >СПА центр</Link>
            <Link
                variant="big"
                to="/restaurant/golden-tulip"
            >Рестораны</Link>
            <Link
                variant="big"
                to="/services/golden-tulip"
            >Услуги отеля</Link>
            <Link
                variant="big"
                to="/events/default"
            >Мероприятия</Link>
            <Link
                variant="big"
                to="/events/venues"
            >Конференц залы<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/stock/golden-tulip"
            >Акции</Link>
            <Link
                variant="big"
                to="/affiche"
            >Афиша</Link>
        </nav>
        <div className="list">
            <div className="room">
                <h4>Голден Тюлип</h4>
                <h2>Номера и сьюты</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/golden-tulip"
                >К номерам</Link>
            </div>
            <div className="room">
                <h4>Тюлип Инн</h4>
                <h2>Номера</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/tulip-inn"
                >К номерам</Link>
            </div>
        </div>
    </Content>
}