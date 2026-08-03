import React from "react";
import { Global, css } from "@emotion/react";
import { theme } from "./theme";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
          body {
              font-family: ${theme.fonts.base};
              margin: 0;
              min-height: 100vh;
              background-color: ${theme.colors.light};
              color: ${theme.colors.text};
              font-style: normal;
              font-weight: 400;
          }
        .admin-root,
        .admin-root *,
        .admin-root *::before,
        .admin-root *::after {
          box-sizing: border-box;
        }

        .admin-root {
          margin: 0;
          min-height: 100vh;
          font-family: ${theme.fonts.base};
          color: ${theme.colors.text};
          background: ${theme.colors.beige};
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }

        .admin-root button,
        .admin-root input,
        .admin-root textarea,
        .admin-root select {
          font: inherit;
        }

        .admin-root a {
          //color: inherit;
          text-decoration: none;
        }

        .admin-root img {
          max-width: 100%;
          display: block;
        }
      `}
    />
  );
}
