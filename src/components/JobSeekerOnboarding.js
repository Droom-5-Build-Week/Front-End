import React,  {useState} from 'react';
import { Button, Card, TextField } from '@material-ui/core'
import ListDialog from './ListDialog';

import axios from 'axios';
import './jsStyles.css'

const JobSeekerOnboarding = (props) =>{

  const handleSumit = e => {
    e.preventDefault();
    axios.post('https://droom-bt-tl.herokuapp.com/api/auth/register', userInfo)
      .then( resp => {
        console.log(resp);
        // registered account correctly

        props.history.push('/login')

      })
      .catch( err =>{
        console.log("Server returned an error:", err)
        
      })
    console.log(localStorage.getItem('userinfo'));
  }

  const handleChanges = e => {
    setUserInfo(
      {
          ...userInfo,
          [e.target.name]: e.target.value
      }
  )

  }

  const initialUserInfo = {
    name:'',
    email:'',
    location: '',
    password: '',
    professionalIntrests: '',
    personalSkills:'',
  }

  const [userInfo, setUserInfo] = React.useState(initialUserInfo)
  const [userInfoR, setUserInfoR] = useState(initialUserInfoR)

  return (
    <div className="FormParent">
      <h2>Job Seeker: Sign Up</h2>
      <div>
        <h3>Seeker Details</h3>
        <form onSubmit={handleSumit}>
          
          <div className="FormContainer">
            
            <TextField label="Name" name="name" value={userInfo.name} onChange={(e) => handleChanges(e)} />
            <TextField label="Email" name="email" value={userInfo.email} onChange={(e) => handleChanges(e)} />
            <TextField label="Address" name="location" value={userInfo.location} onChange={(e) => handleChanges(e)}/>
            <TextField type="password" label="Password" name="password" value={userInfo.password} onChange={(e) => handleChanges(e)} />
            <br/>
            <ListDialog setList={(items) => setUserInfo({ ...userInfo, professionalIntrests: items})} buttonText="Add Interests" title='Add Interests' />
            <TextField label="Professional Intrests" name="professionalIntrests" disabled={true} value={userInfo.professionalIntrests} />
            <br/>
            {/* <SkillsDialog setSkills={ (obj) => setUserInfo({...userInfo, personalSkills: obj.value})} /> */}
            <ListDialog setList={(items) => setUserInfo({...userInfo, personalSkills: items})} buttonText="Add Skills" title='Add Skills' />
            <TextField label="Personal Skills" name="personalSkills" disabled={true} value={userInfo.personalSkills}/>
            

          </div>
          
          <br />
          <Button type="submit" variant='outlined'>Submit</Button>
          <br/>
        </form>
      </div>
    </div>
  )
}

export default JobSeekerOnboarding;