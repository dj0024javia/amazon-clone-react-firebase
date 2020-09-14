import React from 'react'
import BasketItem from './BasketItem'
import './Checkout.css'
import { useStateProvider } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {

    const [{ basket }, dispath] = useStateProvider()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_1500x600._CB405585145_.jpg" alt="" className="checkout__ad" />

                <div>
                    {/* BasketItem */}
                    {basket?.map(eachBasketItem => (
                        <BasketItem id={eachBasketItem.id} title={eachBasketItem.title} rating={eachBasketItem.rating}
                            image={eachBasketItem.image} price={eachBasketItem.price} />
                    ))}

                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}

                </div>

            </div>

            <div className="checkout__right">
                <Subtotal items={0} />
                {/* Total */}
                {/* Checkout Button */}
            </div>
        </div>
    )
}

export default Checkout
