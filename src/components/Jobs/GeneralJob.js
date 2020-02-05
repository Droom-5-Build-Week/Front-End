import React from 'react';

export const GeneralJob = props => {

    const job = {
        name: 'Something',
        datePosted: '12/2/2019',
        matches: '20'
    }

    return (
        <div className='general-job'>
            <div className='general-job-info'>{job.name}</div>
            <br />
            <div className='general-job-info'>{job.datePosted}</div>
            <br />
            <div className='general-job-info'>{job.matches}</div>
        </div>

    )
}