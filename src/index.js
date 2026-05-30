import React from "react";
import {createRoot} from "react-dom/client";
import { App } from "./App";
import {BrowserRouter} from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalSt";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Следим за изменением адреса
    
    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасываем скролл в начало
    }, [pathname]);
    
    return null;
};

const root = createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
    <ScrollToTop />
    <GlobalStyles/>
    <App/>
</BrowserRouter>)