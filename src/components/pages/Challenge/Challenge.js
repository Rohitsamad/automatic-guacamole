import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { Team1 } from './Team1';
import fire from '../../fire';
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
  
  const [teams, setTeam] = useState([]);
  
  const ref = fire.firestore().collection("challenge");
  console.log(ref);

  function getteam() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTeam(items);
    });
  }

  useEffect(() => {
    getteam();
  }, []);
  
  return (
    <>
    <Creation />
    {teams.map(teams => (
      <div key={teams.id}>
        <Timer />

        <Container>
    
          
          <Button onClick={openModel}>{teams.teamchallenge}</Button>
          <Team1 showModel={showModel} setShowModel={setShowModel} />
          <Button onClick={openModel}>{teams.teamchallenge1}</Button>
          <Team1 showModel={showModel} setShowModel={setShowModel} />
          
          <GlobalStyle />
        </Container>
      </div>

    ))}
    </>
  );
}

export default Challenge;
