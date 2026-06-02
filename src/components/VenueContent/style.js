import styled  from "@emotion/styled";

export const Block = styled.div`
    padding: 2.4rem;
`

export const Content = styled.main`
    display: grid;
    grid-template-columns: 1fr auto 92.5rem;
    gap: 18rem;
    position: relative;
    a {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .text {
        column-count: 2;
    }
`