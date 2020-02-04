import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SkillsDialog from './SkillsDialog';

export default function NewJobDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = evt => {

  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth='false' maxWidth='md'>
        <DialogTitle id="form-dialog-title">Create a New Job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details below:
          </DialogContentText>
        
            <TextField 
                autoFocus
                label='Position' 
                type='text' 
                name='position'
                // value={info.position} 
                onChange={(evt) => handleChange(evt)} />

            <TextField 
                label='Type' 
                type='text' 
                name='type' 
                // value={info.type} 
                onChange={(evt) => handleChange(evt)} />

            <TextField 
                label='Duration' 
                type='text' 
                name='duration' 
                // value={info.duration} 
                onChange={(evt) => handleChange(evt)} />

            < br/>

            <SkillsDialog />

            <TextField
                label='Skills'
                disabled={true} />

            <TextField 
                label='Description' 
                type='text' 
                name='description' 
                // value={info.description} 
                multiline={true}
                rowsMax='4'
                onChange={(evt) => handleChange(evt)} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}