import React  from 'react'
import { useForm, useStep } from "react-hooks-helper";
import { One } from './stepForm/One';
import { Review } from './stepForm/Review';
import { Semifinal } from './stepForm/Semifinal';
import { Submit } from './stepForm/Submit';
import { Tournamentname } from './stepForm/Tournamentname';
import { Two } from './stepForm/Two';
import { Winner } from './stepForm/Winner';

const defaultData = {
    tournamentname: "",
    team1: "",
    team2: "",
    team3: "",
    team4: "",
    team5: "",
    team6: "",
    team7: "",
    team8: "",
    team11: "",
    team12: "",
    team13: "",
    team14: "",
    team21: "",
    team22: "",
    winner: ""
};
const steps = [
    { id: 'tournamentname'},
    { id: 'one'},
    { id: 'two'},
    { id: 'semifinal'},
    { id: 'winner'},
    { id: 'review'},
    { id: 'fixture'},
    
];

export const Multisteped = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }

    switch(step.id) {
        case 'tournamentname':
            return <Tournamentname { ...props } />;
        case 'one':
            return <One { ...props } />;
        case 'two':
            return <Two { ...props } />;
        case 'semifinal':
            return <Semifinal { ...props } />;
        case 'winner':
            return <Winner { ...props } />;
        case 'review':
            return <Review { ...props } />;
        case 'fixture':
            return <Submit { ...props } />;
    }

    console.log(step);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Multisteped;