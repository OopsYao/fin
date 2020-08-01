import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import HeadBar from '../../components/HeadBar';
import Footer from '../../components/Footer';
import NonePage from '../404';

import styles from './.module.css';

export default _ => {
  const { pid: id } = useParams();
  const [content, setContent] = useState('');
  const [notExist, setNotExist] = useState(false);
  const [netErr, setNetErr] = useState(false); // Network err

  useEffect(_ => {
    (async _ => {
      try {
        const resp = await fetch(`http://${process.env.REACT_APP_API_END}/posts/${id}`);
        if (!resp.ok) {
          // 404, 403, 500 etc
          setNotExist(true);
        } else {
          const body = await resp.json();
          setContent(body.content);
          document.title = body.title;
        }
      } catch (error) {
        setNetErr(true)
      }
    })();
  }, [id]);

  // Present another page
  if (notExist) { return <NonePage /> };

  // Net error block
  const AsyncPost = _ => {
    if (netErr) { return <div>与服务器通信出了些问题</div> }
    return (
      <div className={styles.postcard}>
        <Post post={content} />
      </div>
    )
  }
  return (
    <div className={styles.page}>
      <header>
        <HeadBar />
      </header>
      <AsyncPost />
      <Footer />      
    </div>
  );
};
