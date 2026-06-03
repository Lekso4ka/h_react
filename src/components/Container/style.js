import styled from "@emotion/styled";

export const Block = styled.div`
 ${({bg}) => bg ? `background-color: ${bg};` : ""}
    padding-top: 14rem;
`