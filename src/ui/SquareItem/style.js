import styled from "@emotion/styled";

export const Item = styled.div`
    font-family: Manrope;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 110%; /* 17.6px */
    color: ${ ({ active }) => active ? "#2F3034" : "rgba(47,48,52,0.6)" };
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 2.4rem;

    &::before {
        content: "";
        top: .5rem;
        width: 1rem;
        height: 1rem;
        border: .1rem solid #2F3034;
        position: absolute;
        box-sizing: border-box;
        left: .4rem;
        
        ${ ({ active }) => active ? "background: var(--Black-2, #2F3034);" : "" }
    }

    &::after {
        right: 0;
        transform: translate(100%, 0);
        bottom: 100%;
        position: absolute;
        color: ${ ({ active }) => active ? "#2F3034" : "rgba(47, 48, 52, 0.60);" };
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 120%; /* 19.2px */
    }

    ${ ({ cnt }) => cnt ? `
        &::after {
            content: "[ ${ cnt } ]";
        }
    ` : "" };
    
    @media (min-width: 576px) {
        font-size: 1.8rem;
        padding-left: 2.8rem;
        &::before {
            top: auto;
            width: 1.2rem;
            height: 1.2rem;
        }
        &::after {
            font-size: 1.6rem;
            bottom: 1.5rem;
            right: -.6rem;
        }
    }
`