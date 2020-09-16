import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './BasketItem.css'
import { useStateProvider } from './StateProvider'
function BasketItem({ id, title, rating, image, price, hideButton = false }) {

    const [{ basket }, dispatch] = useStateProvider()

    const removeItemFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="basketItem">

            <CurrencyFormat renderText={(value) => (
                <>
                    <img src={image} alt="" className="basketItem__image" />

                    <div className="basketItem__info">
                        <p className="basketItem__title">
                            {title}
                        </p>
                        <p className="basketItem__price">
                            {/* <small>₹</small> */}
                            <strong>{value}</strong>
                        </p>

                        <div className="basketItem__rating">
                            {Array(rating).fill().map((_, i) => (<p>☆</p>))}
                        </div>

                        <button hidden={hideButton} onClick={removeItemFromBasket}>Remove from Basket</button>

                    </div>
                </>
            )}
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />




        </div>
    )
}

export default BasketItem
