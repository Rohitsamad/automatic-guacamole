import React, { useState } from 'react';
import fire from '../../fire';

const Creation = () => {
    const [teamchallenge, setTeamchallenge] = useState("");
    const [teamchallenge1, setTeamchallenge1] = useState("");

    const handleSubmit1 = (e) => {
        e.preventDefault();

        fire.firestore().collection('challenge').add({
            teamchallenge: teamchallenge,
            teamchallenge1: teamchallenge1,
        })
        .then(() => {
            alert('Message has been submitted');
        })
        .catch((error) => {
            alert(error.message);
        });

        setTeamchallenge("");
        setTeamchallenge1("");
    };

    return (
        <form className="" onSubmit={handleSubmit1}>
            <label>Team 1</label>
            <input placeholder="team1" value={teamchallenge} onChange={(e) => setTeamchallenge(e.target.value)} />
            <label>Team 1</label>
            <input placeholder="team2" value={teamchallenge1} onChange={(e) => setTeamchallenge1(e.target.value)} />

            <button type="submit">submit</button>
        </form>
    );
};

export default Creation;