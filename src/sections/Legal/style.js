import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 8.9rem 1.6rem 9rem;

    .line {
        margin: 0 1.6rem 2.4rem;
    }

    .layout {
        display: block;
    }

    .sidebar {
        display: none;
    }

    .block {
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }

    .section {
        scroll-margin-top: 12rem;
    }

    .section + .section {
        margin-top: 4.4rem;
        padding-top: 4.4rem;
        border-top: 0.1rem solid rgba(47, 48, 52, 0.15);
    }

    .line-h4 {
        margin: 0;
        max-width: 100%;
    }

    h1 {
        color: var(--Black-2, #2F3034);
        text-align: center;
        font-family: "Playfair Display";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        padding: 8.8rem 0 7.3rem;
        margin: 0 auto;
        max-width: 88.6rem;
    }

    h4 {
        color: var(--Red, #96281F);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        text-transform: uppercase;
        padding: 2rem 0;
        margin: 0;
    }

    h2 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        margin: 2rem 0 4.4rem;
        max-width: 108.2rem;
    }

    h3 {
        color: var(--Black-2, #2F3034);
        font-family: "Playfair Display";
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        margin: 0 0 2.4rem;
        max-width: 108.2rem;
    }

    p {
        margin: 2.24rem 0;
        max-width: 108.2rem;
    }

    .list-intro {
        margin: 2.24rem 0 1.2rem;
        max-width: 108.2rem;
    }

    ul {
        margin: 0 0 2.24rem;
        padding: 0;
        max-width: 108.2rem;
    }

    li {
        display: flex;
        position: relative;
        padding-left: 2.5rem;
        margin: 0.6rem 0;

        &::before {
            content: "";
            width: 0.4rem;
            height: 0.4rem;
            position: absolute;
            left: 1rem;
            top: 1rem;
            border-radius: 50%;
            background-color: var(--Black-2, #2F3034);
        }
    }

    .doc-links {
        display: grid;
        gap: 1.6rem;
        margin-top: 2.4rem;
        max-width: 108.2rem;
    }

    .doc-link {
        color: var(--Black-2, #2F3034);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 120%;
        text-decoration: underline;
        text-underline-offset: 0.3rem;
    }

    .services {
        display: grid;
        gap: 4rem;
        margin-top: 2.4rem;
    }

    .services-col h5 {
        margin: 0 0 1.6rem;
        color: var(--Black-2, #2F3034);
        font-family: Manrope;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 130%;
    }

    .tariffs {
        display: grid;
        gap: 0;
        margin-top: 2.4rem;
        max-width: 139.8rem;
    }

    .tariff-head,
    .tariff-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.8rem;
        padding: 1.2rem 0;
        border-top: 0.1rem solid rgba(47, 48, 52, 0.15);
    }

    .tariff-head {
        border-top: 0;
        color: var(--Black-2, #2F3034);
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .tariff-row span:last-child {
        font-weight: 500;
    }

    .download {
        display: inline-block;
        margin-top: 3.2rem;
        color: var(--Red, #96281F);
        font-size: 1.6rem;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 0.35rem;
        cursor: pointer;
        background: none;
        border: 0;
        padding: 0;
        font-family: inherit;
    }

    @media (min-width: 576px) {
        padding: 10.2rem 2.4rem 15.1rem;

        .layout {
            display: grid;
            grid-template-columns: 45.2rem 1fr;
            gap: 4.6rem;
            align-items: start;
        }

        .sidebar {
            display: block;
            position: sticky;
            top: 12rem;
        }

        .sidebar-title {
            border-top: 0.1rem solid rgba(47, 48, 52, 0.2);
            border-bottom: 0.1rem solid rgba(47, 48, 52, 0.2);
            padding: 1.8rem 0;
            color: var(--Black-2, #2F3034);
            font-family: Manrope;
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 3.2rem;
        }

        .toc {
            display: grid;
            gap: 2.4rem;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .toc li {
            display: grid;
            grid-template-columns: 3.2rem 1fr;
            gap: 2rem;
            padding: 0;
            margin: 0;
            align-items: start;

            &::before {
                display: none;
            }
        }

        .toc-num {
            color: var(--Black-2, #2F3034);
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 120%;
        }

        .toc-link {
            color: var(--Black-2, #2F3034);
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 120%;
            text-align: left;
            background: none;
            border: 0;
            padding: 0;
            cursor: pointer;
            font-family: inherit;
            transition: color 0.15s ease;

            &:hover,
            &.active {
                color: var(--Red, #96281F);
            }
        }

        .block {
            font-size: 1.8rem;
            line-height: 150%;
            padding-left: 0;
        }

        h1 {
            padding: 10.2rem 0 8.3rem;
            font-size: 6.4rem;
            min-height: 15.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        h4 {
            padding: 1.8rem 0;
        }

        h2 {
            margin-top: 3.2rem;
            font-size: 4.4rem;
        }

        h3 {
            font-size: 3.4rem;
        }

        p,
        .list-intro {
            margin: 2.7rem 0;
        }

        li::before {
            top: 1.3rem;
        }

        .services {
            grid-template-columns: 61rem 1fr;
            gap: 2.1rem;
        }

        .tariff-head,
        .tariff-row {
            grid-template-columns: 61rem 1fr;
            gap: 2.1rem;
            align-items: start;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.8rem;
    margin-bottom: 1.6rem;

    @media (min-width: 576px) {
        gap: 2.3rem;
    }
`;
