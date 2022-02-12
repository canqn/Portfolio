import React, { useEffect, useState } from 'react'
import { UilBracketsCurly, UilAngleDown, UilServerNetwork } from '@iconscout/react-unicons'

const Skills = () => {
    const [click, setClick] = useState('false')

    const dataSkills = [
        {
            "id": 1,
            "title": "Frontend developer",
            "subtitle": "More than 1 years",
            "data": [
                { "skills_name": "HTML", "skills_number": 90 },
                { "skills_name": "CSS", "skills_number": 80 },
                { "skills_name": "JAVASCRIPT", "skills_number": 70 },
                { "skills_name": "REACT", "skills_number": 80 },
            ],
        },

        {
            "id": 2,
            "title": "Backend developer",
            "subtitle": "More than 1 years",
            "data": [
                { "skills_name": "PHP", "skills_number": 60 },
                { "skills_name": "Node Js", "skills_number": 60 },
                { "skills_name": "Firebase", "skills_number": 70 },
                { "skills_name": "Python", "skills_number": 80 },
            ],
        },

        {
            "id": 3,
            "title": "Designer",
            "subtitle": "More than 1 years",
            "data": [
                { "skills_name": "Figma", "skills_number": 60 },
                { "skills_name": "Sketch", "skills_number": 60 },
                { "skills_name": "Photoshop", "skills_number": 85 },
            ],
        },

    ]

    useEffect(() => {
        const skillsContent = document.getElementsByClassName('skills__content')
        const skillsHeader = document.querySelectorAll('.skills__header')

        return () => {

        }
    }, [])


    return (
        <>
            <section className='skills section'>
                <h2 className='section__title'>Skills</h2>
                <span className='section__subtitle'>My technical level</span>

                <div className='skills__container container grid'>
                    {/*=== SKILLS 1 ===*/}
                    <div className='skills__content skills__open'>
                        <div className='skills__header'>
                            <UilBracketsCurly className='skills__icon' />
                            <div>
                                <h1 className='skills__title'>Frontend developer</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <UilAngleDown className='skills__arrow' />
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">CSS</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Javascript</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage js"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">React</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*=== SKILLS 2 ===*/}
                    <div className='skills__content skills__close'>
                        <div className='skills__header'>
                            <UilServerNetwork className='skills__icon' />
                            <div>
                                <h1 className='skills__title'>Backend developer</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <UilAngleDown className='skills__arrow' />
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">PHP</h3>
                                    <span class="skills__number">50%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__php"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__title">
                                    <h3 class="skills__name">Node Js</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__node"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Firebase</h3>
                                    <span class="skills__number">60%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__firebase"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Python</h3>
                                    <span class="skills__number">50%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*=== SKILLS 3 ===*/}
                    <div className='skills__content skills__close'>
                        <div className='skills__header'>
                            <UilServerNetwork className='skills__icon' />
                            <div>
                                <h1 className='skills__title'>Designer</h1>
                                <span className='skills__subtitle'>More than 1 years</span>
                            </div>
                            <UilAngleDown className='skills__arrow' />
                        </div>

                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Figma</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__figma"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Sketch</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__sketch"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Photoshop</h3>
                                    <span class="skills__number">83%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__photoshop"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills