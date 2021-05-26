import React, { useEffect, useState } from 'react';
import '../../Apps.css';
import fire from '../../fire';







function Match() {

  

  const [teams, setTeam] = useState([]);
  
  const ref = fire.firestore().collection("teams");
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
    {teams.map(teams => (


    <div className="wrapper" key={teams.id}>
     <heading><h1>{teams.tournamentname}</h1></heading> 
  <div className="item">
    <div className="item-parent">
      <p>{teams.winner}</p>
    </div>
    <div className="item-childrens">
      <div className="item-child">
        <div className="item">
          <div className="item-parent">
            <p>{teams.semifinal1}--{teams.s1}</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>{teams.round1}--{teams.r1}</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>
                    {teams.team1}--{teams.t1}
              
              
              </p>
                  </div>
                  <div className="item-child">
                    <p>
                    {teams.team2}
                    --{teams.t2}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
            
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>{teams.round2}--{teams.r2}</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team3}--{teams.t3}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team4}--{teams.t4}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="item-child">
        <div className="item">
          <div className="item-parent">
            <p>{teams.semifinal2}--{teams.s2}</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>{teams.round3}--{teams.r3}</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team5}--{teams.t5}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team6}--{teams.t6}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>{teams.round4}--{teams.r4}</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team7}--{teams.t7}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team8}--{teams.t8}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    ))} </>
  );
}

export default Match;
