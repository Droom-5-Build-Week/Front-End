import React from 'react';
import './App.css';

import { Dashboard } from './components/dashboard/Dashboard'; 

function App() {
  return (
    <div className="App">
      <Dashboard userType='provider' />
    </div>
  );
}

export default App;
