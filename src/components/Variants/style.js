import styled from "@emotion/styled"

export const Block = styled.div`
    display: flex;
    width: 29.3rem;
    height: 4rem;
    padding: 13px 12px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    background: ${({active}) => active? "#3B3C3F" : "#2F3034"};
    color: #FFF6F0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    position: relative;
    svg {
        width: 1.4rem;
        height: 1.4rem;
        transition: transform .2s linear;
        transform: ${ ({ active }) => active ? "rotate(45deg)" : "rotate(0)"}
    }
`
export const ContentBlock = styled.div`
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
`
export const Content = styled.div`
    display: flex;
    height: 3.8rem;
    padding: 1rem 1.2rem 1rem 4rem;
    align-items: center;
    color: ${({active}) => active ? "#2F3034" : "#2F303499"};;
    position: relative;
    box-sizing: border-box;
    border-right: 1px solid #2F3034;
    border-bottom: 1px solid #2F3034;
    border-left: 1px solid #2F3034;
    background: var(--Beige, #FFF6F0);
    backdrop-filter: blur(8px);
    user-select: none;
    &::before {
        content: "";
        left: 1.2rem;
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        border: .1rem solid;
        border-color: ${({active}) => active ? "#2F3034" : "#2F303499"};
        box-sizing: border-box;
    }
    
    ${({active}) => active ? `&::after {
        content: "";
        left: 1.5rem;
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        background-color: #2F3034;
        border-radius: .2rem;
    }` : ""}
`