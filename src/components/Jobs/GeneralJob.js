import React from 'react';
import {Button} from '@material-ui/core'
export const GeneralJob = props => {
    const renderDelete = () =>{
        if(props.jobType !== undefined){
            return (
                <div className='deleteBtn'><Button onClick={props.handleDelete(props.jobType, props.jobId, props.position_name)}>X</Button></div>
            )
        }
    }
    return (
        <div className='general-job'>
            <div className='general-job-info'>{props.name}</div>
            <br />
            <div className='general-job-info'>{props.position_name}</div>
            <br />
            <div className='general-job-info'>{props.type}</div>
            <br/>
            {renderDelete}

        </div>
    )
}