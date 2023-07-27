import React, { useState, useEffect } from 'react'
import { UilArrowUp } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const ScrollUp = () => {
    const [showOnTop, setShowOnTop] = useState(true)

    useEffect(() => {
        const handleShowOnTop = () => {
            if (window.scrollY >= 560) {
                setShowOnTop(true);
            } else {
                setShowOnTop(false);
            }
        }
        window.addEventListener('scroll', handleShowOnTop);
        console.log('add event')
        return () => {
            window.removeEventListener('scroll', handleShowOnTop)
            console.log('remove event')
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }

    return (
        <>
            {showOnTop && (
                <Link to='#' className='scrollup' onClick={scrollToTop} >
                    <UilArrowUp size='24' className='scrollup__icon' />
                </Link>
            )}
        </>
    )
}

export default ScrollUp