import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { MdClose, } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import fire from '../../fire';

const Background = styled.div`
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Team1 = ({showModel, setShowModel}) => {
    const modelRef = useRef()

    const animation = useSpring({
        config: {
            duration: 205
        },
        opacity: showModel ? 1 : 0,
        transform: showModel ? `translateY(0%)` : `translateY(-100%)`
    });

    const CloseModel = e => {
        if (modelRef.current === e.target) {
            setShowModel(false);
        }
    };

    const [num, setNum] = useState(0)

    const inc = () => {
        setNum(num+1);

    };

    const dec = () => {

        if (num > 0 ) {
        setNum(num-1);
    } else {
        alert('sorry limit reached')
        setNum(0)
    }
    
    };

    const [num1, setNum1] = useState(0)

    const inc1 = () => {
        setNum1(num1+1);
        
    };

    const dec1 = () => {
        if (num1 > 0 ) {
        setNum1(num1-1);
    } else {
        alert('sorry limit reached')
        setNum1(0)
    }
    
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
        {showModel ? (
            <Background ref={modelRef} onClick={CloseModel}>
          
                <animated.div style={animation}>
                <ModalWrapper showModel={showModel} >
                    <ModalContent>
                        <>
                        {teams.map(teams => (
                        <div  >
                            <h1 key={teams.id}>{teams.teamchallenge}</h1>
                            <h1>{num}</h1>
                            <button onClick={inc}>+</button>
                            <button onClick={dec}>-</button>
                        </div>
                        ))}
                        </>
                        <>
                        {teams.map(teams => (
                        <div  >
                            <h1 key={teams.id}>{teams.teamchallenge1}</h1>
                            <h1>{num1}</h1>
                            <button onClick={inc1}>+</button>
                            <button onClick={dec1}>-</button>
                        </div>
                        ))}
                        </>
                    </ModalContent>
                    <CloseModalButton 
                    aria-label='Close modal'
                    onClick={() => setShowModel(prev => !prev)}/>
                </ModalWrapper>
                </animated.div>
            </Background>
        ) : null}
        </>         
    );
};