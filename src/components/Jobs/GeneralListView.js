import React from 'react';
import SkillsDialog from '../SkillsDialog';
import { GeneralList } from './GeneralList';

import './Jobs.css';

export const GeneralListView = props => {

    const classes = "general-list list-type-" + props.type;

    const [listItems, setListItems] = React.useState({value: 'Javascript,Redux,Something'});

    const renderCorrectTitleAndButton = () => {
        if(props.type === 'skills') {
            return (
                <div className='list-header-and-button'>
                    <h2>Skills:</h2>
                    <ListDialog setList={(items) => setListItems(items)} buttonText="Add Skills" title='Add Skills' />
                </div>
            )
        } else if(props.type === 'interests') {
            return (
                <div className = 'list-header-and-button'>
                    <h2>Interests:</h2>
                    <ListDialog setList={(items) => setListItems(items)} buttonText="Add Interests" title='Add Interests' />
                </div>
            )
        }
    }

    return (
        <div className={classes}>
            { renderCorrectTitleAndButton() }
            <GeneralList items={listItems.value.split(',')} />
        </div>
    )
}