import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import {getTeams, addTeam, getTeam, updateTeam, deleteTeam} from '../data/teamData';
import TeamDialog from './TeamDialog';

const Tournament = () => {
    const classes  = useStyles();
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [custId, setCustId] = useState('');
    const [tournamentname, setTournamentname] = useState('');
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [team3, setTeam3] =  useState('');
    const [team4, setTeam4] = useState('');
    const [team5, setTeam5] = useState('');
    const [team6, setTeam6] = useState('');
    const [team7, setTeam7] = useState('');
    const [team8, setTeam8] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [t4, setT4] = useState('');
    const [t5, setT5] = useState('');
    const [t6, setT6] = useState('');
    const [t7, setT7] = useState('');
    const [t8, setT8] = useState('');
    const [round1, setRound1] = useState('');
    const [round2, setRound2] = useState('');
    const [round3, setRound3] = useState('');
    const [round4, setRound4] = useState('');
    const [r1, setR1] = useState('');
    const [r2, setR2] = useState('');
    const [r3, setR3] = useState('');
    const [r4, setR4] = useState('');
    const [semifinal1, setSemifinal1] = useState('');
    const [semifinal2, setSemifinal2] = useState('');
    const [s1, setS1] = useState('');
    const [s2, setS2] = useState('');
    const [winner, setWinner] = useState('');
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handletournamentname = (event) => {
        setTournamentname(event.target.value);
    }
    const handleteam1 = (event) => {
        setTeam1(event.target.value);
    }
    const handleteam2 = (event) => {
        setTeam2(event.target.value);
    }
    const handleteam3 = (event) => {
        setTeam3(event.target.value);
    }
    const handleteam4 = (event) => {
        setTeam4(event.target.value);
    }
    const handleteam5 = (event) => {
        setTeam5(event.target.value);
    }
    const handleteam6 = (event) => {
        setTeam6(event.target.value);
    }
    const handleteam7 = (event) => {
        setTeam7(event.target.value);
    }
    const handleteam8 = (event) => {
        setTeam8(event.target.value);
    }

    const handlet1 = (event) => {
        setT1(event.target.value);
    }
    const handlet2 = (event) => {
        setT2(event.target.value);
    }
    const handlet3 = (event) => {
        setT3(event.target.value);
    }
    const handlet4 = (event) => {
        setT4(event.target.value);
    }
    const handlet5 = (event) => {
        setT5(event.target.value);
    }
    const handlet6 = (event) => {
        setT6(event.target.value);
    }
    const handlet7 = (event) => {
        setT7(event.target.value);
    }
    const handlet8 = (event) => {
        setT8(event.target.value);
    }

    const handleround1 = (event) => {
        setRound1(event.target.value);
    }
    const handleround2 = (event) => {
        setRound2(event.target.value);
    }
    const handleround3 = (event) => {
        setRound3(event.target.value);
    }
    const handleround4 = (event) => {
        setRound4(event.target.value);
    }

    const handler1 = (event) => {
        setR1(event.target.value);
    }
    const handler2 = (event) => {
        setR2(event.target.value);
    }
    const handler3 = (event) => {
        setR3(event.target.value);
    }
    const handler4 = (event) => {
        setR4(event.target.value);
    }

    const handlesemifinal1 = (event) => {
        setSemifinal1(event.target.value);
    }
    const handlesemifinal2 = (event) => {
        setSemifinal2(event.target.value);
    }

    const handles1 = (event) => {
        setS1(event.target.value);
    }
    const handles2 = (event) => {
        setS2(event.target.value);
    }

    const handlewinner = (event) => {
        setWinner(event.target.value);
    }
    
    
    const getlist = async () => { 
        try {
            setLoading(true);
            const list = await getTeams();
         setTeam(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneTeam = async (id) => {
            try {
                setFormMode(false);
                setCustId(id);
                const response = await getTeam(id);
                 setTournamentname(response.tournamentname);
                 setTeam1(response.team1);
                 setTeam2(response.team2);
                 setTeam3(response.team3);
                 setTeam4(response.team4);
                 setTeam5(response.team5);
                 setTeam6(response.team6);
                 setTeam7(response.team7);
                 setTeam8(response.team8);
                 setT1(response.t1);
                 setT2(response.t2);
                 setT3(response.t3);
                 setT4(response.t4);
                 setT5(response.t5);
                 setT6(response.t6);
                 setT7(response.t7);
                 setT8(response.t8);
                 setRound1(response.round1);
                 setRound2(response.round2);
                 setRound3(response.round3);
                 setRound4(response.round4);
                 setR1(response.r1);
                 setR2(response.r2);
                 setR3(response.r3);
                 setR4(response.r4);
                 setSemifinal1(response.semifinal1);
                 setSemifinal2(response.semifinal2);
                 setS1(response.s1);
                 setS2(response.s2);
                 setWinner(response.winner);

                 setOpen(true);
            } catch (error) {
                toast.error(error.message);
            }

    }
    const deleteHandler = async (id) => {
            try {
                await deleteTeam(id);
                getlist();
                toast.success('Team Deleted Successfully');
            } catch (error) {
                toast.error(error.message);
            }
    }
    const handleAdd = () => {
            setOpen(true);
            setFormMode(true);
            setTournamentname('');
            setTeam1('');
            setTeam2('');
            setTeam3('');
            setTeam4('');
            setTeam5('');
            setTeam6('');
            setTeam7('');
            setTeam8('');
            setT1('0');
            setT2('0');
            setT3('0');
            setT4('0');
            setT5('0');
            setT6('0');
            setT7('0');
            setT8('0');
            setRound1('Team Name');
            setRound2('Team Name');
            setRound3('Team Name');
            setRound4('Team Name');
            setR1('0');
            setR2('0');
            setR3('0');
            setR4('0');
            setSemifinal1('Team Name');
            setSemifinal2('Team Name');
            setS1('0');
            setS2('0');
            setWinner('winner');
            
    }

    const addTeamHandler = async () => {
            try {
                 const team = {
                     tournamentname,
                     team1,
                     team2,
                     team3,
                     team4,
                     team5,
                     team6,
                     team7,
                     team8,
                     t1,
                     t2,
                     t3,
                     t4,
                     t5,
                     t6,
                     t7,
                     t8,
                     round1,
                     round2,
                     round3,
                     round4,
                     r1,
                     r2,
                     r3,
                     r4,
                     semifinal1,
                     semifinal2,
                     s1,
                     s2,
                     winner
                 }
                if (formMode) {
                    await addTeam(team);
                    toast.success('Team Added Successfully');
                    getlist();
                    setOpen(false);
                    setTournamentname('');
                    setTeam1('');
                    setTeam2('');
                    setTeam3('');
                    setTeam4('');
                    setTeam5(''); 
                    setTeam6('');
                    setTeam7('');
                    setTeam8('');
                    setT1('');
            setT2('');
            setT3('');
            setT4('');
            setT5('');
            setT6('');
            setT7('');
            setT8('');
            setRound1('');
            setRound2('');
            setRound3('');
            setRound4('');
            setR1('');
            setR2('');
            setR3('');
            setR4('');
            setSemifinal1('');
            setSemifinal2('');
            setS1('');
            setS2('');
            setWinner('');
                }else {
                    await updateTeam(custId, team);
                    toast.success('Team Updated Successfully');
                    getlist();
                    setOpen(false);
                    setTournamentname('');
                    setTeam1('');
                    setTeam2('');
                    setTeam3('');
                    setTeam4('');
                    setTeam5(''); 
                    setTeam6('');
                    setTeam7('');
                    setTeam8('');
                    setT1('');
            setT2('');
            setT3('');
            setT4('');
            setT5('');
            setT6('');
            setT7('');
            setT8('');
            setRound1('');
            setRound2('');
            setRound3('');
            setRound4('');
            setR1('');
            setR2('');
            setR3('');
            setR4('');
            setSemifinal1('');
            setSemifinal2('');
            setS1('');
            setS2('');
            setWinner('');
                }
            } catch (error) {
                toast.error(error.message);
            }
    }

    useEffect(() => {
        getlist();
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer/>
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                    <Typography className={classes.title} variant="h6" component="div">
                        All Teams
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        className={classes.button}
                        startIcon={<AddCircle/>}
                    >Add</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Tournament Name</TableCell>
                            <TableCell className={classes.head}>Team 1</TableCell>
                            <TableCell className={classes.head}>Team 2</TableCell>
                            <TableCell className={classes.head}>Team 3</TableCell>
                            <TableCell className={classes.head}>Team 4</TableCell>
                            <TableCell className={classes.head}>Team 5</TableCell>
                            <TableCell className={classes.head}>Team 6</TableCell>
                            <TableCell className={classes.head}>Team 7</TableCell>
                            <TableCell className={classes.head}>Team 8</TableCell>
                            <TableCell className={classes.head}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {team.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <ScaleLoader 
                                     css={override}
                                    size={150}
                                    color={"#eb4034"}
                                    loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                            {team.map((cust) => (
                                <TableRow key={cust.id}>
                                  <TableCell>{cust.tournamentname}</TableCell>
                                  <TableCell>{cust.team1}</TableCell>
                                  <TableCell>{cust.team2}</TableCell>
                                  <TableCell>{cust.team3}</TableCell>
                                  <TableCell>{cust.team4}</TableCell>
                                  <TableCell>{cust.team5}</TableCell>
                                  <TableCell>{cust.team6}</TableCell>
                                  <TableCell>{cust.team7}</TableCell>
                                  <TableCell>{cust.team8}</TableCell>
                                  <TableCell>
                                    <IconButton className={classes.button1} onClick={() => getOneTeam(cust.id)} color="primary" aria-label="update customer">
                                            <Edit />
                                    </IconButton>
                                    <IconButton className={classes.button2} onClick={() => deleteHandler(cust.id)} color="secondary" aria-label="delete customer">
                                        <Delete />
                                    </IconButton>
                                  </TableCell>
                              </TableRow>
                            ))}
                              
                            </>
                        )}
                        
                    </TableBody>
                </Table>  
            </TableContainer>
            <TeamDialog
                open={open} 
                close={handleClose}
                formmode={formMode}
                tournamentname={tournamentname}
                team1={team1}
                team2={team2}
                team3={team3}
                team4={team4}
                team5={team5}
                team6={team6}
                team7={team7}
                team8={team8}
                t1 = {t1}
        t2 = {t2}
        t3 = {t3}
        t4 = {t4}
        t5 = {t5}
        t6 = {t6}
        t7 = {t7}
        t8 = {t8}
        round1 = {round1}
        round2 = {round2}
        round3 = {round3}
        round4 = {round4}
        r1 = {r1}
        r2 = {r2}
        r3 = {r3}
        r4 = {r4}
        semifinal1 = {semifinal1}
        semifinal2 = {semifinal2}
        s1 = {s1}
        s2 = {s2}
        winner = {winner}
                changeTournamentname={handletournamentname}
                changeTeam1={handleteam1}
                changeTeam2={handleteam2}
                changeTeam3={handleteam3}
                changeTeam4={handleteam4}
                changeTeam5={handleteam5}
                changeTeam6={handleteam6}
                changeTeam7={handleteam7}
                changeTeam8={handleteam8}
                changeT1={handlet1}
                changeT2={handlet2}
                changeT3={handlet3}
                changeT4={handlet4}
                changeT5={handlet5}
                changeT6={handlet6}
                changeT7={handlet7}
                changeT8={handlet8}
                changeRound1={handleround1}
                changeRound2={handleround2}
                changeRound3={handleround3}
                changeRound4={handleround4}
                changeR1={handler1}
                changeR2={handler2}
                changeR3={handler3}
                changeR4={handler4}
                changeSemifinal1={handlesemifinal1}
                changeSemifinal2={handlesemifinal2}
                changeS1={handles1}
                changeS2={handles2}
                changeWinner={handlewinner}
                
                addTeam={addTeamHandler}
            />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '40px'
    }, 
    title: {
        flex: '1 1 100%',
        padding: '20px'
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
    button1: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button2: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));

export default Tournament;