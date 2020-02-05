import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import GeneralList from './GeneralList';

export default function ListDialog(props) {
  const [open, setOpen] = React.useState(false);

  const initialList = [
    'Item 1',
    'Item 2',
    'Item 3'
  ] 

  const [list, setList] = React.useState(initialList);

  const handleClickOpen = () => {
    //axios
    setOpen(true);
  };

  const handleClose = (flag) => {
    if(flag) {
      // add skills
      console.log('skillsDialog skills:', list);
      props.setList({value: list.join(',')});
      setOpen(false);
    } else {
      // just close
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth='false' maxWidth='sm'>
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>

            <GeneralList setList={(arr) => setList(arr)} initialList={initialList}/>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}