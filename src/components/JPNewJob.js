import React from 'react';
import axios from 'axios';

import './JP.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

export const JPNewJob = props => {

    const initialInfo = {
        position: '',
        type: '',
        duration: '',
        skills_required: '',
        job_description: ''
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
        // axios.post('end-point', info);
        console.log(info);
        setInfo(initialInfo);
        // pop the dialog
    }

    return (
        <Card raised='true' variant='outlined'  className='jp-popup'>
            <h2>Post a Job</h2>
            <div>
                <h3>Job Details</h3>
                <form>
                    <div>
                        <TextField label='Position' type='text' name='position' value={info.position} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <div>
                        <TextField label='Type' type='text' name='type' value={info.type} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <br />
                    <div>
                        <TextField label='Duration' type='text' name='duration' value={info.duration} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <div>
                        <TextField label='Skills Required' type='password' name='skills_required' value={info.skills_required} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <div>
                        <TextField label='Description' type='password' name='description' value={info.description} onChange={(evt) => handleChange(evt)} />
                    </div>
                    </form>
                <br />
            </div>
            <Button variant='outlined' className='jp-new-job-button' onClick={ handleSubmit } >Post</Button>
        </Card>
    )
}