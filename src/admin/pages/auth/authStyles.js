import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const AuthPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: ${theme.colors.beige};
  overflow: auto;
`;

export const AuthCard = styled.div`
  width: min(1019px, 100%);
  min-height: 534px;
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
  background: ${theme.colors.beige};
  padding: 56px 80px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 24px 48px;
    min-height: auto;
  }
`;

export const AuthTitle = styled.h1`
  margin: 0 0 72px;
  font-family: ${theme.fonts.display};
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const AuthForm = styled.form`
  width: min(550px, 100%);
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const AuthField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.colors.gray};
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 58px;
  padding: 0 18px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: transparent;
  color: ${theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${theme.colors.red};
  }
`;

export const AuthActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const AuthButton = styled.button`
  min-width: 200px;
  height: 58px;
  padding: 0 28px;
  border: 0;
  border-radius: 8px;
  background: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const AuthLink = styled(Link)`
  font-size: 14px;
  color: ${theme.colors.gray};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.red};
  }
`;

export const AuthMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ tone }) =>
    tone === "error" ? theme.colors.red : "#2f6b3a"};
`;
