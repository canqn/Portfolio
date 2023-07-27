import React from 'react'
import ReactStars from "react-rating-stars-component";
import { testimonialData } from './data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {

    const ratingStar = {
        edit: false
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <section className='section testimonial' id='testimonial'>
            <h2 className='section__title'>Testimonial</h2>
            <span className='section__subtitle'>My client saying</span>

            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper testimonial__container container"
            >
                {testimonialData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='testimonial__data'>
                            <div className='testimonial__header'>
                                <img src={item.image} alt='testimonial1' className='testimonial__img' />
                                <div>
                                    <h3 className='testimonial__name'>{item.name}</h3>
                                    <span className='testimonial__client'>{item.client}</span>
                                </div>
                            </div>
                            <ReactStars
                                size={20}
                                value={item.star}
                                edit={false}
                            />
                        </div>
                        <p className='testimonial__description'>{item.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Testimonial