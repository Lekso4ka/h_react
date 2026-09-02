import React from "react";
import { getMain, getVenuesCnt } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";

export const Nav = ({weather}) => {
    const data = getMain()?.nav || {};
    const golden = data.golden_tulip || {};
    const tulip = data.tulip_inn || {};

    return <Content bg1={ data.image_1 } bg2={ data.image_2 }>
        <h4>{ data.label }</h4>
        <nav>
            <Link
                variant="big"
                to={ `/activities/${ weather }` }
            >Активности<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to=""
            >СПА центр</Link>
            <Link
                variant="big"
                to="/restaurant/golden-tulip"
            >Рестораны<span>[ 2 ]</span></Link>
            <Link
                variant="big"
                to="/services/golden-tulip"
            >Услуги отеля</Link>
            <Link
                variant="big"
                to="/events/default"
            >Мероприятия<span>[ 1 ]</span></Link>
            <Link
                variant="big"
                to="/events/venues"
            >Конференц залы<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/stock/golden-tulip"
            >Акции<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/affiche"
            >Афиша<span>[ { getVenuesCnt() } ]</span></Link>
        </nav>
        <div className="list">
            <div className="room">
                <h4>{ golden.label }</h4>
                <h2>{ golden.title }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/golden-tulip"
                >К номерам</Link>
            </div>
            <div className="room">
                <h4>{ tulip.label }</h4>
                <h2>{ tulip.title }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/tulip-inn"
                >К номерам</Link>
            </div>
        </div>
    </Content>
}
