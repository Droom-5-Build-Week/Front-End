import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import JobSeekerOnboarding from './components/JobSeekerOnboarding';
import { JPSignUp } from './components/JPSignUp';

import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={ props => <LoginForm {...props}/> }/>
        <Route path='/sign-up-seeker' render={ props => <JobSeekerOnboarding {...props} /> }/>
        <Route path='/sign-up-provider' render={ props => <JPSignUp {...props}/> } />
      </Switch>
    </div>
  );
}

export default App;
