import React from 'react'
import { Button, Container, TextField } from '@material-ui/core';

export const One = ({ formData, setForm, navigation }) => {
    const { team1, team2, team3, team4, team5, team6, team7, team8 } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Team Name</h3>
            <TextField 
                label="Team1"
                name="team1"
                value={team1}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>8</h4>
            
             <TextField 
                label="Team2"
                name="team2"
                value={team2}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>4</h4>
             <TextField 
                label="Team3"
                name="team3"
                value={team3}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>9</h4>
             <TextField 
                label="Team4"
                name="team4"
                value={team4}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>0</h4>
             <TextField 
                label="Team5"
                name="team5"
                value={team5}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>9</h4>
             <TextField 
                label="Team6"
                name="team6"
                value={team6}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>6</h4>
             <TextField 
                label="Team7"
                name="team7"
                value={team7}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>2</h4>
             <TextField 
                label="Team8"
                name="team8"
                value={team8}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>7</h4>
             <Button variant="contained" fullWidth color="secondary" style={{ marginTop: "1rem" }} onClick={() => navigation.previous()}>Back</Button>
             <Button variant="contained" fullWidth color="primary" style={{ marginTop: "1rem" }} onClick={() => navigation.next()}>Next</Button>
        </Container>
    )
}
