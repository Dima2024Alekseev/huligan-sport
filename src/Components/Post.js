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

    // Фильтрация постов, которые содержат фотографии
    const filteredPosts = posts.filter(post => post.photoUrls && post.photoUrls.length > 0);

    return (
        <div>
            {loading ? (
                <ContentLoader />
            ) : (
                filteredPosts.map(post => (
                    <div key={post.id}>
                        <h2>{post.text}</h2>
                        <p>{new Date(post.date * 1000).toLocaleString()}</p>
                        {post.photoUrls && (
                            <div>
                                <img src={post.photoUrls[0]} alt='' style={{ maxWidth: '100%', margin: '10px 0' }} />
                            </div>
                        )}
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
