import React from 'react';
import styles from './.module.css';
import { Link } from 'react-router-dom';

const PostCard = ({ title, excerpt, to }) => {
    return (
        <div className={styles.card}>
            {excerpt !== undefined &&
                <Link to={to}>
                    <h2 className={styles.head}>{title}</h2>
                    <p className={styles.excerpt}>{excerpt}</p>
                </Link>
            }
        </div>
    )
}
export default PostCard;