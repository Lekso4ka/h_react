import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useCtx } from "../../Ctx";
import { getHotels } from "../../data";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Line } from "../../ui/Line";
import { SquareItem } from "../../ui/SquareItem";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Container } from "./style";


const names = [
    "golden-tulip",
    "tulip-inn"
]

export const RestaurantContent = ({page}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const h = getHotels()
    const {mob} = useCtx()
    return <Container page={ page }>
        { page && <div className="top">
            <Line/>
            <Breadcrumbs data={ [
                { text: "Home", link: "/" },
                { text: h[id].name, link: `/hotel/${ id }` },
                { text: `Ресторан ${ h[id].name }` }
            ] }/>
            <div className="tabs">
                { names.map(el => <SquareItem
                    key={ el }
                    active={ id === el }
                    onClick={ () => navigate(`/restaurant/${ el }`) }>{ h[el].name }</SquareItem>) }
            </div>
        </div> }
        {mob
            ? <Mobile data={h[id].section_5} page={page}/>
            : <Desktop data={h[id].section_5} page={page}/>}
    </Container>
}