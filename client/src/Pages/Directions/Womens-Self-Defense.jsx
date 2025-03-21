import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import './style/directions-styles.css';

const Women = () => {
    return (
        <>
            <Helmet>
                <title>Женская самооборона - Академия боевых единоборств "Хулиган"</title>
                <meta name="description" content="Узнайте больше о женской самообороне, ее техниках и стратегиях в Академии боевых единоборств 'Хулиган'." />
                <meta name="keywords" content="Женская самооборона, Академия боевых единоборств, Хулиган, боевые искусства, самооборона, тренировки, спорт" />
            </Helmet>
            <Header
                showGradient={true}
                showBlock={true}
                innerTitle="Женская самооборона"
                linkText="Женская самооборона"
            />
            <main className="content_directions">
                <article className="box">
                    <section>
                        <h2>Описание женской самообороны</h2>
                        <p>
                            Женская самооборона — это специализированное направление, которое фокусируется на обучении женщин техникам и стратегиям для защиты себя в различных опасных ситуациях. Этот вид подготовки включает элементы различных боевых искусств, а также психологические и тактические приемы, которые помогают женщинам чувствовать себя увереннее и безопаснее.
                        </p>
                    </section>
                    <section>
                        <h2>Тренировки в женской самообороне</h2>
                        <p>
                            Тренировки в женской самообороне развивают силу, выносливость, гибкость и координацию. Женщины учатся использовать свою интуицию и внимательность для предотвращения опасных ситуаций.
                        </p>
                    </section>
                    <section>
                        <h2>Практичность и эффективность</h2>
                        <p>
                            Женская самооборона известна своей практичностью и эффективностью в реальных условиях. Она помогает женщинам развить уверенность в своих силах и умение защищать себя и своих близких в экстремальных ситуациях.
                        </p>
                    </section>
                    <section>
                        <h2>Популярность женской самообороны</h2>
                        <p>
                            Сегодня женская самооборона становится все более популярной, привлекая женщин всех возрастов и профессий. Она используется как в повседневной жизни, так и в профессиональных сферах, таких как правоохранительные органы и службы безопасности.
                        </p>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Women;
