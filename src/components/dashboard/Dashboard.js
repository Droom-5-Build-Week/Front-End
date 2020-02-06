import React from 'react';
import { MenuNav } from './MenuNav';

import { SeekerDashboard } from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';

import { connect } from 'react-redux';

import './dashboard.css';

export const Dashboard = props => {

    const renderCorrectUserType = () => {
        if(props.userType === 'seeker') {
            return <SeekerDashboard name={props.name} userType='seeker'/>
        } else if(props.userType === 'provider') {
            return <ProviderDashboard name={props.name} userType='provider'/>
        }
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