import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwipperSlider = (props:any) => {
  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            props.swiperItems.map((item:any, i:number) => (
                <SwiperSlide key={i}>
                    <img src={item.imgSrc} alt="Project 1" />
                    <div className="item-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
  );
}

export default SwipperSlider;
