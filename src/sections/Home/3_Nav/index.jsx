import React from "react";
import { useT } from "../../../Ctx";
import { getMain, getVenuesCnt } from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";

export const Nav = ({weather}) => {
    const t = useT();
    const data = getMain()?.nav || {};
    const golden = data.golden_tulip || {};
    const tulip = data.tulip_inn || {};

    return <Content bg1={ data.image_1 } bg2={ data.image_2 }>
        <h4>{ data.label }</h4>
        <nav>
            <Link
                variant="big"
                to={ `/activities/${ weather }` }
            >{ t("activities") }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to=""
            >{ t("spa") }</Link>
            <Link
                variant="big"
                to="/restaurant/golden-tulip"
            >{ t("restaurants") }<span>[ 2 ]</span></Link>
            <Link
                variant="big"
                to="/services/golden-tulip"
            >{ t("hotelServices") }</Link>
            <Link
                variant="big"
                to="/events/default"
            >{ t("events") }<span>[ 1 ]</span></Link>
            <Link
                variant="big"
                to="/events/venues"
            >{ t("venues") }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/stock/golden-tulip"
            >{ t("offers") }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to="/affiche"
            >{ t("poster") }<span>[ { getVenuesCnt() } ]</span></Link>
        </nav>
        <div className="list">
            <div className="room">
                <h4>{ golden.label }</h4>
                <h2>{ golden.title }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/golden-tulip"
                >{ t("toRooms") }</Link>
            </div>
            <div className="room">
                <h4>{ tulip.label }</h4>
                <h2>{ tulip.title }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to="/rooms/tulip-inn"
                >{ t("toRooms") }</Link>
            </div>
        </div>
    </Content>
}
