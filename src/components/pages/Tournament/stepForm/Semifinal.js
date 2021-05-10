import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';


export const Semifinal = ({ formData, setForm, navigation }) => {
    const { team21, team22 } =formData;
    return (
        <Container maxWidth="xs">
            <h3>Team Name for qualifying first round</h3>
            <div>
            <TextField 
                label="Team1"
                name="team21"
                value={team21}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />

             <Button>+</Button> 
             <h4>25</h4>
             

            <TextField 
                label="Team2"
                name="team22"
                value={team22}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>29</h4>
                </div>
              <Button variant="contained" fullWidth color="secondary" style={{ marginTop: "1rem" }} onClick={() => navigation.previous()}>Back</Button>
             <Button variant="contained" fullWidth color="primary" style={{ marginTop: "1rem" }} onClick={() => navigation.next()}>Next</Button>
             </Container>
    )
}
