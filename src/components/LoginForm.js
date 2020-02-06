import React, { useState } from "react";
import cogoToast from "cogo-toast";
import axios from 'axios';
// import "./loginForm.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const { hide } = cogoToast.success('Success. ', {
  onClick: () => {
    hide();
  }
})

export default function LoginForm(props) {

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
})

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleCredentials = (e) => {
    e.persist();
    console.log(e)
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
    // console.log(credentials)
}

  function validationForm() {
    return credentials.email.length > 0 && credentials.password > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    // console.log(event.target.checked)
    // console.log(Login)
    
  };

  const logInValidation = () => {

    let logInPwValid = false;
    let logInUnValid = false;

    credentials.password.length >= "8"
        ? (logInPwValid = true)
        : cogoToast.warn("Sorry, that password is a little short!", {
            position: "bottom-right"
        });

    //check for valid email
    const emailRegEx = /\S+@\S+\.\S+/;
    emailRegEx.test(credentials.username.toLowerCase()) === true
        ? (logInUnValid = true)
        : cogoToast.warn("Sorry, that username is invalid!", {
            position: "bottom-right"
        });

    return (logInPwValid === true && logInUnValid === true) ? true : false; //allows true to return when all credentials pass
};

  const handleLoginSubmit = e => {
    e.preventDefault();
    const loginPasses = true; //logInValidation();
    if(loginPasses){
      console.log(credentials);
      const endpoint = (state.checkedA) ? 'https://droom-bt-tl.herokuapp.com/api/auth/login' : 'https://droom-bt-tl.herokuapp.com/api/auth/company/login'
      axios.post(endpoint, credentials)
      .then( resp => {

        console.log(resp);

        localStorage.setItem('userType', (state.checkedA) ? 'seeker': 'provider');
        localStorage.setItem('userId', resp.data.id);
        localStorage.setItem('token', resp.data.token);
        props.history.push('/dashboard');

      })
    }
  }

  function handleSignUpRequest() {
    if(state.checkedA) {
      //seeker
      props.history.push('/sign-up-seeker')
    } else {
      props.history.push('/sign-up-provider')
    }
  }

  return state.checkedA 
    ? 
      (
      <div className="LoginForm">
        <h1> Seeker Login </h1>

        <form onSubmit={handleLoginSubmit}>
          <div controlid="email">
            <label> Email </label>
            <br />
            <TextField
              autoFocus
              type="email"
              autoComplete="new-email"
              name='email'
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div controlid="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
              name='password'
              autoComplete="new-password"
              value={credentials.password}
              onChange={handleCredentials}
            />
          </div>
          <Button  variant="outlined" disable={`${!validationForm()}`} type="submit">
            Login
          </Button>
        </form>

          <Switch
          // checked={state.checkedA, Login.Provider}
          checked={state.checkedA}
          onChange={() => setState({checkedA: !state.checkedA})}
          value={state.checkedA}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

          <div className='register-account' onClick={ () => handleSignUpRequest()}>Create an account</div>
      </div>)
    :
      (
      <div className="LoginForm">
        <h1> Recruiter Login</h1>

        <form onSubmit={handleLoginSubmit}>
          <div controlid="email">
            <label> Email </label>
            <br />
            <TextField
              autoFocus
              type="email"
              name='email'
              autoComplete="new-email"
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div controlid="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
              name='password'
              autoComplete="new-password"
              value={credentials.password}
              onChange={handleCredentials}
            />
          </div>
          <Button variant="outlined" disable={`${!validationForm()}`} type="submit">
            Login
          </Button>
        </form>

          <Switch
          checked={state.checkedA}
          onChange={() => setState({checkedA: !state.checkedA})}
          value={state.checkedA}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

        <div className='register-account' onClick={ () => handleSignUpRequest()}>Create an account</div>
      </div>)
}
