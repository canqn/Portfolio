import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataPortfolio } from './data';
import {
    UilArrowRight,
    UilAngleRight,
    UilAngleLeft
} from '@iconscout/react-unicons';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <section className='portfolio section' id='portfolio'>
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>Most recent work</span>
            <Swiper
                cssMode={true}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
                onSwiper={swiper => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;

                        // Re-init navigation
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='mySwiper portfolio__container container'
            >
                {dataPortfolio.map((item, index) => (
                    <SwiperSlide
                        className='portfolio__content grid swiper-slide'
                        key={index}
                    >
                        <img src={item.image} className='portfolio__img' alt='' />

                        <div className='portfolio__data'>
                            <h3 className='portfolio__title'>{item.portfolio__title}</h3>
                            <p className='portfolio__description'>
                                {item.portfolio__description}
                            </p>
                            <Link
                                to={'#'}
                                className='button button--flex button--small portfolio__button'
                            >
                                Demo
                                <UilArrowRight className='button__icon' />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
                {/*Add arrows*/}
                <div ref={navigationPrevRef} className='swiper-button-prev'>
                    <UilAngleLeft size='32' className='swiper-portfolio-icon' />
                </div>
                <div ref={navigationNextRef} className='swiper-button-next'>
                    <UilAngleRight size='32' className='swiper-portfolio-icon' />
                </div>
                {/* Add pagination */}
                <div className='swiper-pagination'></div>
            </Swiper>
        </section>
    );
};

export default Portfolio;
