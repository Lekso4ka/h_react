import React from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../../data/venues";
import { Breadcrumbs } from "../Breadcrumbs";
import { Vector } from "../Vector";
import { Block, Content } from "./style";

export const VenueContent = () => {
    const { id } = useParams();
    const data = getVenueById(id);
    
    return <Block>
        <Breadcrumbs data={ [
            { text: "Главная", link: "/" },
            { text: "Конференц-залы", link: "" },
            { text: data.name }
        ] }/>
        <Content>
            <h1>{ data.name }</h1>
            <div className="center">
                <div>
                    <h4>Площадь зала</h4>
                    <p>{ data.size }</p>
                </div>
                <div>
                    <h4>Вместимость человек</h4>
                    <p>{ data.guests }</p>
                </div>
                {data.variants.length > 0 && <div>
                    <h4>Варианты рассадки</h4>
                    <p>{ data.variants.length }</p>
                </div>}
                <div dangerouslySetInnerHTML={{__html: data.plan}}/>
                <div>
                    {data.variants.map(v => <div key={v.text}>
                        <h5>Вместимость</h5>
                        <div className="digit">{v.guests}</div>
                        <h5>{v.name}</h5>
                        <Vector name={v.name}/>
                    </div>)}
                </div>
            </div>
            <a href="">Отправить запрос</a>
        </Content>
        <div className="images">
        
        </div>
    </Block>
}