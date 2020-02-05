import React from 'react';
import { MenuNav } from './MenuNav';

import { SeekerDashboard } from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';

import './dashboard.css';

export const Dashboard = props => {

    const renderCorrectUserType = () => {
        if(props.userType === 'seeker') {
            return <SeekerDashboard />
        } else if(props.userType === 'provider') {
            return <ProviderDashboard />
        }
    }

    return (
        <div className='dashboard'>
            <MenuNav />
        
            { renderCorrectUserType() }
        </div>
    )
}