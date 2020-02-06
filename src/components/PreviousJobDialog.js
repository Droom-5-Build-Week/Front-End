import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { createExperianceByUserId } from '../Store/Actions/AppActions';
import SkillsDialog from './SkillsDialog';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { JobType } from './JobType';

const PrevJobDialog = props => {
  const [open, setOpen] = React.useState(false);

  const [skills, setSkills] = React.useState({value: ''});

  const initialPrevJob = {
    company: '',
    salary: '',
    position: '',
    type: '', //populated by jobtype props.setType
    date: '',
    duration: '',
    skills: '', //populated by skillsdialog props.setSkills
    description: ''
  }

  const [prevJobs, setPrevJobs] = React.useState(initialPrevJob)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (flag) => {
    if(flag) {
      console.log('data to add', prevJobs);
      setPrevJobs(initialPrevJob);
      setOpen(false);
    } else {
      setPrevJobs(initialPrevJob);
      setOpen(false);
    }
  };

  const handleChange = evt => {
    setPrevJobs({
      ...prevJobs,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addPrevJob(prevJobs)
    // const userId = localStorage.getItem('userId')
    // props.createExperianceByUserId(userId, prevJobs)
    // axiosWithAuth().post(`/users/${userId}/experiences`, prevJobs)
    //   .then(res => {
    //     console.log(res)
    //   })


  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Previous Job
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth='false' maxWidth='md'>
        <DialogTitle id="form-dialog-title">Complete Your Job History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details below:
          </DialogContentText>
        
          <TextField 
                autoFocus
                label='Company' 
                type='text' 
                name='company'
                value={prevJobs.company} 
                onChange={(evt) => handleChange(evt)} />

          <TextField 
                autoFocus
                label='Salary' 
                type='text' 
                name='salary'
                value={prevJobs.salary} 
                onChange={(evt) => handleChange(evt)} />

          <TextField 
              autoFocus
              label='Position' 
              type='text' 
              name='position'
              value={prevJobs.position} 
              onChange={(evt) => handleChange(evt)} />

          <TextField 
                autoFocus
                label='Date' 
                type='text' 
                name='date'
                value={prevJobs.date} 
                onChange={(evt) => handleChange(evt)} />

              <JobType setType={ (type) => setPrevJobs( { ...prevJobs, type: type})} setDuration={ duration => setPrevJobs({ ...prevJobs, duration: duration}) }/>

            <br />
            < br/>

            <SkillsDialog setSkills={ (obj) => setPrevJobs({...prevJobs, skills: obj.value}) }/>

            <br />
            <TextField
                label='Skills'
                disabled={true}
                value={prevJobs.skills} />

            <TextField 
                label='Description' 
                type='text' 
                name='description' 
                value={prevJobs.description} 
                multiline={true}
                rowsMax='4'
                onChange={(evt) => handleChange(evt)} />

        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} onSubmit={handleSubmit} color="primary">
            Add Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PrevJobDialog;