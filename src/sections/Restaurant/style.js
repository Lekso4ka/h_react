import styled from "@emotion/styled"

export const Container = styled.div`
    padding: ${({page}) => page ? "7.8rem" : "0"} 0 9rem;
    .top {
        padding: 0 1.6rem 2.4rem;
        position: relative;
        display: grid;
        &::before {
            width: .1rem;
            content: "";
            height: 2.4rem;
            left: calc(50% - .05rem);
            position: absolute;
            top: 0;
            background: rgba(150, 40, 31, 0.20);
        }
        nav {
            padding: 3.5rem 0 12.2rem;
        }
        .tabs {
            display: flex;
            gap: 6.5rem;
        }
    }
    @media (min-width: 576px) {
        padding: ${({page}) => page ? "9.2rem 2.4rem 15rem" : "0"};
        .top {
            padding: 0 0 2.4rem;
            &::before {
                height: 1.4rem;
            }
            nav {
                padding: 4.9rem 0 4.8rem;
            }
            .tabs {
                justify-self: flex-end;
                gap: 3.2rem;
            }
        }
        &::after {
            width: .1rem;
            content: "";
            height: 1.4rem;
            left: calc(50% - .05rem);
            position: absolute;
            bottom: ${({page}) => page ? 1 : 0}rem;
            background: rgba(150, 40, 31, 0.20);
        }

    }
`