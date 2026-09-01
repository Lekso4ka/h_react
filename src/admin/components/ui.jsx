import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

export const Section = styled.section`
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${theme.colors.border};
  border-radius: 0;
  padding: 28px 0 36px;
  margin: 0 0 8px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.text};
`;

export const PageTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const PageSubtitle = styled.p`
  margin: 0 0 28px;
  color: ${theme.colors.gray};
  font-size: 15px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  height: 58px;
  padding: 0 18px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: ${theme.colors.inputBg};
  color: ${theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${theme.colors.red};
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 58px;
  padding: 0 18px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: ${theme.colors.inputBg};
  color: ${theme.colors.text};
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath d='M3 5L7 9L11 5' stroke='%23565861' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 18px center;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.red};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px 18px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  background: ${theme.colors.inputBg};
  color: ${theme.colors.text};
  outline: none;
  resize: vertical;

  &:focus {
    border-color: ${theme.colors.red};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols = 2 }) => cols}, minmax(0, 1fr));
  gap: ${({ gap = 24 }) => `${gap}px`};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 22px;
  border: 0;
  border-radius: ${theme.radii.sm};
  background: ${({ variant }) =>
    variant === "ghost"
      ? "transparent"
      : variant === "danger"
        ? theme.colors.red
        : theme.colors.text};
  color: ${({ variant }) =>
    variant === "ghost" ? theme.colors.text : theme.colors.beige};
  border: ${({ variant }) =>
    variant === "ghost" ? `1px solid ${theme.colors.border}` : "0"};
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const ErrorText = styled.p`
  margin: 0 0 16px;
  color: ${theme.colors.red};
  font-size: 14px;
`;

export const SuccessText = styled.p`
  margin: 0 0 16px;
  color: #2f6b3a;
  font-size: 14px;
`;
