import React from 'react';
import NewJobDialog from '../NewJobDialog';
import PrevJobDialog from '../PreviousJobDialog';
import { GeneralJobsList } from '../Jobs/GeneralJobsList';
import { connect } from 'react-redux';
import { createExperianceByUserId } from '../../Store/Actions/AppActions';

const GeneralJobs = props => {

    const addPrevJob = (jobInfo) => {
      props.createExperianceByUserId(props.id, jobInfo)
    }

    const renderCorrectJobButton = () => {
        if(props.userType === 'provider') {
            return <NewJobDialog />
        } else if(props.userType === 'seeker') {
            return <PrevJobDialog handlePrevJob={addPrevJob} />
            //<div className='prevJobDialog'>Add Prev Job</div>
        }
    }

    return (
        <div className='general-jobs'>
            <span>Your Jobs:</span>

            <div className='general-jobs-list'>
                <GeneralJobsList />
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