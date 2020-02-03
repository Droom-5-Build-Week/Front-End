import React from 'react';
import axios from 'axios';

export const JPSignUp = props => {

    const initialInfo = {
        name: '',
        company: '',
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

        setInfo(initialInfo);
        // props.history.push('/dashboard');
    }

    return (
        <div className='jp-sign-up'>
            <h2>Job Provider: Sign Up</h2>
            <div className='jp-sign-up-form'>
                <h3>Recruiter Details</h3>
                <form>
                    <label>
                        Name:  
                        <input type='text' name='name' value={info.name} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <label>
                        Company:  
                        <input type='text' name='company' value={info.company} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <br />
                    <label>
                        Email:  
                        <input type='text' name='email' value={info.email} onChange={(evt) => handleChange(evt)} />
                    </label>
                    <label>
                        Password:  
                        <input type='password' name='password' value={info.password} onChange={(evt) => handleChange(evt)} />
                    </label>
                </form>
                <br />
                <button className='jp-sign-up-button' onClick={ handleSubmit }>Sign Up</button>
            </div>
        </div>
    )
}