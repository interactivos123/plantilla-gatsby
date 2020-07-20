import React from 'react'
import SEO from '../components/seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import { Slide1 } from '../components/Slides/Slide1'
import { Slide2 } from '../components/Slides/Slide2'
import { Slide3 } from '../components/Slides/Slide3'
import { LinkButton } from '../components/generals/Link'

SwiperCore.use([Navigation, Pagination])

const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={SwiperStyles}
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
      <LinkButton to='hola' variant='contained' color='primary'>Hola</LinkButton>
    </>
  )
}

export default Inicio
