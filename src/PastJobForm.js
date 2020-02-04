import React from 'react';
import { Container, TextField, Button } from '@material-ui/core'

const PastJobForm = () => {


  const submitHandler = e => {
    e.preventDefault();

  }
  return (
    <Container maxWidth="lg" >
    <form style={{"width": "700px", "padding": "3%", "backgroundColor": "darkGrey"}}>
      {/* style={{"display": "flex", "justify-content": "space-between"}} */}
        
        <div style={{"display": "flex", "flex-direction": "column", "align-content": "space-between"}}>
          <TextField id="filled-basic" label="company" variant="filled"/>
          <TextField id="filled-basic" label="Salary" variant="filled"/>
          <TextField id="filled-basic" label="Title" variant="filled"/>
          <div style={{"display": "flex", "justify-content": "space-between"}}>
            <TextField col="md" id="filled-basic" label="Start Date" variant="filled"/>
            <TextField col="md" id="filled-basic" label="End Date" variant="filled"/>
          </div>
        </div>
        <div style={{"display": "flex", "flex-direction": "column"}}>
          <TextField id="filled-basic" label="Skills Learned" rows="4" multiline variant="filled"/>
          <TextField id="filled-basic" label="Job Description" rows="4" multiline variant="filled"/>
        </div>

        <Button style={{"display":"flex", "justify-content": "flex-end", "margin": "5%"}} variant="contained" onSubmit={submitHandler}>Add Job</Button>
      </form>
</Container>  )
}

export default PastJobForm;