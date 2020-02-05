import React from 'react';
import NewJobDialog from '../NewJobDialog';
import { GeneralJobsList } from '../Jobs/GeneralJobsList';

export const GeneralJobs = props => {

    return (
        <div className='general-jobs'>
            <span>Your Jobs:</span>

            <div className='general-jobs-list'>
                <GeneralJobsList />
            </div>

            <NewJobDialog />
        </div>
    )
}