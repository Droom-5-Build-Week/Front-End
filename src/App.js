import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import JobSeekerOnboarding from './components/JobSeekerOnboarding';
import { JPSignUp } from './components/JPSignUp';
import { Dashboard } from './components/dashboard/Dashboard';

import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={ props => <Dashboard userType='provider' {...props}/> }/>
        <Route exact path='/sign-up-seeker' render={ props => <JobSeekerOnboarding {...props} /> }/>
        <Route exact path='/sign-up-provider' render={ props => <JPSignUp {...props}/> } />
        <PrivateRoute path='/dashboard' render={props => <Dashboard />} />
      </Switch>

    </div>
  );
}

export default App;
