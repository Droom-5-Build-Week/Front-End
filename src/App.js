import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewJobDialog from './components/NewJobDialog';

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
    </div>
  );
}

export default App;
