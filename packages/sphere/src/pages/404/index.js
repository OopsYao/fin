import React from 'react'
import styles from './.module.css'
import { Link } from 'react-router-dom'

const tips = ['哦豁，这个页面不见了', '肆零肆咯']

const getSample = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default (_) => (
  <div className={styles.block}>
    <h1 className={styles.title}>404</h1>
    <blockquote className={styles.tip}>{getSample(tips)}</blockquote>
    <Link to="/" className={styles.back}>
      返回主页
    </Link>
  </div>
)
