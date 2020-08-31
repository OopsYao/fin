import React from 'react'
import styles from './.module.scss'
import { Link } from 'react-router-dom'

const PostCard = ({ image, title, excerpt, to }) => {
  return (
    <div className={styles.card}>
      {excerpt !== undefined && (
        <>
          <Link to={to} className={styles.pic}>
            <img src={image} alt={title} />
          </Link>
          <div className={styles.liter}>
            <h2 className={styles.head}>{title}</h2>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
        </>
      )}
    </div>
  )
}
export default PostCard
