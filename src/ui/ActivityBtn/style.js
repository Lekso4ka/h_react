import styled from "@emotion/styled";

const setVariant = ({ theme, variant, active }) => {
    switch (variant) {
        case 1:
            return ({
                borderColor: active ? "transparent" : theme.colors.light_20,
                backgroundColor: active ? theme.colors.light_20 : "transparent",
                color: active ? theme.colors.light : theme.colors.white_40
            })
        case 2:
            return ({
                borderColor: active ? theme.colors.red : theme.colors.light_20,
                backgroundColor: active ? "transparent" : theme.colors.c1_10,
                color: active ? theme.colors.red : theme.colors.text
            })
    }
}

export const Button = styled.button`
    width: 7.6rem;
    height: 3.6rem;
    box-sizing: border-box;
    display: flex;
    padding: .6rem 2.4rem .8rem;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    border-width: .1rem;
    border-style: solid;
    backdrop-filter: blur(8px);
    font-family: ${ ({ theme }) => theme.fonts.display };
    font-size: 1.6rem;
    font-style: italic;
    text-transform: lowercase;
    ${ setVariant };
    @media (min-width: 576px) {
        width: 9.6rem;
        height: 3.8rem;
        font-size: 2rem;
        padding: .5rem 2.4rem 1rem;
        font-weight: 500;
    }
`