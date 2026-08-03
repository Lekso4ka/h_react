import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const Root = styled.section`
  margin: 0 0 8px;
  border-bottom: 1px solid ${theme.colors.border};
  background: transparent;
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 0;
  padding: 22px 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.text};
`;

const Chevron = styled.span`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: inline-flex;
  transition: transform 0.2s ease;
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  color: ${theme.colors.gray};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Body = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  padding: 0 0 28px;
`;

export function AccordionSection({
  title,
  children,
  defaultOpen = true,
  className,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Root className={className}>
      <Header type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Title>{title}</Title>
        <Chevron open={open} aria-hidden>
          <svg viewBox="0 0 18 18" fill="none">
            <path
              d="M4 6.5L9 11.5L14 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Chevron>
      </Header>
      <Body open={open}>{children}</Body>
    </Root>
  );
}
