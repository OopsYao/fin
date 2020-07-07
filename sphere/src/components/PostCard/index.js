import React from 'react';
import styles from './.module.css';
import { Link } from 'react-router-dom';

const PostCard = props => {
    const { title, excerpt, to } = props;
    return (
        <div className={styles.card}>
            <Link to={to}>
                <h2 className={styles.head}>{title}</h2>
                <p className={styles.excerpt}>{excerpt}</p>
            </Link>
        </div>
    )
}
export default PostCard;