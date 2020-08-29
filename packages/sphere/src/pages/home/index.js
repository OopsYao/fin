import React, { useState, useEffect } from 'react'
import PostCard from 'components/PostCard'
import Footer from 'components/Footer'

import styles from './.module.css'

// Post feedS
const fetchPosts = async (_) => {
  const resp = await fetch(`http://${process.env.REACT_APP_API_END}/posts`)
  if (!resp.ok) {
    return []
  }
  const body = resp.json()
  return body
}

const feedPlaceHolder = [...Array(5).keys()].map((i) => ({
  id: i,
}))

function App() {
  // Initial
  const [posts, setPosts] = useState(feedPlaceHolder)
  useEffect((_) => {
    ;(async (_) => {
      try {
        const posts = await fetchPosts()
        setPosts(posts)
      } catch (neterr) {
        console.log('Neterr')
      }
    })()
  }, [])

  const postCards = posts.map((p) => (
    <PostCard key={p.id} to={`p/${p.id}`} title={p.title} excerpt={p.content} />
  ))
  return (
    <div className={styles.root}>
      <main>
        <div className={styles.cardCollection}>{postCards}</div>
      </main>
      <Footer />
    </div>
  )
}

export default App
