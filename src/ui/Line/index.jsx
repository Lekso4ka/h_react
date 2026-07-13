import React from "react";
import styled from "@emotion/styled"

const StyledLine = styled.div`
    border-top: .1rem solid rgba(150, 40, 31, 0.20);
`
export const Line = ({ ...rest }) => {
    return <StyledLine { ...rest } className={ `line ${rest.className || ""}` }/>
}