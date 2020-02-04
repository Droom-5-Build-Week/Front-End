import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JPSignUp } from './components/JPSignUp';
import { JPNewJob } from './components/JPNewJob';

function App() {
  return (
    <div className="App">
      <JPNewJob />
    </div>
  );
}

export default App;
