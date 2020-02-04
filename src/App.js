<<<<<<< HEAD
import React, { useState } from "react";
import "./loginForm.css";
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> cc44a58b59be96696284c197d6ace5c819a94e74

import NewJobDialog from './components/NewJobDialog';
import {JPSignUp} from './components/JPSignUp';

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
      <NewJobDialog />
      <br />
      <br />
      <JPSignUp />
    </div>
  );
}

export default App;
