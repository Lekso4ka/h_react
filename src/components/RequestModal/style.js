import styled from "@emotion/styled";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${({ $zIndex }) => $zIndex || 40};
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
        top: 1.6rem;
        right: 0;
        transform: translate(100%);
        transition: transform 0.3s .3s;
        bottom: 1.6rem;
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
    .pane {
        position: relative;
        border-top: .1rem solid #FFF6F0;
        border-bottom: .1rem solid #FFF6F0;
    }
    .pane-inner {
        display: flex;
        flex-direction: column;
    }
    .fields:last-child .field:last-child {
        border-bottom: none;
    }
    form.sent .pane-inner,
    form.sent .consent {
        visibility: hidden;
        pointer-events: none;
    }
    .fields {
        display: grid;
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
    .file-field {
        display: grid;
        gap: 1rem;
        padding-top: 1.8rem;
        span {
            color: rgba(255, 255, 255, 0.50);
            font-family: Manrope;
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 100%;
        }
    }
    .file-box {
        width: 26.4rem;
        height: 7.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 246, 240, 0.16);
        svg {
            width: 3.6rem;
            height: 3.6rem;
        }
        em {
            font-style: normal;
            font-family: Manrope;
            font-size: 1.2rem;
            font-weight: 500;
            padding: 0 1.2rem;
            text-align: center;
            word-break: break-word;
        }
    }
    .file-hint {
        color: rgba(255, 255, 255, 0.45);
        font-family: Manrope;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 100%;
    }
    .file-error {
        color: #ffb4b4;
        font-family: Manrope;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .success {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            width: 36rem;
            max-width: 100%;
            color: rgba(255, 255, 255, 0.72);
            text-align: center;
            font-family: Manrope;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 125%;
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
        &:hover:not(:disabled) {
            background: #fff;
            color: #2F3034;
        }
        &.sent,
        &:disabled.sent {
            background: #fff;
            color: #2F3034;
            cursor: default;
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
    form.sent .required-note {
        visibility: hidden;
    }
    @media (min-width: 576px) {
        .modal-content {
            width: 60.8rem;
            padding: 3.4rem 3.4rem 3.6rem;
            top: 2.4rem;
            bottom: 2.4rem;
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
