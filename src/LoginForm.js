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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Login, setLogin] = useState({
    Seeker: true,
    Provider: true
  })

  const [state, setState] = React.useState({
    checkedA: true,
  });

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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div controlId="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div controlId="password">
            <label> Password </label>
            <br />
            <TextField
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
