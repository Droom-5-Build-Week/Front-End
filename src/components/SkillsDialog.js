import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SkillsList from './SkillsList';

export default function SkillsDialog(props) {
  const [open, setOpen] = React.useState(false);

  const initialSkills = [
    'Web Development',
    'Backend Development',
    'React'
]

  const [skills, setSkills] = React.useState([]);

  const handleClickOpen = () => {
    //axios
    setOpen(true);
  };

  const handleClose = (flag) => {
    if(flag) {
      // add skills
      console.log('skillsDialog skills:', skills);
      props.setSkills({value: skills.join(',')});
      setOpen(false);
    } else {
      // just close
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Skills
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth='false' maxWidth='sm'>
        <DialogTitle id="form-dialog-title">Select Skills</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Choose skills from list or add a new one:
          </DialogContentText> */}

            <SkillsList setSkills={(arr) => setSkills(arr)} initialSkills={initialSkills}/>
            
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