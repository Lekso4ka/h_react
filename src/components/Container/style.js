import styled from "@emotion/styled";

export const Block = styled.div`
 ${({bg}) => bg ? `background-color: ${bg};` : ""}
    padding-top: ${({ hh }) => hh ? "9.2rem" : "14rem"};
`