import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Product.css'
import { useStateProvider } from './StateProvider'
function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateProvider()
    console.log(state)
    const addToBasket = () => {
        // Add to basket logic goes here
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product__div">
            <div className="product__info">
                {/* Title */}
                <p>{title}</p>

                {/* Price */}
                <CurrencyFormat renderText={(value) => (
                    <>
                        <p className="product__price">
                            {/* <small>₹</small> */}
                            <strong>{value}</strong>
                        </p>
                    </>
                )}
                    decimalScale={2}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />


                {/* Rating */}
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>★</p>))}

                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>



        </div >
    )
}

export default Product
