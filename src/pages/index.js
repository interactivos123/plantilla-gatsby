import React from 'react'
import SEO from '../components/seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { Slide1 } from '../components/Slides/Slide1'
import { Slide2 } from '../components/Slides/Slide2'
import { Slide3 } from '../components/Slides/Slide3'

const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Inicio
