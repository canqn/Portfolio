import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './ThemeContext'

const ThemeContextWrapper = (props) => {
    const [theme, setTheme] = useState(themes.dark)
    function changeTheme(theme) {

        setTheme(theme)
    }

    useEffect(() => {
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        switch (theme) {
            case themes.dark:
                document.body.classList.remove('dark-theme')
                break;
            case theme.light:
            default:
                document.body.classList.add('dark-theme')
                break;
        }
    }, [theme])
    const value = { theme: theme, changeTheme: changeTheme }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper