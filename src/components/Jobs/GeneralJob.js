import React from 'react';

export const GeneralJob = props => {
    return (
        <div className='general-job'>
            <div className='general-job-info'>{props.name}</div>
            <br />
            <div className='general-job-info'>{props.position_name}</div>
            <br />
            <div className='general-job-info'>{props.type}</div>
        </div>
    )
}