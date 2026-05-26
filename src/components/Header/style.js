import styled from "@emotion/styled"

export const HeaderBlock = styled.header`
    height: 9.2rem;
    padding: 1.8rem 2.4rem .8rem;
    //background-color: #FFF6F0;
    color: #2F3034;
    z-index: 1;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 14rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    &::after {
        height: .1rem;
        background: rgba(150, 40, 31, 0.20);
        width: calc(100% - 4.8rem);
        content: "";
        position: absolute;
        bottom: -.1rem;
        left: 2.4rem;
    }
`
export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.8rem;
`
export const HeaderMenu2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7.2rem;
`
export const HeaderLink = styled.span`
    display: grid;
    grid-template-columns: 1fr 1.4rem;
    gap: 1.1rem;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
    cursor: pointer;
    align-items: center;
    svg {
        width: 1.4rem;
        height: 1.4rem;
    }
`

export const HeaderLink2 = styled.span`
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
    cursor: pointer;
`
export const HeaderName = styled.div`
    color: #2F3034;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 98%; /* 21.56px */
    text-transform: uppercase;
`
export const HeaderButton = styled.button`
    display: flex;
    width: 20rem;
    height: 3.8rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #96281F;
    backdrop-filter: blur(.8rem);
    color: #FFF6F0;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
`
export const HeaderLang = styled.div`
    display: flex;
    gap: .4rem;
    align-items: center;
    font-family: "Playfair Display",serif;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: .5rem;
    span:first-of-type {
        cursor: pointer;
        color: #2F303466;
    }
    span:last-of-type {
        cursor: pointer;
    }
`