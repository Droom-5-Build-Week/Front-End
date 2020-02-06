import React from 'react';
import { MenuNav } from './MenuNav';

import  SeekerDashboard  from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';
import { connect } from 'react-redux';
import { getUsersById, getCompany } from '../../Store/Actions/AppActions';

import './dashboard.css';

const Dashboard = props => {

    const type = localStorage.getItem('userType');
    const id = localStorage.getItem('userId');

    console.log('type', type, 'id', id);

   
        if(type === 'seeker') {
            props.getUsersById(id);
        } else {
            props.getCompany(id);
        }
    

    const renderCorrectUserType = () => {
        if(type === 'seeker') {
            return <SeekerDashboard userType='seeker'/>
        } else if(type === 'provider') {
            return <ProviderDashboard serType='provider'/>
        }
    }

    return (
        <div className='dashboard'>
            <MenuNav />
        
            { renderCorrectUserType() }
        </div>
    )
}

export default connect(null, {getUsersById, getCompany})(Dashboard);