import React, { useState, useEffect } from 'react'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
const ThemeMode = () => {
    const [themeState, setThemeState] = useState(false);

    const handleChange = () => {
        setThemeState(!themeState);
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-theme');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-theme');
        }
    }
    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') return document.body.classList.add('dark-theme');
    }, [])

    return (
        <div
            className='btn__theme'
            onClick={handleChange}
        >
            {themeState ? (<UilSun className='change-theme' />) : (<UilMoon className='change-theme' />)}
        </div>
    )
}

export default ThemeMode