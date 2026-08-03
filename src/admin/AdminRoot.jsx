import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AdminApp from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";

export function AdminRoot() {
  return (
    <div className="admin-root">
      <AuthProvider>
        <GlobalStyles />
        <AdminApp />
      </AuthProvider>
    </div>
  );
}
