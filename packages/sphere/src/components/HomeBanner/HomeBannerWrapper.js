import React from 'react'

import styles from './wrapper.module.css'

const HomeBannerWrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${props.image})` || 'unset' }}
      />
      {props.children}
    </div>
  )
}

export default HomeBannerWrapper
