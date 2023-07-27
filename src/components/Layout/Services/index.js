import React, { useState } from 'react'
import { serviceData } from './data'
import ServicesItem from './ServicesItem';

const Services = () => {

    const [isShowing, setShowing] = useState(false)
    const hideModal = () => setShowing(false)
    const showModal = () => setShowing(true);
    const hideShowClassName = isShowing ? 'active-modal' : '';

    return (
        <>
            <section id='services' className='section services'>
                <h2 className='section__title'>Services</h2>
                <span className='section__subtitle'>What i offer?</span>
                <div className='services__container container grid'>
                    {serviceData.map((item, index) => {
                        return (
                            <ServicesItem
                                key={index}
                                item={item}
                                hideShowClassName={hideShowClassName}
                                hideModal={hideModal}
                                showModal={showModal}
                                isShowing={isShowing}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Services