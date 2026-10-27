import React from "react";
import { useCtx } from "../../../Ctx";
import { Section2 } from "./style";
import { lines } from "../../../utils/lines";

export const Info = ({data}) => {
    const {mob} = useCtx()
    return <>
        <Section2
            pic1={data.image_1}
            pic2={data.image_2}
        >
            {mob ? <>
                    <span>{ lines(data.tooltip) }</span>
                    <h2>{ lines(data.caption) }</h2>
                    <div className="img-left"/>
                    <div className="img-right"/>
                    <p>{ lines(data.text) }</p>
                </>
                : <>
                <div className="content">
                        <span>{ lines(data.tooltip) }</span>
                        <h2>{ lines(data.caption) }</h2>
                        <div className="img-left"/>
                        <p>{ lines(data.text) }</p>
                    </div>
                    <div className="img-right"/>
                </>
            }
        
        </Section2>
    </>
}