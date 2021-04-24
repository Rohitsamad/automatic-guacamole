import firebase from '../../../fire';
import Team from './team';

const firestore = firebase.firestore();

export const getTeams = async () => {
    try {
        const response = await firestore.collection('teams');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const team = new Team(
                doc.id,
                doc.data().team1,
                doc.data().team2,
                doc.data().team3,
                doc.data().team4,
                doc.data().team5,
                doc.data().team6,
                doc.data().team7,
                doc.data().team8,
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
        await team.update(data);
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