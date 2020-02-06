import React from 'react';
import ListDialog from '../ListDialog';
import { GeneralList } from './GeneralList';

import './Jobs.css';

export const GeneralListView = props => {

    const classes = "general-list list-type-" + props.type;

    const [listItems, setListItems] = React.useState({value: props.list});

    const handleAddNew = (items, type) => {
        setListItems(items)
        props.addMoreToList(listItems, type);
    }

    const renderCorrectTitleAndButton = () => {
        if(props.type === 'skills') {
            return (
                <div className='list-header-and-button'>
                    <h2>Skills:</h2>
                    <ListDialog list={listItems.value} setList={(items, type) => handleAddNew(items, type) } buttonText="Add Skills" title='Add Skills' />
                </div>
            )
        } else if(props.type === 'interests') {
            return (
                <div className = 'list-header-and-button'>
                    <h2>Interests:</h2>
                    <ListDialog list={listItems.value} setList={(items, type) => handleAddNew(items, type)} buttonText="Add Interests" title='Add Interests' />
                </div>
            )
        }
    }

    return (
        <div className={classes}>
            { renderCorrectTitleAndButton() }
            <GeneralList items={listItems.value} />
        </div>
    )
}