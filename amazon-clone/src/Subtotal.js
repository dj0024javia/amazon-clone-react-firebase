import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
function Subtotal({ items }) {
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal(0 Items): <strong>0</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This Order Contains a Gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button>Proceed To Checkout</button>
        </div >
    )
}

export default Subtotal
