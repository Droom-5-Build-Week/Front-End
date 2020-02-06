import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import JobSeekerOnboarding from './components/JobSeekerOnboarding';
import { JPSignUp } from './components/JPSignUp';
import { Dashboard } from './components/dashboard/Dashboard';

import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';


function App() {

  const modalStyles = {
    content: {
      maxWidth: "500px",
      paddingBottom: "25px",

      margin: "0 auto",
      verticalAlign: "middle",

      marginTop: '50px'
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

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
