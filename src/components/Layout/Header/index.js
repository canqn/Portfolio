import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'

const Header = () => {

    const [click, setClick] = useState(false)

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    const handleClick = () => setClick(!click)
    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link')
        navLink.forEach(n => {
            n.addEventListener('click', closeMobileMenu)
        })

    }, []);

    return (
        <>
            <header id='header' className='header'>
                <nav className='nav container'>
                    <Link
                        to="/"
                        className='nav__logo'
                    >
                        CAN
                    </Link>
                    <div className={click ? 'nav__menu show-menu' : 'nav__menu'} id='nav-menu'>
                        <ul className='nav__list grid'>
                            <li className='nav__item active__link'>
                                <Link to="/home" className='nav__link'>
                                    <UilEstate size="19.2" className='nav__icon' />
                                    Home
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link to="/about" className='nav__link'>
                                    <UilUser size="19.2" className='nav__icon' />
                                    About
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link to="/skills" className='nav__link'>
                                    <UilFileAlt size="19.2" className='nav__icon' />
                                    Skills
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link to="/services" className='nav__link'>
                                    <UilBriefcaseAlt size="19.2" className='nav__icon' />
                                    Services
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link to="/portfolio" className='nav__link'>
                                    <UilScenery size="19.2" className='nav__icon' />
                                    Portfolio
                                </Link>
                            </li>

                            <li className='nav__item'>
                                <Link to="/contactme" className='nav__link'>
                                    <UilMessage size="19.2" className='nav__icon' />
                                    Contactme
                                </Link>
                            </li>
                        </ul>
                        <UilTimes className="nav__close" id="nav-close" onClick={closeMobileMenu} />
                    </div>

                    {/* Dark Theme */}
                    {click}

                    <div className='nav__btns'>
                        <div className='nav__toggle' onClick={handleClick}>
                            <UilApps size="17.6" />
                        </div>

                    </div>
                </nav>
            </header>
        </>

    );

};

Header.propTypes = {};

export default Header;
