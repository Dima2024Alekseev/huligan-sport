import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Получение данных из API
        axios.get('http://localhost:5000/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    // Фильтрация постов, которые содержат фотографии
    const filteredPosts = posts.filter(post => post.photoUrls && post.photoUrls.length > 0);

    return (
        <div>
            <h1>Посты из группы ХУЛИГАН Академия боевых единоборств</h1>
            {filteredPosts.map(post => (
                <div key={post.id}>
                    <h2>{post.text}</h2>
                    <p>{new Date(post.date * 1000).toLocaleString()}</p>
                    {post.photoUrls && (
                        <div>
                            <img src={post.photoUrls[0]} alt={`Photo 1`} style={{ maxWidth: '100%', margin: '10px 0' }} />
                        </div>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Posts;
