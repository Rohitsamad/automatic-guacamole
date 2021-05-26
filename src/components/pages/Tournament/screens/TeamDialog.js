import React from 'react';


import {Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Button,
    Grid} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const TeamDialog = (props) => {

    const classes  = useStyles();
    return (
        <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Add New' : 'Update'}  Team</DialogTitle>
            <ValidatorForm
                onSubmit={props.addTeam}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Tournament name"
                            onChange={props.changeTournamentname}
                            name="tournamentname"
                            value={props.tournamentname}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 1"
                            onChange={props.changeTeam1}
                            name="team1"
                            value={props.team1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team1 points"
                            onChange={props.changeT1}
                            name="t1"
                            value={props.t1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 2"
                            onChange={props.changeTeam2}
                            name="team2"
                            value={props.team2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team2 points"
                            onChange={props.changeT2}
                            name="t2"
                            value={props.t2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 3"
                                onChange={props.changeTeam3}
                                name="team3"
                                value={props.team3}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team3 points"
                            onChange={props.changeT3}
                            name="t3"
                            value={props.t3}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 4"
                                onChange={props.changeTeam4}
                                name="team4"
                                value={props.team4}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team4 points"
                            onChange={props.changeT4}
                            name="t4"
                            value={props.t4}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 5"
                                onChange={props.changeTeam5}
                                name="team5"
                                value={props.team5}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team5 points"
                            onChange={props.changeT5}
                            name="t5"
                            value={props.t5}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 6"
                                onChange={props.changeTeam6}
                                name="team6"
                                value={props.team6}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team6 points"
                            onChange={props.changeT6}
                            name="t6"
                            value={props.t6}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 7"
                                onChange={props.changeTeam7}
                                name="team7"
                                value={props.team7}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team7 points"
                            onChange={props.changeT7}
                            name="t7"
                            value={props.t7}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 8"
                                onChange={props.changeTeam8}
                                name="team8"
                                value={props.team8}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team8 points"
                            onChange={props.changeT8}
                            name="t8"
                            value={props.t8}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                    </Grid>
                    For Round Two
                    <Grid container spacing={3}>
                    <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 1"
                            onChange={props.changeRound1}
                            name="round1"
                            value={props.round1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team1 points"
                            onChange={props.changeR1}
                            name="r1"
                            value={props.r1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 2"
                            onChange={props.changeRound2}
                            name="round2"
                            value={props.round2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team2 points"
                            onChange={props.changeR2}
                            name="r2"
                            value={props.r2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 3"
                                onChange={props.changeRound3}
                                name="round3"
                                value={props.round3}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team3 points"
                            onChange={props.changeR3}
                            name="r3"
                            value={props.r3}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team 4"
                                onChange={props.changeRound4}
                                name="round4"
                                value={props.round4}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team4 points"
                            onChange={props.changeR4}
                            name="r4"
                            value={props.r4}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                    </Grid>
                    Semifinal round
                    <Grid container spacing={3}>
                    <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 1"
                            onChange={props.changeSemifinal1}
                            name="semifinal1"
                            value={props.semifinal1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team1 points"
                            onChange={props.changeS1}
                            name="s1"
                            value={props.s1}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team 2"
                            onChange={props.changeSemifinal2}
                            name="semifinal2"
                            value={props.semifinal2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Team2 points"
                            onChange={props.changeS2}
                            name="s2"
                            value={props.s2}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                    </Grid>
                    WINNER
                    <Grid container spacing={3}>
                    <Grid item xs={2}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Winner"
                            onChange={props.changeWinner}
                            name="winner"
                            value={props.winner}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.button1} type="submit" color="secondary">
                       {props.formmode ? 'Add' : 'Update'}
                    </Button>
                    <Button className={classes.button1} onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

const useStyles = makeStyles((theme) => ({
    button1: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button2: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));

export default TeamDialog;