import React, { useState, useEffect } from 'react'
import PostCard from 'components/PostCard'
import Footer from 'components/Footer'

import { fetchPosts } from 'services/posts'

import styles from './.module.css'

const feedPlaceHolder = [...Array(12).keys()].map((id) => ({
  id,
}))

function App() {
  // Initial
  const [posts, setPosts] = useState(feedPlaceHolder)
  useEffect(() => {
    ;(async () => {
      try {
        const posts = await fetchPosts()
        setPosts(posts)
      } catch (neterr) {
        console.log('Neterr')
      }
    })()
  }, [])

  const postCards = posts.map((p) => (
    <PostCard key={p.id} to={`p/${p.id}`} {...p} excerpt={p.content} />
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
