import React from 'react'
import './BasketItem.css'
import { useStateProvider } from './StateProvider'
function BasketItem({ id, title, rating, image, price }) {

    const [{ basket }, dispatch] = useStateProvider()

    const removeItemFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="basketItem">
            <img src={image} alt="" className="basketItem__image" />

            <div className="basketItem__info">
                <p className="basketItem__title">
                    {title}
                </p>
                <p className="basketItem__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="basketItem__rating">
                    {Array(rating).fill().map((_, i) => (<p>₹</p>))}
                </div>
                <button onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default BasketItem
