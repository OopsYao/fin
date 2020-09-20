import React, { useState } from 'react'

import TheBanner from './Banner'
import TheWrapper from './HomeBannerWrapper'

import Mock from 'mockjs'

const imageList = [...Array(6).keys()].map((i) => ({
  src: Mock.Random.image('300x200', i % 2 === 0 ? '#fb0a2a' : '#02adea'),
  alt: Mock.Random.csentence(),
}))

const HomeBanner = () => {
  const [image, setImage] = useState(imageList[0].src)
  const onSlideChange = (idx) => {
    setImage(imageList[idx].src)
  }
  return (
    <TheWrapper image={image}>
      <TheBanner onSlideChange={onSlideChange} imageList={imageList} />
    </TheWrapper>
  )
}

export default HomeBanner
