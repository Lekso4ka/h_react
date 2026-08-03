import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { App } from "./App";
import { AdminRoot } from "./admin/AdminRoot";
import { ContextProvider } from "./Ctx";
import { loadSiteData } from "./data/store";
import { GlobalStyles } from "./styles/GlobalSt";
import { theme } from "./styles/theme";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const PublicRoot = () => {
    const [ready, setReady] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;
        loadSiteData({ force: true })
            .then(() => {
                if (!cancelled) setReady(true);
            })
            .catch((err) => {
                if (!cancelled) setError(err.message || "Ошибка загрузки данных");
            });

        return () => {
            cancelled = true;
        };
    }, []);

    if (error) {
        return (
            <div style={{ padding: 40, fontFamily: "Manrope, sans-serif" }}>
                {error}
            </div>
        );
    }

    if (!ready) {
        return null;
    }

    return (
        <ContextProvider>
            <ScrollToTop />
            <GlobalStyles />
            <App />
        </ContextProvider>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRoot />} />
                <Route path="*" element={<PublicRoot />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);
