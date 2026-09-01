import styled from "@emotion/styled";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    background: rgba(0, 0, 0, 0.70);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    &.active {
        opacity: 1;
        pointer-events: auto;
        .modal-content {
            transform: translate(0)
        }
    }
    .modal-content {
        width: 100%;
        background: var(--Gray-1, #565861);
        color: #fff;
        padding: 2.4rem 1.6rem 3.2rem;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%);
        transition: transform 0.3s .3s;
        bottom: 0;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        h3 {
            color: #FFF;
            font-family: "Playfair Display";
            font-size: 2.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
            padding-right: 4.4rem;
            flex-shrink: 0;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
    }
    .fields {
        display: grid;
        border-top: .1rem solid #FFF6F0;
    }
    .field {
        display: grid;
        gap: 1.2rem;
        padding: 1.1rem 0 1rem;
        border-bottom: .1rem solid #FFF6F0;
        position: relative;
        span {
            color: rgba(255, 255, 255, 0.50);
            font-family: Manrope;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
        }
        input {
            border: none;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
            color: #FFF;
            font-family: Manrope;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            background: transparent;
            outline: none;
            border-radius: 0;
            &[readonly] {
                cursor: default;
            }
            &[type="number"] {
                -moz-appearance: textfield;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
            &[type="date"] {
                color-scheme: dark;
            }
        }
    }
    .date-field {
        input {
            padding-right: 3.2rem;
        }
        .calendar-icon {
            position: absolute;
            right: 0;
            bottom: 1rem;
            width: 2.2rem;
            height: 2.5rem;
            pointer-events: none;
        }
        input::-webkit-calendar-picker-indicator {
            position: absolute;
            right: 0;
            bottom: 1rem;
            width: 2.2rem;
            height: 2.5rem;
            opacity: 0;
            cursor: pointer;
        }
    }
    .x {
        position: absolute;
        top: 2rem;
        right: 1.6rem;
        width: 3.4rem;
        cursor: pointer;
        flex-shrink: 0;
        rect {
            fill: #2F3034;
        }
        path {
            fill: #FFF6F0;
        }
    }
    .consent {
        display: flex;
        align-items: flex-start;
        padding: 1.5rem 0 0 3.2rem;
        position: relative;
        color: rgba(255, 255, 255, .6);
        font-family: Manrope;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 120%;
        user-select: none;
        cursor: pointer;
        a {
            color: #fff;
            text-decoration: underline;
            text-underline-offset: 0.2em;
        }
        input[type=checkbox] {
            appearance: none;
            -webkit-appearance: none;
            position: absolute;
            left: 0;
            top: 1.6rem;
            width: 2rem;
            height: 2rem;
            margin: 0;
            box-sizing: border-box;
            border: .2rem solid #fff;
            background-color: transparent;
            cursor: pointer;
            &:checked {
                background-color: #fff6f0;
            }
            &:focus-visible {
                outline: .1rem solid #fff;
                outline-offset: .2rem;
            }
        }
    }
    button[type="submit"] {
        height: 4.6rem;
        border: .1rem solid;
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
        width: 100%;
        margin: 6.4rem 0 2.4rem;
        flex-shrink: 0;
        &:hover {
            background: #fff;
            color: #2F3034;
        }
    }
    .required-note {
        color: rgba(255, 255, 255, 0.5);
        font-family: Manrope;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
    }
    @media (min-width: 576px) {
        .modal-content {
            width: 60.8rem;
            padding: 3.4rem 3.4rem 3.6rem;
            h3 {
                font-size: 3.6rem;
            }
        }
        form {
            margin-top: auto;
        }
        .field input {
            font-size: 2rem;
        }
        .x {
            right: 2rem;
        }
        .consent {
            width: 42.3rem;
            font-size: 1.2rem;
            line-height: 150%;
        }
        button[type="submit"] {
            font-size: 1.8rem;
            margin: 8.8rem 0 3.8rem;
        }
    }
`
