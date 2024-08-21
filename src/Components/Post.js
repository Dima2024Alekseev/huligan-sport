import React, { useEffect, useState } from 'react';
import ContentLoader from './Skeleton';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Получение данных из API
        axios.get('http://localhost:5000/api/posts')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <ContentLoader />
            ) : (
                posts.map(post => (
                    <div className='news' key={post.id}>
                        <h3>{post.text}</h3>
                        {/* <p>{new Date(post.date * 1000).toLocaleString()}</p> */}
                        {post.photoUrls && (
                            <img src={post.photoUrls[0]} alt='' />
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
