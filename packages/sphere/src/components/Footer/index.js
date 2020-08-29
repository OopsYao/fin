import React from 'react'
import { Link } from 'react-router-dom'

import styles from './.module.css'

const otherLinks = [
  { name: '微信公众号', link: '/' },
  { name: '微博', link: '/' },
].map(({ name, link }) => (
  <li key={name}>
    <Link to={link} target="_blank">
      {name}
    </Link>
  </li>
))

const Footer = (_) => {
  return (
    <footer className={styles.footer}>
      <div>Copyright GHY.CN</div>
      <ul className={styles.links}>{otherLinks}</ul>
    </footer>
  )
}
export default Footer
