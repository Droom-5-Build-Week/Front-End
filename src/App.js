import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import JobSeekerOnboarding from './components/JobSeekerOnboarding';
import { JPSignUp } from './components/JPSignUp';
import { Dashboard } from './components/dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={ props => <LoginForm {...props}/> }/>
        <Route path='/sign-up-seeker' component={JobSeekerOnboarding} />
        <Route path='/sign-up-provider' component={JPSignUp} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
