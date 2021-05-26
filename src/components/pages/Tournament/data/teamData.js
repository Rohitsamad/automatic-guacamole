import firebase from '../../../fire';
import Team from '../models/team';


const firestore = firebase.firestore();

export const getTeams = async () => {
    try {
        const response = await firestore.collection('teams');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const team = new Team(
                doc.id,
                doc.data().tournamentname,
                doc.data().team1,
                doc.data().team2,
                doc.data().team3,
                doc.data().team4,
                doc.data().team5,
                doc.data().team6,
                doc.data().team7,
                doc.data().team8,
                doc.data().t1,
                doc.data().t2,
        doc.data().t3,
        doc.data().t4,
        doc.data().t5,
        doc.data().t6,
        doc.data().t7,
        doc.data().t8,
        doc.data().round1,
        doc.data().round2,
        doc.data().round3,
        doc.data().round4,
        doc.data().r1,
        doc.data().r2,
        doc.data().r3,
        doc.data().r4,
        doc.data().semifinal1,
        doc.data().semifinal2,
        doc.data().s1,
        doc.data().s2,
        doc.data().winner
            );

            array.push(team);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addTeam = async (team) => {
    try {
        await firestore.collection('teams').doc().set(team);
    } catch (error) {
        throw error;
    }
}

export const getTeam = async (id) => {
    try {
        const team = await firestore.collection('teams').doc(id);
        const data = await team.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateTeam = async (id, data) => {
    try {
        const team = await firestore.collection('teams').doc(id);
        await team.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteTeam = async (id) => {
    try {
        await firestore.collection('teams').doc(id).delete();
    } catch (error) {
        throw error;
    }
}