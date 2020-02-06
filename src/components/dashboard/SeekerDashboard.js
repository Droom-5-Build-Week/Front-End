import React from 'react';
import GeneralJobs from '../Jobs/GeneralJobs';
import { GeneralListView } from '../Jobs/GeneralListView';

import { updateUserById, getUsers, deleteUserById } from '../../Store/Actions/AppActions';

import { connect } from 'react-redux';

const SeekerDashboard = props => {

    // console.log('seeker dashboard props', props);

    const handleAddMoreToList = (list, type) => {
        if(type === 'skills') {
            props.updateUserById()
        } else if(type === 'interests') {

        }
    }

    const [firstToggle, setFirstToggle] = React.useState(false);

    React.useEffect( () => {
        //CRUD operations
        /* grab all users */
        props.getUsers();

    }, [])

    React.useEffect( () => {

        console.log(props.allUsers);
        props.deleteUserById(1);

    }, [props.allUsers]);

    React.useEffect( () => {

        console.log(props.allUsers);
        props.updateUserById(2, {
            "email": "Ralph2932@example.com",
            "password": "turquoise",
            "name": "Ralph Furstrong",
            "location": "Mars"
        });

    }, [props.readyForUpdate]);

    return (
        <div className='seeker-dashboard'>
            <h1>Job Seeker Dashboard for {props.seeker.name}</h1>
            <div className='top-seeker-dashboard'>
                <GeneralListView addMoreToList={ handleAddMoreToList } list={props.seeker.personal_skills} type='skills' />
                <GeneralListView addMoreToList={ handleAddMoreToList } list={props.seeker.personal_interests} type='interests' />
            </div>
            <GeneralJobs title='Job Matches:' jobType='matches' userType={props.userType}/>
            <GeneralJobs title='Experiences:' jobType='experience' userType={props.userType} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        seeker: state.seeker,
        allUsers: state.allUsers,
        readyForUpdate: state.readyForUpdate
    }
}

export default connect(mapStateToProps, { updateUserById, getUsers, deleteUserById, updateUserById/* functions to CRUD */ })(SeekerDashboard);
