import React, { createContext, useContext, useMemo, useState } from "react";

const AdminLangContext = createContext({
  lang: "ru",
  setLang: () => {},
});

let currentLang = "ru";

export function getAdminContentLang() {
  return currentLang === "en" ? "en" : "ru";
}

export function AdminLangProvider({ children }) {
  const [lang, setLangState] = useState("ru");

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        const resolved = next === "en" ? "en" : "ru";
        currentLang = resolved;
        setLangState(resolved);
      },
    }),
    [lang]
  );

  return (
    <AdminLangContext.Provider value={value}>
      {children}
    </AdminLangContext.Provider>
  );
}

export function useAdminLang() {
  return useContext(AdminLangContext);
}
