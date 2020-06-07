import React from 'react';
import MarkdownIt from 'markdown-it';

import styles from './.module.css';

const md = new MarkdownIt();

export default props => (
    <div className={styles.post} dangerouslySetInnerHTML={{ __html: md.render(props.post) }} />
)
