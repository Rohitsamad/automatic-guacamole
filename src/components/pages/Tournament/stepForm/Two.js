import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';

export const Two = ({ formData, setForm, navigation }) => {
    const { team11, team12, team13, team14 } =formData;
    return (
        <Container maxWidth="xs">
            <h3>Team Name for qualifying first round</h3>
            <TextField 
                label="Team1"
                name="team11"
                value={team11}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>19</h4>

            <TextField 
                label="Team2"
                name="team12"
                value={team12}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>15</h4>
             <TextField 
                label="Team3"
                name="team13"
                value={team13}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>18</h4>
             <TextField 
                label="Team4"
                name="team14"
                value={team14}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button>+</Button> 
             <h4>14</h4>


             <Button variant="contained" fullWidth color="secondary" style={{ marginTop: "1rem" }} onClick={() => navigation.previous()}>Back</Button>
             <Button variant="contained" fullWidth color="primary" style={{ marginTop: "1rem" }} onClick={() => navigation.next()}>Next</Button>

        </Container>
    )
}
