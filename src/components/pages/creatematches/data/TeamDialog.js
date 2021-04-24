import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

const TeamDialog = (props) => {
    return (
        <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ? 'Add new' : 'Update'} Team</DialogTitle>
            <ValidatorForm
                onSubmit={props.addTeam}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team1"
                            onChange={props.changeteam1}
                            name="team1"
                            value={props.team1}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team2"
                            onChange={props.changeteam2}
                            name="team2"
                            value={props.team2}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team3"
                            onChange={props.changeteam3}
                            name="team3"
                            value={props.team3}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team4"
                            onChange={props.changeteam4}
                            name="team4"
                            value={props.team4}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team5"
                            onChange={props.changeteam5}
                            name="team5"
                            value={props.team5}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team6"
                            onChange={props.changeteam6}
                            name="team6"
                            value={props.team6}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team7"
                            onChange={props.changeteam7}
                            name="team7"
                            value={props.team7}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="team8"
                            onChange={props.changeteam8}
                            name="team8"
                            value={props.team8}
                            validations={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="secondary">
                        {props.formmode ? 'Add' : 'Update'}
                    </Button>
                    <Button onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    )
}

export default TeamDialog;