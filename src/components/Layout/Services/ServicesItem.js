import React from 'react'
import { UilWebGrid, UilArrowRight, UilTimes, UilCheckCircle } from '@iconscout/react-unicons'

const ServicesItem = (props) => {
    const { item, hideShowClassName, showModal, hideModal, isShowing } = props

    return (
        <>
            {/* Service 1 */}
            <div className='services__content'>
                <div>
                    <UilWebGrid size='24' className='services__icon' />
                    <h3 className='services__title'>{item.title}</h3>
                </div>

                <span className='button button--flex button--small button--link services__button' onClick={showModal}>
                    View more
                    <UilArrowRight className='button__icon' />
                </span>
                {isShowing && (
                    <div className={`services__modal ${hideShowClassName} `}>
                        <div className='services__modal-content'>
                            <div className='services__modal-title'>
                                {item.title}
                            </div>
                            <div onClick={hideModal}>
                                <UilTimes className='services__modal-close' />
                            </div>

                            <ul className='services__modal-services grid'>
                                {item.datas.map((data, j) => (
                                    <li className='services__modal-service' key={j}>
                                        <UilCheckCircle size='20' className='services__modal-icon' />
                                        <p>{data.service_name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ServicesItem