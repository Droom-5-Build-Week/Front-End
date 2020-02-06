import React from 'react';

export const GeneralList = props => {
    console.log('general list props', props);

    const [list, setList] = React.useState([]);

    return (
        <div className='general-list-items'>
            {
                list.map( item => {
                    return <div className='general-list-item'> {item} </div>
                })
            }
        </div>
    )
}