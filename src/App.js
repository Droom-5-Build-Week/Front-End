import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validationForm() {
    return email.length > 0 && password > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="LoginForm">
      <h1> Welcome to Droom </h1>

      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <label> Email </label>
          <br />
          <FormControl
            autoFocus
            type="email"
            autoComplete="new-email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <label> Password </label>
          <br />
          <FormControl
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button disable={`${!validationForm()}`} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
