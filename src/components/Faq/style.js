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
    width: 100%;
    color: #000;
    font-family: "Playfair Display";
    font-size: 3.4rem;
    font-weight: 400;
    line-height: 110%;
    padding: 3.5rem 0;
    display: grid;
    grid-template-columns: 15.8rem 1fr auto;
	cursor: pointer;
    justify-items: flex-start;
    align-content: center;

	&:focus-visible {
		outline: 2px solid red;
		outline-offset: -2px;
	}
`;

export const Question = styled.span`
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
`;

export const Button = styled.span`
    display: flex;
    align-items: center;
    gap: .4rem;
    svg {
        height: 2.2rem;
    }
    span {
        display: flex;
        height: 1.6rem;
        svg {
            height: 100%;
        }
    }
`;

export const Panel = styled.div`
	overflow: hidden;
`;

export const Inner = styled.div`
    color: var(--Black-2, #2F3034);
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 130%;
    padding-bottom: 3.5rem;
`;