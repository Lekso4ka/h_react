import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { App } from "./App";
import { ContextProvider } from "./Ctx";
import { GlobalStyles } from "./styles/GlobalSt";
import { theme } from "./styles/theme";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Следим за изменением адреса
    
    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасываем скролл в начало
    }, [pathname]);
    
    return null;
};

const root = createRoot(document.getElementById("root"));
root.render(<ThemeProvider theme={ theme }>
    <ContextProvider>
        <BrowserRouter>
            
            <ScrollToTop/>
            <GlobalStyles/>
            <App/>
        </BrowserRouter>
    </ContextProvider>
</ThemeProvider>)