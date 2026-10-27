import React from "react";
import { AccItemSt, AccPanel, AccTrigger, Opt1, Opt2, OptLite } from "./style";
import { lines } from "../../../utils/lines";

export const AccItem = ({ title, data, variant }) => {
    return (
        <AccItemSt isOpt2={variant === "opt2"}>
            <AccTrigger>
                <h3>{ lines(title) }</h3>
            </AccTrigger>
            <AccPanel>
                { variant === "opt1" && <Opt1>
                    { data.map(el => <OptLite key={ el.title }>
                        <h4>{ lines(el.title) }</h4>
                        <ul>
                            { el.list.map((item, i) => <li key={ i }>{ lines(item) }</li>) }
                        </ul>
                    </OptLite>) }
                </Opt1> }
                { variant === "opt2" && <Opt2>
                    { data.map(el => <li key={ el }>{ lines(el) }</li>) }
                </Opt2> }
            </AccPanel>
        </AccItemSt>
    );
};
