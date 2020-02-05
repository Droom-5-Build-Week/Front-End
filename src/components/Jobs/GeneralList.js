import React from 'react';

export const GeneralList = props => {
    console.log('general list props', props);
    return (
        <div className='general-list-items'>
            {
                props.items.map( item => {
                    return <div className='general-list-item'> {item} </div>
                })
            }
        </div>
    )
}