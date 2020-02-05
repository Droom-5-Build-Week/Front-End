import React, { useState } from "react";
import cogoToast from "cogo-toast";
// import "./loginForm.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const { hide } = cogoToast.success('Success. ', {
  onClick: () => {
    hide();
  }
})

export default function LoginForm() {

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
})

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handlecredentials = (e) => {
    e.persist();
    console.log(e)
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
    console.log(credentials)
}

  function validationForm() {
    return email.length > 0 && password > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log(event.target.checked)
    console.log(Login)
    
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
        : cogToast.warn("Sorry, that username is invalid!", {
            position: "bottom-right"
        });

    return (logInPwValid === true && logInUnValid === true) ? true : false; //allows true to return when all credentials pass
};

  const handleLoginSubmit = e => {
    e.preventDefault();
    const loginPasses = logInValidation();
    if(loginPasses){
      axios.post('https://droom-bt-tl.herokuapp.com/api/auth/login', credentials)
      .then( resp => {
        localStorage.setItem('userType', (checkedA) ? 'seeker': 'provider'))
        localStorage.setItem('token', resp.data.token)
        props.history.push('/dashboard');
      })
    }
  }


  return state.checkedA 
    ? 
      (
      <div className="LoginForm">
        <h1> Seeker Login </h1>

        <form onSubmit={handleSubmit}>
          <div controlId="email">
            <label> Email </label>
            <br />
            <TextField
              autoFocus
              type="email"
              autoComplete="new-email"
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div controlId="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
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
          checked={state.checkedA, Login.Provider}
          onChange={handleChange('checkedA')}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
      </div>)
    :
      (
      <div className="LoginForm">
        <h1> Recruiter Login</h1>

        <form onSubmit={handleSubmit}>
          <div controlId="email">
            <label> Email </label>
            <br />
            <TextField
              autoFocus
              type="email"
              autoComplete="new-email"
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div controlId="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
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
          onChange={handleChange('checkedA')}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
      </div>)
}
