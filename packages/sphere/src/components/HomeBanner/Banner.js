import React from 'react'

import SwiperCore, { Pagination, A11y, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import styles from './banner.module.css'

// install Swiper components
SwiperCore.use([Pagination, A11y, EffectFade, Autoplay])

// TODO Responsive design --- for wider screen, scale image in not practical
export default ({ onSlideChange: rawOnSlideChange, imageList }) => {
  const slideList = imageList.map(({ src, alt }, i) => (
    <SwiperSlide key={i} className={styles.slide}>
      <img src={src} alt={alt} />
    </SwiperSlide>
  ))

  const onSlideChange = (() => {
    // 取消第一次触发
    let firstTimeFlag = true
    return ({ realIndex }) => {
      !firstTimeFlag && rawOnSlideChange(realIndex)
      firstTimeFlag = false
    }
  })()

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
      {...(rawOnSlideChange instanceof Function && { onSlideChange })}
      className={styles.innerBanner}
    >
      {slideList}
    </Swiper>
  )
}
