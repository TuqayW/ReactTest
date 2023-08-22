import React, { useState } from 'react';
import "./styles.scss"

const ProductList = () => {
    const [productList, setProductList] = useState([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 15.99 },
        { id: 4, name: 'Product 4', price: 1.99 },
        { id: 5, name: 'Product 5', price: 14.99 },
        { id: 6, name: 'Product 6', price: 17.99 },
        { id: 7, name: 'Product 7', price: 18.99 },
    ]);
    const [productID, setProductID] = useState(null)
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(true)
    const editProduct = (productId) => {
        setIsPopupVisible(true);
        setProductID(productId);
        setIsVisible(false);
    };

    const changeName = (event) => {
        const updatedProductList = productList.map(product =>
            product.id === productID ? { ...product, name: event.target.value } : product
        );
        setProductList(updatedProductList);
    };

    const changePrice = (event) => {
        const updatedProductList = productList.map(product =>
            product.id === productID ? { ...product, price: event.target.value } : product
        );
        setProductList(updatedProductList);
    };

    const closePopup = () => {
        setIsVisible(true)
        setIsPopupVisible(false);
    };
    const deleteProduct = (productId) => {
        const updatedList = productList.filter(product => product.id !== productId);
        setProductList(updatedList);
        setIsPopupVisible(false);
    };


    return (
        <div className='ProductList'>
            <h1>Products for Sale</h1>
            <div className="products">
                {isVisible && (
                    <div className='all'>
                        <div className="top">
                            <h1>ID</h1>
                            <h1>Name</h1>
                            <h1>Price</h1>
                            <h1>Action</h1>
                        </div>
                        <div className="bottom">
                            {productList.map(product => (
                                <div className='product' key={product.id}>
                                    <h1>{product.id}</h1>
                                    <h1>{product.name}</h1>
                                    <h1>{product.price}</h1>
                                    <div className='buttons'>
                                        <button className='btn1' onClick={() =>
                                            editProduct(product.id)}>Edit</button>
                                        <button className='btn2' onClick={() =>
                                            deleteProduct(product.id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {isPopupVisible && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>Change the prop you want</h2>
                            <input type="text" placeholder='Name' onChange={changeName} id='name' />
                            <input type="text" placeholder='Price' onChange={changePrice} id='price' />
                            <button onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ProductList;