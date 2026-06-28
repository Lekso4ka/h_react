import React from "react";
import { Section2 } from "./style";

export const Info = ({data}) => {
    return <>
        <Section2
            pic1={data.image_1}
            pic2={data.image_2}
        >
            <div className="content">
                <span>{data.tooltip}</span>
                <h2>{data.caption}</h2>
                <div className="img-left" />
                <p>{data.text}</p>
            </div>
            <div className="img-right"/>
        </Section2>
    </>
}