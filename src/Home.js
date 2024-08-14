import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import NewsBlock from "./Components/News-Block";
import StoreBlock from "./Components/Store-Block";
import Contact from "./Components/Contact-Information";
import Footer from "./Components/Footer";
import axios from "axios";
import Posts from "./Components/Post";
const Home = () => {
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
        <>
            <Header
                showVideo={true}
                title="Хулиган. Академия боевых единоборств"
            />
            <NewsBlock posts={posts} />
            <StoreBlock />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;