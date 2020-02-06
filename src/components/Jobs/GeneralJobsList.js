import React from 'react';
import { GeneralJob } from './GeneralJob';
import { connect } from 'react-redux';

import { getExperiancesForUserById, getAllMatchsForJS, getAllJobsJP} from '../../Store/Actions/AppActions.js';

export const GeneralJobsList = props => {

    if(props.type === 'seeker') {
        if(props.jobType === 'matches') {
            // grab all the matches
            getAllMatchsForJS(props.id);
        } else if(props.jobType === 'experience') {
            //grab all the experience
            getExperiancesForUserById(props.id);
        }

    } else if(props.type === 'provider') {
        // grab the matches and display
        getAllJobsJP(id);
    }

    const renderCorrectList = () => {
        //here we will return a map of generalJob or match
        if(props.type === 'seeker') {
            if(props.jobType === 'matches') {
                // grab all the matches
                return( props.jsMatches.map( match => {
                    return <GeneralJob name={match.name} position_name={match.position_name} type={match.type} />
                }) )
            } else if(props.jobType === 'experience') {
                //grab all the experience
                return props.jsExperiences.map(ex => {
                    return <GeneralJob name={ex.company_name} position_name={ex.job_title} type='' />
                })
            }
        } else if(props.type === 'provider') {
            // grab all jobs
            jpJobs.map(job => {
                return <GeneralJob name={job.position_name} position_name={job.type} type='' />
            })
        }
    }

    return (
        <div className='general-jobs-list-real'>
            
            { renderCorrectList() }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.id,
        jsExperiences: state.seeker.experiences,
        jsMatches: state.seeker.matched_jobs,
        jpJobs: state.provider.jobs
    }
}

export default connect(mapStateToProps, { getExperiancesForUserById, getAllMatchsForJS, getAllJobsJP})