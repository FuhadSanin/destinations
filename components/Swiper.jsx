import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Swiper.module.css';

import { Navigation } from 'swiper/modules';

const slides = [
  {
    title: 'Slide 1',
    location: 'Location 1',
    price: 'Price 1',
  },
  {
    title: 'Slide 2',
    location: 'Location 2',
    price: 'Price 2',
  },
  {
    title: 'Slide 3',
    location: 'Location 3',
    price: 'Price 3',
  },
  {
    title: 'Slide 4',
    location: 'Location 4',
    price: 'Price 4',
  },
  {
    title: 'Slide 5',
    location: 'Location 5',
    price: 'Price 5',
  },
  {
    title: 'Slide 6',
    location: 'Location 6',
    price: 'Price 6',
  },
  {
    title: 'Slide 7',
    location: 'Location 7',
    price: 'Price 7',
  },
  {
    title: 'Slide 8',
    location: 'Location 8',
    price: 'Price 8',
  },
  {
    title: 'Slide 9',
    location: 'Location 9',
    price: 'Price 9',
  },
  {
    title: 'Slide 10',
    location: 'Location 10',
    price: 'Price 10',
  },
];
  
export default function App() {
  return ( 
    <>   
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={index}>
              <div className={styles.swipercard}>
                <SwiperCard title={slide.title} price={slide.price} location={slide.location} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
