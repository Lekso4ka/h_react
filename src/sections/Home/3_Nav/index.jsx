import React from "react";
import { useT } from "../../../Ctx";
import {
    getActivitiesCnt,
    getAfficheCnt,
    getEventsCnt,
    getMain,
    getRestaurantsCnt,
    getServicesCnt,
    getStocksCnt,
    getVenuesCnt,
} from "../../../data";
import { Link } from "../../../ui/Link";
import { Content } from "./style";
import { lines } from "../../../utils/lines";
import { siteLink } from "../../../utils/staticLinks";

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
            >{ lines(t("activities")) }<span>[ { getActivitiesCnt(weather) } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerSpa") }
            >{ lines(t("spa")) }</Link>
            <Link
                variant="big"
                to={ siteLink("footerRestaurants") }
            >{ lines(t("restaurants")) }<span>[ { getRestaurantsCnt() } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerServices") }
            >{ lines(t("hotelServices")) }<span>[ { getServicesCnt("golden-tulip") } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerEvents") }
            >{ lines(t("events")) }<span>[ { getEventsCnt() } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerVenues") }
            >{ lines(t("venues")) }<span>[ { getVenuesCnt() } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerOffers") }
            >{ lines(t("offers")) }<span>[ { getStocksCnt("golden-tulip") } ]</span></Link>
            <Link
                variant="big"
                to={ siteLink("footerAffiche") }
            >{ lines(t("poster")) }<span>[ { getAfficheCnt() } ]</span></Link>
        </nav>
        <div className="list">
            <div className="room">
                <h4>{ lines(golden.label) }</h4>
                <h2>{ lines(golden.title) }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to={ siteLink("homeRoomsGolden") }
                >{ lines(t("toRooms")) }</Link>
            </div>
            <div className="room">
                <h4>{ lines(tulip.label) }</h4>
                <h2>{ lines(tulip.title) }</h2>
                <Link
                    color={"light"}
                    hover={"light"}
                    to={ siteLink("homeRoomsTulip") }
                >{ lines(t("toRooms")) }</Link>
            </div>
        </div>
    </Content>
}
