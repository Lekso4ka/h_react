import React from "react";

export function lines(text) {
    if (typeof text !== "string") return text;
    return text.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>{line}{i < arr.length - 1 ? <br/> : null}</React.Fragment>
    ));
}
