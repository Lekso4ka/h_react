import React from "react";

export function lines(text) {
    if (typeof text !== "string") return text;
    if (text.includes("\n")) {
        return text.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>{line}{i < arr.length - 1 ? <br/> : null}</React.Fragment>
        ));
    } else if (text.includes("\\n")) {
        return text.split("\\n").map((line, i, arr) => (
            <React.Fragment key={ i }>{ line }{ i < arr.length - 1 ? <br/> : null }</React.Fragment>
        ));
    } else {
        return text;
    }
}
