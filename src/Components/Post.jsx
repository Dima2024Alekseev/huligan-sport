import React, { useEffect, useState } from 'react';
import ContentLoader from './Skeleton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Получение данных из API
        axios.get('http://localhost:5000/api/posts')
            .then(response => {
                // Сортировка данных по убыванию даты или идентификатора
                const sortedPosts = response.data.sort((a, b) => b.id - a.id);
                setPosts(sortedPosts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleReload = () => {
        window.location.reload();
    };

    const handleGoHome = () => {
        navigate('/home');
    };

    return (
        <div>
            {loading ? (
                <ContentLoader />
            ) : error ? (
                <div className='error'>
                    <h2>Произошла ошибка</h2>
                    <h3>Попробуйте снова или зайдите позже</h3>
                    <div className='position-error-button'>
                        <button onClick={handleGoHome}>На главную</button>
                        <button onClick={handleReload}>Попробовать снова</button>
                    </div>
                </div>
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
