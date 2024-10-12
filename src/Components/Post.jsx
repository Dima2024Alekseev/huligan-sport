import React, { useEffect, useState, useRef } from 'react';
import ContentLoader from './Skeleton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination/Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const navigate = useNavigate();
    const mainRef = useRef(null);

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

    // Логика для получения текущих элементов
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    // Функция для изменения текущей страницы и прокрутки до элемента <main>
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
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
                <>
                    <main ref={mainRef}>
                        {currentItems.map(post => (
                            <div className='news' key={post.id}>
                                <pre>{post.text}</pre>
                                {/* <p>{new Date(post.date * 1000).toLocaleString()}</p> */}
                                {post.photoUrls && (
                                    <img src={post.photoUrls[0]} alt='' />
                                )}
                            </div>
                        ))}
                    </main>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={posts.length}
                        paginate={paginate}
                    />
                </>
            )}
        </div>
    );
};

export default Posts;
