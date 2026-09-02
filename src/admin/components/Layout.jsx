import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAuth } from "../auth/AuthContext";
import { Sidebar } from "./Sidebar";
import { theme } from "../styles/theme";

import { AdminLangProvider } from "../lang";
import { adminPath } from "../paths";
const Shell = styled.div`
  display: grid;
  grid-template-columns: 373px 1fr;
  height: 100vh;
  overflow: hidden;
  background: ${theme.colors.beige};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
`;

const Main = styled.main`
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 44px 64px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(47, 48, 52, 0.2);
    border-radius: 4px;
  }

  @media (max-width: 960px) {
    height: auto;
    overflow: visible;
  }
`;

const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  border-bottom: 1px solid ${theme.colors.border};
  margin: 0 -44px 32px;
  padding: 0 44px;
  background: ${theme.colors.beige};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.text};
`;

const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextLink = styled(Link)`
  font-size: 14px;
  color: ${theme.colors.gray};

  &:hover {
    color: ${theme.colors.red};
  }
`;

const Logout = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background: transparent;
  color: ${theme.colors.gray};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${theme.colors.red};
  }
`;

export function Layout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(adminPath("/login"), { replace: true });
  };

  return (
    <AdminLangProvider>
    <Shell>
      <Sidebar />
      <Main>
        <TopBar>
          <Title>Система управления</Title>
          <TopActions>
            <TextLink to={adminPath("/change-password")}>
              {user?.login || "admin"} · смена пароля
            </TextLink>
            <Logout type="button" onClick={handleLogout}>
              Выйти
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7 3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M12 12l3-3-3-3M15 9H7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Logout>
          </TopActions>
        </TopBar>
        <Outlet />
      </Main>
    </Shell>
    </AdminLangProvider>
  );
}
