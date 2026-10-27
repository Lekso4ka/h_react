import React from "react";
import { useT } from "../../../Ctx";
import { getMain, getVenuesCnt } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";
import { lines } from "../../../utils/lines";

export const Nav = ({weather}) => {
    const t = useT();
    const data = getMain()?.nav || {};
    const golden = data.golden_tulip || {};
    const tulip = data.tulip_inn || {};

    return <Content bg1={ data.image_1 } bg2={ data.image_2 }>
        <h4>{ lines(data.label) }</h4>
        <nav>
            <Link
                variant="big"
                to={ `/activities/${ weather }` }
            >{ lines(t("activities")) }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to=""
            >{ lines(t("spa")) }</Link>
            <Link
                variant="big"
                to="/restaurant/golden-tulip"
            >{ lines(t("restaurants")) }<span>[ 2 ]</span></Link>
            <Link
                variant="big"
                to="/services/golden-tulip"
            >{ lines(t("hotelServices")) }</Link>
            <Link
                variant="big"
                to="/events/default"
            >{ lines(t("events")) }<span>[ 1 ]</span></Link>
            <Link
                variant="big"
                to="/events/venues"
            >{ lines(t("venues")) }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/stock/golden-tulip"
            >{ lines(t("offers")) }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/affiche"
            >{ lines(t("poster")) }<span>[ { getVenuesCnt() } ]</span></Link>
        </nav>
        <div className="list">
            <div className="room">
                <h4>{ lines(golden.label) }</h4>
                <h2>{ lines(golden.title) }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/golden-tulip"
                >{ lines(t("toRooms")) }</Link>
            </div>
            <div className="room">
                <h4>{ lines(tulip.label) }</h4>
                <h2>{ lines(tulip.title) }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/tulip-inn"
                >{ lines(t("toRooms")) }</Link>
            </div>
        </div>
    </Content>
}
