import React from 'react';
import Star from '../../images/star.png';
import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
    > 
        <SwiperSlide className='testimonials'>
            <div className="container">
                <div className="stars">
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                </div>
                <div className="content">
                    <p>“Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”</p>
                    <h3>James Brown, Influencer</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
            <div className="container">
                <div className="stars">
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                    <img src={Star} alt="star" className='star'/>
                </div>
                <div className="content">
                    <p>“Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”</p>
                    <h3>James Brown, Influencer</h3>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
