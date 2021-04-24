import React from 'react';
import "../css/Product.css"


function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The learn</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>

            <img
                src="https://salt.tikicdn.com/cache/280x280/ts/product/d2/7f/e5/6249e0e4668def3eef9db223134d8063.jpg"
                alt="Tại Sao Trái Đất Cần Mặt Trăng?"
            />

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;