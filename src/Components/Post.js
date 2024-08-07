import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Посты из группы ХУЛИГАН Академия боевых единоборств</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.text}</h2>
                    <p>{new Date(post.date * 1000).toLocaleString()}</p>
                    {post.photoUrls && (
                        <div>
                            {post.photoUrls.map((url, index) => (
                                <img key={index} src={url} alt={`Photo ${index + 1}`} style={{ maxWidth: '100%', margin: '10px 0' }} />
                            ))}
                        </div>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Posts;
