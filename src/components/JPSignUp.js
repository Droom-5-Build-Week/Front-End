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
        <Card raised='true' variant='outlined' className='jp-popup'>
            <h2>Job Provider: Sign Up</h2>
            <div className='jp-sign-up-form'>
                <h3>Recruiter Details</h3>
                <form>
                    <div>
                        {/* <span>Company:</span>   */}
                        <TextField label='Company' type='text' name='company' value={info.company} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <div>
                        {/* <span>Location:</span>   */}
                        <TextField label='Location' type='text' name='location' value={info.location} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <br />
                    <div>
                        {/* <span>Email:</span>   */}
                        <TextField label='Email' type='text' name='email' value={info.email} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <div>
                        {/* <span>Password:</span>   */}
                        <TextField label='Password' type='password' name='password' value={info.password} onChange={(evt) => handleChange(evt)} />
                    </div>
                </form>
            </div>
            <br />
            <Button variant='outlined' className='jp-sign-up-button' onClick={ handleSubmit }>Sign Up</Button>
            <br />
        </Card>
    )
}