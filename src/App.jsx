import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountdownTimer from "./components/CountdownTimer";
import BottomAnimation from "./components/BottomAnimation";

const AppContainer = styled.div`
  max-width: 430px; // 아이폰 14 pro max 사이즈
  overflow: auto;
  box-shadow: 0px 0px 32px #0000002f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: white;
  text-align: center;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const App = () => {
  return (
    <AppContainer>
      <Title>🎄Christmas Counter ☃</Title>
      <Text>크리스마스까지</Text>
      <CountdownTimer />
      <BottomAnimation />
    </AppContainer>
  );
};

export default App;
