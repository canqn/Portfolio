import React from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

const AccordionItem = (props) => {
    const { item, toggle, onClick, iconSkills } = props

    return (
        <>
            {/*=== SKILLS 1 ===*/}
            <div className={`skills__content ${toggle}`} onClick={onClick} >
                <div className='skills__header' >
                    {iconSkills}
                    <div>
                        <h1 className='skills__titles'>{item.title}</h1>
                        <span className='skills__subtitle'>{item.subtitle}</span>
                    </div>
                    <UilAngleDown className='skills__arrow' />
                </div>

                <div className='skills__list grid'>
                    {item.datas.map((data, j) => (
                        <div className='skills__data' key={j}>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>{data.skills_name}</h3>
                                <span className='skills__number'>{data.skills_number}</span>
                            </div>
                            <div className='skills__bar'>
                                <span
                                    className={`skills__percentage skill__${data.skills_number}`}
                                    style={{ width: `${data.skills_number}%` }}
                                >
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AccordionItem