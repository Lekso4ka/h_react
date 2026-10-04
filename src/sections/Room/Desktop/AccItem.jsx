import React from "react";
import { AccItemSt, AccPanel, AccTrigger, Opt1, Opt2, OptLite } from "./style";

export const AccItem = ({ title, data, variant }) => {
    return (
        <AccItemSt isOpt2={variant === "opt2"}>
            <AccTrigger>
                <h3>{ title }</h3>
            </AccTrigger>
            <AccPanel>
                { variant === "opt1" && <Opt1>
                    { data.map(el => <OptLite key={ el.title }>
                        <h4>{ el.title }</h4>
                        <ul>
                            { el.list.map((item, i) => <li key={ i }>{ item }</li>) }
                        </ul>
                    </OptLite>) }
                </Opt1> }
                { variant === "opt2" && <Opt2>
                    { data.map(el => <li key={ el }>{ el }</li>) }
                </Opt2> }
            </AccPanel>
        </AccItemSt>
    );
};
