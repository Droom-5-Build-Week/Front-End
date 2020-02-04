import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  spacing: {
    marginBottom: '1%',
  },
  formBody: {
    padding: '5%',
    backgroundColor: 'darkGrey'
  }

}));

const PastJobForm = () => {
  const classes = useStyles();

  const submitHandler = e => {
    e.preventDefault();

  }

  return (
    <div>
      <Grid className={classes.formBody} container spacing={6}>
        <form xs={6}>
          <div xs={6} style={{"display": "flex", "flex-direction": "column", "align-content": "space-between"}}>
            <TextField className={classes.spacing} id="filled-basic" label="Company" variant="filled" size="small"/>
            <TextField className={classes.spacing} id="filled-basic" label="Salary" variant="filled" size="small"/>
            <TextField className={classes.spacing} id="filled-basic" label="Title" variant="filled" size="small"/>
            <div style={{"display": "flex", "justify-content": "space-between"}}>
              <TextField className={classes.spacing} id="filled-basic" label="Start Date" variant="filled" size="small"/>
              <TextField className={classes.spacing} id="filled-basic" label="End Date" variant="filled" size="small"/>
            </div>
          </div>
          <div style={{"display": "flex", "flex-direction": "column"}}>
            <TextField className={classes.spacing} id="filled-basic" label="Skills Learned" rows="4" multiline variant="filled" size="small"/>
            <TextField className={classes.spacing} id="filled-basic" label="Job Description" rows="4" multiline variant="filled" size="small"/>
          </div>

          <Button style={{"display":"flex", "marginTop": "5%"}} variant="contained" onSubmit={submitHandler}>Add Job</Button>
        </form>
      </Grid>
    </div>
  )
}

export default PastJobForm;