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
        <Route exact path='/' component={LoginForm }/>
        <Route exact path='/sign-up-seeker' component={JobSeekerOnboarding  }/>
        <Route exact path='/sign-up-provider' component={JPSignUp  } />
        <PrivateRoute path='/dashboard' component={Dashboard } />
      </Switch>
    </div>
  );
}

export default App;
