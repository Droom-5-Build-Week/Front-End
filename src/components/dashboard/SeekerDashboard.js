import React from 'react';
import { GeneralJobs } from '../Jobs/GeneralJobs';
import { GeneralListView } from '../Jobs/GeneralListView';

export const SeekerDashboard = props => {

    const skillsList = [
        {
            name: 'Javascript'
        }
    ];

    const interestsList = [
        {
            name: 'Leadership'
        }
    ]
    
    return (
        <div className='seeker-dashboard'>
            <h1>Job Seeker Dashboard for **User**</h1>
            <div className='top-seeker-dashboard'>
                <GeneralListView list={skillsList} type='skills' />
                <GeneralListView list={interestsList} type='interests' />
            </div>
            <GeneralJobs userType={props.userType}/>
        </div>
    )
}