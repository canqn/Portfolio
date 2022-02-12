import React from 'react';
import { Link } from 'react-router-dom';
import { UilLinkedinAlt, UilSkypeAlt, UilGithubAlt, UilMessage, UilMouseAlt, UilArrowDown } from '@iconscout/react-unicons'
import perfil from '../../../perfil.png'

const Home = (props) => {
    return (
        <>
            <section className='home section' id='home'>
                <div className='home__container container grid'>
                    <div className='home__content grid'>
                        <div className='home__social'>
                            <Link to='#' className='home__social-icon' target='_blank'>
                                <UilLinkedinAlt size='20' />
                            </Link>
                            <Link to='#' className='home__social-icon' target='_blank'>
                                <UilSkypeAlt size='20' />
                            </Link>
                            <Link to='#' className='home__social-icon' target='_blank'>
                                <UilGithubAlt size='20' />
                            </Link>
                        </div>

                        <div className='home__img'>
                            <svg className='home__blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                                xmlns="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                    <image className="home__blob-img" x='12' y='18' xlinkHref={perfil} />

                                </g>
                            </svg>
                        </div>

                        <div className='home__data'>
                            <h1 className='home__title'>Hi, I''am Can</h1>
                            <h3 className='home__subtitle'>Frontend developer</h3>
                            <p className='home__description'>High level experience in web design and knowledge producing quality
                                work.</p>
                            <Link to='/contact' className='button button--flex'>
                                Contact Me
                                <UilMessage size='16' />
                            </Link>
                        </div>
                    </div>

                    <div className='home__scroll'>
                        <Link to='#about' className='home__scroll-button button--flex'>
                            <UilMouseAlt size='32' className='home__scroll-mouse' />
                            <span className='home__scroll-name'>Scroll down</span>
                            <UilArrowDown size='20' className='home__scroll-arrow' />
                        </Link>

                    </div>
                </div>

            </section>
        </>
    );
};



export default Home;
