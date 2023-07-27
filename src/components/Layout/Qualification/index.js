import React, { useEffect } from 'react';
import {
    UilGraduationCap,
    UilBriefcaseAlt,
    UilCalender
} from '@iconscout/react-unicons';

const Qualification = () => {

    useEffect(() => {
        const tabs = document.querySelectorAll('[data-target]'),
            tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target);
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('qualification__active');
                });
                target.classList.add('qualification__active');
                tabs.forEach(tab => {
                    tab.classList.remove('qualification__active');
                });
                tab.classList.add('qualification__active')
            });
        });
    }, [])

    return (
        <>
            <section id='qualification' className='qualification section'>
                <h2 className='section__title'>Qualification</h2>
                <span className='section__subtitle'>My personal journey</span>

                <div className='qualification__container container'>
                    <div className='qualification__tabs'>
                        <div
                            className='qualification__button button--flex qualification__active'
                            data-target='#education'
                        >
                            <UilGraduationCap className='qualification__icon' />
                            Education
                        </div>

                        <div
                            className='qualification__button button--flex'
                            data-target='#work'
                        >
                            <UilBriefcaseAlt className='qualification__icon' />
                            Work
                        </div>
                    </div>

                    <div className='qualification__sections'>
                        {/* Qualification content 1 */}
                        <div
                            className='qualification__content qualification__active'
                            data-content
                            id='education'
                        >
                            {/* Qualification 1 */}
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Computer Engineer</h3>
                                    <span className='qualification__subtitle'>QNU</span>
                                    <div className='qualification__calendar'>
                                        <UilCalender />
                                        2011-2015
                                    </div>
                                </div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>
                            {/* Qualification 2 */}
                            <div className='qualification__data'>
                                <div></div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>

                                <div>
                                    <h3 className='qualification__title'>Web Design</h3>
                                    <span className='qualification__subtitle'>QNU</span>
                                    <div className='qualification__calendar'>
                                        <i className='uil uil-calendar-alt'></i>
                                        2020 - 2021
                                    </div>
                                </div>
                            </div>
                            {/* Qualification 3 */}
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Web Development</h3>
                                    <span className='qualification__subtitle'>QNU</span>
                                    <div className='qualification__calendar'>
                                        <i className='uil uil-calendar-alt'></i>
                                        2011 - 2015
                                    </div>
                                </div>

                                <div>
                                    <span className='qualification__rounder'></span>

                                </div>
                            </div>
                        </div>
                        {/* Qualification content 2 */}
                        <div className='qualification__content' data-content id='work'>
                            {/*<!--=== QUALIFICATION 1 ===-->*/}
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Software Engineer</h3>
                                    <span className='qualification__subtitle'>LHN</span>
                                    <div className='qualification__calendar'>
                                        <i className='uil uil-calendar-alt'></i>
                                        2018 - 2020
                                    </div>
                                </div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>
                            {/*<!--=== QUALIFICATION 2 ===--> */}

                            <div className='qualification__data'>
                                <div></div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>

                                <div>
                                    <h3 className='qualification__title'>Frontend Developer</h3>
                                    <span className='qualification__subtitle'>LHN</span>
                                    <div className='qualification__calendar'>
                                        <i className='uil uil-calendar-alt'></i>
                                        2020 - 2022
                                    </div>
                                </div>
                            </div>

                            {/*<!--=== QUALIFICATION 3 ===--> */}
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Ui Design</h3>
                                    <span className='qualification__subtitle'>LHN</span>
                                    <div className='qualification__calendar'>
                                        <i className='uil uil-calendar-alt'></i>
                                        2020 - 2022
                                    </div>
                                </div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Qualification;
