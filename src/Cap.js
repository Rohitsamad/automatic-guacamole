import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import LeaderBoard from './components/pages/LeaderBoard';
import Organization from './components/pages/Organization';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

function Cap({handleLogout}) {
  return (
    <>
      <Router>
        <Navbar handleLogout={handleLogout} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/organization' component={Organization} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          
        </Switch>
      </Router>
    </>
  );
}

export default Cap;
