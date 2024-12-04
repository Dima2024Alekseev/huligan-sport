import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer/Footer';
import './adminproduct.css';

const EditorProduct = () => {
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Ошибка при получении продуктов:', error);
                toast.error('Ошибка при получении продуктов');
            }
        };

        fetchProducts();
    }, []);

    const handleEditClick = (productId, name, price) => {
        setEditingProductId(productId);
        setEditedName(name);
        setEditedPrice(price);
    };

    const handleSaveClick = async (productId) => {
        try {
            const formData = new FormData();
            formData.append('text', editedName);
            formData.append('price', editedPrice);
            if (selectedFile) {
                formData.append('image', selectedFile);
            }

            await axios.put(`http://localhost:5000/api/products/${productId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
            setEditingProductId(null);
            setSelectedFile(null);
            toast.success('Продукт успешно сохранен');
        } catch (error) {
            console.error('Ошибка при сохранении продукта:', error);
            toast.error('Ошибка при сохранении продукта');
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div>
            <Toaster position="bottom-right" />
            <Header
                showGradient={true}
                title='Изменение интернет-магазина'
                showBlock={true}
                innerTitle='Редактирование интернет-магазина'
                linkText='Редактирование интернет-магазина' />
            <ul className="product-list">
                {products.map(product => (
                    <li key={product._id} className={`product-item ${editingProductId === product._id ? 'editing' : ''}`}>
                        <div className="product-image-container">
                            <img
                                src={`http://localhost:5000${product.image}`}
                                alt={product.text}
                                className="product-image"
                            />
                            <div className="overlay-product">
                                <span>Выбрать</span>
                            </div>
                            {editingProductId === product._id && (
                                <div
                                    className="click-overlay-product"
                                    onClick={() => document.getElementById(`fileInput-${product._id}`).click()}
                                ></div>
                            )}
                            <input
                                type="file"
                                id={`fileInput-${product._id}`}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="product-info">
                            {editingProductId === product._id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        value={editedPrice}
                                        onChange={(e) => setEditedPrice(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <p className="product-name">{product.text}</p>
                                    <p className="product-price">{product.price} ₽</p>
                                </>
                            )}
                        </div>
                        {editingProductId === product._id ? (
                            <button className="order-button" onClick={() => handleSaveClick(product._id)}>Сохранить</button>
                        ) : (
                            <button className="order-button" onClick={() => handleEditClick(product._id, product.text, product.price)}>Изменить</button>
                        )}
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default EditorProduct;
