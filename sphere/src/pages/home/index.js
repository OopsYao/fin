import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';

import styles from './.module.css';

// Post feeds
const fetchPosts = async _ => {
  const resp = await fetch(`http://${process.env.REACT_APP_API_END}/posts`);
  if (!resp.ok) { return []; }
  const body = resp.json();
  return body;
}

function App() {
  // Initial
  const [posts, setPosts] = useState([]);
  useEffect(_ => {
    (async _ => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (neterr) {
        console.log('Neterr');
      }
    })();
  }, []);

  const postCards = posts.map(p => (
    <PostCard key={p.id} excerpt={p.content} title={p.title} to={`p/${p.id}`} />
  ));
  return (
    <main className={styles.root}>
      <div className={styles.cardCollection}>
        {postCards}
      </div>
    </main>
  );
}

export default App;
