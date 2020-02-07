import React from 'react';

export const SlideMenu = props => {
    
    let classes = "slide-menu ";
    if(props.isVisible) {
        classes += "menu-show"
    } else {
        classes += "menu-hide"
    }

    return (
        <div className={classes}>
            <div className='slide-menu-item' onClick={() => props.routeTo('Jobs')}>
                Jobs
            </div>
            <div className='slide-menu-item' onClick={() => props.routeTo('Swipe')}>
                Swipe
            </div>
            <div className='slide-menu-item' onClick={() => props.routeTo('Matches')}>
                Matches
            </div>
            <div className='slide-menu-item' onClick={() => props.routeTo('Settings')}>
                Settings
            </div>
        </div>
    )
}