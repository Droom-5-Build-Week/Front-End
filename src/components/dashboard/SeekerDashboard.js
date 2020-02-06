import React from 'react';
import { GeneralJobs } from '../Jobs/GeneralJobs';
import { GeneralListView } from '../Jobs/GeneralListView';

export const SeekerDashboard = props => {
    return (
        <div className='seeker-dashboard'>
            <h1>Job Seeker Dashboard for {props.name}</h1>
            <div className='top-seeker-dashboard'>
                <GeneralListView list={skillsList} type='skills' />
                <GeneralListView list={interestsList} type='interests' />
            </div>
            <GeneralJobs title='Job Matches:' jobType='matches' userType={props.userType}/>
            <GeneralJobs title='Experiences:' jobType='experience' userType={props.userType} />
        </div>
    )
}