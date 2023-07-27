import React from 'react'
import { UilMessage } from '@iconscout/react-unicons'
import projectImg from '../../../image/iam.png'

const Project = () => {
    return (
        <section className='section project'>
            <div className='project__bg'>
                <div className='project__container container grid'>
                    <div className='project__data'>
                        <h4 className='project__title'>You have new project</h4>
                        <p className='project__description'>
                            Contact me now and get a 30% discount on your new project.
                        </p>
                        <a href='#contact' className='button button--flex button--white'>
                            Contact Me
                            <UilMessage className='project__icon button__icon' />
                        </a>
                    </div>

                    <img src={projectImg} alt='project__img' className='project__img' />
                </div>
            </div>
        </section>
    )
}

export default Project