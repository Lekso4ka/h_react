import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

import { adminPath } from "../paths";
export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ padding: 40, fontFamily: "Manrope, sans-serif" }}>
        Проверка авторизации…
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={adminPath("/login")} replace state={{ from: location.pathname }} />;
  }

  return children;
}
