import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './JP.css';

export const JPSignUp = props => {

    const [toggle, setToggle] = React.useState(false);

    // React.useEffect( () => {
    //     console.log('running effect');
    //     // console.log(resp);
    //     axios.post('https://droom-bt-tl.herokuapp.com/api/auth/company/register', obj )
    //     .then( resp => {
    //         console.log(resp);
    //         localStorage.setItem('token', resp.data.token);
    //         props.history.push('/');
    //     })
    //     .catch( err => {
    //         console.log(err);
    //     })
    // }, [])

    // React.useEffect( () => {
    //     console.log('getting users');

    //     const obj = { 
    //         "name": "FTP",
    //       }
    //     axiosWithAuth().get('https://droom-bt-tl.herokuapp.com/api/companies/2/jobs/skills')
    //     .then( resp => {
    //         console.log(resp);
    //     })
    // }, [toggle]);

    const initialInfo = {
        name: '',
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
        axios.post('https://droom-bt-tl.herokuapp.com/api/auth/company/register', info)
        .then( resp => {
            //if we are here then we have registered the user
            setToggle(true);
            props.history.push('/');
        })
        .catch( err => {
            //TODO do cogo-toast for invalid entry or whatever
            console.log(err);
        })
        console.log(info);
        setInfo(initialInfo);
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
                        name='name' 
                        value={info.name} 
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