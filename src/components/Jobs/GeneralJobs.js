import React from 'react';
import NewJobDialog from '../NewJobDialog';
import PrevJobDialog from '../PreviousJobDialog';
import GeneralJobsList from '../Jobs/GeneralJobsList';
import { connect } from 'react-redux';
import { createExperianceByUserId } from '../../Store/Actions/AppActions';

const GeneralJobs = props => {

    const addPrevJob = (jobInfo) => {
      props.createExperianceByUserId(props.id, jobInfo)
    }

    const renderCorrectJobButton = () => {
        if(props.userType === 'provider') {
            return <NewJobDialog />
        } else if(props.userType === 'seeker' && props.jobType === 'experience') {
            return <PrevJobDialog handlePrevJob={addPrevJob} />
        }
    }

    return (
        <div className='general-jobs'>
            <span>{props.title}</span>

            <div className='general-jobs-list'>
                <GeneralJobsList type={props.userType} jobType={props.jobType}/>
            </div>

            { renderCorrectJobButton() }
            
        </div>
    )
}

const mapStateToProps = (state) => {
  return{
    id: state.id
  }
}

export default connect(mapStateToProps, {
  createExperianceByUserId
})(GeneralJobs)