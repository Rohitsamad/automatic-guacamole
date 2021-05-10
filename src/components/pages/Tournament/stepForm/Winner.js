import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';

export const Winner = ({ formData, setForm, navigation }) => {
    const { winner } =formData;
    return (
        <Container maxWidth="xs">
            <h3>Team Name for qualifying first round</h3>
            <TextField 
                label="winner"
                name="winner"
                value={winner}
                onChange={setForm}
                margin="normal" 
                variant="outlined"
                autoComplete="off"
                fullWidth
             />
             <Button variant="contained" fullWidth color="secondary" style={{ marginTop: "1rem" }} onClick={() => navigation.previous()}>Back</Button>
             <Button variant="contained" fullWidth color="primary" style={{ marginTop: "1rem" }} onClick={() => navigation.next()}>Next</Button>
             </Container>
    )
}
