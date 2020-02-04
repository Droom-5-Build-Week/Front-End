import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SkillsDialog from './SkillsDialog';

import { JobType } from './JobType';

export default function NewJobDialog() {
  const [open, setOpen] = React.useState(false);

  const [skills, setSkills] = React.useState({value: ''});

  const initialJobInfo = {
    position: '',
    type: '',
    duration: '', 
    skills: '',
    description: ''
  }

  const [jobInfo, setJobInfo] = React.useState(initialJobInfo)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (flag) => {
    if(flag) {
      console.log('data to add', jobInfo);
      setJobInfo(initialJobInfo);
      setOpen(false);
    } else {
      setJobInfo(initialJobInfo);
      setOpen(false);
    }
  };

  const handleChange = evt => {
    setJobInfo({
      ...jobInfo,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Post a new Job
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
                value={jobInfo.position} 
                onChange={(evt) => handleChange(evt)} />

            {/* <TextField 
                label='Type' 
                type='text' 
                name='type' 
                value={jobInfo.type} 
                onChange={(evt) => handleChange(evt)} />

            <TextField 
                label='Duration' 
                type='text' 
                name='duration' 
                value={jobInfo.duration} 
                onChange={(evt) => handleChange(evt)} /> */}

              <JobType setType={ (type) => setJobInfo( { ...jobInfo, type: type})} setDuration={ duration => setJobInfo({ ...jobInfo, duration: duration}) }/>

            <br />
            < br/>

            <SkillsDialog setSkills={ (obj) => setJobInfo({...jobInfo, skills: obj.value}) }/>

            <br />
            <TextField
                label='Skills'
                disabled={true}
                value={jobInfo.skills} />

            <TextField 
                label='Description' 
                type='text' 
                name='description' 
                value={jobInfo.description} 
                multiline={true}
                rowsMax='4'
                onChange={(evt) => handleChange(evt)} />

        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}