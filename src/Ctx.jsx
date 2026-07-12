import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const useCtx = () => useContext(Context);

export const ContextProvider = ({children}) => {
    const [mob, setMob] = useState(null);
    useEffect(() => {
        const w = window.outerWidth;
        if (w < 576) {
            setMob(true)
        }
        window.addEventListener("resize", () => {
            const w = window.outerWidth;
            setMob(w < 576)
        })
    });
    return <Context.Provider value={{
        mob
    }}>
        {children}
    </Context.Provider>
}