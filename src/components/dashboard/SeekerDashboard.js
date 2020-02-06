import React from 'react';
import { GeneralJobs } from '../Jobs/GeneralJobs';
import { GeneralListView } from '../Jobs/GeneralListView';

export const SeekerDashboard = props => {

    const [skillsList, setSkillsList] = React.useState([]);

    const [interestsList, setInterestsList] = React.useState([]);
    
    return (
        <div className='seeker-dashboard'>
            <h1>Job Seeker Dashboard for **User**</h1>
            <div className='top-seeker-dashboard'>
                <GeneralListView list={skillsList} type='skills' />
                <GeneralListView list={interestsList} type='interests' />
            </div>
            <GeneralJobs jobType='matches' userType={props.userType}/>
            <GeneralJobs jobType='experience' userType={props.userType} />
        </div>
    )
}