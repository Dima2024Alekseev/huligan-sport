import React from "react";
const products = [
    { src: require("./img/item1.jpg"), name: "Кепка", price: "1 000 ₽" },
    { src: require("./img/item2.jpg"), name: "Бейсболка", price: "1 000 ₽" },
    { src: require("./img/item3.jpg"), name: "Обновленный комплект формы", price: "3 000 ₽" },
    { src: require("./img/item4.jpg"), name: "Футболка \"Хулиган\"", price: "1 500 ₽" },
    { src: require("./img/item6.jpg"), name: "Комплект формы", price: "3 000 ₽" }
];

class Store_Block extends React.Component{
    render(){
        return(
            <div className="online-store">
                        <div className="shop">
                            <div className="controls">
                                <svg id="leftbtn" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                    <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                                    </svg>
                                <div className="container">
                                <div className="gallery">
                                {products.map((product, index) => (
                                    <span key={index}>
                                        <img src={product.src} alt={product.name} />
                                        <div>
                                            <p>{product.name}</p>
                                            <p><strong>{product.price}</strong></p>
                                        </div>
                                    </span>
                                ))}
                                </div>
                            </div>
                            <svg id="rightbtn" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                            </svg>
                            </div>
                        </div>
                        <div className="store-button">
                            <a href="./online-store.html" >
                                <div id="button-style">
                                    <p>В магазин</p>
                                </div>
                            </a>  
                        </div>
                    </div>
        )
    }
}

export default Store_Block