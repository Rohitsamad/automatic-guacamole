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
      <h1>Dota tournament</h1>
  <div className="item">
    <div className="item-parent">
      <p>tannu</p>
    </div>
    <div className="item-childrens">
      <div className="item-child">
        <div className="item">
          <div className="item-parent">
            <p>rohit--25</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>rohit--19</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team1}--8</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team2}--4</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
            
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>karan--15</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team3}--9</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team4}--0</p>
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
            <p>tannu--29</p>
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>tannu--18</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team5}--9</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team6}--6</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  <p>nitin--14</p>
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <p>{teams.team7}--2</p>
                  </div>
                  <div className="item-child">
                    <p>{teams.team8}--7</p>
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
