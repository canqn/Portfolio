import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilBriefcaseAlt,
    UilScenery,
    UilMessage,
    UilTimes,
    UilApps
} from '@iconscout/react-unicons';
import { Link, animateScroll as scroll } from 'react-scroll';
import DarkTheme from '../../Common/DarkTheme';
import ThemeMode from '../../Common/DarkTheme/ThemeMode';

const Header = () => {
    const [click, setClick] = useState(false);
    const [changeBgHeader, setChangeHeader] = useState(true)

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    const handleClick = () => setClick(!click);
    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link');
        navLink.forEach(n => {
            n.addEventListener('click', closeMobileMenu);
        });
    }, []);

    useEffect(() => {
        const scrollHeader = () => {
            if (window.scrollY >= 80) {
                setChangeHeader(true)
            } else {
                setChangeHeader(false)
            }
        }
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.removeEventListener('scroll', scrollHeader)
        }
    }, [])


    return (
        <>
            <header id='header' className={`header ${changeBgHeader ? 'scroll-header' : ''}`}>
                <nav className='nav container'>
                    <Link to='/' className='nav__logo'>
                        CAN
                    </Link>
                    <div
                        className={click ? 'nav__menu show-menu' : 'nav__menu'}
                        id='nav-menu'
                    >
                        <ul className='nav__list grid'>
                            <li className='nav__item'>
                                <Link
                                    to='home'
                                    activeClass='active__link'
                                    className='nav__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilEstate size='19.2' className='nav__icon' />
                                    Home
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link
                                    to='about'
                                    activeClass='active__link'
                                    className='nav__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilUser size='19.2' className='nav__icon' />
                                    About
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link
                                    to='skills'
                                    activeClass='active__link'
                                    className='nav__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilFileAlt size='19.2' className='nav__icon' />
                                    Skills
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link
                                    to='services'
                                    className='nav__link'
                                    activeClass='active__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilBriefcaseAlt size='19.2' className='nav__icon' />
                                    Services
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link
                                    to='portfolio'
                                    className='nav__link'
                                    activeClass='active__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilScenery size='19.2' className='nav__icon' />
                                    Portfolio
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link
                                    to='contact'
                                    className='nav__link'
                                    activeClass='active__link'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <UilMessage size='19.2' className='nav__icon' />
                                    Contactme
                                </Link>
                            </li>
                        </ul>
                        <UilTimes
                            className='nav__close'
                            id='nav-close'
                            onClick={closeMobileMenu}
                        />
                    </div>
                    {/* Dark Theme */}
                    {click}

                    <div className='nav__btns'>
                        <ThemeMode />
                        {/*<DarkTheme /> */}
                        <div className='nav__toggle' onClick={handleClick}>
                            <UilApps size='17.6' />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

Header.propTypes = {};

export default Header;
