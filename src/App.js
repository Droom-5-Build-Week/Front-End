import React from 'react';
import './App.css';

import LoginForm from './Components/LoginForm';
import JobSeekerOnboarding from './Components/JobSeekerOnboarding';
import { JPSignUp } from './Components/JPSignUp';
import { Dashboard } from './Components/dashboard/Dashboard';

import {Route, Switch} from 'react-router-dom';

import { PrivateRoute } from './utils/PrivateRoute';

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
        <Route exact path='/' component={LoginForm }/>
        <Route path='/sign-up-seeker' component={JobSeekerOnboarding  }/>
        <Route path='/sign-up-provider' component={JPSignUp  } />
        <PrivateRoute path='/dashboard' component={Dashboard } />
      </Switch>
    </div>
  );
}

export default App;
