import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import NewsBlock from "../Components/News-Block";
import StoreBlock from "../Components/Store-Block";
import Contact from "../Components/Contact-Information";
import Footer from "../Components/Footer/Footer";
import postsData from "../data/posts.json"


const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setPosts(postsData);
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
            <main>
                <NewsBlock posts={posts} />
                <StoreBlock />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;