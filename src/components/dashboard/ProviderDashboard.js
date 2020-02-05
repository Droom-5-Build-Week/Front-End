import React from 'react';
import { GeneralJobs } from './GeneralJobs';

export const ProviderDashboard = props => {
    return (
        <div className='provider-dashboard'>
            <h1>Job Provider Dashboard for **User**</h1>

            <GeneralJobs />
        </div>
    )
}