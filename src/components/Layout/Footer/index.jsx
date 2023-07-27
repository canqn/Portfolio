import React from 'react'
import { UilFacebookF, UilInstagram, UilTwitterAlt } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__bg'>
                <div className='footer__container container grid'>
                    <div>
                        <h1 className='footer__title'>CANQN</h1>
                        <span className='footer__subtitle'>Frontend developer</span>
                    </div>

                    <ul className='footer__links'>
                        <li>
                            <a href="#services" className='footer__link'>Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className='footer__link'>Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className='footer__link'>Contact Me</a>
                        </li>
                    </ul>

                    <div className='footer__socials'>
                        <a href="#a" className='footer__social' target="_blank">
                            <UilFacebookF />
                        </a>
                        <a href="#a" className='footer__social' target="_blank">
                            <UilInstagram />
                        </a>
                        <a href="#a" className='footer__social' target="_blank">
                            <UilTwitterAlt />
                        </a>
                    </div>
                </div>
                <p className='footer__copy'>CANQN. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer