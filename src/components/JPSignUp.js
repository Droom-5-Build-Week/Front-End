import React from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import './JP.css';

export const JPSignUp = props => {

    const initialInfo = {
        company: '',
        location: '',
        email: '',
        password: ''
    }

    const [info, setInfo] = React.useState(initialInfo)

    const handleChange = evt => {
        setInfo(
            {
                ...info,
                [evt.target.name]: evt.target.value
            }
        )
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        //send api put
        // axios.put('end-point', info);
        console.log(info);
        setInfo(initialInfo);
        // props.history.push('/dashboard');
    }

    return (
        <div className='jp-sign-up'>
            <h2>Job Provider: Sign Up</h2>
            <div className='jp-sign-up-form'>
                <h3>Recruiter Details</h3>
                <form>

                    <TextField 
                        label='Company'
                        type='text' 
                        name='company' 
                        value={info.company} 
                        onChange={(evt) => handleChange(evt)} />
                
                    <TextField 
                        label='Location' 
                        type='text' 
                        name='location' 
                        value={info.location} 
                        onChange={(evt) => handleChange(evt)} />
                
                    <br />
                  
                    <TextField 
                        label='Email' 
                        type='text' 
                        name='email' 
                        value={info.email} 
                        onChange={(evt) => handleChange(evt)} />
        
        
                    <TextField 
                        label='Password' 
                        type='password' 
                        name='password' 
                        value={info.password} 
                        onChange={(evt) => handleChange(evt)} />

                </form>
            </div>
            <br />
            <Button variant='outlined' className='jp-sign-up-button' onClick={ handleSubmit }>Sign Up</Button>
            {/* <br /> */}
        </div>
    )
}