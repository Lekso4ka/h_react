import React from "react";
import { getSectionData } from "../../data/hotels";
import { Breadcrumbs } from "../Breadcrumbs";
import { Block } from "./style";
import { RoomsSection } from "./Section";


export const RoomsContent = ({id}) => {
    const name = getSectionData(id, "name")
    const data = getSectionData(id, "section_3");
    console.log(data)
    return <Block>
        <Breadcrumbs data={[
            {text: "Главная", link: "/"},
            {text: name, link: `/hotel/${ id }`},
            {text: "Номера", link: ""}
        ]}/>
        <RoomsSection data={data} h={id}/>
    
    </Block>
}