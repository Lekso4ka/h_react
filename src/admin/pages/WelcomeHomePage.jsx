import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const Wrap = styled.div`
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 24px 80px;
`;

const Heading = styled.h2`
  margin: 0 0 28px;
  max-width: 900px;
  font-family: ${theme.fonts.display};
  font-size: clamp(36px, 4.2vw, 56px);
  font-weight: 500;
  line-height: 1.25;
  color: ${theme.colors.text};
`;

const Hint = styled.p`
  margin: 0;
  max-width: 460px;
  font-size: 16px;
  line-height: 1.45;
  color: ${theme.colors.gray};
`;

export function WelcomeHomePage() {
  return (
    <Wrap>
      <Heading>Добро пожаловать в систему управления содержимым</Heading>
      <Hint>
        Чтобы начать редактирование информации откройте нужный раздел слева
      </Hint>
    </Wrap>
  );
}
