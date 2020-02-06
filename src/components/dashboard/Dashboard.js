import React from 'react';
import { MenuNav } from './MenuNav';

import { SeekerDashboard } from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';

import { connect } from 'react-redux';

import './dashboard.css';

export const Dashboard = props => {

    const type = localStorage.getItem('userType');

    const renderCorrectUserType = () => {
        if(type === 'seeker') {
            return <SeekerDashboard userType='seeker'/>
        } else if(type === 'provider') {
            return <ProviderDashboard userType='provider'/>
        }
        console.log(props.userType, 'rendered a user by type')
    }

    return (
        <div className='dashboard'>
            <MenuNav />
        
            { renderCorrectUserType() }
        </div>
    )
}

const mapStateToProps = state => {
    
    if(state.userType === 1) {
        return {
            name: state.seeker.name
        }
    } else {
        return {
            name: state.provider.name
        }
    }
}

export default connect(mapStateToProps, {})(Dashboard);