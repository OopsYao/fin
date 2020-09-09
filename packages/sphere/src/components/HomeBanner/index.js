import React from 'react'

import Mock from 'mockjs'
import SwiperCore, { Pagination, A11y, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import styles from './banner.module.css'

// install Swiper components
SwiperCore.use([Pagination, A11y, EffectFade, Autoplay])

const slideList = [1, 2, 3, 4, 5].map((i) => (
  <SwiperSlide key={i} className={styles.slide}>
    <img
      src={Mock.Random.image('300x200', i % 2 === 0 ? '#fb0a2a' : '#02adea')}
      alt={Mock.Random.csentence()}
    />
  </SwiperSlide>
))

// TODO Responsive design --- for wider screen, scale image in not practical
export default ({ onSlideChange }) => {
  // Remove undefined fields
  const cleanObject = (obj) => {
    const newObj = { ...obj }
    Object.keys(newObj).forEach(
      (key) => newObj[key] === undefined && delete newObj[key],
    )
    return newObj
  }

  const onSlideChangeConfig = cleanObject({
    // TODO In the loop mode, the second slide change will be invoked twice
    onSlideChange:
      onSlideChange instanceof Function
        ? (swiper) => onSlideChange(swiper.realIndex)
        : undefined,
  })

  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="fade"
      grabCursor={true}
      {...onSlideChangeConfig}
    >
      {slideList}
    </Swiper>
  )
}
