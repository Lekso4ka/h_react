import styled from "@emotion/styled"

export const List = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ItemSt = styled.div`
    border-top: .1rem solid rgba(150, 40, 31, 0.10);
	overflow: hidden;
    &:last-of-type {
        border-bottom: .1rem solid rgba(150, 40, 31, 0.10);
    }
`;

export const Trigger = styled.button`
    display: grid;
    gap: 3.2rem;
    grid-template-columns: 6rem 1fr auto;
    cursor: pointer;
    justify-items: flex-start;
    align-content: center;
    width: 100%;
    color: #000;
    font-family: "Playfair Display";
    padding: 1.8rem 0;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 22px */
    text-align: left;
    @media (min-width: 576px) {
        font-size: 3.4rem;
        padding: 3.5rem 0;
        gap: 0;
        grid-template-columns: 15.8rem 1fr auto;
        cursor: pointer;
    }
`;

export const Question = styled.span`
    span {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 19.8px */
    }
    @media (min-width: 576px) {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        span {
            color: var(--Black-2, #2F3034);
            font-family: "Playfair Display";
            font-size: 2.4rem;
            font-style: italic;
            font-weight: 400;
            line-height: 110%;
        }
    }
`;

export const Button = styled.span`
    display: flex;
    align-items: center;
    gap: .2rem;
    svg {
        height: 1.6rem;
    }
    span {
        display: flex;
        height: 1.2rem;

        svg {
            height: 100%;
        }
    }
    @media (min-width: 576px) {
        
        gap: .4rem;
        svg {
            height: 2.2rem;
        }

        span {
            height: 1.6rem;
        }
    }
`;

export const Panel = styled.div`
	overflow: hidden;
`;

export const Inner = styled.div`
    padding-bottom: 1.8rem;
    color: var(--Black-2, #2F3034);
    font-family: Manrope;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    p:not(:first-of-type) {
        padding-top: 2.4rem;
    }
    ul {
        padding-top: 2.4rem;
    }
    li {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: .9rem;
        font-family: Manrope;
        font-style: normal;
        line-height: 140%; /* 16.8px */
        &::before {
            content: "";
            width: .3rem;
            height: .3rem;
            position: absolute;
            left: 0;
            border-radius: 50%;
            background-color: rgba(85, 83, 46, 0.80);
        }
    }
    .links {
        padding-top: 3.2rem;
        display: flex;
        gap: 4.4rem;
    }
    @media (min-width: 576px) {
        font-size: 1.8rem;
        padding-bottom: 3.5rem;
        p:not(:first-of-type) {
            padding-top: 2.8rem;
        }

        ul {
            padding-top: 2.8rem;
        }
    }
`;