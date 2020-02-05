import React from 'react';
import NewJobDialog from '../NewJobDialog';
import { GeneralJobsList } from '../Jobs/GeneralJobsList';

export const GeneralJobs = props => {

    const renderCorrectJobButton = () => {
        if(props.userType === 'provider') {
            return <NewJobDialog />
        } else if(props.userType === 'seeker') {
            return <NewJobDialog /> //<div className='prevJobDialog'>Add Prev Job</div>
        }
    }

    return (
        <div className='general-jobs'>
            <span>Your Jobs:</span>

            <div className='general-jobs-list'>
                <GeneralJobsList />
            </div>

            { renderCorrectJobButton() }
            
        </div>
    )
}