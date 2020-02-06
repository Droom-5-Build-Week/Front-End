import React from 'react';
import GeneralJobs from '../Jobs/GeneralJobs';
import { GeneralListView } from '../Jobs/GeneralListView';

<<<<<<< HEAD
import { getUsersById } from '../../Store/Actions/AppActions';

import { connect } from 'react-redux';

const SeekerDashboard = props => {

    console.log('seeker dashboard props', props);

    React.useEffect( () => {
        //get the user
        console.log('getting user via getUsersById');
        props.getUsersById(props.id)
    }, []);

=======
import { connect } from 'react-redux';

const SeekerDashboard = props => {
>>>>>>> 65501e9f315b84d970f4a46e0bd8716782a71683
    return (
        <div className='seeker-dashboard'>
            <h1>Job Seeker Dashboard for {props.name}</h1>
            <div className='top-seeker-dashboard'>
                <GeneralListView list={props.skills} type='skills' />
                <GeneralListView list={props.interests} type='interests' />
            </div>
            <GeneralJobs title='Job Matches:' jobType='matches' userType={props.userType}/>
            <GeneralJobs title='Experiences:' jobType='experience' userType={props.userType} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        skills: state.seeker.personal_skills,
<<<<<<< HEAD
        interests: state.personal_interests
    }
}

export default connect(mapStateToProps, { getUsersById })(SeekerDashboard);
=======
        interests: state.seeker.personal_interests
    }
}

export default connect(mapStateToProps, {})(SeekerDashboard);
>>>>>>> 65501e9f315b84d970f4a46e0bd8716782a71683
