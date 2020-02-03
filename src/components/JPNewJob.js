import React from 'react';
import axios from 'axios';

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

        setInfo(initialInfo);
        // pop the dialog
    }

    return (
        <div className='jp-new-job'>
            <h2>Post a Job</h2>
            <div className='jp-new-job-form'>
                <h3>Job Details</h3>
                <form>
                    <label>
                        Position:  
                        <input type='text' name='position' value={info.position} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <label>
                        Type:  
                        <input type='text' name='type' value={info.type} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <br />
                    <label>
                        Duration:  
                        <input type='text' name='duration' value={info.duration} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <label>
                        Skills Required:  
                        <input type='password' name='skills_required' value={info.skills_required} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <label>
                        Job Description:  
                        <input type='password' name='description' value={info.description} onChange={(evt) => handleChange(evt)} />
                    </label>
                </form>
                <br />
                <button className='jp-new-job-button' onClick={ handleSubmit }>Post</button>
            </div>
        </div>
    )
}