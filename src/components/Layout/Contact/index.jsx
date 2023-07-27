import React from 'react'
import { UilPhone, UilEnvelope, UilMapMarker, UilMessage } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact Me</h2>
            <span className='section__subtitle'>Get in touch</span>

            <div className='contact__container container grid'>
                <div>
                    <div className='contact__information'>
                        <UilPhone size='32' className='contact__icon' />
                        <div>
                            <h3 className='contact__title'>Call Me</h3>
                            <span className='contact__subtitle'>0914-659-519</span>
                        </div>
                    </div>
                    <div className='contact__information'>
                        <UilEnvelope size='32' className='contact__icon' />
                        <div>
                            <h3 className='contact__title'>Email</h3>
                            <span className='contact__subtitle'>nvcqnn@gmail.com</span>
                        </div>
                    </div>
                    <div className='contact__information'>
                        <UilMapMarker size='32' className='contact__icon' />
                        <div>
                            <h3 className='contact__title'>Location</h3>
                            <span className='contact__subtitle'>Quy Nhon - Binh Dinh - Viet Nam</span>
                        </div>
                    </div>
                </div>
                <form className='contact__form grid'>
                    <div className='contact__inputs grid'>
                        <div className='contact__content'>
                            <label className='contact__label'>Name</label>
                            <input name='text' className='contact__input'></input>
                        </div>
                        <div className='contact__content'>
                            <label className='contact__label'>Email</label>
                            <input name='email' className='contact__input'></input>
                        </div>
                    </div>
                    <div className='contact__content'>
                        <label className='contact__label'>Project</label>
                        <input name='email' className='contact__input'></input>
                    </div>
                    <div className='contact__content'>
                        <label className='contact__label'>Message</label>
                        <textarea className='contact__input' name="textarea" id="" cols="0" rows="7"></textarea>
                    </div>
                    <div>
                        <a href='#c' className='button button--flex'>
                            Send Message
                            <UilMessage className='button__icon' />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact