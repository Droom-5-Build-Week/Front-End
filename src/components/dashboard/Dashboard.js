import React from 'react';
import { MenuNav } from './MenuNav';

import { SeekerDashboard } from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';

import './dashboard.css';

export const Dashboard = props => {

    const type = localStorage.getItem('userType');

    const renderCorrectUserType = () => {
        if(type === 'seeker') {
            return <SeekerDashboard userType='seeker'/>
        } else if(type === 'provider') {
            return <ProviderDashboard userType='provider'/>
        }
    }

    return (
        <div className='dashboard'>
            <MenuNav />
        
            { renderCorrectUserType() }
        </div>
    )
}