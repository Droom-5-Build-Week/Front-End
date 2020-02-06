import React from 'react';
import { GeneralJob } from './GeneralJob';
import { connect } from 'react-redux';

import { getExperiencesForUser, getAllMatchsForJS, getAllJobsJP, deleteExperienceForUserById, updateUserById, deleteJobById} from '../../Store/Actions/AppActions.js';



const GeneralJobsList = props => {

    React.useEffect( () => {
        if(props.id !== -1) {
            if(props.type === 'seeker') {
                if(props.jobType === 'matches') {
                    // grab all the matches
                    props.getAllMatchsForJS(props.id);
                } else if(props.jobType === 'experience') {
                    //grab all the experience
                    props.getExperiancesForUser(props.id);
                }
    
            } else if(props.type === 'provider') {
                // grab the matches and display
                props.getAllJobsJP(props.id);
            }
        }
    }, [])
    // console.log('general jobs list props', props);
    
    const handleDelete = (jobType, jobId, jobName) =>{
        if(jobType==="matches"){
            // let newSeeker = props.seeker;
            // let newJobs = newSeeker.matched_jobs.filter( job =>{
            //     return (
            //         job.position_name != jobName
            //     )
            // })
            // newSeeker.matched_jobs = newJobs;
            // props.updateUserById(props.id, newSeeker)
        }
        else if(jobType==="experience"){
            props.deleteExperienceForUserById(props.id, jobId)
        }
        else{

        }
    }

    const renderCorrectList = () => {
        //here we will return a map of generalJob or match
        // if(props.type === 'seeker') {
        //     if(props.jobType === 'matches' && props.jsMatches !== undefined) {
        //         // grab all the matches
        //         return( props.jsMatches.map( match => {
        //             return <GeneralJob name={match.name} position_name={match.position_name} type={match.type} />
        //         }) )
        //     } else if(props.jobType === 'experience'  && props.jsExperiences !== undefined) {
        //         //grab all the experience
        //         return props.jsExperiences.map(ex => {
        //             return <GeneralJob name={ex.company_name} position_name={ex.job_title} type='' />
        //         })
        //     }
        // } else if(props.type === 'provider' && props.jpJobs !== undefined) {
        //     // grab all jobs
        //     props.jpJobs.map(job => {
        //         return <GeneralJob name={job.position_name} position_name={job.type} type='' />
        //     })
        // }
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
        jpJobs: state.provider.jobs,
        seeker: state.seeker
    }
}

export default connect(mapStateToProps, { 
    getExperiencesForUser, 
    getAllMatchsForJS, 
    getAllJobsJP,
    deleteExperienceForUserById,
    updateUserById,
    deleteJobById
})(GeneralJobsList)