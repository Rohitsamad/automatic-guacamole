import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { Team1 } from './Team1';

import Creation from './Creation';

import Timer from './Timer';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const Challenge = () => {
  const [showModel, setShowModel] = useState(false);

  const openModel = () => {
    setShowModel(prev => !prev);
  };
  

  return (
    <>
      <Timer />
      <Creation />
    <Container>

      
      <Button onClick={openModel}>Team 1</Button>
      <Team1 showModel={showModel} setShowModel={setShowModel} />
      <Button onClick={openModel}>Team 2</Button>
      <Team1 showModel={showModel} setShowModel={setShowModel} />
      
      <GlobalStyle />
    </Container>
    </>
  );
}

export default Challenge;
