import React from 'react'
import { Link } from 'react-router-dom'
import imgAbout from '../../../image/about.jpg'
import { UilDownloadAlt } from '@iconscout/react-unicons'

const About = () => {
    return (
        <>
            <section className='section about'>
                <h2 className='section__title'>About Me</h2>
                <span className='section__subtitle'>My introduction</span>

                <div className='about__container container grid'>
                    <img src={imgAbout} className='about__img' alt='about' />
                    <div className='about__data'>
                        <p className='about__description'>
                            Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.
                        </p>
                        <div className='about__info'>
                            <div>
                                <span className='about__info-title'>02+</span>
                                <span className='about__info-name'>Years
                                    experience</span>
                            </div>

                            <div>
                                <span className='about__info-title'>05+</span>
                                <span className='about__info-name'>Completed
                                    project</span>
                            </div>

                            <div>
                                <span className='about__info-title'>02+</span>
                                <span className='about__info-name'>Companies
                                    worked</span>
                            </div>

                        </div>
                        <div className='about__buttons'>
                            <Link to='#' className='button button--flex'>
                                Download CV
                                <UilDownloadAlt size='18' className='button__icon' />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About