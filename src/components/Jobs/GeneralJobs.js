import React from 'react';
import NewJobDialog from '../NewJobDialog';
import GeneralJobsList from '../Jobs/GeneralJobsList';

export const GeneralJobs = props => {

    const renderCorrectJobButton = () => {
        if(props.userType === 'provider') {
            return <NewJobDialog />
        } else if(props.userType === 'seeker' && props.jobType === 'experience') {
            return <NewJobDialog /> //Add prev experience
        }
    }

    return (
        <div className='general-jobs'>
            <span>{props.title}</span>

            <div className='general-jobs-list'>
                <GeneralJobsList type={props.userType} jobType={props.jobType}/>
            </div>

            { renderCorrectJobButton() }
            
        </div>
    )
}