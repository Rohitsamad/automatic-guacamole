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
  <div className="item">
    <div className="item-parent">
      <p>Winner</p>
    </div>
    <div className="item-childrens">
      <div className="item-child">
        <div className="item">
          <div className="item-parent">
            <p>team 2</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>team 1</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team1}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team2}--{teams.team1}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
            
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>team 2</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team3}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team4}</p>
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
            <p>team 2</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>team 3</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team5}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team6}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>team 4</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team7}</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team8}</p>
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
