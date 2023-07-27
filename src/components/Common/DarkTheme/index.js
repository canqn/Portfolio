import React, { useState } from 'react';
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import { ThemeContext, themes } from '../../../context/ThemeContext';


const DarkTheme = (props) => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <>
            {/* Theme change button */}
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div
                        className='btn__theme'
                        onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                    >
                        {darkMode ? (<UilMoon className='change-theme' id='theme-button' />) : (<UilSun className='change-theme' id='theme-button' />)}
                    </div>
                )}
            </ThemeContext.Consumer>



        </>
    );
};



export default DarkTheme;
