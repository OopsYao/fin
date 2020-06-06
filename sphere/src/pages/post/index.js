import React from 'react';
import { useParams } from 'react-router-dom';

export default _ => {
    const { pid } = useParams();
    return (
        <div>This is the post {pid}</div>
    );
};
