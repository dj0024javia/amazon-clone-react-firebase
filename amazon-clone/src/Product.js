import React from 'react'
import './Product.css'
function Product({ title, image, price, rating }) {
    return (
        <div className="product__div">
            <div className="product__info">
                {/* Title */}
                <p>{title}</p>

                {/* Price */}
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                {/* Rating */}
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>$</p>))}

                </div>
            </div>

            <img src={image} alt="" />

            <button>Add to Basket</button>



        </div>
    )
}

export default Product
