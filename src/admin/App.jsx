import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RoomsPage } from "./pages/RoomsPage";
import { RoomFormPage } from "./pages/RoomFormPage";
import { EntityListPage } from "./pages/EntityListPage";
import { EntityFormPage } from "./pages/EntityFormPage";
import { HotelSectionFormPage } from "./pages/HotelSectionFormPage";
import { WelcomeHomePage } from "./pages/WelcomeHomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/auth/ResetPasswordPage";
import { ChangePasswordPage } from "./pages/auth/ChangePasswordPage";
import { LeadsPage } from "./pages/LeadsPage";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { adminPath } from "./paths";

function HotelEditRedirect() {
  const { id } = useParams();
  if (id === "new") {
    return <EntityFormPage entityKey="hotels" />;
  }
  return <Navigate to={adminPath(`/data/hotels/${id}/main`)} replace />;
}

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<WelcomeHomePage />} />

        <Route path="change-password" element={<ChangePasswordPage />} />

        <Route path="leads/:leadKey" element={<LeadsPage />} />

        <Route path="rooms/:hotel" element={<RoomsPage />} />
        <Route path="rooms/:hotel/new" element={<RoomFormPage />} />
        <Route
          path="rooms/:hotel/:categoryKey/:variantKey"
          element={<RoomFormPage />}
        />

        <Route
          path="data/hotels/:id/:section"
          element={<HotelSectionFormPage />}
        />
        <Route path="data/hotels/:id" element={<HotelEditRedirect />} />

        <Route path="data/:entityKey" element={<EntityListPage />} />
        <Route path="data/:entityKey/new" element={<EntityFormPage />} />
        <Route path="data/:entityKey/:id" element={<EntityFormPage />} />
      </Route>

      <Route path="*" element={<Navigate to={adminPath()} replace />} />
    </Routes>
  );
}
