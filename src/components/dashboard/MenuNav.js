import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { SlideMenu } from './SlideMenu';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import './MenuNav.css';

export const MenuNav = props => {

    const [isVisible, setVisible] = React.useState(false);

    const routeTo = loc => {
        if(loc === 'Settings') {
            console.log('displayUserSettings nav', loc)
            props.displayUserSettings();
        }
    }

    const renderCorrectIcon = () => {
        if(isVisible) {
            return <RemoveCircleOutlineIcon />
        } else {
            return <AddCircleIcon />
        }
    }

    return (
        <div className='slide-menu-container'>
            
            <div className='icon-container'>
                <IconButton aria-label="add-circle" onClick={() => setVisible(!isVisible)}>
                    
                    { renderCorrectIcon() }

                </IconButton>
            </div>

            <SlideMenu isVisible={isVisible} routeTo={(loc) => routeTo(loc)} />

        </div>
    )
}