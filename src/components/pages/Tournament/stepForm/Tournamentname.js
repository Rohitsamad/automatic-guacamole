import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';



export const Tournamentname = ({ formData, setForm, navigation }) => {
    //const [] = useState([]);
    const { tournamentname } = formData;
    console.log(tournamentname);


    
    return (
        <Container maxWidth="xs">
            <h3>Enter tournamnet name</h3>
            <TextField 
                label="tournament name"
                name="tournamentname"
                value={tournamentname}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button variant="contained" fullWidth color="primary" style={{ marginTop: "1rem" }} onClick={() => navigation.next()}>Next</Button>
        </Container>
    );
};
