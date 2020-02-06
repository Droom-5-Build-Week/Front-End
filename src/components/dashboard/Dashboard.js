import React from 'react';
import { MenuNav } from './MenuNav';

import SeekerDashboard from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';

import './dashboard.css';

export const Dashboard = props => {

    console.log('dashboard props', props);

    const id = localStorage.getItem('userId');
    const type = localStorage.getItem('userType');

    const renderCorrectUserType = () => {
        if(type === 'seeker') {
            return <SeekerDashboard id={id} name={''} userType='seeker'/>
        } else if(type === 'provider') {
            return <ProviderDashboard id={id} name={''} userType='provider'/>
        }
    }

    return (
        <div className='dashboard'>
            <MenuNav />
        
            { renderCorrectUserType() }
        </div>
    )
}