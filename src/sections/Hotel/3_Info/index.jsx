import React from "react";
import { useCtx } from "../../../Ctx";
import { Section2 } from "./style";

export const Info = ({data}) => {
    const {mob} = useCtx()
    return <>
        <Section2
            pic1={data.image_1}
            pic2={data.image_2}
        >
            {mob ? <>
                    <span>{ data.tooltip }</span>
                    <h2>{ data.caption }</h2>
                    <div className="img-left"/>
                    <div className="img-right"/>
                    <p>{ data.text }</p>
                </>
                : <>
                <div className="content">
                        <span>{ data.tooltip }</span>
                        <h2>{ data.caption }</h2>
                        <div className="img-left"/>
                        <p>{ data.text }</p>
                    </div>
                    <div className="img-right"/>
                </>
            }
        
        </Section2>
    </>
}