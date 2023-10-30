import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Swiper.module.css';

import { Navigation } from 'swiper/modules';

const slides = [<SwiperCard />, <SwiperCard />, <SwiperCard />, <SwiperCard />];

export default function App() {
  return ( 
        <>   
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slideContent, index) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={index}>
              <div className={styles.swipercard}>{slideContent}
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
