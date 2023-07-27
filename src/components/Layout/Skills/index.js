import React, { useState } from 'react'
import { UilBracketsCurly, UilServerNetwork, UilSwatchbook } from '@iconscout/react-unicons'
import { skillsData } from './data'
import AccordionItem from './AccordionItem'

const Skills = () => {

    const [isActive, setIsActive] = useState(0)
    const renderedSkills = skillsData.map((item, index) => {
        const toggle = index === isActive ? 'skills__open' : 'skills__close'
        const iconSkills = item.id === 1 ? (<UilBracketsCurly className='skills__icon' />) : item.id === 2 ? (<UilServerNetwork className='skills__icon' />) : (<UilSwatchbook className='skills__icon' />);
        return (
            <AccordionItem
                toggle={toggle}
                item={item}
                iconSkills={iconSkills}
                index={index}
                key={item.id}
                onClick={() => setIsActive(index)}
            />
        )
    })

    return (
        <>
            <section className='skills section' id='skills'>
                <h2 className='section__title'>Skills</h2>
                <span className='section__subtitle'>My technical level</span>
                <div className='skills__container container grid'>
                    {renderedSkills}
                </div>

            </section>
        </>
    )
}

export default Skills