import React from 'react';
import PropTypes from 'prop-types';
import { UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage, UilTimes, UilMoon, UilApps } from '@iconscout/react-unicons'

const DarkTheme = (props) => {
    return (
        <>
            <div className='nav__btns'>
                {/* Theme change button */}
                <UilMoon className='change-theme' id='theme-button' />

                <div className='nav__toggle' id='nav-toggle'>
                    <UilApps />
                </div>
            </div>
        </>
    );
};



export default DarkTheme;
