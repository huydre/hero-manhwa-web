import React, { useRef} from 'react'
import ManhwaCard from './ManhwaCard'
import ManhwaWeeklyCard from './ManhwaWeeklyCard'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../App.css';
import SwiperNavButton from '../components/SwiperNavButton';

const ManhwaList = ({data, unTitle}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
    {
        
          <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
        }}
          >
            {
              unTitle ?
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <ManhwaWeeklyCard item={item} key={index} />
                  </SwiperSlide>
              ))
              :
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <ManhwaCard item={item} key={index} />
                </SwiperSlide>
            ))
            }
          <SwiperNavButton />
          </Swiper>
        
    }
    </>
  )
}

export default ManhwaList