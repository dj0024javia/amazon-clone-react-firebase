import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Aug2020/hero/Insta_P_1x._CB406898948_.jpg" alt="" className="checkout__ad" />

                <div>
                    <h2 className="checkout__shoppingbasket">Shopping Basket</h2>

                    {/* BasketItem */}
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
