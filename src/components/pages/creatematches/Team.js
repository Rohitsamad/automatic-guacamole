import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, makeStyles, TableContainer, Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import { ScaleLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import {AddCircle, Delete, Edit} from '@material-ui/icons';
import { getTeams, addTeam, getTeam, updateTeam, deleteTeam } from './data/teamdata';
import TeamDialog from './data/TeamDialog';

const Team = () => {
    const classes = useStyles();
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formmode, setFormmode] = useState(true);
    const [custId, setCustId] = useState('');
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [team3, setTeam3] = useState('');
    const [team4, setTeam4] = useState('');
    const [team5, setTeam5] = useState('');
    const [team6, setTeam6] = useState('');
    const [team7, setTeam7] = useState('');
    const [team8, setTeam8] = useState('');
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: red;    
    `;

    const handleClose = () => {
        setOpen(false);
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

    const getlist = async () => {
        try {
            setLoading(true);
            const list = await getTeams();
            setTeams(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }

    const getOneTeams = async (id) => {
        try {
            setFormmode(false);
            setCustId(id);
            const response = await getTeam(id);
            setTeam1(response.team1);
            setTeam2(response.team2);
            setTeam3(response.team3);
            setTeam4(response.team4);
            setTeam5(response.team5);
            setTeam6(response.team6);
            setTeam7(response.team7);
            setTeam8(response.team8);
            setOpen(true);
        } catch (error) {
            toast.error(error.message);            
        }
    }

    const deleteHandle = async (id) => {
        try {
            await deleteTeam(id);
            getlist();
            toast.success('Team seleded successfully');
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleAdd = () => {
        setOpen(true);
        setFormmode(true);
        setTeam1('');
        setTeam2('');
        setTeam3('');
        setTeam4('');
        setTeam5('');
        setTeam6('');
        setTeam7('');
        setTeam8('');
    }

    const addTeamHandler = async () => {
        try {
            const team = {
                team1,
                team2,
                team3,
                team4,
                team5,
                team6,
                team7,
                team8
            }
            if (formmode) {
                await addTeam(team);
                toast.success('team added successfully');
                getlist();
                setOpen(false);
                setTeam1('');
                setTeam2('');
                setTeam3('');
                setTeam4('');
                setTeam5('');
                setTeam6('');
                setTeam7('');
                setTeam8('');
            } else {
                await updateTeam(custId, team);
                toast.success('Team Updated Successfully');
                getlist();
                setOpen(false);
                setTeam1('');
                setTeam2('');
                setTeam3('');
                setTeam4('');
                setTeam5('');
                setTeam6('');
                setTeam7('');
                setTeam8('');
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getlist();
    }, []);

    return (
        <Container className={classes.container}>
            <TableContainer />
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography className={classes.title} variant="h6" component="div">
                            All Teams
                        </Typography>
                    </Grid>
                    <Grid items xs={4}>
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
                            <TableCell className={classes.head}>Team 1</TableCell>
                            <TableCell className={classes.head}>Team 2</TableCell>
                            <TableCell className={classes.head}>Team 3</TableCell>
                            <TableCell className={classes.head}>Team 4</TableCell>
                            <TableCell className={classes.head}>Team 5</TableCell>
                            <TableCell className={classes.head}>Team 6</TableCell>
                            <TableCell className={classes.head}>Team 7</TableCell>
                            <TableCell className={classes.head}>Team 8</TableCell>
                            <TableCell className={classes.head}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.length === 0 ? (
                            <TableRow>
                                <TableCell colspan={9}>
                                    <ScaleLoader
                                        css={override}
                                        size={150}
                                        color={"#eb4034"}
                                        loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                            {teams.map((cust) => (
                                <TableRow key={cust.id}>
                                    <TableCell>{cust.team1}</TableCell>
                                    <TableCell>{cust.team2}</TableCell>
                                    <TableCell>{cust.team3}</TableCell>
                                    <TableCell>{cust.team4}</TableCell>
                                    <TableCell>{cust.team5}</TableCell>
                                    <TableCell>{cust.team6}</TableCell>
                                    <TableCell>{cust.team7}</TableCell>
                                    <TableCell>{cust.team8}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => getOneTeams(cust.id)} color="primary" aria-label="update team" >
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => deleteHandle(cust.id)} color="secondary" aria-label="delete team" >
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
            formmode={formmode}
            team1={team1}
            team2={team2}
            team3={team3}
            team4={team4}
            team5={team5}
            team6={team6}
            team7={team7}
            team8={team8}
            changeteam1={handleteam1}
            changeteam2={handleteam2}
            changeteam3={handleteam3}
            changeteam4={handleteam4}
            changeteam5={handleteam5}
            changeteam6={handleteam6}
            changeteam7={handleteam7}
            changeteam8={handleteam8}
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
}));

export default Team;